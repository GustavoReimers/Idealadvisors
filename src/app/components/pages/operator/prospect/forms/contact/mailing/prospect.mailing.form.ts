/**
 * Created by Alex on 5/24/2018.
 */
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validate } from 'services/validate.service';

@Component({
  selector: 'prospect-mailing-form',
  templateUrl: './prospect.mailing.form.html',
  styleUrls: []
})
export class ProspectMailingForm implements OnInit {
  @Input() information: any = {};
  @Output() ref: EventEmitter<any> = new EventEmitter();
  public form: FormGroup;

  constructor(public formBuilder: FormBuilder, public validate: Validate) {
    this.form = this.formBuilder.group({
      mailing_address_line1: ['', Validators.maxLength(60)],
      mailing_address_line2: ['', Validators.maxLength(60)],
      mailing_address_postal_code: ['', Validators.maxLength(6)],
      mailing_address_city: ['', Validators.maxLength(60)],
      mailing_address_country: ['', Validators.maxLength(60)]
    });
  }

  ngOnInit() {
    this.ref.emit(this.form);
  }
}
