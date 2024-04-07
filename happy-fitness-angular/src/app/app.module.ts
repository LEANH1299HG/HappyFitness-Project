import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app.routing";

import { HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { IvyCarouselModule } from "angular-responsive-carousel";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { GoogleMapsModule } from "@angular/google-maps";
import { AppComponent } from "./app.component";
import { IntroductionComponent } from "./introduction/home/introduction.component";
import { LoginComponent } from "./auth/login/login.component";
import { ForgotPWComponent } from "./auth/forgot-password/forgot-pw.component";
import { SignupComponent } from "./auth/signup/signup.component";
import { ChangePassComponent } from "./auth/change-password/change-password.component";
import { SupportHelpComponent } from "./auth/support-help/support.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { SidebarComponent } from "./shared/sidebar/sidebar.component";
import { NavbarCustomerComponent } from "./shared/navbar-customer/navbar-customer.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { AboutComponent } from "./introduction/about/about.component";
import { ContactComponent } from "./introduction/contact/contact.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { EditProductComponent } from "./product/edit/edit-product.component";
import { CreateProductComponent } from "./product/create/create-product.component";
import { ListProductComponent } from "./product/list/list-product.component";
import { ListCustomerProductComponent } from "./product/list-customer/list";
import { ProductDetailComponent } from "./product/detail/product-detail.component";
import { EditAccountComponent } from "./account/edit/edit-account.component";
import { CreateAccountComponent } from "./account/create/create-account.component";
import { ListAccountComponent } from "./account/list/list-account.component";
import { OrderCheckoutComponent } from "./order/checkout/order-checkout.component";
import { OrderDetailComponent } from "./order/detail/order-detail.component";
import { OrderHomeComponent } from "./order/home/order-home.component";
import { OrderHistoryComponent } from "./order/history/order-history.component";
import { AuthService } from "./services/services/auth.service";
import { ApiService } from "./services/services/api.service";
import { TicketListComponent } from "./ticket/ticket-list/ticket-list.component";
import { TicketDetailComponent } from "./ticket/ticket-detail/ticket-detail.component";
import { MatSliderModule } from '@angular/material/slider';
import { EditTicketComponent } from "./ticket/edit-ticket/edit-ticket.component";
import { CreateTicketComponent } from "./ticket/create-ticket/create-ticket.component";
import { ListTicketAdComponent } from "./ticket/list-admin/list-ticket-admin.component";

// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    LoginComponent,
    ForgotPWComponent,
    SignupComponent,
    ChangePassComponent,
    SupportHelpComponent,
    NavbarComponent,
    NavbarCustomerComponent,
    SidebarComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    DashboardComponent,
    ListProductComponent,
    ListCustomerProductComponent,
    ProductDetailComponent,
    CreateProductComponent,
    EditProductComponent,
    EditAccountComponent,
    ListAccountComponent,
    CreateAccountComponent,
    OrderCheckoutComponent,
    OrderDetailComponent,
    OrderHomeComponent,
    OrderHistoryComponent,
    TicketListComponent,
    ListTicketAdComponent,
    TicketDetailComponent,
    CreateTicketComponent,
    EditTicketComponent,
  ],
  imports: [
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    IvyCarouselModule,
    MatDialogModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    CommonModule,
    ToastrModule.forRoot({
      timeOut: 30000, // 15 seconds
      closeButton: true,
      progressBar: true,
      preventDuplicates: true,
    }),
    GoogleMapsModule,
    HttpClientJsonpModule,
    MatSliderModule
  ],
  providers: [
    AuthService,
    ApiService
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: [],
})
export class AppModule { }
