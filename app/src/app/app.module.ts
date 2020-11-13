import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { CardDevComponent } from './components/card-dev/card-dev.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchInputComponent,
    RegisterFormComponent,
    CardDevComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
