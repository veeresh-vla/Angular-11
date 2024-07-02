import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AboutComponent,
    CartComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    NotfoundComponent,
    DashboardComponent,
    ProductComponent,
    ProductsComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
  RouterModule
  ]
})
export class PagesModule { }
