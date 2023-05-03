import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MapModule } from './map/map.module';
import { DetailModule } from './detail/detail.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MapModule,
    DetailModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
