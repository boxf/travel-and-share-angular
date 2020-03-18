import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PlaceDescriptionComponent} from './detailplace_page/place-description/place-description.component';

const routes: Routes = [
  { path: 'placeDescription/:id', component: PlaceDescriptionComponent}
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
