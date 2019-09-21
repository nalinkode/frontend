import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductComponent } from './product/product.component';
import {  ForgotpasswordComponent  } from './password/forgotpassword/forgotpassword.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { UserlistComponent  } from'./userlist/userlist.component';
import {HomeComponent }from './home/home.component';
const routes: Routes = [

   
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:LoginComponent },

  { path: '', redirectTo: 'productlist', pathMatch: 'full' },
  { path: 'productlist', component:ProductlistComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  

  { path: '', redirectTo: 'forgotpassword', pathMatch: 'full'},
  { path:'forgotpassword', component:ForgotpasswordComponent } ,

  { path: '', redirectTo: 'product', pathMatch: 'full'},
  { path:'product', component:ProductComponent } ,

  { path: '', redirectTo: 'userlist', pathMatch: 'full'},
  { path:'userlist', component: UserlistComponent } 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
