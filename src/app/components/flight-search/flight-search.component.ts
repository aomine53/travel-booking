import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { FlightResult } from 'src/app/models/flight-result.model';
import { FlightSearch } from 'src/app/models/flight-search.model';
import { FlightsService } from 'src/app/services/flights.service';
import * as data from '../../../assets/flights.json';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
})
export class FlightSearchComponent implements OnInit {
  flightSearch!: FlightSearch;
  boardingPlaces: string[];
  destinationPlaces: string[];
  flights: FlightResult[];
  pageName!: string;
  minDate!: Date;
  formstyle!: string;
  subbutton!: string;
  constructor(private flightsService: FlightsService, private router: Router) {
    this.flights = (data as any).default;
    this.boardingPlaces = [];
    this.destinationPlaces = [];
    this.minDate = new Date();
    this.formstyle = "form-container";
    this.subbutton = "sub-button";
  }

  ngOnInit(): void {
    if(this.flightsService.getFlightSearch() === undefined){
      this.flightSearch = new FlightSearch()
      this.flightSearch.returnDisplay = "none"
      this.flightSearch.isRoundTrip = false
    }else{
      this.flightSearch = this.flightsService.getFlightSearch()
    }

    this.flights.forEach((flight) => {                          // Pushes all the boarding places from json to a variable
      this.boardingPlaces.push(flight.boarding);
    }); 
    this.boardingPlaces = Array.from(new Set(this.boardingPlaces))
    

    this.flights.forEach((flight) => {
      this.destinationPlaces.push(flight.destination);
    });
    this.destinationPlaces = Array.from(new Set(this.destinationPlaces))


    this.pageName = "tickets are"
    this.flightsService.setPageName(this.pageName)
  }

  checkOneway() {
    this.flightSearch.returnDisplay = 'none';
    this.flightSearch.isRoundTrip = false;
    this.formstyle = "form-container";
    this.subbutton = "sub-button";
  }

  checkRoundtrip() {
    this.flightSearch.returnDisplay = 'block';
    this.flightSearch.isRoundTrip = true;
    this.formstyle = "form-container1";
    this.subbutton = "sub-button1";
  }

  onSubmit() {    
    this.flightsService.setFlightSearch(this.flightSearch);
    this.router?.navigateByUrl('/flight-results');
  }

  changePlaces() {
    var temp = this.flightSearch.destination;
    this.flightSearch.destination = this.flightSearch.boarding;
    this.flightSearch.boarding = temp;
  }
}
