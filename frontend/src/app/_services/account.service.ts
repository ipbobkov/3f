import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, first } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private userSubject: BehaviorSubject<User>;
    public user: Observable<User>;

    constructor(
        private router: Router,
        private http: HttpClient
    ) {
        this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): User {
        return this.userSubject.value;
    }

    login(username, password) {

      // const path = 'http://localhost:4200/users/authenticate';
      const path = environment.apiUrl + '/login';
      console.log('Path:' + path);

      // =====================================================================================================
      const resp = this.http.post<User>(path, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                this.userSubject.next(user);
                console.log('localStorage.getItem(\'user\')....:');
                console.log(localStorage.getItem('user'));
                return user;
            }));

      console.log('resp....:');
      console.log(resp);

      console.log('stringify(resp)....:');
      console.log(JSON.stringify(resp));


// {"id":1,"username":"telebob","firstName":"Andrew","lastName":"Bobkov","token":"fake-jwt-token"}

      console.log('localStorage.key(0)....:');
      console.log(localStorage.key(0));

      console.log('localStorage.key(1)....:');
      console.log(localStorage.key(1));

      console.log('localStorage.key(2)....:');
      console.log(localStorage.key(2));

      console.log('localStorage.key(3)....:');
      console.log(localStorage.key(3));

      console.log('localStorage.key(4)....:');
      console.log(localStorage.key(4));

      console.log('localStorage.key(5)....:');
      console.log(localStorage.key(5));

      console.log('localStorage.getItem(\'users\')....:');
      console.log(localStorage.getItem('users'));

      console.log('localStorage.getItem(\'user\')....:');
      console.log(localStorage.getItem('user'));




      return resp;
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
      const addr = `${environment.apiUrl}/api/users?page=1`;
      console.log('ret = this.http.get<User[]>(' +  addr + ');');

      const ret = this.http.get<User[]>(addr);

      console.log('ret ....:');
      console.log(ret);

      return ret;
    }

    getById(id: string) {
      const addr = `${environment.apiUrl}/api/users/${id}/`;
      console.log('ret = this.http.get<User>(' +  addr + ');');

      const ret = this.http.get<User>(addr);

      console.log('ret ....:');
      console.log(ret);

      return ret;
    }

    update(id, params) {
      const addr = `${environment.apiUrl}/api/users/${id}`;
      console.log('ret = this.http.put(' +  addr + ', params);');
      console.log('params ....:');
      console.log(params);

      return this.http.patch(addr, params)
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
        return this.http.delete(`${environment.apiUrl}/users/${id}`)
            .pipe(map(x => {
                // auto logout if the logged in user deleted their own record
                if (id === this.userValue.id) {
                    this.logout();
                }
                return x;
            }));
    }
}
