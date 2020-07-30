import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { LayoutComponent } from './layout.component';
import { AddEditComponent } from './add-edit.component';
import { ListComponent } from './list.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FeedRoutingModule
    ],
    declarations: [
        LayoutComponent,
        AddEditComponent,
        ListComponent
    ]
})
export class FeedModule { }

