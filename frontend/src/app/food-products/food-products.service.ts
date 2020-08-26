import { Product } from './../_models/product';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map } from 'rxjs/internal/operators/map';

@Injectable({ providedIn: 'root' })
export class FoodProductsService {
  constructor(private router: Router, private http: HttpClient) {}

  getAll(filterStr= '') {
    console.log('getAll');
    if (filterStr) { filterStr = '/' + filterStr; }
    const a = this.http.get<Product[]>(`${environment.apiUrl}/food-products` + filterStr);

    console.log('Url: ' + `${environment.apiUrl}/food-products` + filterStr);
    console.log('a: "' + a + '"');

    return a;
  }

  deleteProduct(id: string) {
    return this.http.delete(`${environment.apiUrl}/product/${id}`)
        .pipe(map(x => {
          /*
          if (id === this.product.id) {
                this.logout();
            }
          */
            return x;
        }));
  }
}
