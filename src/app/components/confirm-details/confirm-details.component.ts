import { Component, OnInit } from '@angular/core';
import { PassengerDetails } from 'src/app/models/passenger-details.model';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-confirm-details',
  templateUrl: './confirm-details.component.html',
  styleUrls: ['./confirm-details.component.css']
})
export class ConfirmDetailsComponent implements OnInit {
  // passengerDetails! : PassengerDetails[]
  // flightsService! : FlightsService
  constructor() { 
    // this.passengerDetails = this.flightsService.getPassengerDetails()
  }

  ngOnInit(): void {
    // console.log(this.passengerDetails);
  }

}
