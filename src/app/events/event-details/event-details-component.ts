import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';

@Component({
  templateUrl: './event-details-component.html',
  selector: 'event-details',
  styleUrls: ['./event-details.component.css'],
})
export class EventDetailsComponent implements OnInit {
  event: any;

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.event = this.eventService.getEvent(1);
  }
}
