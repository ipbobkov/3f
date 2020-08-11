import { Product } from './../_models/product';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map } from 'rxjs/internal/operators/map';

@Injectable({ providedIn: 'root' })
export class FoodProductsService {
  constructor(private router: Router, private http: HttpClient) {}

  getAll(filterStr= '') {
    // console.log('getAll');
    if (filterStr) { filterStr = '/' + filterStr; }
    const a = this.http.get<Product[]>(`${environment.apiUrl}/food-products` + filterStr);
    // console.log('a: ' + a);
    return a;
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.apiUrl}/product/${id}`)
        .pipe(map(x => {
          /*
          if (id === this.product.id) {
                this.logout();
            }
          */
            return x;
        }));
}
    /*
    login(username, password) {
        return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                return user;
            }));
    }

    logout() {
        // remove user from local storage and set current user to null
        localStorage.removeItem('user');
        this.userSubject.next(null);
        this.router.navigate(['/account/login']);
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/users/register`, user);
    }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: string) {
        return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
    }

    update(id, params) {
        return this.http.put(`${environment.apiUrl}/users/${id}`, params)
            .pipe(map(x => {
                // update stored user if the logged in user updated their own record
                if (id === this.userValue.id) {
                    // update local storage
                    const user = { ...this.userValue, ...params };
                    localStorage.setItem('user', JSON.stringify(user));

                    // publish updated user to subscribers
                    this.userSubject.next(user);
                }
                return x;
            }));
    }

    delete(id: string) {
        return this.http.delete(`${environment.apiUrl}/product/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id === this.product.id) {
                    this.logout();
                }
                return x;
            }));
    }
   */
}
