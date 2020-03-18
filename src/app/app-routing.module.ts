import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PlaceDescriptionComponent} from './detailplace_page/place-description/place-description.component';

const routes: Routes = [
  { path: 'placeDescription', component: PlaceDescriptionComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
