/**
 * Created by Alex on 5/24/2018.
 */
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ClientApi } from 'services/clientapi.service';
import { Validate } from 'services/validate.service';
import { NotifyService } from 'services/notify.service';

@Component({
  selector: 'page-editsecurity-order',
  templateUrl: './editsecurity.component.html',
  styleUrls: ['./editsecurity.component.scss']
})
export class OperatorEditSecurityOrderComponent implements OnInit {
  @Input() order: any = {};

  public sub: any;

  public clientId: any;
  public accounts = [];
  public currencies = [];

  public form: FormGroup;

  constructor(
    public api: ClientApi,
    public activateRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    public validate: Validate,
    public notify: NotifyService,
    public router: Router
  ) {
    this.form = this.formBuilder.group({
      /////  detail info
      is_sell: ['', Validators.required],
      security_identifier_type: [''],
      security_identifier: ['', Validators.required],
      security_description: ['', Validators.required],
      client_price: ['', Validators.required],
      operator_price: ['', Validators.required],
      nominal_amount: ['', Validators.required],
      accrued_interest_amount: ['', Validators.required],
      gross_amount: ['', Validators.required],
      txn_currency: ['', Validators.required],
      net_traded_amount: ['', Validators.required],

      fix_commission_currency: ['', Validators.required],
      fix_commission_amount: ['', Validators.required],
      ticket_fee_currency: ['', Validators.required],
      ticket_fee_amount: ['', Validators.required],
      third_party_fee_currency: ['', Validators.required],
      third_party_fee_amount: ['', Validators.required],
      misc_fee_currency: ['', Validators.required],
      misc_fee_amount: ['', Validators.required],

      ///// general info
      txn_type: ['', Validators.required],
      status: ['', Validators.required],
      account: ['', Validators.required],
      custodian_order_id: [''],

      ///date/time
      transaction_at: ['', Validators.required],
      settlement_at: ['', Validators.required],

      /// description
      short_description: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit() {
    this.getCurrencyList(); /// get Currency list
    this.initForm();
  }

  ngOnDestroy() {}

  initForm() {
    this.form.controls['is_sell'].setValue(
      this.order.details.order_type.indexOf('SELL') > 0 ? '1' : '0'
    );

    this.form.controls['security_identifier'].setValue(this.order.details.isin);
    this.form.controls['security_description'].setValue(
      this.order.details.security_details
    );

    this.form.controls['client_price'].setValue(this.order.details.price);
    this.form.controls['operator_price'].setValue(this.order.details.price);
    this.form.controls['nominal_amount'].setValue(
      this.order.details.nominal_amount
    );
    this.form.controls['gross_amount'].setValue(0);
    this.form.controls['net_traded_amount'].setValue(0);
    this.form.controls['txn_currency'].setValue(1);

    this.form.controls['fix_commission_currency'].setValue(1);
    this.form.controls['fix_commission_amount'].setValue(0);

    this.form.controls['ticket_fee_currency'].setValue(1);
    this.form.controls['ticket_fee_amount'].setValue(0);

    this.form.controls['third_party_fee_currency'].setValue(1);
    this.form.controls['third_party_fee_amount'].setValue(0);

    this.form.controls['misc_fee_currency'].setValue(1);
    this.form.controls['misc_fee_amount'].setValue(0);

    this.form.controls['account'].setValue(this.order.client.id);

    this.form.controls['status'].setValue('PENDING');
    this.form.controls['txn_type'].setValue('SECURITY');

    this.accounts = this.order.client.accounts;
  }

  getCurrencyList() {
    this.api.getCurrencyList().subscribe(res => {
      this.currencies = res;
    });
  }

  addTransaction() {
    if (this.form.valid) {
      this.form.value.transaction_at += ' 00:00:00.1';
      this.form.value.settlement_at += ' 00:00:00.1';

      this.api
        .executeOrder(this.order.id, {
          ...this.form.value,
          received_at: this.order.received_at,
          client: this.order.client.id
        })
        .subscribe(res => {
          if (res.success) {
            this.notify.showNotification('success', 'successfully created');

            this.router.navigate(['/operator/portfolio/pending-transactions']);
          }
        });
    } else {
      this.validate.validateAllFormFields(this.form);
    }
  }
}
