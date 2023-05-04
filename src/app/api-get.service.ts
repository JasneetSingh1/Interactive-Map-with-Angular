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

  whatCountry(onCountryChange: { (countryId: any): void; (arg0: string): void; })
  {
    return new Promise((resolve, reject) => {
      const pathElements = document.querySelectorAll("svg path");
  
      pathElements.forEach((pathElement) => {
        pathElement.addEventListener("mouseover", () => {
          const countryId = pathElement.id;
          onCountryChange(countryId);
        });
      });
    });
}





}
