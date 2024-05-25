import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSiteComponent } from './product-site.component';

describe('ProductSiteComponent', () => {
  let component: ProductSiteComponent;
  let fixture: ComponentFixture<ProductSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductSiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
