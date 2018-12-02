/**
 * Created by Alex on 5/21/2018.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FullCalendarModule } from 'ng-fullcalendar';

import { CalendarApi } from './calendar.api';
import { CalendarViewPage } from './view/calendar.view.page';
import { CalendarEventCreatePage } from './event/create/calendar.event.create.page';
import { CalendarEventEditPage } from './event/edit/calendar.event.edit.page';
import { CalendarEventForm } from './event/form/calendar.event.form';

const routes: Routes = [
  { path: 'view', component: CalendarViewPage },
  { path: 'event', component: CalendarEventCreatePage },
  { path: 'event/:id', component: CalendarEventEditPage },
  { path: '**', redirectTo: 'view' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [],
  declarations: [
    CalendarViewPage,
    CalendarEventCreatePage,
    CalendarEventEditPage,
    CalendarEventForm
  ],
  exports: [],
  providers: [CalendarApi]
})
export class OperatorCalendarModule {}
