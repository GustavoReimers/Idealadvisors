/**
 * Created by Alex on 5/24/2018.
 */
import {
  Component,
  ViewChild,
  ViewEncapsulation,
  OnInit,
  NgZone
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import * as moment from 'moment';

import { NotifyService } from 'services/notify.service';
import { CalendarApi } from '../calendar.api';

@Component({
  selector: 'page-calendar-view',
  templateUrl: './calendar.view.page.html',
  styleUrls: ['./calendar.view.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarViewPage {
  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  public events = [];

  constructor(
    public api: CalendarApi,
    public notify: NotifyService,
    public route: ActivatedRoute,
    public router: Router,
    public zone: NgZone
  ) {
    this.api.listEvents().subscribe(res => {
      res.forEach(item => {
        item.url = '';
      });
      this.calendarOptions = {
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
        },
        events: res
      };
    });
  }

  eventClick(detail) {
    this.router.navigate(['/operator/calendar/event/', detail.event.id]);
  }

  dayClick(detail) {
    this.router.navigate(['/operator/calendar/event'], {
      queryParams: { date: moment(detail.date).format('YYYY-MM-DD') }
    });
  }
}
