import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  returnDisplay: string
  constructor() { 
    this.returnDisplay = "none"

    
  }

  ngOnInit(): void {
  }

  checkOneway(){
    this.returnDisplay = "none"
  }

  checkRoundtrip(){
    this.returnDisplay = "block"
  }
}
