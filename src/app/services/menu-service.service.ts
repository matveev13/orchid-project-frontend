import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environment/environment';
import { Category } from '../category';
import { Type } from '../type';

@Injectable({
  providedIn: 'root',
})
export class MenuService {

  getSubId() {
    throw new Error('Method not implemented.');
  }

  constructor(public http: HttpClient) {}

  getCategory(): Observable<Category[]> {
    return this.http.get(environment.apiUrl + '/categories').pipe(
       map((data: any) => {
         let shoesData = data;
 
         return shoesData.map(function (item: any): Category {
           return new Category(
             item.id,
             item.created_at,
             item.updated_at,
             item.category,
             item.type_id
           );
         });
       })
     );
   }
 
   getType(): Observable<Type[]> {
    return this.http.get(environment.apiUrl + '/types').pipe(
       map((data: any) => {
         let shoesData = data;
 
         return shoesData.map(function (item: any): Type {
           return new Type(
             item.id,
             item.created_at,
             item.updated_at,
             item.type
           );
         });
       })
     );
   }
}
