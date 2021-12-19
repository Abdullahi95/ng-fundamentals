import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';

@Component({
  selector: 'events-lists',
  templateUrl: './events-list.component.html',
})
export class EventListComponent implements OnInit {
  event: any;

  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.event = this.eventService.getEvents();
  }

  handleThumbnailClick(name: string) {
    this.toastr.success(name);
  }
}
