import { Route } from '@angular/router';

import { AboutComponent } from './about.component';
import { DetailsComponent } from './details/details.component';

export const ABOUT_ROUTES: Route[] = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'details',
    component: DetailsComponent
  }
];