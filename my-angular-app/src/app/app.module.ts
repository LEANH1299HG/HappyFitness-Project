import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { HTTP_INTERCEPTORS, HttpClientJsonpModule, HttpClientModule } from "@angular/common/http";
import { MatDialogModule, MatDialogRef } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from '@angular/router';

// import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule, MatDialogRef,
    ToastrModule.forRoot({
      timeOut: 30000, // 15 seconds
      closeButton: true,
      progressBar: true,
      preventDuplicates: true,
    }),
    HttpClientJsonpModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  entryComponents: [
  ],
  exports: [],
})
export class AppModule { }
