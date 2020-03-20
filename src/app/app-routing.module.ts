import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PlaceDescriptionComponent} from './detailplace_page/place-description/place-description.component';
import {ListOfPlacesComponent} from './home_page/list-of-places/list-of-places.component';
import {HomePageComponent} from './home_page/home-page/home-page.component';
import {AddPlaceComponent} from './addedit_page/add-place/add-place.component';
import {FilterbarComponent} from './home_page/filterbar/filterbar.component';

const routes: Routes = [
  { path: 'placeDescription/:id', component: PlaceDescriptionComponent},
  {path: '', component: HomePageComponent},
  { path: 'add', component: AddPlaceComponent},
  { path: 'filterbar', component: FilterbarComponent}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
