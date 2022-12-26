import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightResult } from 'src/app/models/flight-result.model';
import { FlightSearch } from 'src/app/models/flight-search.model';
import { FlightsService } from 'src/app/services/flights.service';
import * as data from '../../../assets/flights.json';


@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {
  flightSearch!: FlightSearch;
  returnDisplay: string;
  boardingPlaces: string[];
  destinationPlaces: string[];
  flights: FlightResult[];
  pageName! : string;
  minDate! : Date;

  
  constructor(private flightsService: FlightsService, private router: Router) {
    this.returnDisplay = 'none';
    this.flights = (data as any).default;
    this.boardingPlaces = [];
    this.destinationPlaces = [];
    this.minDate = new Date();
  }

  ngOnInit(): void {
    if(this.flightsService.getFlightSearch() === undefined){
      this.flightSearch = new FlightSearch()
    }else{
      this.flightSearch = this.flightsService.getFlightSearch()
    }

    this.flights.forEach((flight) => {
      this.boardingPlaces.push(flight.boarding);
    });
    
    this.boardingPlaces = Array.from(new Set(this.boardingPlaces))
    
    this.flights.forEach((flight) => {
      this.destinationPlaces.push(flight.destination);
    });
    
    this.destinationPlaces = Array.from(new Set(this.destinationPlaces))

    this.pageName = "car is"
    this.flightsService.setPageName(this.pageName)
  }

  onSubmit() {
    this.router?.navigateByUrl('/success-page');
  }

  changePlaces() {
    var temp = this.flightSearch.destination;
    this.flightSearch.destination = this.flightSearch.boarding;
    this.flightSearch.boarding = temp;
  }
}
