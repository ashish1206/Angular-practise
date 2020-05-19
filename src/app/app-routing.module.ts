import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserOrdersComponent } from './user-orders/user-orders.component';
import { SellerOrdersComponent } from './seller-orders/seller-orders.component';
import { SellerProfileComponent } from './seller-profile/seller-profile.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerRegisterComponent } from './seller-register/seller-register.component';
import { SellerLoginComponent } from './seller-login/seller-login.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { AccessGaurdService } from './access-gaurd.service';
import { SellerMenuComponent } from './seller-menu/seller-menu.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';


const routes: Routes = [
  { path: '', redirectTo: '/user/login', pathMatch: 'full' },
  { path: 'user/login', component: UserLoginComponent },
  { path: 'seller/login', component: SellerLoginComponent },
  { path: 'seller/register', component: SellerRegisterComponent },
  { path: 'user/home', component: UserHomeComponent, canActivate: [AccessGaurdService] },
  { path: 'seller/home', component: SellerHomeComponent, canActivate: [AccessGaurdService] },
  { path: 'seller/menu', component: SellerMenuComponent, canActivate: [AccessGaurdService]},
  { path: 'user/signup', component:UserSignupComponent },
  { path: 'user/cart', component:UserCartComponent, canActivate:[AccessGaurdService]},
  { path: 'seller/profile', component:SellerProfileComponent, canActivate:[AccessGaurdService]},
  { path: 'seller/orders', component:SellerOrdersComponent, canActivate:[AccessGaurdService]},
  { path: 'user/orders', component:UserOrdersComponent, canActivate:[AccessGaurdService]},
  { path: 'user/profile', component:UserProfileComponent, canActivate:[AccessGaurdService]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
