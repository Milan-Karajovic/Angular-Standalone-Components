import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Route[] = [
  {
    path: '',
    // this component is not loaded lazily
    component: HomeComponent,
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/routes').then(
        (mod) => mod.ABOUT_ROUTES
      ),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./contact/contact.component').then((mod) => mod.ContactComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
