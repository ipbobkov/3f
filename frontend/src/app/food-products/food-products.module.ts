import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodProductsRoutingModule } from './food-products-routing.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FoodProductsRoutingModule
  ]
})
export class FoodProductsModule { }
