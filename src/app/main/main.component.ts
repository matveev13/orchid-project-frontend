import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MenuComponent } from './menu/menu.component';
import { ProductSiteComponent } from './product_site/product-site.component';
import { FilterComponent } from './filter/filter.component';
import { GallaryComponent } from './gallary/gallary.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { NgFor } from '@angular/common';
import { SearchComponent } from '../search/search.component';


/* import { InMemoryDataService } from '../services/in-memory-data.service'; */



@Component({
  selector: 'app-main',
  standalone: true,
  providers: [HttpClient, HttpClientModule,  NgFor, 
  
  ],
  imports: [
    RouterLink,
    RouterOutlet,
    RouterLinkActive,
    MenuComponent,
    ProductSiteComponent,
    FilterComponent,
    GallaryComponent,
    FormsModule,
    NgFor ,
    SearchComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})


export class MainComponent {
  

 
 

  constructor() {

  }

  
}
