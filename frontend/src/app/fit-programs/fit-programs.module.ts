import { FitProgramsRoutingModule } from './fit-programs-routing.module';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule, CommonModule, FitProgramsRoutingModule],
  declarations: [LayoutComponent]
})
export class FitProgramsModule {}
