﻿import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

// array in local storage for registered users
let users = JSON.parse(localStorage.getItem('users')) || [];
let products = JSON.parse(localStorage.getItem('products')) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            // tslint:disable-next-line: max-line-length
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
              // Users
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users/register') && method === 'POST':
                    return register();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.match(/\/users\/\d+$/) && method === 'GET':
                    return getUserById();
                case url.match(/\/users\/\d+$/) && method === 'PUT':
                    return updateUser();
                case url.match(/\/users\/\d+$/) && method === 'DELETE':
                    return deleteUser();

              // Products
                case url.endsWith('/food-products') && method === 'GET':
                    return getProducts();

              // Product
                case url.endsWith('/food-product/add') && method === 'POST':
                    return addProduct();
                case url.match(/\/food-product\/\d+$/) && method === 'GET':
                    return getProductById();
                case url.match(/\/food-product\/\d+$/) && method === 'PUT':
                    return updateProduct();
                case url.match(/\/food-product\/\d+$/) && method === 'DELETE':
                    return deleteProduct();

                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }

        // route functions


        function addProduct() {
          const product = body;

          if (products.find(x => x.name === product.name)) {
              return error('Productname "' + product.name + '" is already taken');
          }

          product.id = products.length ? Math.max(...products.map(x => x.id)) + 1 : 1;
          products.push(product);
          localStorage.setItem('products', JSON.stringify(products));
          return ok();
        }

        function getProducts() {
          if (!isLoggedIn()) { return unauthorized(); }
          // console.log('getUsers' + users);
          // console.log('getProducts' + products);
          return ok(products);
        }

        function getProductById() {
          if (!isLoggedIn()) { return unauthorized(); }

          const product = products.find(x => x.id === idFromUrl());
          return ok(product);
      }

        function updateProduct() {
          if (!isLoggedIn()) { return unauthorized(); }

          const params = body;
          const product = products.find(x => x.id === idFromUrl());

          // only update password if entered
          if (!params.password) {
              delete params.password;
          }

          // update and save product
          Object.assign(product, params);
          localStorage.setItem('products', JSON.stringify(products));

          return ok();
      }

        function deleteProduct() {
          if (!isLoggedIn()) { return unauthorized(); }

          products = products.filter(x => x.id !== idFromUrl());
          localStorage.setItem('products', JSON.stringify(products));
          return ok();
      }


        // ====================================================================================
        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);
            if (!user) { return error('Username or password is incorrect'); }
            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                token: 'fake-jwt-token'
            });
        }

        function register() {
            const user = body;

            if (users.find(x => x.username === user.username)) {
                return error('Username "' + user.username + '" is already taken');
            }

            user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }

        function getUsers() {
            if (!isLoggedIn()) { return unauthorized(); }
            return ok(users);
        }

        function getUserById() {
            if (!isLoggedIn()) { return unauthorized(); }

            const user = users.find(x => x.id === idFromUrl());
            return ok(user);
        }

        function updateUser() {
            if (!isLoggedIn()) { return unauthorized(); }

            const params = body;
            const user = users.find(x => x.id === idFromUrl());

            // only update password if entered
            if (!params.password) {
                delete params.password;
            }

            // update and save user
            Object.assign(user, params);
            localStorage.setItem('users', JSON.stringify(users));

            return ok();
        }

        function deleteUser() {
            if (!isLoggedIn()) { return unauthorized(); }

            users = users.filter(x => x.id !== idFromUrl());
            localStorage.setItem('users', JSON.stringify(users));
            return ok();
        }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }));
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }

        function idFromUrl() {
            const urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1], 10);
        }
    }
}

export const fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
