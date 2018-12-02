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

import { NotifyService } from 'services/notify.service';
import {ProspectApi} from '../../prospect.api';

@Component({
  selector: 'prospect-company-form',
  templateUrl: './prospect.company.form.html',
  styleUrls: []
})
export class ProspectCompanyForm implements OnInit {
  @Input() information: any = {};
  @Output() ref: EventEmitter<any> = new EventEmitter();

  public companies = [];
  public form: FormGroup;
  public companyForm: FormGroup;
  public cprf = [];
  public isCollapsed = true;

  constructor(
    public api: ProspectApi,
    public formBuilder: FormBuilder,
    public notify: NotifyService,
    public validate: Validate
  ) {
    const controls = {};

    for (let i = 0; i < 10; i += 1) {
      controls[`cprf_${i}-role`] = new FormControl('');
      controls[`cprf_${i}-company`] = new FormControl('');
      this.cprf.push(i);
    }

    this.form = this.formBuilder.group(controls);
    this.companyForm = this.formBuilder.group({
      role: [''],
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
    this.companyForm.controls.number_of_employees.setValue(0);
    this.companyForm.controls.turnover.setValue(0);

    this.api.listCompany().subscribe(res => {
      this.companies = res;
    });
  }

  ngOnInit() {
    this.ref.emit(this.form);
  }

  createCompany($event) {
    $event.preventDefault();
    for (let c in this.companyForm.controls) {
      this.companyForm.controls[c].markAsTouched();
    }
    if (!this.companyForm.valid) return;

    this.api.createCompany(this.companyForm.value).subscribe(
      res => {
        this.companies.push({
          ...this.companyForm.value,
          id: res.id
        });
        this.companyForm.reset();
        this.notify.showNotification(
          'success',
          'Company has been created successfully'
        );
      },
      () => {
        this.notify.showNotification('error', 'Sorry. creating company failed');
      }
    );
  }
}
