import { Routes } from '@angular/router';
import { MetrolinePage } from './metroline-page/metroline-page';
import { AboutPage } from './about-page/about-page';

export const routes: Routes = [
  {
    path: '',
    component: MetrolinePage,
  },
  {
    path: 'about',
    component: AboutPage,
  },
];
