import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { SharedModule } from '../shared/shared.module';
import { AppComponent  } from '../shared/components/google-maps/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { HttpClientJsonpModule } from '@angular/common/http';

@NgModule({
  declarations: [ContactComponent, AppComponent ],
  imports: [CommonModule, ContactRoutingModule, SharedModule, GoogleMapsModule, HttpClientJsonpModule],
  exports: [AppComponent]
})
export class ContactModule {}
