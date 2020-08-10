import { Product } from './../_models/product';
import { FoodProductsService } from './food-products.service';
import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    products: Product[] = [];

    constructor(private foodProductsService: FoodProductsService) {}

    ngOnInit() {
        this.foodProductsService.getAll()
            .pipe(first())
            .subscribe(products => this.products = products);
    }

    deleteProduct(id: string) {
      const product = this.products.find(x => x.id === id);
      this.foodProductsService.deleteProduct(id)
          .pipe(first())
          .subscribe(() => {
              this.products = this.products.filter(x => x.id !== id);
          });
  }
}
