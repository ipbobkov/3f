import { FoodProductRoutingModule } from './food-product-routing.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddEditComponent } from './add-edit.component';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { ViewComponent } from './view.component';

@NgModule({
  imports: [RouterModule, CommonModule, FoodProductRoutingModule],
  declarations: [LayoutComponent, AddEditComponent, ViewComponent]
})

export class FoodProductModule {}
