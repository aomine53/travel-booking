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
  depatureTime! : string
  temp!: PassengerDetails
  dataArray! : PassengerDetails[]
  len! : number
  
  constructor(private flightsService : FlightsService, private router : Router) { 
    this.flightDetails = flightsService.getFlightDetails()
    this.dataArray = []
  }

  ngOnInit(): void {
    this.len = this.dataArray.length
  }

  addForm(){
    this.temp = new PassengerDetails()
    this.dataArray.push(this.temp)
    this.len = this.dataArray.length
  }

  deleteForm(index : number){
    this.dataArray.splice(index)
  }

  onSubmit(){
    // console.log(this.dataArray);
    this.flightsService.setPassengerDetails(this.dataArray);
    this.router?.navigateByUrl("/confirmation-page");
    console.log(this.flightsService.getPassengerDetails());
  }
}
