import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FoodRecipesService } from './food-recipes.service';

@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    items = null;

    constructor(private accountService: FoodRecipesService) {}

    ngOnInit() {
        this.accountService.getAll()
            .pipe(first())
            .subscribe(items => this.items = items);
    }
}
