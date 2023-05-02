import { Component } from '@angular/core';
import { MapMapComponent } from './map/map-map/map-map.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interactive-map-angular';

  constructor(){
    window.addEventListener("load", function(){
      // const infoContainer = document.getElementById('info-con');
      // const data = await fetch("http://api.worldbank.org/v2/country/br?format=json")
      // const countryData = await data.json();
     
      
      var svg = document.getElementById('ad');
      console.log(svg)
      var cName = svg?.nodeValue
      console.log(cName)
      })
  }
 
}
