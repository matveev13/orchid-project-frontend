import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BusketService } from '../services/busket-service.service';
import { Product } from '../product';


@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css',
})
export class BasketComponent {


  items = this.busketService.getItems();
  noItems = this.busketService.clearCart();

  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private busketService: BusketService
  ) {}

  addToCart(arg0: Product[]) {

    }

   clearCart() {
this.items =  this.noItems
      }

  goBack(): void {
    this.location.back();
  }
}
