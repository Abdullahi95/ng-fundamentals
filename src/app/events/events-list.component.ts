import { Component } from '@angular/core';
import { events } from '../eventsdata';

@Component({
  selector: 'events-lists',
  templateUrl: './events-list.component.html',
})
export class EventListComponent {
  eventData = events;
}
