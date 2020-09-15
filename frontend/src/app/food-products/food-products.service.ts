import { Product } from './../_models/product';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map } from 'rxjs/internal/operators/map';

@Injectable({ providedIn: 'root' })
export class FoodProductsService {
  constructor(private router: Router, private http: HttpClient) {}

  getAll(filterStr= '') {
    console.log('getAll');

    if (filterStr) { filterStr = '/' + filterStr; }

    const addr = `${environment.apiUrl}/food-products-con` + filterStr;
    // const addr = `http://localhost:4200/food-products`;

    // const a = this.http.get<HttpResponse<Product[]>>(addr);
    const a = this.http.get<Product[]>(addr);

    console.log('Url: ' + addr);
    console.log('JSON.stringify(a)....:');
    console.log(JSON.stringify(a));

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
