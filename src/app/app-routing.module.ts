import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './material/component/header/header.component';
import { HomeComponent } from './material/component/home/home.component';

import { LoginComponent } from './material/component/login/login.component';
import { RegisterComponent } from './material/component/component/register/register.component';
import { CartComponent } from './material/component/cart/cart.component';
import { OrderComponent } from './material/component/order/order.component';


const routes: Routes = [
  
   { path:'dashboard' , component:HomeComponent},
   { path:'home' , component:HomeComponent},
   { path:'cart' , component:CartComponent},
   { path:'login', component:LoginComponent},
   { path:'Register', component:RegisterComponent},
   { path:'order', component:OrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
