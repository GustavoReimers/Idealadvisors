/**
 * Created by Alex on 5/24/2018.
 */
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

import { Validate } from 'services/validate.service';
import { NotifyService } from 'services/notify.service';
import { ProspectApi } from '../../prospect.api';

@Component({
  selector: 'prospect-memo-form',
  templateUrl: './prospect.memo.form.html',
  styleUrls: []
})
export class ProspectMemoForm implements OnInit {
  @Input() prospectId: any = 0;
  @Input() information: any = {};
  @Output() ref: EventEmitter<any> = new EventEmitter();

  public form: FormGroup;
  public interests = [];

  constructor(
    public api: ProspectApi,
    public formBuilder: FormBuilder,
    public notify: NotifyService,
    public validate: Validate
  ) {
    const controls = {};

    this.form = this.formBuilder.group({
      date_of_meeting: [''],
      meeting_place: [''],
      city: [''],
      country: [''],
      meeting_notes: [''],
      followup: ['']
    });
  }

  ngOnInit() {
    // this.ref.emit(this.form);
  }

  createCallMemo($event) {
    $event.preventDefault();
    for (let c in this.form.controls) {
      this.form.controls[c].markAsTouched();
    }
    if (!this.form.valid) return;

    this.api
      .createCallMemo({
        prospect: this.prospectId,
        ...this.form.value,
        interests: this.interests
      })
      .subscribe(
        res => {
          this.form.reset();
          this.interests = [];
          this.notify.showNotification(
            'success',
            'Call memo has been created successfully'
          );
        },
        () => {
          this.notify.showNotification(
            'error',
            'Sorry. creating call memo failed'
          );
        }
      );
  }

  handleInterestChange($event, interestId) {
    const value = this.interests;
    if ($event.target.checked) {
      this.interests = [...value, interestId];
    } else {
      this.interests = value.filter(item => item != interestId);
    }
  }
}
