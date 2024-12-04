import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './cities/cities.component';
import { EntitiesComponent } from './entities/entities.component';
import { CityService } from './services/city.service';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    EntitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
