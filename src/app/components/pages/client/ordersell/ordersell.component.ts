/**
 * Created by Alex on 5/16/2018.
 */
import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientApi} from "../../../../services/clientapi.service";
import {Validate} from "../../../../services/validate.service";
import {NotifyService} from "../../../../services/notify.service";
import {Router} from "@angular/router";

@Component({
    selector: 'page-ordersell',
    templateUrl: './ordersell.component.html',
    styleUrls: ['./ordersell.component.scss']
})
export class ClientOrderSellComponent implements OnInit {

    public form: FormGroup;

    constructor(
        public api: ClientApi,
        public formBuilder: FormBuilder,
        public validate: Validate,
        public notify: NotifyService,
        public router: Router
    ) {

    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            order_type: ['', Validators.required],
            price_limit: ['', Validators.required],
            amount: ['', Validators.required],
            isin: ['', [Validators.required]],
            additional_note: ['', Validators.required],
            security_order_type: ['', Validators.required],
        });

        this.form.controls['order_type'].setValue('SECURITY');
        this.form.controls['security_order_type'].setValue('SELL');
    }

    placeOrder() {
        if (this.form.valid) {
            this.api.createSecurityOrder(this.form.value).subscribe(res => {
                console.log(res);
                if (res.success) {
                    this.notify.showNotification('success', 'created order successfully');

                    this.router.navigate(['/client/dashboard']);
                }
            });
        } else {
            this.validate.validateAllFormFields(this.form);
        }
    }
}
