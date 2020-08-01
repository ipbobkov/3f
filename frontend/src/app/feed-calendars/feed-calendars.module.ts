import { FeedCalendarsRoutingModule } from './feed-calendars-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [LayoutComponent],
  imports: [RouterModule, CommonModule, FeedCalendarsRoutingModule]
})

export class FeedCalendarsModule {}
