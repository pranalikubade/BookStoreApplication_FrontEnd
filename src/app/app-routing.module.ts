import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './material/component/form/form.component';
import { HomeComponent } from './material/component/home/home.component';
import { CartComponent } from './material/component/cart/cart.component';
import { LoginComponent } from './material/component/login/login.component';
const routes: Routes = [
  
   { path:'' , component:FormComponent},
   { path:'home' , component:HomeComponent},
   { path:'cart' , component:CartComponent},
   { path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
