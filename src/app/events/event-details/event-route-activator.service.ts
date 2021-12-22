import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { EventService } from '../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {
  constructor(private eventService: EventService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot) {
    // You can use the + operator before a string to coerce it into a floating point number.
    const eventExists = !!this.eventService.getEvent(+route.params['id']);
    console.log(eventExists);

    if (!eventExists) {
      this.router.navigate(['/404']);
    }

    return eventExists;
  }
}