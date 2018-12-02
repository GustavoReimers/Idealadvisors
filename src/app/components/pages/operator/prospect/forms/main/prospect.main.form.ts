/**
 * Created by Alex on 5/24/2018.
 */
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validate } from 'services/validate.service';

@Component({
  selector: 'prospect-main-form',
  templateUrl: './prospect.main.form.html',
  styleUrls: []
})
export class ProspectMainForm implements OnInit {
  @Input() information: any = {};
  @Output() ref: EventEmitter<any> = new EventEmitter();

  public form: FormGroup;

  constructor(public formBuilder: FormBuilder, public validate: Validate) {
    this.form = this.formBuilder.group({
      relationship_status: [''],
      prospect_id: [''],
      prospect_category: [''],
      names: ['', Validators.required],
      surname: ['', Validators.required],
      maiden_name: [''],
      birth_date: [''],
      country_of_birth: [''],
      nationality_1: [''],
      nationality_2: [''],
      nationality_3: [''],
      passport_number_1: [''],
      passport_number_2: [''],
      passport_number_3: ['']
    });
  }

  ngOnInit() {
    this.ref.emit(this.form);
  }
}
