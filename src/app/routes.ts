import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event/create-events.component';
import { EventDetailsComponent } from './events/event-details/event-details-component';
import { EventListComponent } from './events/events-list.component';

export const appRoutes: Routes = [
  {
    path: 'events',
    component: EventListComponent,
  },

  {
    path: 'events/new',
    component: CreateEventComponent,
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
  },
  { path: '404', component: Error404Component },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full',
  },
];
