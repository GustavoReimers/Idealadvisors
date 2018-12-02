/**
 * Created by Alex on 5/15/2018.
 */
import {Component, OnInit} from "@angular/core";

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientApi} from "../../../../services/clientapi.service";
import {SettingsService} from "../../../../services/setting.service";
import {NotifyService} from "../../../../services/notify.service";
import {Validate} from "../../../../services/validate.service";


@Component({
    selector: 'page-changepassword',
    templateUrl: './changepassword.component.html',
    styleUrls: ['./changepassword.component.scss']
})
export class ChangePasswordComponent implements OnInit {

    public form: FormGroup;

    constructor(
        public api: ClientApi,
        public setting: SettingsService,
        public notify: NotifyService,
        public formBuilder: FormBuilder,
        public validate: Validate
    ) {

    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            old_password: ['', [Validators.required]],
            new_password: ['', Validators.required],
        });
    }

    submit() {
        if (this.form.valid) {
            this.api.changePassword(this.form.value).subscribe(res => {
                this.notify.showNotification('success', "password changed");
            }, err => {
                this.notify.showNotification('warn', 'failed');
            });
        }
    }
}
