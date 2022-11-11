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
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HotelSearchComponent } from './components/hotel-search/hotel-search.component';
import { CarSearchComponent } from './components/car-search/car-search.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightSearchComponent,
    FlightResultsComponent,
    FlightItemComponent,
    PassengerDetailsComponent,
    ConfirmDetailsComponent,
    PaymentPageComponent,
    SuccessPageComponent,
    SortPipe,
    FilterPipe,
    HotelSearchComponent,
    CarSearchComponent,
    AboutUsComponent
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
