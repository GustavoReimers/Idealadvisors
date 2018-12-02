/**
 * Created by Alex on 5/24/2018.
 */
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NotifyService } from 'services/notify.service';
import {ProspectApi} from '../prospect.api';

@Component({
  selector: 'page-prospect-new',
  templateUrl: './prospect.new.page.html',
  styleUrls: ['./prospect.new.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProspectNewPage {
  information: any = {};
  forms = {};

  constructor(
    private api: ProspectApi,
    public notify: NotifyService,
    public router: Router
  ) {
    this.api.listInformation().subscribe(res => {
      this.information = res;
    });
  }

  addForm(form, name) {
    this.forms[name] = form;
  }

  saveProfile() {
    for (let key in this.forms) {
      for (let c in this.forms[key].controls) {
        this.forms[key].controls[c].markAsTouched();
      }
      if (!this.forms[key].valid) {
        console.log(key + ' is invalid');
        return;
      }
    }

    const values = {
      ...this.forms['main'].value,
      ...this.forms['mailing'].value,
      ...this.forms['residence'].value,
      ...this.forms['fax'].value,
      ...this.forms['emailing'].value,
      ...this.forms['assitant'].value,
      ...this.forms['hobby'].value,
      ...this.forms['wealth'].value
    };

    // integrate family values
    [
      'father',
      'mother',
      'spouse',
      'ex_spouse_1',
      'ex_spouse_2',
      'child_1',
      'child_2',
      'child_3',
      'child_4',
      'child_5'
    ].forEach(formName => {
      const formValue = this.forms[formName].value;
      Object.keys(formValue).forEach(key => {
        values[formName + '_' + key] = formValue[key];
      });
    });

    // integrate company info
    values.companies = [];
    const companyForm = this.forms['company'].value;
    for (let i = 0; i < 10; i += 1) {
      if (companyForm[`cprf_${i}-role`] && companyForm[`cprf_${i}-company`]) {
        values.companies.push({
          role_id: companyForm[`cprf_${i}-role`],
          company_id: companyForm[`cprf_${i}-company`]
        });
      }
    }

    // integrate ca
    values.internal_connections = [];
    const caForm = this.forms['ca'].value;
    for (let i = 0; i < 10; i += 1) {
      if (caForm[`icf_${i}-connection_type`] && caForm[`icf_${i}-employee`]) {
        values.internal_connections.push({
          internal_connection_type: caForm[`icf_${i}-connection_type`],
          operator_id: caForm[`icf_${i}-employee`]
        });
      }
    }

    // remove empty values
    for (let key in values) {
      if (!values[key]) {
        delete values[key];
      }
    }

    this.api.createPropspect(values).subscribe(res => {
      this.notify.showNotification(
        'success',
        'Prospect has been created successfully'
      );
      this.router.navigate(['/operator/prospect/search']);
    });
  }
}
