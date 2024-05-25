import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Type } from '../type';
import { Category } from '../category';
import { environment } from '../../environment/environment';
//import { ShoesDataType } from '../shoesDataType';
//import { SubType } from '../SubToolType';

@Injectable({
  providedIn: 'root',
})
export class ShoesDataService {
  constructor(private http: HttpClient) {}

  getData(): Observable<Product[]> {
    return this.http.get(environment.apiUrl + '/products').pipe(
   // return this.http.get(environment.apiUrl + '/assets/products.json').pipe(
   // return this.http.get( '/assets/products.json').pipe(
      map((data: any) => {
        let shoesData = data;

        return shoesData.map(function (item: any): Product {
          return new Product(
            item.id,
            item.created_at,
            item.updated_at,
            item.category_id,
            item.sex,
            item.color,
            item.size,
            item.price,
            item.title,
            item.description,
            item.quantity_in_stock
          );
          
        });
      })
    );   
    
  }


 
}
