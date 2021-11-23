import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventListComponent } from './events/events-list.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  /// its here we tell Angular which component is the main top-level app component.
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
