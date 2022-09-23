import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { FlightResultsComponent } from './components/flight-results/flight-results.component';
import { FlightsService } from './services/flights.service';
import { FlightItemComponent } from './components/flight-item/flight-item.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { ConfirmDetailsComponent } from './components/confirm-details/confirm-details.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FlightResultsComponent,
    FlightItemComponent,
    PassengerDetailsComponent,
    ConfirmDetailsComponent,
    PaymentPageComponent,
    SuccessPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FlightsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
