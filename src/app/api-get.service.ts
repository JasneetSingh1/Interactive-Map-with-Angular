import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiGetService {

  constructor(private _http:HttpClient) { }

  getApiData(countryId: any)
  {
    return this._http.get(`http://api.worldbank.org/v2/country/${countryId}?format=json`);
  }

  whatCountry()
  {
    const pathElements = document.querySelectorAll("svg path");
    var countryId
      pathElements.forEach((pathElement) =>{
       
        pathElement.addEventListener('mouseover', function(){
          countryId = pathElement.id
          return
        })
      })
      return countryId
  }
}
