import { Component, OnInit } from '@angular/core';
import { FlightResult } from 'src/app/models/flight-result.model';
import { PassengerDetails } from 'src/app/models/passenger-details.model';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-confirm-details',
  templateUrl: './confirm-details.component.html',
  styleUrls: ['./confirm-details.component.css'],
})
export class ConfirmDetailsComponent implements OnInit {
  fare! : number
  flightDetails : FlightResult
  passengerDetails: PassengerDetails[];
  constructor(private flightsService: FlightsService) {
    this.passengerDetails = this.flightsService.getPassengerDetails();
    this.flightDetails = this.flightsService.getFlightDetails();
  }

  ngOnInit(): void {
    this.fare = Number(this.flightDetails.fare) * this.passengerDetails.length
  }
}
