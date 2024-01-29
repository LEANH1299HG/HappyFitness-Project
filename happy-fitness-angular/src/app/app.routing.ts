import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./auth/login/login.component";
import { IntroductionComponent } from "./introduction/introduction.component";
import { SignupComponent } from "./auth/signup/signup.component";

const routes: Routes = [
  { path: 'register', component: SignupComponent},
  { path: 'introduction', component: IntroductionComponent },
  { path: 'login', component: LoginComponent  },
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
