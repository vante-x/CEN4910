import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { productsDB } from '../shared/data/products';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  myControl = new FormControl('');
  // TODO: read results from OrlandoNeighborhoods.csv
  options: string[] = ['East Orlando', 'Central Orlando', 'West Orlando', 'Winter Park', 'Maitland', 'North Orlando', 'South Orlando', 'Pine Hills', 'West Orange County', 'East Orange County', 'UCF Area', 'South Orange County', 'Apopka', '123 Elmo Street', '9876 Kidney Lane', '3649 Bottle Cap Street', '2323 Alfredo Circle', '3333 Studio Top Street',];
  filteredOptions: Observable<string[]>;

  displayedColumns: string[] = ['name', 'address', 'rent', 'rating'];

  products = [];
  constructor() {
    this.products = productsDB.Product
  }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
