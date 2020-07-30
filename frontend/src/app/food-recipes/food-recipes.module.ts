import { ListComponent } from './list.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodRecipesRoutingModule } from './food-recipes-routing.module';

@NgModule({
  declarations: [
    LayoutComponent,
    ListComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    FoodRecipesRoutingModule
  ]
})
export class FoodRecipesModule { }
