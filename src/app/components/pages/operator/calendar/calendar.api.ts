import { Injectable } from '@angular/core';
import { Api } from 'services/api.service';

@Injectable()
export class CalendarApi extends Api {
  public listEvents() {
    return this.get('/ems/calendar_events/');
  }

  public createEvent(data) {
    return this.post('/ems/calendar_events/', data);
  }

  public getEvent(id) {
    return this.get(`/ems/calendar_events/${id}/`);
  }

  public updateEvent(id, data) {
    return this.put(`/ems/calendar_events/${id}/`, data);
  }

  public listParticipants() {
    return this.get('/ems/calendar_events/list_participants/');
  }
}
