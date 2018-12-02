/**
 * Created by Alex on 5/24/2018.
 */
import {
  Component,
  EventEmitter,
  Input,
  Output,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { Validate } from 'services/validate.service';
import { NotifyService } from 'services/notify.service';
import {ProspectApi} from '../../prospect.api';

@Component({
  selector: 'prospect-company-edit-page',
  templateUrl: './prospect.company.edit.page.html',
  styleUrls: ['./prospect.company.edit.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProspectCompanyEditPage {
  public form: FormGroup;
  public isCollapsed = true;
  public company: any = {};
  public information: any = {};

  constructor(
    public api: ProspectApi,
    public formBuilder: FormBuilder,
    public _location: Location,
    public notify: NotifyService,
    public route: ActivatedRoute,
    public validate: Validate
  ) {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      sector: [''],
      email: [''],

      address_line1: [''],
      address_line2: [''],
      address_postal_code: [''],
      address_city: [''],
      address_country: [''],

      pbx_tel_country_code: [''],
      pbx_tel_area_code: [''],
      pbx_tel_number: [''],

      pbx_fax_country_code: [''],
      pbx_fax_area_code: [''],
      pbx_fax_number: [''],

      number_of_employees: [''],
      turnover: [''],

      company_field_1: [''],
      company_field_2: [''],
      company_field_3: [''],
      company_field_4: [''],
      company_field_5: [''],

      web_site: [''],
      info: ['']
    });
    this.form.controls.number_of_employees.setValue(0);
    this.form.controls.turnover.setValue(0);

    this.api.listInformation().subscribe(res => {
      this.information = res;
    });

    this.route.params.subscribe(params => {
      this.api.getCompany(params.id).subscribe(res => {
        Object.keys(res).forEach(key => {
          if (this.form.controls[key]) {
            this.form.controls[key].setValue(res[key]);
          }
        });
        this.company = res;
      });
    });
  }

  handleSubmit($event) {
    $event.preventDefault();
    for (let c in this.form.controls) {
      this.form.controls[c].markAsTouched();
    }
    if (!this.form.valid) return;

    this.api.updateCompany(this.company.id, this.form.value).subscribe(
      res => {
        this.form.reset();
        this.notify.showNotification(
          'success',
          'Company has been updated successfully'
        );
        this._location.back();
      },
      () => {
        this.notify.showNotification('error', 'Sorry. creating company failed');
      }
    );
  }
}
