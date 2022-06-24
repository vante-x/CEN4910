import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { SearchComponent } from './search.component';
import { SharedModule } from '../shared/shared.module';
//import { SearchProductsComponent } from './search-products/search-products.component';
import { NgParticlesModule } from 'ng-particles';
import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DataSource } from '@angular/cdk/collections';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [CommonModule, SearchRoutingModule, SharedModule,
    NgParticlesModule, MatRadioModule,
    MatAutocompleteModule,
    ReactiveFormsModule, FormsModule, MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
})
export class SearchModule { }

