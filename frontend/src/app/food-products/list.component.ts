import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    products = null;

    constructor(private foodProductsService: AccountService) {}

    ngOnInit() {
        this.foodProductsService.getAll()
            .pipe(first())
            .subscribe(products => this.products = products);
    }
}
