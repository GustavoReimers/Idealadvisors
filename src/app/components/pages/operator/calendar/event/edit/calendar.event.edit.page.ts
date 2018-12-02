/**
 * Created by Alex on 5/24/2018.
 */
import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';

import { NotifyService } from 'services/notify.service';
import { CalendarApi } from '../../calendar.api';

@Component({
  selector: 'page-calendar-event-edit',
  templateUrl: './calendar.event.edit.page.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class CalendarEventEditPage {
  public event: any = {};

  constructor(
    public api: CalendarApi,
    public route: ActivatedRoute,
    public router: Router,
    public notify: NotifyService
  ) {
    this.route.params.subscribe(params => {
      this.api.getEvent(params.id).subscribe(res => {
        if (res.start) res.start = res.start.replace('Z', '').slice(0, 19);
        if (res.end) res.end = res.end.replace('Z', '').slice(0, 19);
        console.log(res);

        this.event = res;
      });
    });
  }

  handleSubmit(values) {
    this.api.updateEvent(this.event.id, values).subscribe(res => {
      this.notify.showNotification(
        'success',
        'Event has been updated successfully'
      );
      this.router.navigate(['/operator/calendar/view']);
    });
  }
}
