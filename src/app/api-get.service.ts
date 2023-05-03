import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiGetService {

  constructor(private _http:HttpClient) { }

  getApiData()
  {
    return this._http.get('http://api.worldbank.org/v2/country/br?format=json');
  }
}
