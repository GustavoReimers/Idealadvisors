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
  selector: 'prospect-ca-form',
  templateUrl: './prospect.ca.form.html',
  styleUrls: []
})
export class ProspectCAForm implements OnInit {
  @Input() information: any = {};
  @Output() ref: EventEmitter<any> = new EventEmitter();

  public form: FormGroup;
  public icf = [];

  constructor(public formBuilder: FormBuilder, public validate: Validate) {
    const controls = {};

    for (let i = 0; i < 10; i += 1) {
      controls[`icf_${i}-connection_type`] = new FormControl('');
      controls[`icf_${i}-employee`] = new FormControl('');
      this.icf.push(i);
    }

    this.form = this.formBuilder.group(controls);
  }

  ngOnInit() {
    this.ref.emit(this.form);
  }
}
