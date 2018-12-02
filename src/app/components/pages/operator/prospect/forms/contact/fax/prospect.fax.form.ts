/**
 * Created by Alex on 5/24/2018.
 */
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validate } from 'services/validate.service';

@Component({
  selector: 'prospect-fax-form',
  templateUrl: './prospect.fax.form.html',
  styleUrls: []
})
export class ProspectFaxForm implements OnInit {
  @Output() ref: EventEmitter<any> = new EventEmitter();
  public form: FormGroup;

  constructor(public formBuilder: FormBuilder, public validate: Validate) {
    this.form = this.formBuilder.group({
      private_tel_country_code: [''],
      private_tel_area_code: [''],
      private_tel_number: [''],

      private_fax_country_code: [''],
      private_fax_area_code: [''],
      private_fax_number: [''],

      business_tel_country_code: [''],
      business_tel_area_code: [''],
      business_tel_number: [''],

      business_fax_country_code: [''],
      business_fax_area_code: [''],
      business_fax_number: [''],

      mobile_1_country_code: [''],
      mobile_1_area_code: [''],
      mobile_1_number: [''],

      mobile_2_country_code: [''],
      mobile_2_area_code: [''],
      mobile_2_number: [''],

      mobile_3_country_code: [''],
      mobile_3_area_code: [''],
      mobile_3_number: ['']
    });
  }

  ngOnInit() {
    this.ref.emit(this.form);
  }
}
