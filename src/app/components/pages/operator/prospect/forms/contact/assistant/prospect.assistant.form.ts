/**
 * Created by Alex on 5/24/2018.
 */
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validate } from 'services/validate.service';

@Component({
  selector: 'prospect-assitant-form',
  templateUrl: './prospect.assistant.form.html',
  styleUrls: []
})
export class ProspectAssistantForm implements OnInit {
  @Output() ref: EventEmitter<any> = new EventEmitter();

  public form: FormGroup;

  constructor(public formBuilder: FormBuilder, public validate: Validate) {
    this.form = this.formBuilder.group({
      personal_assistant_names: [''],
      personal_assistant_surname: [''],

      personal_assistant_tel_country_code: [''],
      personal_assistant_tel_area_code: [''],
      personal_assistant_tel_number: [''],

      personal_assistant_fax_country_code: [''],
      personal_assistant_fax_area_code: [''],
      personal_assistant_fax_number: [''],

      email: ['']
    });
  }

  ngOnInit() {
    this.ref.emit(this.form);
  }
}
