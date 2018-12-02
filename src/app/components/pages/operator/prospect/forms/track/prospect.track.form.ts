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

@Component({
  selector: 'prospect-track-form',
  templateUrl: './prospect.track.form.html',
  styleUrls: []
})
export class ProspectTrackForm implements OnInit {
  @Output() ref: EventEmitter<any> = new EventEmitter();
  public form: FormGroup;
  public icf = [];

  constructor(public formBuilder: FormBuilder, public validate: Validate) {
    const controls = {};

    this.form = this.formBuilder.group({
      file_type: [''],
      date_of_data: [''],
      file_content: ['']
    });
  }

  ngOnInit() {
    this.ref.emit(this.form);
  }
}
