import { Routes } from '@angular/router';
import { HomeComponent } from './home';
// import { AboutComponent } from './about';
import { VladiComponent } from './vladi';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';
import { UsersComponent } from './+admin';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  { path: 'vladi', component: VladiComponent },
  // { path: 'detail', loadChildren: './+detail#DetailModule' },
  { path: 'barrel', loadChildren: './+barrel#BarrelModule' },
  { path: 'admin', component: UsersComponent },
  { path: '**', component: NoContentComponent },

];
