import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuService } from '../../services/menu-service.service';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShoesDataService } from '../../services/shoes-data.service';
import { Input } from '@angular/core';
import { SubToolIdService } from '../../services/sub-tool-id.service';
//import { ShoesDataType } from '../../shoesDataType';
import { Category } from '../../category';
import { Type } from '../../type';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    HttpClientModule,
    MenuComponent,
  ],
  providers: [MenuService, ShoesDataService, HttpClient],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  // toolType: ToolType[] = [];
  // toolSubType: SubType[] = [];

  categories: Category[] = [];
  types: Type[] = [];
 // data: number[] = [];
 


  constructor(
    private menuService: MenuService,
    private setSubId: SubToolIdService,
    private shoesData: ShoesDataService,
  // private data: number
  ) {}

  getSubId(CI: number) {
     this.setSubId.setSubId(CI);
    console.log(CI + ' ' + 'getSubId');
 } 

  ngOnInit() {
    this.menuService
      .getCategory()
      .subscribe({ next: (data: Category[]) => (this.categories = data) });

     

    this.menuService
      .getType()
      .subscribe({ next: (data: Type[]) => (this.types = data) });

      console.log("on init");

  }
}
