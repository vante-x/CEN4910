import { Position } from '@angular/compiler';
import { Component, OnInit, ViewChild  } from '@angular/core';
import { GoogleMap, MapInfoWindow, MapMarker, MapTransitLayer } from '@angular/google-maps';


@Component({
  selector: 'app-google-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow
  isLoaded: boolean;
  products = [];  
  infoContent = ''
  markers = []
  public shapeData: object;
  datasource = [];
  
  zoom = 12
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    zoomControl: true,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    mapTypeId: 'roadmap',
    maxZoom: 15,
    minZoom: 8,
  }
  
  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: 28.542111,
        lng: -81.37903,

      }
    })
     markers: [
      { position:{
        lat: 28.51373879665654, 
        lng: -81.36323055491305 },
      label: { 
        text:'Good'},
        shape:{
          type: 'circle',
          height:30,
          width:30, 
          color:'purple'
        }},
        { position:{
          lat:28.565225490654658 , 
          lng: -81.32972717285156 },
        label: { 
          text:'Good'},
          shape:{
            type: 'circle',
            height:30,
            width:30, 
            color:'purple'
          }},
          { position:{
            lat: 28.563504017948954, 
            lng: -81.352415888165  },
          label: { 
            text:'Good'},
            shape:{
              type: 'circle',
              height:30,
              width:30, 
              color:'purple'
            }},
            { position:{
              lat:28.536145562030278, 
              lng:  -81.38840936322703},
            label: { 
              text:'Non-Compliant'},
              shape:{
                type: 'circle',
                height:30,
                width:30, 
                color:'red'
              }},
              { position:{
                lat: 28.530933076019487, 
                lng: -81.40116771921969  },
              label: { 
                text:'Non-Compliant'},
                shape:{
                  type: 'circle',
                  height:30,
                  width:30, 
                  color:'red'
                }},
                { position:{
                  lat: 28.56290094390906, 
                  lng: -81.36941036448336 },
                label: { 
                  text:'Non-Compliant'},
                  shape:{
                    type: 'circle',
                    height:30,
                    width:30, 
                    color:'red'
                  }},
                  { position:{
                    lat: 28.555060666949633, 
                    lng:  -81.3879497931943 },
                  label: { 
                    text:'Poor'},
                    shape:{
                      type: 'circle',
                      height:30,
                      width:30, 
                      color:'yellow'
                    }},
                    { position:{
                      lat:28.531234705011673,
                      lng: -81.39172634348726 },
                    label: { 
                      text:'Poor'},
                      shape:{
                        type: 'circle',
                        height:30,
                        width:30, 
                        color:'yellow'
                      }},
                      { position:{
                        lat: 28.561393243691317,  
                        lng: -81.39069637522555 },
                      label: { 
                        text:'Poor'},
                        shape:{
                          type: 'circle',
                          height:30,
                          width:30, 
                          color:'yellow'
                        }},

    ];


    this.loadAllMarkers()
  }
 
  loadAllMarkers(): void {
    this.markers.forEach(marker =>{
      this.markers.push({
        
        position:{
          lat: marker.lat,
          lng: marker.lng
        },
        label: {
          text: marker.text
        },

        shape:{
          shape: 'Circle',
          height: 30,
          width: 30,
          radius: 30,
          color: marker.color
      }
      })

      
    })
    
    
    }
  

  openInfo(marker: MapMarker, content) {
    this.infoContent = content
    this.info.open(marker)
  }
}


export {};