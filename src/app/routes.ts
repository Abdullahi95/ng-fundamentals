import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event/create-events.component';
import { EventDetailsComponent } from './events/event-details/event-details-component';
import { EventListComponent } from './events/events-list.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventListResolver } from './events/shared/event-list-resolver.service';

// The order of your routes are important.
export const appRoutes: Routes = [
  {
    path: 'events',
    component: EventListComponent,
    resolve: { events: EventListResolver },
  },

  {
    path: 'events/new',
    component: CreateEventComponent,
    /// we provide the function, to use the function we just add the function name.
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    // basically this route can only be activated if we get a correct event id, otherwise we are sent to a 404 page.
    canActivate: [EventRouteActivator],
  },
  {
    path: '404',
    component: Error404Component,
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full',
  },
  {
    // anything inside the user feature module ios going to have a route prefixed to it which is "user".
    path: 'user',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
];
