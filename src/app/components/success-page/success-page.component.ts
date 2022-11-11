import { Component, OnInit } from '@angular/core';
import { FlightsService } from 'src/app/services/flights.service';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.component.html',
  styleUrls: ['./success-page.component.css']
})
export class SuccessPageComponent implements OnInit {
  pageName! : string
  constructor(private flightsService: FlightsService) { }

  ngOnInit(): void {
      this.pageName = this.flightsService.getPageName()
  }

}
