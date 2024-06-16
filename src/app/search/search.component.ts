import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Search } from '../search';
import { SearshDataService } from '../services/searsh.service';
import { FilterPipe } from '../filter.pipe';
import { ProductComponent } from '../product/product.component';
import { SubToolIdService } from '../services/sub-tool-id.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet,
    FormsModule,
    NgFor,
    FilterPipe,
    HttpClientModule,
    ProductComponent,
  ],
  providers: [SearshDataService, HttpClient],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchData: Search[] = [];
  title = 'Search';
  searchText = '';
  c: any;

  constructor(
    private searchDataService: SearshDataService,
    private setSubId: SubToolIdService,
  ) {}

  getProductId(PI: number) {
    this.setSubId.setSubId(PI);
    console.log(PI);
    
  }

  ngOnInit(): void {
    this.searchDataService
      .getData()
      .subscribe({ next: (data: Search[]) => (this.searchData = data) });
  }
}
