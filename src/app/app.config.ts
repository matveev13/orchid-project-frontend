import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';

import { MainComponent } from './main/main.component';
import { BasketComponent } from './basket/basket.component';
import { ProductComponent } from './product/product.component';
import { ProductSiteComponent } from './main/product_site/product-site.component';
import { GallaryComponent } from './main/gallary/gallary.component';

export const appRoutes: Routes = [
    {path: 'main', component: MainComponent},
    {path: 'basket', component: BasketComponent},
    {path: 'product', component: ProductComponent},
    {path: 'gallary', component: GallaryComponent},
    {path: 'productSite', component: ProductSiteComponent},
    {path: '**', component: MainComponent}
]


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};
