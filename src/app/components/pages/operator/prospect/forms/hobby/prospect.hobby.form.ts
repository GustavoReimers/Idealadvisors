/**
 * Created by Alex on 5/24/2018.
 */
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Validate } from 'services/validate.service';

@Component({
  selector: 'prospect-hobby-form',
  templateUrl: './prospect.hobby.form.html',
  styleUrls: []
})
export class ProspectHobbyForm implements OnInit {
  @Output() ref: EventEmitter<any> = new EventEmitter();
  public form: FormGroup;

  constructor(public formBuilder: FormBuilder, public validate: Validate) {
    this.form = this.formBuilder.group({
      hobby_1: [''],
      hobby_2: [''],
      hobby_3: [''],
      hobby_4: ['']
    });
  }

  ngOnInit() {
    this.ref.emit(this.form);
  }
}
