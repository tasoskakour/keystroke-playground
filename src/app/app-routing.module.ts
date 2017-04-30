import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KeystrokesPlayComponent } from './keystrokes-play.component';
import { AGetRequestComponent } from './a-get-request.component';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',    component: HomeComponent },
  { path: 'keystrokes',  component: KeystrokesPlayComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'contact',  component: ContactComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
