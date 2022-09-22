import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FlightSearch} from "src/app/models/flight-search.model"
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  flightSearch : FlightSearch 
  returnDisplay: string
  constructor(private flightsService : FlightsService, private router: Router) {
    this.returnDisplay = "none"
    this.flightSearch = {
      boarding : "",
      destination : "",
      departure : "",
      return : "",
      travelclass : ""
    }
   }

  ngOnInit(): void {}

  checkOneway(){
    this.returnDisplay = "none"
  }
  
  checkRoundtrip(){
    console.log("inside checkRoundtrip");
    
    this.returnDisplay = "block"
    
  }

  onSubmit(){    
    this.flightsService.setJourneyDetails(this.flightSearch);
    this.router?.navigateByUrl("/flight-results");    
  }
}
