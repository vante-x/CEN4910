import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { GoogleMapsModule } from '@angular/google-maps'



function initMap(): void {
    const map = new google.maps.Map(
      document.getElementById("map") as HTMLElement,
      {
        zoom: 13,
        center: { lat: 51.501904, lng: -0.115871 },
      }
    );
  
    const transitLayer = new google.maps.TransitLayer();
  
    transitLayer.setMap(map);
  }
  
  declare global {
    interface Window {
      initMap: () => void;
    }
  }
  window.initMap = initMap;
  export class TransitMapComponent  {};
  