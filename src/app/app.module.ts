import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { FilterbarComponent } from './homepage/filterbar/filterbar.component';
import { ListOfPlacesComponent } from './homepage/list-of-places/list-of-places.component';
import { MapComponent } from './homepage/map/map.component';
import { PlaceSummaryComponent } from './homepage/place-summary/place-summary.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { LoginUserComponent } from './loginregister_page/login-user/login-user.component';
import { RegisterUserComponent } from './loginregister_page/register-user/register-user.component';
import { AddPlaceComponent } from './addedit_page/add-place/add-place.component';
import { EditPlaceComponent } from './addedit_page/edit-place/edit-place.component';
import { PhotoCarrousselComponent } from './detailplace_page/photo-carroussel/photo-carroussel.component';
import { ReviewComponent } from './detailplace_page/review/review.component';
import { PlaceDescriptionComponent } from './detailplace_page/place-description/place-description.component';
import { ReviewsListComponent } from './detailplace_page/reviews-list/reviews-list.component';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';

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
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
