import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  CreateEventComponent,
  EventListResolver,
  EventRouteActivator,
  EventDetailsComponent,
  EventService,
  EventThumbnailComponent,
  EventListComponent,
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  //// Now that it is registered as a provider Angular's injector is aware of this, and so whenever we request it in another component or service, Angular will know where to go to get this service.
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState },
    EventListResolver,
  ],
  //// bootsrap = its here we tell Angular which component is the main top-level app component.
  bootstrap: [EventsAppComponent],
})
export class AppModule {}

// We could've defined this function within another file.
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm(
      'You have not saved this event, do you really want to cancel?'
    );
  }
  return true;
}
