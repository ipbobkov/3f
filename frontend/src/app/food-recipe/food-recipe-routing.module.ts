import { AddEditComponent } from './add-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { ViewComponent } from './view.component';

const routes: Routes = [
  {
      path: '', component: LayoutComponent,
      children: [
        { path: '', component: AddEditComponent },
        { path: ':id', component: ViewComponent },
        { path: 'edit/:id', component: AddEditComponent }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRecipeRoutingModule {}
