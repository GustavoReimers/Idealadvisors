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
  selector: 'prospect-wealth-form',
  templateUrl: './prospect.wealth.form.html',
  styleUrls: []
})
export class ProspectWealthForm implements OnInit {
  @Output() ref: EventEmitter<any> = new EventEmitter();
  public form: FormGroup;
  public icf = [];

  constructor(public formBuilder: FormBuilder, public validate: Validate) {
    const controls = {};

    this.form = this.formBuilder.group({
      estimated_bankable_assets: ['', Validators.required],
      estimated_total_assets: ['', Validators.required],
      net_new_money: ['', Validators.required],
      pipeline_deadline_months: ['', Validators.required]
    });

    this.form.controls.pipeline_deadline_months.setValue(3);
  }

  ngOnInit() {
    this.ref.emit(this.form);
  }
}
