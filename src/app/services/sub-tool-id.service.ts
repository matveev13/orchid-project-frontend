import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubToolIdService {
  private _data = new BehaviorSubject<number>(0);

  data$ = this._data.asObservable();

  setSubId(data: number) {
    this._data.next(data);
  }

  constructor() {}
}
