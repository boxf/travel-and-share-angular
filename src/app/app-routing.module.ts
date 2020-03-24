import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PlaceDescriptionComponent} from './detailplace_page/place-description/place-description.component';
import {HomePageComponent} from './home_page/home-page/home-page.component';
import {AddPlaceComponent} from './addedit_page/add-place/add-place.component';
import {FilterbarComponent} from './home_page/filterbar/filterbar.component';
import {RegisterUserComponent} from './loginregister_page/register-user/register-user.component';

const routes: Routes = [
  { path: 'placeDescription/:id', component: PlaceDescriptionComponent},
  { path: 'addUser', component: RegisterUserComponent},
  { path: 'add', component: AddPlaceComponent},
  { path: 'filterBar', component: FilterbarComponent},
  { path: 'home', component: HomePageComponent},
  { path: '', component: HomePageComponent},
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
