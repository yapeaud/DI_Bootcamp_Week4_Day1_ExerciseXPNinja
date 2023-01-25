import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductlistcomponentComponent } from './productlistcomponent/productlistcomponent.component';
import { ProductdetailcomponentComponent } from './productdetailcomponent/productdetailcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductlistcomponentComponent,
    ProductdetailcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
