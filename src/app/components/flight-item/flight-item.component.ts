import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightResult } from '../../models/flight-result.model';
import { FlightsService } from '../../services/flights.service';

@Component({
  selector: '[app-flight-item]',
  templateUrl: './flight-item.component.html',
  styleUrls: ['./flight-item.component.css']
})
export class FlightItemComponent implements OnInit {
  @Input() flight! : FlightResult;
  @Input() indexof! : number;
  // image_path! : string
  travel_duration! : number
  constructor(private flightsService : FlightsService,private router : Router) {}

  ngOnInit(): void {
    var temp2 = this.flight.departureTime.split(":")
    var temp3 = Number(temp2[0].concat(temp2[1]))

    var temp4 = this.flight.arrivalTime.split(":")
    var temp5 = Number(temp4[0].concat(temp4[1]))
    var temp = temp5 - temp3
    var temp1= (temp%100)/60
    this.travel_duration = Math.floor((temp)/100) + temp1
  }

  onClick(){
    this.flightsService.setFlightDetails(this.flight)
    this.router.navigateByUrl("/passenger-details")
  }
}
