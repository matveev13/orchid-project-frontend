import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MenuService } from '../../services/menu-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShoesDataService } from '../../services/shoes-data.service';
import { SubToolIdService } from '../../services/sub-tool-id.service';
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
  categories: Category[] = [];
  types: Type[] = [];

  constructor(
    private menuService: MenuService,
    private setSubId: SubToolIdService,
  ) {}

  getSubId(CI: number) {
    this.setSubId.setSubId(CI);
  }

  ngOnInit() {
    this.menuService
      .getCategory()
      .subscribe({ next: (data: Category[]) => (this.categories = data) });

    this.menuService
      .getType()
      .subscribe({ next: (data: Type[]) => (this.types = data) });
  }
}
