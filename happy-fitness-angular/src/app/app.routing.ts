import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "./auth/signup/signup.component";
import { IntroductionComponent } from "./introduction/home/introduction.component";
import { LoginComponent } from "./auth/login/login.component";
import { ForgotPWComponent } from "./auth/forgot-password/forgot-pw.component";
import { ChangePassComponent } from "./auth/change-password/change-password.component";
import { SupportHelpComponent } from "./auth/support-help/support.component";
import { AboutComponent } from "./introduction/about/about.component";
import { ContactComponent } from "./introduction/contact/contact.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ListProductComponent } from "./product/list/list-product.component";
import { CreateProductComponent } from "./product/create/create-product.component";
import { EditProductComponent } from "./product/edit/edit-product.component";
import { CreateAccountComponent } from "./product copy/create/create-account.component";
import { EditAccountComponent } from "./product copy/edit/edit-account.component";
import { ListAccountComponent } from "./product copy/list/list-account.component";
import { OrderCheckoutComponent } from "./order/checkout/order-checkout.component";
import { OrderDetailComponent } from "./order/detail/order-detail.component";
import { OrderHomeComponent } from "./order/home/order-home.component";
import { OrderHistoryComponent } from "./order/history/order-history.component";


const routes: Routes = [

  { path: 'register', component: SignupComponent },
  { path: 'home', component: IntroductionComponent },



  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPWComponent },
  { path: 'change-password', component: ChangePassComponent },
  { path: 'support-help', component: SupportHelpComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'list-product', component: ListProductComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'edit-product', component: EditProductComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'edit-account', component: EditAccountComponent },
  { path: 'list-account', component: ListAccountComponent },
  { path: 'order-checkout', component: OrderCheckoutComponent },
  { path: 'order-detail', component: OrderDetailComponent },
  { path: 'order-home', component: OrderHomeComponent },
  { path: 'order-history', component: OrderHistoryComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
