
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';

import { FoodProductService } from './food-product.service';
import { AlertService } from '@app/_services';

@Component({ templateUrl: 'add-edit.component.html' })
export class AddEditComponent implements OnInit {
    form: FormGroup;
    id: string;
    isAddMode: boolean;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private foodProductService: FoodProductService,
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
            this.foodProductService.getById(this.id)
                .pipe(first())
                .subscribe(x => {
                    this.f.name.setValue(x.name);
                    this.f.comment.setValue(x.comment);
                    this.f.icon.setValue(x.icon);

                    this.f.proteine.setValue(x.proteine);
                    this.f.fat.setValue(x.fat);
                    this.f.carbohydrate.setValue(x.carbohydrate);
                });
        }
    }

    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }

    onSubmit() {
      console.log('onSubmit');
      this.submitted = true;

        // reset alerts on submit
      this.alertService.clear();

        // stop here if form is invalid
      if (this.form.invalid) {
        this.alertService.error('Form is invalid!', { keepAfterRouteChange: true });
        console.log('if (this.form.invalid)');
        return;
      }

      this.loading = true;
      if (this.isAddMode) {
            this.addProduct();
        } else {
            this.updateProduct();
        }
    }

    private addProduct() {
      console.log('addProduct');
      this.foodProductService.add(this.form.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Product added successfully', { keepAfterRouteChange: true });
                    this.router.navigate(['..', { relativeTo: this.route }]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    private updateProduct() {
      console.log('updateProduct');
      this.foodProductService.update(this.id, this.form.value)
          .pipe(first())
          .subscribe(
              data => {
                  this.alertService.success('Update successful', { keepAfterRouteChange: true });
                  this.router.navigate(['..', { relativeTo: this.route }]);
              },
              error => {
                  this.alertService.error(error);
                  this.loading = false;
              });
  }
}
