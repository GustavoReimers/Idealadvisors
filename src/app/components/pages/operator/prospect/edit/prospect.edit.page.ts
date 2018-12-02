/**
 * Created by Alex on 5/24/2018.
 */
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { NotifyService } from 'services/notify.service';
import {ProspectApi} from '../prospect.api';

@Component({
  selector: 'page-prospect-edit',
  templateUrl: './prospect.edit.page.html',
  styleUrls: ['./prospect.edit.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProspectEditPage {
  information: any = {};
  forms = {};
  prospect: any = {};

  constructor(
    private api: ProspectApi,
    public notify: NotifyService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.api.listInformation().subscribe(res => {
      this.information = res;
    });

    this.route.params.subscribe(params => {
      this.api.getProspect(params.id).subscribe(res => {
        this.prospect = res;
        // initialize values
        for (let key in this.forms) {
          for (let c in this.forms[key].controls) {
            if (res[c]) this.forms[key].controls[c].setValue(res[c]);
          }
        }

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
          for (let c in this.forms[formName].controls) {
            if (res[formName + '_' + c])
              this.forms[formName].controls[c].setValue(
                res[formName + '_' + c]
              );
          }
        });

        // set values individually
        if (res['prospect_category']) {
          this.forms['main'].controls['prospect_category'].setValue(
            res['prospect_category'].id
          );
        }
        if (res['relationship_status']) {
          this.forms['main'].controls['relationship_status'].setValue(
            res['relationship_status'].id
          );
        }
        if (res['companies']) {
          res['companies'].map((item, i) => {
            this.forms['company'].controls[`cprf_${i}-role`].setValue(
              item.role_id
            );
            this.forms['company'].controls[`cprf_${i}-company`].setValue(
              item.company_id
            );
          });
        }
        if (res['internal_connections']) {
          res['internal_connections'].map((item, i) => {
            this.forms['ca'].controls[`icf_${i}-connection_type`].setValue(
              item.type
            );
            this.forms['ca'].controls[`icf_${i}-employee`].setValue(
              item.operator
            );
          });
        }
      });
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

    this.api.updatePropspect(this.prospect.id, values).subscribe(res => {
      this.notify.showNotification(
        'success',
        'Prospect has been updated successfully'
      );
      this.router.navigate(['/operator/prospect/search']);
    });
  }
}
