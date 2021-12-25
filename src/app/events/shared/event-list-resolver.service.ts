import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventService } from './event.service';
import { map } from 'rxjs/operators';

@Injectable()
export class EventListResolver implements Resolve<any> {
  constructor(private eventService: EventService) {}

  resolve() {
    // within this method we typically make an asynchronous call like a AJAX call.
    return this.eventService.getEvents().pipe(map((events) => events));
  }
}
