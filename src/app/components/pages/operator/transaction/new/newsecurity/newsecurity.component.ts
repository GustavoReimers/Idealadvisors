/**
 * Created by Alex on 5/24/2018.
 */
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientApi} from "../../../../../../services/clientapi.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Validate} from "../../../../../../services/validate.service";
import {NotifyService} from "../../../../../../services/notify.service";

@Component({
    selector: 'page-newsecurity-transaction',
    templateUrl: './newsecurity.component.html',
    styleUrls: ['./newsecurity.component.scss']
})
export class OperatorNewSecurityTransactionComponent implements OnInit {

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

    }

    ngOnInit() {

        this.initForm();

        this.getCurrentList(); /// get Currency list

        this.sub = this.activateRoute.params.subscribe(params => {
            if (params.clientId) {
                this.clientId = params.clientId;
                console.log(this.clientId);

                this.form.controls['client'].setValue(this.clientId);
                this.getAccounts();
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
            is_sell: ['', Validators.required],
            txn_currency: ['', Validators.required],
            security_identifier_type: [''],
            security_identifier: ['', Validators.required],
            security_description: ['', Validators.required],
            client_price: ['', Validators.required],
            operator_price: ['', Validators.required],
            nominal_amount: ['', Validators.required],
            accrued_interest_amount: ['', Validators.required],
            gross_amount: ['', Validators.required],
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
            description: [''],
        });

        this.form.controls['is_sell'].setValue('1');
        this.form.controls['status'].setValue('PENDING');
        this.form.controls['txn_type'].setValue('SECURITY');
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

            this.api.createTransaction(this.form.value).subscribe(res => {
                if (res.success) {
                    this.notify.showNotification('success', "successfully created");

                    this.router.navigate(['/operator/portfolio/pending-transactions']);
                }
            });
        } else {
            this.validate.validateAllFormFields(this.form);
        }
    }
}