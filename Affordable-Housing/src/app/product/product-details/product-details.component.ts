import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'll-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {
  
  mapsource: "/assets/images/google-maps/map_single_location3.jpg"
  constructor() { 

  }
  onFormSubmit(form: NgForm) {

    if(form.controls['options'].value=='transit'){
      mapsource: "/assets/images/google-maps/map_single_location_bus_stops"

    }

  }

  ngOnInit(): void {
    
  }
  selectMap(e){
    mapsource: "/assets/images/google-maps/map_single_location3.jpg"
  }
}

