import { Component, OnInit, Output } from '@angular/core';
import { FlightResult } from 'src/app/models/flight-result.model';
import { FlightSearch } from 'src/app/models/flight-search.model';
import { FlightsService } from 'src/app/services/flights.service';
import { SortPipe } from 'src/app/pipes/sort.pipe';
import * as data from '../../../assets/flights.json';

@Component({
  selector: 'app-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.css'],
})
export class FlightResultsComponent implements OnInit {
  sortByParam! : string
  sortDirection! : string
  filterByParam! : string
  filterString! : string
  journeyDetails?: FlightSearch;
  flights: FlightResult[];
  resflights! : FlightResult[];
  constructor(private flightsService: FlightsService) {
    this.sortDirection = 'asc'
    this.flights = (data as any).default;
  }

  ngOnInit(): void {
    this.journeyDetails = this.flightsService?.getJourneyDetails();

    this.resflights = this.flights.filter((obj) => {
      return (
        obj.boarding == this.journeyDetails?.boarding &&
        obj.destination == this.journeyDetails?.destination
      );
    });  
    
  }

  onSort(){
    this.sortByParam = "fare"
    if(this.sortDirection == 'desc'){
      this.sortDirection = 'asc'
    }else{
      this.sortDirection = 'desc'
    }
  }

  onSort1(){
    this.sortByParam = "duration"
    if(this.sortDirection == 'desc'){
      this.sortDirection = 'asc'
    }else{
      this.sortDirection = 'desc'
    }
  }
}
