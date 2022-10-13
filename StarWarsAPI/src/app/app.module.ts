import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentsComponent } from './components/contents/contents.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentsComponent,
    PeopleListComponent,
    SpeciesListComponent,
    FilmListComponent,
    PlanetListComponent,
    VehiclesListComponent,
    StarshipListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
