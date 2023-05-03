import { Component } from '@angular/core';
import { DetailDetailComponent } from 'src/app/detail/detail-detail/detail-detail.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map-map',
  templateUrl: './map-map.component.html',
  styleUrls: ['./map-map.component.css']
})
export class MapMapComponent {

  constructor(private _http:HttpClient) { 

  //   function getApiData(this: any, countryId: string)
  // {
  //   return this._http.get(`http://api.worldbank.org/v2/country/${countryId}?format=json`);
  // }

  window.addEventListener("load", function(){
    const pathElements = document.querySelectorAll("svg path");

    pathElements.forEach(function(pathElement){
      pathElement.addEventListener('mouseover', function(){
        var countryId = pathElement.id
        // getApiData(countryId)
        console.log(pathElement.id)
      })
    })


  })
    
}
  //   window.addEventListener("load", function(){
  //   this.window.addEventListener('mouseover', function(){
  //     var PathElements  = document.getElementsByTagName('path'); 
  //     console.log(reactPath);
  //   })
    
  // })
  

  // getDetails(this:any)
  // {
  //   console.log(this)
  // }

  

}