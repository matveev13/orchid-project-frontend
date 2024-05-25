
import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { BasketComponent } from './basket/basket.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    BasketComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  providers:[HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  
}
)
export class AppComponent implements OnInit  {
  title = 'tool-magazine';
  constructor(){}
  ngOnInit(): void { 
    
  }
}
