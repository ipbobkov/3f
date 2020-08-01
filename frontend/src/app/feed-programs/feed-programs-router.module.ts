import { LayoutComponent } from './layout.component';
import { Router, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '@app/_helpers';

const routes = [
  { path: '',  component: LayoutComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})

export class FeedProgramsRouterModule {}
