import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { FitCalendarsRoutingModule } from './fit-calendars-routing.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [RouterModule, CommonModule, FitCalendarsRoutingModule]
})
export class FitCalendarsModule {}
