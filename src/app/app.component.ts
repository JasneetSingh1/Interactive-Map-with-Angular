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

  
   ngOnInit()
   {
      window.addEventListener("load", () => {

            this._apiservice.whatCountry((countryId: any) =>{
              this._apiservice.getApiData(countryId).subscribe((res: any) => {
                this.newdata = res[1];
              });
            })
      });
    
    };
  }
  

   


 /**
  * Another way of transmitting data from the Api to the HTML element
  * This way is without using the whatCountry() function
  */
  // ngOnInit()
  // {
  //    window.addEventListener("load", () => {
  //      const pathElements = document.querySelectorAll("svg path");
     
  //      pathElements.forEach((pathElement) => {

  //        pathElement.addEventListener("mouseover", () => {

  //          const countryId = pathElement.id;
  //          
     
  //          this._apiservice.getApiData(countryId).subscribe((res: any) => {
  //            this.newdata = res[1];
  //          });
  //        });
  //      });
  //    });
   
  //  }

         
  
   





