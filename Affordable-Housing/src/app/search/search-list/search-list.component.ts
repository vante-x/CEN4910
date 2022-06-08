import { Component, OnInit } from '@angular/core';
import { productsDB } from '../../shared/data/products';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'll-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  products = [];

  selectedPrice = ''
  selectedUtility = ''
  selectedBathrooms = ''
  selectedBedrooms = ''
  selectedProperty = ''

  housingOptions = this._formBuilder.group({
    htApartment: true,
    htHouse: true,
    htTownhome: true,
    htCondo: true,
  });

  petOptions = this._formBuilder.group({
    petFriendly: false,
    noPets: false,
    cats: false,
    dogs: false,
  });

  unitAmenities = this._formBuilder.group({
    washerDryerHookup: false,
    washerDryer: false,
    dishwasher: false,
    patio: false,
    microwave: false,
    highSpeedInternet: false,
    wheelChairAccess: false,
    furnished: false
  });

  commAmenities = this._formBuilder.group({
    controlledAccess: false,
    fitnessCenter: false,
    pool: false,
    coveredParking: false,
    garage: false
  });

  constructor(private _formBuilder: FormBuilder) { 
  }

  resetForms() {
    this.housingOptions.reset( {
      htApartment: true,
      htHouse: true,
      htTownhome: true,
      htCondo: true,
    })
    this.petOptions.reset('', {emitEvent: false})
    this.unitAmenities.reset('', {emitEvent: false})
    this.commAmenities.reset('', {emitEvent: false})
    
    this.selectedPrice = ''
    this.selectedUtility = ''
    this.selectedBathrooms = ''
    this.selectedBedrooms = ''
    this.selectedProperty = ''
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.products = productsDB.Product;
      this.isLoaded = true
    }, 500)
  }
}

