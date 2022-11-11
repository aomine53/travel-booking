import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CarSearchComponent } from './components/car-search/car-search.component';
import { ConfirmDetailsComponent } from './components/confirm-details/confirm-details.component';
import { FlightResultsComponent } from './components/flight-results/flight-results.component';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { HotelSearchComponent } from './components/hotel-search/hotel-search.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';

const routes: Routes = [
  {path: '', component: FlightSearchComponent},
  {path: 'flight-results', component: FlightResultsComponent},
  {path: 'passenger-details', component: PassengerDetailsComponent},
  {path: 'confirmation-page', component: ConfirmDetailsComponent},
  {path: 'payment-page', component: PaymentPageComponent},
  {path: 'success-page', component: SuccessPageComponent},
  {path: 'hotel-search', component: HotelSearchComponent},
  {path: 'car-search', component: CarSearchComponent},
  {path: 'about-us', component: AboutUsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
