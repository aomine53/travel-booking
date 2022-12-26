import { HttpClient} from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { FlightResult } from 'src/app/models/flight-result.model';
import { FlightSearch } from 'src/app/models/flight-search.model';
import { FlightsService } from 'src/app/services/flights.service';
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
  filterString1! : string
  setfilterString! : string
  setfilterString1! : string
  journeyDetails?: FlightSearch;
  flights: FlightResult[];
  resflights! : FlightResult[];
  constructor(private flightsService: FlightsService, private http : HttpClient) {
    this.filterByParam = 'fare'
    this.setfilterString = ''
    this.setfilterString1 = ''
    this.sortDirection = 'asc'
    this.flights = (data as any).default;
  }

  ngOnInit(): void {
    this.journeyDetails = this.flightsService?.getFlightSearch();

    this.resflights = this.flights.filter((obj) => {                  //filter flights and get resflights     
      return (
        obj.boarding == this.journeyDetails?.boarding &&
        obj.destination == this.journeyDetails?.destination
      );
    });  
    

    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(
      Response => {
        console.log(Response);  
      }
    );


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

  addFilter(){
    this.setfilterString = this.filterString
    this.setfilterString1 = this.filterString1
  }

  clearFilters(){
    this.setfilterString = ''
    this.setfilterString1 = ''
    this.filterString = ''
    this.filterString1 = ''    
  }
}
