import { Routes } from '@angular/router';
import {  WelcomeComponent } from './welcome/welcome.component';
import { CreateOwnerComponent } from './create-owner/create-owner.component';
import { UptadeOwnerComponent } from './uptade-owner/uptade-owner.component';
import { AllOnwersListComponent } from './all-onwers-list/all-onwers-list.component';
// import { PageNotFoundComponent } 

export const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'create', component: CreateOwnerComponent },
  { path: 'update', component: UptadeOwnerComponent },
  { path: 'getall', component: AllOnwersListComponent },
//   { path: '**', component: PageNotFoundComponent } 
];
