import { ConvertActionBindingResult } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';

@Component({
  selector: 'events-lists',
  templateUrl: './events-list.component.html',
})
export class EventListComponent implements OnInit {
  events: any;

  constructor(private toastr: ToastrService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleThumbnailClick(name: string) {
    this.toastr.success(name);
  }
}
