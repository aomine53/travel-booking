import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmDetailsComponent } from './components/confirm-details/confirm-details.component';
import { FlightResultsComponent } from './components/flight-results/flight-results.component';
import { FlightSearchComponent } from './components/flight-search/flight-search.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component';

const routes: Routes = [
  {path: '', component: FlightSearchComponent},
  {path: 'flight-results', component: FlightResultsComponent},
  {path: 'passenger-details', component: PassengerDetailsComponent},
  {path: 'confirmation-page', component: ConfirmDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
