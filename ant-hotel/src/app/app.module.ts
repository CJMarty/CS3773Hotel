import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeeHomepage } from './employee-homepage.html/employee-homepage.html.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    EmployeeHomepage.HtmlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
