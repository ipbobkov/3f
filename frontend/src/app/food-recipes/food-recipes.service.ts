import { Product } from './../_models/product';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map } from 'rxjs/internal/operators/map';
import { Recipe } from '@app/_models/recipe';

@Injectable({ providedIn: 'root' })
export class FoodRecipesService {
  constructor(private router: Router, private http: HttpClient) {}

  getAll(filterStr= '') {
    // console.log('getAll');
    if (filterStr) { filterStr = '/' + filterStr; }
    const a = this.http.get<Recipe[]>(`${environment.apiUrl}/food-recipes` + filterStr);
    // console.log('a: ' + a);
    return a;
  }

  deleteRecipe(id: string) {
    return this.http.delete(`${environment.apiUrl}/recipe/${id}`)
        .pipe(map(x => {
          /*
          if (id === this.recipe.id) {
                this.logout();
            }
          */
            return x;
        }));
  }
}
