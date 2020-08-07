import { Product } from './../_models/product';
import { Component, OnInit} from '@angular/core';
import { FoodProductService } from './food-product.service';
import { first } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/_services/alert.service';

@Component({
  templateUrl: './view.component.html'
})
export class ViewComponent {
  id: string;
  product: Product;
  loading = false;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private foodProductService: FoodProductService,
      private alertService: AlertService
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;

    this.foodProductService.getById(this.id)
        .pipe(first())
        .subscribe(product => this.product = product);
  }
}
