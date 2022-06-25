import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { productsDB } from '../../shared/data/products';

@Component({
  selector: 'll-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})

export class ProductDetailsComponent implements OnInit {

  title = 'app';
  radioSel: any;
  radioSelected: string;
  radioSelectedString: string;
  mapsource: string;

  form = new FormGroup({
    gender: new FormControl('')
  });

  get f() {
    return this.form.controls;
  }


  changeMap(e) {

    if (e.target.value == 'map') { this.mapsource = "/assets/images/google-maps/map_single_location3.jpg"; }

    if (e.target.value == 'shopping') { this.mapsource = "/assets/images/google-maps/map_restaurant.jpg"; }

    if (e.target.value == 'transit') { this.mapsource = "/assets/images/google-maps/map_single_location_bus_stops.jpg"; }

    if (e.target.value == 'commute') { this.mapsource = "/assets/images/google-maps/map_bus_route_to_work.jpg"; }

    if (e.target.value == 'schools') { this.mapsource = "/assets/images/google-maps/map_schools.jpg"; }
  }

  products: any[];

  id: number

  constructor(private route: ActivatedRoute) {
    this.mapsource = "/assets/images/google-maps/map_single_location3.jpg"
    this.products = productsDB.Product;
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {

  }
  selectMap(e) {
    mapsource: "/assets/images/google-maps/map_single_location3.jpg"
  }
  public openNewPage(): void {
    window.open("https://ocpaweb.ocpafl.org/parcelsearch/Parcel%20ID/292234135300011", "_self");
  }
  public handleDenial(): void {
    console.log("Done");
  }
}

