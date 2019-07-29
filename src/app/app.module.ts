import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptorService} from './shared/helpers/token-interceptor/token-interceptor.service';
import {ErrorInterceptorService} from './shared/helpers/error-interceptor/error-interceptor.service';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ShowBusinessComponent } from './home/businesses/show-business/show-business.component';
import { ListBusinessesComponent } from './home/businesses/list-businesses/list-businesses.component';
import { ShowHouseComponent } from './home/houses/show-house/show-house.component';
import { ListHousesComponent } from './home/houses/list-houses/list-houses.component';
import { ShowSpecialBusinessComponent } from './home/special-businesses/show-special-business/show-special-business.component';
import { ListSpecialBusinessesComponent } from './home/special-businesses/list-special-businesses/list-special-businesses.component';
import { ShowVehicleComponent } from './home/vehicles/show-vehicle/show-vehicle.component';
import { ListVehiclesComponent } from './home/vehicles/list-vehicles/list-vehicles.component';
import { MapComponent } from './home/map/map.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ShowBusinessComponent,
    ListBusinessesComponent,
    ShowHouseComponent,
    ListHousesComponent,
    ShowSpecialBusinessComponent,
    ListSpecialBusinessesComponent,
    ShowVehicleComponent,
    ListVehiclesComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
