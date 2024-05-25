import { Injectable } from '@angular/core';
import { Product } from '../product';
import { ShoesDataService } from './shoes-data.service';

@Injectable({
  providedIn: 'root'
})
export class BusketService {
  items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
}

getItems() {
    return this.items;
}

 clearCart() {
    this.items = [];
    return this.items;
} 

  constructor() { }
}
