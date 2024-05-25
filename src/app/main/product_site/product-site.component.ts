import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { Product } from '../../product';
import { ShoesDataService } from '../../services/shoes-data.service';
import { MenuService } from '../../services/menu-service.service';
import { MenuComponent } from '../menu/menu.component';
import { SubToolIdService } from '../../services/sub-tool-id.service';
import { BusketService } from '../../services/busket-service.service';
import { Category } from '../../category';
import { Type } from '../../type';


@Component({
  selector: 'app-product-site',
  standalone: true,
  providers: [ShoesDataService, MenuComponent, MenuService, ],
  imports: [HttpClientModule],
  templateUrl: './product-site.component.html',
  styleUrl: './product-site.component.css',
})
export class ProductSiteComponent implements OnInit {
  //ForBusket: boolean | undefined;
  subToolType: number | undefined;

  products: Product[] = [];
   categories: Category[] = [];
   types: Type[] = [];

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    private location: Location,
    private shoesDataServise: ShoesDataService,
   private readonly getSubId: SubToolIdService,
   private busketService: BusketService

  )  {}

  ngOnInit(): void {
    this.shoesDataServise
      .getData()
      .subscribe({ next: (data: Product[]) => (this.products = data) });

    this.menuService
      .getCategory()
      .subscribe({ next: (data: Category[]) => (this.categories = data) });

 this.menuService
      .getType()
      .subscribe({ next: (data: Type[]) => (this.types = data) });



    this.getSubId.data$.subscribe((data) => {
      this.subToolType = data;
    });

     console.log(this.subToolType);
     
  }

  

     addToCart(product: Product) {
    this.busketService.addToCart(product);
    console.log('addToCard');
    
  } 

  goBack(): void {
    this.location.back();
  }
}
