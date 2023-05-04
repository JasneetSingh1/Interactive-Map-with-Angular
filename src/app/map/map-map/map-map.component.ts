import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-map-map',
  templateUrl: './map-map.component.html',
  styleUrls: ['./map-map.component.css']
})
export class MapMapComponent {

  constructor(private HttpClient:HttpClient) { }


}