import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchbarRoutingModule } from './searchbar-routing.module';
import { SearchbarComponent } from './searchbar.component';
import { SharedModule } from '../shared/shared.module';
import { NgParticlesModule } from 'ng-particles';

import { MatRadioModule } from '@angular/material/radio';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DataSource } from '@angular/cdk/collections';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [SearchbarComponent],
  imports: [CommonModule, SearchbarRoutingModule, SharedModule, NgParticlesModule, MatRadioModule,
    MatAutocompleteModule,
    ReactiveFormsModule, FormsModule, MatFormFieldModule,
    MatInputModule,
    MatTableModule,
  ],
})
export class SearchbarModule {}