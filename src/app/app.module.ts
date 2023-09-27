
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularMaterialModule } from './material/@angular/material/material.module';

import { HeaderComponent } from './material/component/header/header.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './material/component/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './material/component/login/login.component';
import { RegisterComponent } from './material/component/component/register/register.component';
import { CartComponent } from './material/component/cart/cart.component';
import { OrderComponent } from './material/component/order/order.component';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    OrderComponent,
    
   
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
