import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail-component';
import { NavBarComponent } from './navbar/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details-component';
import { appRoutes } from './routes';
import { CreateEventComponent } from './events/create-event/create-events.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';

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
