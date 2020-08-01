import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { FeedProgramsRouterModule } from './feed-programs-router.module';

@NgModule({
  declarations: [LayoutComponent],
  imports: [RouterModule, CommonModule, FeedProgramsRouterModule ]
})

export class FeedProgramsModule {}
