/**
 * Created by Alex on 5/24/2018.
 */
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Validate } from 'services/validate.service';
import { CalendarApi } from '../../calendar.api';

@Component({
  selector: 'calendar-event-form',
  templateUrl: './calendar.event.form.html',
  styleUrls: []
})
export class CalendarEventForm implements OnChanges {
  @Input() initialValue: any = {};
  @Output() submit: EventEmitter<any> = new EventEmitter();

  public form: FormGroup;
  public participants = [];

  constructor(
    public api: CalendarApi,
    public formBuilder: FormBuilder,
    public validate: Validate
  ) {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      start: ['', Validators.required],
      end: [''],
      description: [''],
      url: [''],
      participants: [''],
      is_public: ['']
    });
    this.form.controls.is_public.setValue(false);
    this.form.controls.participants.setValue([]);

    this.api.listParticipants().subscribe(res => {
      this.participants = res;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    Object.keys(this.form.controls).forEach(key => {
      this.form.controls[key].setValue(this.initialValue[key] || '');
    });
  }

  handleSubmit($event) {
    $event.preventDefault();

    for (let c in this.form.controls) {
      this.form.controls[c].markAsTouched();
    }

    if (!this.form.valid) return;

    const values = {
      ...this.form.value,
      ...this.form.value,
      is_public: !!this.form.value.is_public,
      is_all_day: !!this.form.value.is_all_day
    };
    if (!values.end) values.end = undefined;

    this.submit.emit(values);
  }
}
