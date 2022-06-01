import { Component, OnInit } from '@angular/core';
import { productsDB } from '../../shared/data/products';

@Component({
  selector: 'll-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {
  isLoaded: boolean;
  advanceSearchExpanded: boolean = false;
  products = [];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.products = productsDB.Product;
      this.isLoaded = true
    }, 8000)
  }
<<<<<<< HEAD
=======

>>>>>>> 4c2e40490b05129e361d2f10466c265e0de11ed6
}
