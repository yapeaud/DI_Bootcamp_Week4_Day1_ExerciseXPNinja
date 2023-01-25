import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductdetailcomponentComponent } from './productdetailcomponent.component';

describe('ProductdetailcomponentComponent', () => {
  let component: ProductdetailcomponentComponent;
  let fixture: ComponentFixture<ProductdetailcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductdetailcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductdetailcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
