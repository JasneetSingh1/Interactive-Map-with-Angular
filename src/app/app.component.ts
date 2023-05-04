import { Component, } from '@angular/core';
import { MapMapComponent } from './map/map-map/map-map.component';
import { ApiGetService } from './api-get.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Interactive World Map';
  newdata:any;
  countryId:any

  
  

  constructor(private _apiservice:ApiGetService){}
  //   var countryId: any;
  //   window.addEventListener("load", function(){
  //   const pathElements = document.querySelectorAll("svg path");
    

  //   pathElements.forEach(function(pathElement){
  //     pathElement.addEventListener('mouseover', function(){
  //        countryId = pathElement.id
  //        console.log(countryId)
         
  //     })
    
      
  //   })
    

  // })



  
   ngOnInit()
   {
    window.addEventListener("load", () => {
      const pathElements = document.querySelectorAll("svg path");
    
      pathElements.forEach((pathElement) => {
        pathElement.addEventListener("mouseover", () => {
          const countryId = pathElement.id;
          // const country = this._apiservice.whatCountry();
    
          this._apiservice.getApiData(countryId).subscribe((res: any) => {
             this.newdata = res[1];
          });
        });
      });
    });
    
    }

  }

   



         
  
   





