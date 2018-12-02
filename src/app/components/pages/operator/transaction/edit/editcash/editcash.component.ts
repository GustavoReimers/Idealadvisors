/**
 * Created by Alex on 5/24/2018.
 */
import { Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ClientApi } from "../../../../../../services/clientapi.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Validate } from "../../../../../../services/validate.service";
import { NotifyService } from "../../../../../../services/notify.service";

@Component({
    selector: 'page-editcash-transaction',
    templateUrl: './editcash.component.html',
    styleUrls: ['./editcash.component.scss']
})
export class OperatorEditCashTransactionComponent implements OnInit, OnDestroy {

    public sub: any;

    public clientId: any;
    public accounts = [];
    public currencies = [];
    public transactionId: any;

    public form: FormGroup;

    constructor(
        public api: ClientApi,
        public activateRoute: ActivatedRoute,
        public formBuilder: FormBuilder,
        public validate: Validate,
        public notify: NotifyService,
        public router: Router
    ) {

    }

    ngOnInit() {

        this.initForm();

        this.getCurrentList(); /// get Currency list

        this.sub = this.activateRoute.params.subscribe(params => {
            if (params.transactionId) {
                this.transactionId = params.transactionId;
                console.log(this.transactionId);

                this.getTransaction();
            }
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    initForm() {
        this.form = this.formBuilder.group({
            client: ['', Validators.required],  /// client id

            /////  detail info
            is_out: ['', Validators.required],
            txn_currency: ['', Validators.required],
            amount: ['', Validators.required],

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
            cancellation_message: [''],
            account: ['', Validators.required],
            custodian_order_id: [''],

            ///date/time
            transaction_at: ['', Validators.required],
            settlement_at: ['', Validators.required],

            /// description
            short_description: ['', Validators.required],
            description: [''],
        });

        this.form.controls['status'].setValue('PENDING');
    }

    getTransaction() {
        this.api.getTransaction(this.transactionId).subscribe(res => {
            console.log(res);

            for (let key in this.form.controls) {
                if (res[key]) {
                    this.form.controls[key].setValue(res[key]);
                }
            }

            if (res['settlement_at']) this.form.controls['settlement_at'].setValue(res['settlement_at'].substr(0, 10));
            if (res['transaction_at']) this.form.controls['transaction_at'].setValue(res['transaction_at'].substr(0, 10));

            this.form.controls['is_out'].setValue(res['is_out']);

            this.clientId = res.client;
            this.getAccounts();
        })
    }

    getAccounts() {
        this.api.getClient(this.clientId).subscribe(res => {
            this.accounts = res.accounts;

            console.log(this.accounts);
        });
    }

    getCurrentList() {
        this.api.getCurrencyList().subscribe(res => {
            console.log(res);
            this.currencies = res;
        });
    }

    addTransaction() {
        console.log(this.form.value);

        if (this.form.valid) {
            this.form.value.transaction_at += " 00:00:00.1";
            this.form.value.settlement_at += " 00:00:00.1";

            this.api.updateTransaction(this.transactionId, this.form.value).subscribe(res => {
                if (res.success) {
                    this.notify.showNotification('success', "successfully created");
                }
            });
        } else {
            this.validate.validateAllFormFields(this.form);
        }
    }
}
