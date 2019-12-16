import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Scenes/home/home.component';
import { CoinComponent } from './scenes/coin/coin.component';
import { CoinCardComponent } from './kit/component/coin-card/coin-card.component';
import { FormElementComponent } from './kit/component/form-element/form-element.component';
import { ContactComponent } from './kit/modules/forms/contact/contact.component';
import { ReviewComponent } from './kit/modules/forms/review/review.component';
import { LoginComponent } from './kit/modules/forms/login/login.component';
import { RegisterComponent } from './kit/modules/forms/register/register.component';
import { ForgotPasswordComponent } from './kit/modules/forms/forgot-password/forgot-password.component';
import { PaginationComponent } from './kit/component/pagination/pagination.component';
import { CoinListComponent } from './kit/component/coin-list/coin-list.component';
import { CoinTableComponent } from './kit/component/coin-table/coin-table.component';
import { AboutComponent } from './scenes/about/about.component';
import { ReviewListComponent } from './kit/component/review-list/review-list.component';
import { FormBubblesComponent } from './kit/component/form-bubbles/form-bubbles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoinComponent,
    CoinCardComponent,
    FormElementComponent,
    ContactComponent,
    ReviewComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    PaginationComponent,
    CoinListComponent,
    CoinTableComponent,
    AboutComponent,
    ReviewListComponent,
    FormBubblesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
