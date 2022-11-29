import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightResult } from 'src/app/models/flight-result.model';
import { PassengerDetails } from 'src/app/models/passenger-details.model';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-passenger-details',
  templateUrl: './passenger-details.component.html',
  styleUrls: ['./passenger-details.component.css']
})
export class PassengerDetailsComponent implements OnInit {
  flightDetails!: FlightResult
  temp!: PassengerDetails
  passengerDetails! : PassengerDetails[]
  len! : number
  totalFare! : number
  
  constructor(private flightsService : FlightsService, private router : Router) { 
    this.flightDetails = flightsService.getFlightDetails()
    this.passengerDetails = flightsService.getPassengerDetails()
    // this.dataArray = []
  }

  ngOnInit(): void {
    if(this.passengerDetails === undefined){
      this.passengerDetails = []
      this.temp = new PassengerDetails()
      this.passengerDetails.push(this.temp)
    }
    this.len = this.passengerDetails.length   
    this.totalFare = Number(this.flightDetails.fare) * this.len
  }

  addForm(){
    this.temp = new PassengerDetails()
    this.passengerDetails.push(this.temp)
    this.len++
    this.totalFare = Number(this.flightDetails.fare) * this.len
    // console.log("Add "+ this.len);
  }

  deleteForm(index : number){
    this.passengerDetails.splice(index,1)
    this.len--
    this.totalFare = Number(this.flightDetails.fare) * this.len
    // console.log("Delete "+ this.len);
    
  }

  onSubmit(){
    // console.log(this.passengerDetails);
    this.flightsService.setPassengerDetails(this.passengerDetails);
    this.router?.navigateByUrl("/confirmation-page");
    // console.log(this.flightsService.getPassengerDetails());
  }
}
