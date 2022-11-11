import { Injectable } from '@angular/core';
import { FlightResult } from '../models/flight-result.model';
import { FlightSearch } from '../models/flight-search.model';
import { PassengerDetails } from '../models/passenger-details.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  journeyDetails! : FlightSearch
  flightDetails! : FlightResult
  passengerDetails! : PassengerDetails[]
  pageName! : string
  constructor() {}

  setPageName(pageName : string){
    this.pageName = pageName
  }

  getPageName(){
    return this.pageName
  }

  setJourneyDetails(journeyDetails : FlightSearch){    
    this.journeyDetails = journeyDetails
  }

  getJourneyDetails(){    
    return this.journeyDetails
  }

  setFlightDetails(flightDetails : FlightResult){
    this.flightDetails = flightDetails
  }

  getFlightDetails(){
    return this.flightDetails
  }

  setPassengerDetails(passengerDetails : PassengerDetails[]){
    this.passengerDetails = passengerDetails
  }

  getPassengerDetails(){
    return this.passengerDetails
  }
}
