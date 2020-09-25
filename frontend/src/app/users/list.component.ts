import { User } from './../_models/user';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    users = null;
    isDeleting = false;
    currentUser: User = new User();

    constructor(private accountService: AccountService) {}

    ngOnInit() {
        const resp = this.accountService.getAll()
            .pipe(first())
            .subscribe(data => {

              console.log('data ....:');
              console.log(JSON.stringify(data));

              this.users = data['hydra:member'];

              console.log('data[\'hydra:member\'] ....:');
              console.log(JSON.stringify(data['hydra:member']));
            });

        console.log('resp ....:');
        console.log(resp);
    }

    deleteUser(id: string) {
        const user = this.users.find(x => x.id === id);
        user.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.users = this.users.filter(x => x.id !== id);
            });
    }

    currentUserSet(user: User) {
      this.currentUser = user;
    }
}
