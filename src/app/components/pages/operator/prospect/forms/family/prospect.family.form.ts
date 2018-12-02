/**
 * Created by Alex on 5/24/2018.
 */
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validate } from 'services/validate.service';

@Component({
  selector: 'prospect-family-form',
  templateUrl: './prospect.family.form.html',
  styleUrls: []
})
export class ProspectFamilyForm implements OnInit {
  @Input() information: any = {};
  @Output() ref: EventEmitter<any> = new EventEmitter();
  public form: FormGroup;

  constructor(public formBuilder: FormBuilder, public validate: Validate) {
    this.form = this.formBuilder.group({
      names: [''],
      surname: [''],
      maiden_name: [''],
      birth_date: [''],
      country_of_birth: ['']
    });
  }

  ngOnInit() {
    this.ref.emit(this.form);
  }
}
