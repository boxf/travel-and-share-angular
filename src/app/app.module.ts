import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './home_page/home-page/home-page.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './home_page/navbar/navbar.component';
import { FilterbarComponent } from './home_page/filterbar/filterbar.component';
import { ListOfPlacesComponent } from './home_page/list-of-places/list-of-places.component';
import { MapComponent } from './home_page/map/map.component';
import { PlaceSummaryComponent } from './home_page/place-summary/place-summary.component';
import { FooterComponent } from './home_page/footer/footer.component';
import { LoginUserComponent } from './loginregister_page/login-user/login-user.component';
import { RegisterUserComponent } from './loginregister_page/register-user/register-user.component';
import { AddPlaceComponent } from './addedit_page/add-place/add-place.component';
import { EditPlaceComponent } from './addedit_page/edit-place/edit-place.component';
import { PhotoCarrousselComponent } from './detailplace_page/photo-carroussel/photo-carroussel.component';
import { ReviewComponent } from './detailplace_page/review/review.component';
import { PlaceDescriptionComponent } from './detailplace_page/place-description/place-description.component';
import { ReviewsListComponent } from './detailplace_page/reviews-list/reviews-list.component';
import {FormBuilder, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {PlaceService} from './services/place-service/place.service';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from './app-routing.module';

const appRoutes: Routes = [
  { path: 'add', component: AddPlaceComponent},
  { path: 'filterbar', component: FilterbarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FilterbarComponent,
    ListOfPlacesComponent,
    MapComponent,
    PlaceSummaryComponent,
    FooterComponent,
    LoginUserComponent,
    RegisterUserComponent,
    AddPlaceComponent,
    EditPlaceComponent,
    PhotoCarrousselComponent,
    ReviewComponent,
    PlaceDescriptionComponent,
    ReviewsListComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    CommonModule,
    AppRoutingModule
  ],
  providers: [PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
