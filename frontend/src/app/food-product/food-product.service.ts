import { Product } from './../_models/product';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FoodProductService {
  public product: Observable<Product>;

  constructor(private router: Router, private http: HttpClient) {}

    add(product: Product) {
      // console.warn(product);
      return this.http.post(`${environment.apiUrl}/food-product/add`, product);
    }

    getById(id: string) {
        return this.http.get<Product>(`${environment.apiUrl}/food-product/${id}`);
    }

    update(id, params) {
      // console.warn(params);
      return this.http.put(`${environment.apiUrl}/food-product/${id}`, params)
            .pipe(map(x => {
                    // update local storage
                    const product = { ...this.product, ...params };
                    localStorage.setItem('product', JSON.stringify(product));
                    return x;
            }));
    }

    delete(id: string) {
      return this.http.delete(`${environment.apiUrl}/food-product/${id}`)
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
