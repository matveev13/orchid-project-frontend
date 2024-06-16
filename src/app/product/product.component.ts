import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '../product';
import { SubToolIdService } from '../services/sub-tool-id.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  subProductType: number | undefined;
product: Product[]=[];

constructor(private getSubId: SubToolIdService,){}

ngOnInit(): void {
  this.getSubId.data$.subscribe((data) => {
    this.subProductType = data;
  });
}
}
