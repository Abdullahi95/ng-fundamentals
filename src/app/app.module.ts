import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';

@NgModule({
  declarations: [
    EventsAppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  /// its here we tell Angular which component is the main top-level app component.
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
