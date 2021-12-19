import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail-component';
import { NavBarComponent } from './navbar/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/event-details-component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
  ],
  imports: [BrowserModule],
  //// Now that it is registered as a provider Angular's injector is aware of this, and so whenever we request it in another component or service, Angular will know where to go to get this service.
  providers: [EventService, ToastrService],
  //// bootsrap = its here we tell Angular which component is the main top-level app component.
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
