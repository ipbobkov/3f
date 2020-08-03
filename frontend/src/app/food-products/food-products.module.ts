import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodProductsRoutingModule } from './food-products-routing.module';
import { FilterNameComponent } from './filter-name.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ListComponent,
    FilterNameComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FoodProductsRoutingModule
  ]
})
export class FoodProductsModule { }
