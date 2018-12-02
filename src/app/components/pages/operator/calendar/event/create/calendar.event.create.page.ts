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
  selector: 'page-calendar-event-create',
  templateUrl: './calendar.event.create.page.html',
  styleUrls: [],
  encapsulation: ViewEncapsulation.None
})
export class CalendarEventCreatePage {
  public event:any = {};

  constructor(
    public api: CalendarApi,
    public route: ActivatedRoute,
    public router: Router,
    public notify: NotifyService
  ) {
    this.route.queryParams.subscribe(params => {
      this.event = {
        start: params.date
          ? new Date(`${params.date} 10:00:00`).toISOString().replace('Z', '')
          : '',
        is_public: false
      };
    });
  }

  handleSubmit(values) {
    this.api.createEvent(values).subscribe(res => {
      this.notify.showNotification(
        'success',
        'Event has been created successfully'
      );
      this.router.navigate(['/operator/calendar/view']);
    });
  }
}
