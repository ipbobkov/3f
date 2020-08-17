import { Component, OnInit} from '@angular/core';
import { FoodRecipeService } from './food-recipe.service';
import { first } from 'rxjs/operators';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/_services/alert.service';
import { Recipe } from '@app/_models/recipe';

@Component({
  templateUrl: './view.component.html'
})

export class ViewComponent implements OnInit {
  id: string;
  recipe: Recipe;
  loading = false;
  isDeleting = false;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private foodRecipeService: FoodRecipeService,
      private alertService: AlertService
  ) {}

  ngOnInit() {
    this.recipe = new Recipe();

    this.id = this.route.snapshot.params.id;
    this.foodRecipeService.getById(this.id)
        .pipe(first())
        .subscribe(recipe => this.recipe = recipe);
  }

  deleteRecipe(id: string) {
    // console.log('ViewComponent/deleteRecipe(id: ' + id + ')');
    const recipe = this;
    this.foodRecipeService.delete(id)
        .pipe(first())
        .subscribe(() => {});
    this.alertService.warn('Recipe was deleted successfully', { keepAfterRouteChange: true });
    // console.log('Navigate to: "/food-recipes"');
    this.router.navigate(['/food-recipes', { relativeTo: this.route }]);
  }
}
