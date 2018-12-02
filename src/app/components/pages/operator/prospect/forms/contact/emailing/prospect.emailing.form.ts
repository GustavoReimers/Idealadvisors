/**
 * Created by Alex on 5/24/2018.
 */
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validate } from 'services/validate.service';

@Component({
  selector: 'prospect-emailing-form',
  templateUrl: './prospect.emailing.form.html',
  styleUrls: []
})
export class ProspectEMailingForm implements OnInit {
  @Output() ref: EventEmitter<any> = new EventEmitter();
  public form: FormGroup;

  constructor(public formBuilder: FormBuilder, public validate: Validate) {
    this.form = this.formBuilder.group({
      preferred_email: [''],

      private_email_1: [''],
      private_email_2: [''],
      private_email_3: [''],

      business_email_1: [''],
      business_email_2: [''],
      business_email_3: ['']
    });
  }

  ngOnInit() {
    this.ref.emit(this.form);
  }
}
