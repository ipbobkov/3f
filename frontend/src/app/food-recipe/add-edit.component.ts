import { Recipe } from './../_models/recipe';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';

import { FoodRecipeService } from './food-recipe.service';
import { AlertService } from '@app/_services';
import { isDefined } from '@angular/compiler/src/util';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {
    form: FormGroup;
    id: string;
    icon: string;
    isAddMode: boolean;
    loading = false;
    submitted = false;
    recipe: Recipe;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private foodRecipeService: FoodRecipeService,
        private alertService: AlertService
    ) {}

    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.isAddMode = !this.id;

        this.form = this.formBuilder.group({
            name: ['', Validators.required],
            comment: ['', Validators.required],
            icon: ['', Validators.required],

            proteine: ['', Validators.required],
            fat: ['', Validators.required],
            carbohydrate: ['', Validators.required]
        });

        if (!this.isAddMode) {
            this.foodRecipeService.getById(this.id)
                .pipe(first())
                .subscribe(x => {
                    this.f.name.setValue(x.name);
                    this.f.comment.setValue(x.comment);
                    this.f.icon.setValue(x.icon);

                    this.f.proteine.setValue(x.proteine);
                    this.f.fat.setValue(x.fat);
                    this.f.carbohydrate.setValue(x.carbohydrate);

                    this.icon = x.icon;
                });
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
      // console.log('onSubmit');
      this.submitted = true;

        // reset alerts on submit
      this.alertService.clear();

        // stop here if form is invalid
      if (this.form.invalid) {
        this.alertService.error('Form is invalid!', { keepAfterRouteChange: true });
        // console.log('if (this.form.invalid)');
        return;
      }

      this.loading = true;
      // console.log('AddEditComponent/loading');
      if (this.isAddMode) {
            this.addRecipe();
        } else {
            this.updateRecipe();
        }
    }

    private addRecipe() {
      // console.log('AddEditComponent/addRecipe');
      this.foodRecipeService.add(this.form.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Recipe added successfully', { keepAfterRouteChange: true });
                    this.router.navigate(['/food-recipes']);
                    this.loading = false;
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    private updateRecipe() {
      // console.log('AddEditComponent/updateRecipe');
      this.foodRecipeService.update(this.id, this.form.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('Update successful', { keepAfterRouteChange: true });
                  // console.log('Navigate to: "./' + this.id + '"');
                  this.router.navigate(['/food-recipe/' + this.id, { relativeTo: this.route }]);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
}
