import { FoodProductsService } from './food-products.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from '@app/_services';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    products = null;

    constructor(private productsService: FoodProductsService) {}

    ngOnInit() {
        this.productsService.getAll()
            .pipe(first())
            .subscribe(users => this.products = this.products);
    }
/*
    deleteUser(id: string) {
        const user = this.products.find(x => x.id === id);
        user.isDeleting = true;
        this.productsService.delete(id)
            .pipe(first())
            .subscribe(() => {
                this.products = this.products.filter(x => x.id !== id);
            });
    }>
*/
}
