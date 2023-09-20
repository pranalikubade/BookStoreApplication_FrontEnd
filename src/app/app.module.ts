
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './material/@angular/material/material.module';

import { FormComponent } from './material/component/form/form.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './material/component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './material/component/cart/cart.component';
import { LoginComponent } from './material/component/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HomeComponent,
    CartComponent,
    LoginComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
