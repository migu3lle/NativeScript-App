import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { HomeComponent } from '@src/app/home/home.component';
import { LoginComponent } from '@src/app/login/login.component';
import { RegisterComponent } from '@src/app/register/register.component';
import { FormsModule } from '@angular/forms';
import { FormUtilityService } from '@src/app/shared/services/form-utility.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [
      FormUtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
