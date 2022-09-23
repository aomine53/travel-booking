import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmDetailsComponent } from './components/confirm-details/confirm-details.component';
import { FlightResultsComponent } from './components/flight-results/flight-results.component';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';
import { PaymentPageComponent } from './components/payment-page/payment-page.component';
import { SuccessPageComponent } from './components/success-page/success-page.component';

const routes: Routes = [
  {path: '', component: FlightSearchComponent},
  {path: 'flight-results', component: FlightResultsComponent},
  {path: 'passenger-details', component: PassengerDetailsComponent},
  {path: 'confirmation-page', component: ConfirmDetailsComponent},
  {path: 'payment-page', component: PaymentPageComponent},
  {path: 'success-page', component: SuccessPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
