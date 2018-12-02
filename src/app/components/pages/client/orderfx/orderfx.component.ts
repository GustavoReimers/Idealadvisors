/**
 * Created by Alex on 5/16/2018.
 */
import {Component, OnInit} from "@angular/core";
import {ClientApi} from "../../../../services/clientapi.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Validate} from "../../../../services/validate.service";
import {NotifyService} from "../../../../services/notify.service";
import {Router} from "@angular/router";

@Component({
    selector: 'page-orderfx',
    templateUrl: './orderfx.component.html',
    styleUrls: ['./orderfx.component.scss']
})
export class ClientOrderFxComponent implements OnInit {

    public currencies = [];
    public form: FormGroup;

    public rateLabel = '';

    constructor(
        public api: ClientApi,
        public formBuilder: FormBuilder,
        public validate: Validate,
        public notify: NotifyService,
        public router: Router
    ) {

    }

    ngOnInit() {
        this.api.getCurrencyList().subscribe(res => {
            console.log(res);
            this.currencies = res;
        });

        this.form = this.formBuilder.group({
            order_type: ['', Validators.required],
            buy_amount: ['', Validators.required],
            sell_amount: ['', Validators.required],
            rate: ['', Validators.required],
            sell_currency: ['', [Validators.required]],
            buy_currency: ['', Validators.required],
            additional_note: ['', Validators.required],
        });

        this.form.controls['order_type'].setValue('FX');
        // this.form.controls['sell_currency'].setValue('');
        // this.form.controls['buy_currency'].setValue('');
    }

    placeOrder() {
        if (this.form.valid) {
            if (this.form.value.buy_currency === this.form.value.sell_currency) {
                alert('you must choose different currency');
                return;
            } else {
                this.api.createFXOrder(this.form.value).subscribe(res => {
                    if (res.success) {
                        this.notify.showNotification('success', 'created order successfully');

                        this.router.navigate(['/client/dashboard']);
                    }
                });
            }
        } else {
            this.validate.validateAllFormFields(this.form);
        }
    }

    changeCurrency() {
        let buy_currency = this.form.value.buy_currency;
        let sell_currency = this.form.value.sell_currency;

        if (buy_currency && sell_currency) {

            let buy_currency_code = '';
            let sell_currency_code = '';

            for (let i = 0; i < this.currencies.length; i++) {
                if (this.currencies[i]['id'] === Number(buy_currency)) buy_currency_code = this.currencies[i]['code'];
                if (this.currencies[i]['id'] === Number(sell_currency)) sell_currency_code = this.currencies[i]['code'];
            }

            if (buy_currency_code !== '' && sell_currency_code !== '' && buy_currency_code !== sell_currency_code) {
                this.api.getFxPricing({limit: 10, q: buy_currency_code + sell_currency_code}).subscribe(res => {
                    this.rateLabel = res.currency_pair + ' ' + this.precisionRound(res.price, 4);
                });
            }
        }
    }

    changeBuyAmount() {
        let buy_amount = this.form.value.buy_amount;
        let rate = this.form.value.rate;
        let sell_amount = this.form.value.sell_amount;

        if ((typeof rate !== 'undefined' && rate !== 0 && rate !== null) && (typeof buy_amount !== 'undefined' && buy_amount !== 0 && buy_amount !== null)) {
            this.form.controls['sell_amount'].setValue(this.precisionRound(buy_amount * rate, 2));
        } else {
            this.form.controls['sell_amount'].setValue(0.00);
        }
    }

    changeRate() {
        let buy_amount = this.form.value.buy_amount;
        let rate = this.form.value.rate;
        let sell_amount = this.form.value.sell_amount;

        if ((typeof rate !== 'undefined' && rate !== 0 && rate !== null) && (typeof buy_amount !== 'undefined' && buy_amount !== 0 && buy_amount !== null)) {
            this.form.controls['sell_amount'].setValue(this.precisionRound(buy_amount * rate, 2));
        } else {
            this.form.controls['sell_amount'].setValue(0.00);
        }
    }

    changeSellAmount() {
        let buy_amount = this.form.value.buy_amount;
        let rate = this.form.value.rate;
        let sell_amount = this.form.value.sell_amount;

        if ((typeof rate !== 'undefined' && rate !== 0 && rate !== null) && (typeof sell_amount !== 'undefined' && sell_amount !== 0 && sell_amount !== null)) {
            this.form.controls['buy_amount'].setValue(this.precisionRound(sell_amount/rate, 2));
        } else {
            this.form.controls['buy_amount'].setValue(0.00);
        }
    }

    precisionRound(number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    }
}
