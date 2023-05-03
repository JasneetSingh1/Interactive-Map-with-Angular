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

  // constructor(private apiservice:ApiGetService){}
    
  //  ngOnInit()
  //  {

  //   this.apiservice.getApiData().subscribe(res=>{
  //     this.newdata=res;
  //   })

  //  }


         
  
   
}




