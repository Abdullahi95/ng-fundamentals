import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './create-events.component.html',
})
export class CreateEventComponent {
  isDirty: boolean = true;

  constructor(private router: Router) {}

  Cancel(): void {
    this.router.navigate(['/events']);
  }
}
