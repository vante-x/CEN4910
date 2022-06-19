import { Component, ViewChild } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker, MapTransitLayer } from '@angular/google-maps';
import { Bubble } from 'tsparticles/dist/Options/Classes/Interactivity/Modes/Bubble';
import { productsDB } from '../../data/products';

@Component({
  selector: 'app-google-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent {
  private _map: Promise<google.maps.Map>;
  private _mapResolver: (value?: google.maps.Map) => void;
  isLoaded: boolean;
  products = [];

  MapTransitLayer: MapTransitLayer;
  title = 'angular-google-maps-app';
  map!: google.maps.Map;
  @ViewChild(MapInfoWindow, { static: false })
  info!: MapInfoWindow;
  zoom = 18;
  maxZoom = 15;
  minZoom = 8;
  
 mapId: 'e9cb7eae3ad7dbe';
  center!: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap',
    maxZoom:this.maxZoom,
    minZoom:this.minZoom,
  }
  infoContent = ''
  markers = []
  

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
    setTimeout(() => {
      this.products = productsDB.Product;
      this.isLoaded = true
    }, 8000)
    ;
    this.loadAllMarkers();
  }

  loadAllMarkers(): void {
    this.products.forEach(product => {
      var marker = new google.maps.Marker({
        position: new google.maps.LatLng(product.lat, product.lng),
        title: product.name,        
        map:this.map,
      });
      this.markers.push(marker);
    })
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content
    this.info.open(marker)
  }
}


export {};