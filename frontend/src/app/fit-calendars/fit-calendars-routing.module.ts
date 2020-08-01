import { LayoutComponent } from './layout.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@app/_helpers';

const routes: Routes = [
  { path: '',  component: LayoutComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FitCalendarsRoutingModule {}
