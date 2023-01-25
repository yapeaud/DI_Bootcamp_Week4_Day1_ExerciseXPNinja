import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlistcomponentComponent } from './productlistcomponent.component';

describe('ProductlistcomponentComponent', () => {
  let component: ProductlistcomponentComponent;
  let fixture: ComponentFixture<ProductlistcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductlistcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductlistcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
