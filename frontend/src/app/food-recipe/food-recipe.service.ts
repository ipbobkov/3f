import { Recipe } from '@app/_models/recipe';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class FoodRecipeService {
  public recipe: Observable<Recipe>;

  constructor(private router: Router, private http: HttpClient) {}

    add(recipe: Recipe) {
      // console.warn(recipe);
      return this.http.post(`${environment.apiUrl}/food-recipe/add`, recipe);
    }

    getById(id: string) {
        return this.http.get<Recipe>(`${environment.apiUrl}/food-recipe/${id}`);
    }

    update(id, params) {
      // console.warn(params);
      return this.http.put(`${environment.apiUrl}/food-recipe/${id}`, params)
            .pipe(map(x => {
                    // update local storage
                    const recipe = { ...this.recipe, ...params };
                    localStorage.setItem('recipe', JSON.stringify(recipe));
                    return x;
            }));
    }

    delete(id: string) {
      return this.http.delete(`${environment.apiUrl}/food-recipe/${id}`)
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
