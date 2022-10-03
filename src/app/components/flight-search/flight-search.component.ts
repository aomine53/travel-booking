import { Component, OnInit } from '@angular/core';
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
  flightSearch: FlightSearch;
  returnDisplay: string;
  boardingPlaces: string[];
  destinationPlaces: string[];
  flights: FlightResult[];
  constructor(private flightsService: FlightsService, private router: Router) {
    this.returnDisplay = 'none';
    this.flightSearch = {
      boarding: '',
      destination: '',
      departure: '',
      return: '',
      travelclass: '',
    };
    this.flights = (data as any).default;
    this.boardingPlaces = [];
    this.destinationPlaces = [];
  }

  ngOnInit(): void {
    this.flights.forEach((flight) => {
      this.boardingPlaces.push(flight.boarding);
    });
    
    this.boardingPlaces = Array.from(new Set(this.boardingPlaces))
    
    this.flights.forEach((flight) => {
      this.destinationPlaces.push(flight.destination);
    });
    
    this.destinationPlaces = Array.from(new Set(this.destinationPlaces))
  }

  checkOneway() {
    this.returnDisplay = 'none';
  }

  checkRoundtrip() {
    console.log('inside checkRoundtrip');

    this.returnDisplay = 'block';
  }

  onSubmit() {
    this.flightsService.setJourneyDetails(this.flightSearch);
    this.router?.navigateByUrl('/flight-results');
  }

  changePlaces() {
    var temp = this.flightSearch.destination;
    this.flightSearch.destination = this.flightSearch.boarding;
    this.flightSearch.boarding = temp;
  }
}
