import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentsComponent } from './components/contents/contents.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { SpeciesListComponent } from './components/species-list/species-list.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';

const routes: Routes = [
  {path: 'people-list', component: PeopleListComponent},
  {path: 'contents', component: ContentsComponent},
  {path: 'species-list',  component: SpeciesListComponent},
  {path: 'film-list', component: FilmListComponent},
  {path: 'starship-list', component: StarshipListComponent},
  {path: 'vehicles-list', component: VehiclesListComponent},
  {path: 'planets-list', component: PlanetListComponent},
  {path: '', redirectTo: '/contents', pathMatch: 'full'},
  
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
