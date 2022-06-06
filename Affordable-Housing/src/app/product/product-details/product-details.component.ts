import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'll-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {
    
  title = 'app';
  radioSel:any;
  radioSelected:string;
  radioSelectedString:string;
  mapsource:string;

  form = new FormGroup({
    gender: new FormControl('')
  });
   
  get f(){
    return this.form.controls;
  }
   
  submit(){
    console.log(this.form.value);
  }
 
  changeMap(e) {

    if(e.target.value == 'map')
     { this.mapsource= "/assets/images/google-maps/map_single_location3.jpg";}
     
    if(e.target.value == 'shopping')
    { this.mapsource= "/assets/images/google-maps/map_restaurant.jpg" ;}
    
    if(e.target.value == 'transit')
     { this.mapsource= "/assets/images/google-maps/map_single_location3.jpg" ;}
     
    if(e.target.value == 'commute')
    { this.mapsource= "/assets/images/google-maps/map_bus_route_to_work.jpg" ;}

    if(e.target.value == 'schools')
    { this.mapsource= "/assets/images/google-maps/map_schools.jpg" ;}
  }

   
  constructor() { 
    this.mapsource= "/assets/images/google-maps/map_single_location3.jpg"
  }
  
  ngOnInit(): void {
    
  }

}

