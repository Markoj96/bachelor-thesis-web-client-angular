import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './authentication/login/login.component';
import {RegisterComponent} from './authentication/register/register.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './authentication/auth.guard';
import {ListVehiclesComponent} from './home/vehicles/list-vehicles/list-vehicles.component';
import {ShowVehicleComponent} from './home/vehicles/show-vehicle/show-vehicle.component';
import {ListHousesComponent} from './home/houses/list-houses/list-houses.component';
import {ListBusinessesComponent} from './home/businesses/list-businesses/list-businesses.component';
import {ShowBusinessComponent} from './home/businesses/show-business/show-business.component';
import {ListSpecialBusinessesComponent} from './home/special-businesses/list-special-businesses/list-special-businesses.component';
import {ShowSpecialBusinessComponent} from './home/special-businesses/show-special-business/show-special-business.component';
import {MapComponent} from './home/map/map.component';

const routes: Routes = [
  {
    path: 'authentication',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'full'
      },
      {
        path: 'register',
        component: RegisterComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'home',
    canActivate: [AuthGuard],
    component: HomeComponent,
    children: [
      {
        path: 'vehicles',
        component: ListVehiclesComponent,
        pathMatch: 'full'
      },
      {
        path: 'vehicles/:id',
        component: ShowVehicleComponent,
        pathMatch: 'full'
      },
      {
        path: 'houses',
        component: ListHousesComponent,
        pathMatch: 'full'
      },
      {
        path: 'houses/:id',
        component: ListHousesComponent,
        pathMatch: 'full'
      },
      {
        path: 'businesses',
        component: ListBusinessesComponent,
        pathMatch: 'full'
      },
      {
        path: 'businesses/:id',
        component: ShowBusinessComponent,
        pathMatch: 'full'
      },
      {
        path: 'special-businesses',
        component: ListSpecialBusinessesComponent,
        pathMatch: 'full'
      },
      {
        path: 'special-businesses/:id',
        component: ShowSpecialBusinessComponent,
        pathMatch: 'full'
      },
      {
        path: 'map',
        component: MapComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
