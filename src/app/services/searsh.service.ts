import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from '../../environment/environment';
import { Search } from '../search';

@Injectable({
  providedIn: 'root'
})
export class SearshDataService {

  public shoesData: string = '';
  constructor(private http: HttpClient) {}

  setProductId() {
    throw new Error('Method not implemented.');
  }

   getData():Observable<any> { 
    return this.http
      .get(environment.apiUrl + '/products/search')

      .pipe(
        map((data: any) => {
          let shoesData = data;

          return shoesData.map(function (item: any): Search {
            return new Search(item.title, item.color, item.description, item.id);
          });
        })
      );
  }
}