import { Component, Input } from '@angular/core';
import { IEvent } from './index';

@Component({
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail-component.html',
  styleUrls: ['./event-thumbnail-component.css'],
})
export class EventThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeClass(): any {
    const isEarlyStart = this.event && this.event.time == '8:00 am';
    return { green: isEarlyStart, bold: isEarlyStart };
  }
}
