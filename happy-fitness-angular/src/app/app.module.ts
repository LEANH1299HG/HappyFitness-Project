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
    DashboardComponent
    ListProductComponent,
    CreateProductComponent,
    EditProductComponent,
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
    HttpClientJsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: [],
})
export class AppModule { }
