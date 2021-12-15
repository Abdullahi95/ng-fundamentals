import { Component } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'events-lists',
  templateUrl: './events-list.component.html',
})
export class EventListComponent {
  event: any;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.event = this.eventService.gotEvents();
  }
}
