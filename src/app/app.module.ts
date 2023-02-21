import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { BooksService } from './books/books.service';
import { BooksModule } from './books/books.module';
import { BookComponent } from './book/book.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './auth/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent,
  
  ],
  imports: [
    BrowserModule,FormsModule,BooksModule,AppRoutingModule,AuthModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
