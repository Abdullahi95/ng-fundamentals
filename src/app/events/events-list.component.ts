import { Component } from '@angular/core';

@Component({
  selector: 'events-lists',
  templateUrl: './events-list.component.html',
})
export class EventListComponent {
  event1 = {
    id: 1,
    name: 'Angular Connect',
    date: '23/11/2021',
    time: '10:00 am',
    price: 599.9,
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England',
    },
  };

  handleEventClicked(event: Event) {
    console.log(event);
  }
}
