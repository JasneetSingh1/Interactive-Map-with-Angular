import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MapModule } from './map/map.module';
import { MapDetailComponent } from './map-detail/map-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MapDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
