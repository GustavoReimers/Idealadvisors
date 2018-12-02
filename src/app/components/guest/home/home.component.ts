/**
 * Created by ApolloYr on 5/10/2018.
 */
import {Component, OnInit} from "@angular/core";
import {SettingsService} from "../../../services/setting.service";
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ClientApi} from "../../../services/clientapi.service";
import {Validate} from "../../../services/validate.service";
import {NotifyService} from "../../../services/notify.service";

declare var $: any;
@Component({
    selector: 'page-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public invalid_credential = false;

    public form: FormGroup;

    constructor(
        public setting: SettingsService,
        public router: Router,
        public formBuilder: FormBuilder,
        public api: ClientApi,
        public validate: Validate,
        public notify: NotifyService
    ) {

    }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', [Validators.required]],
            password: ['', Validators.required],
        });

        $(document).ready(function(){

            var activePanel = $("#accordion div.panel:first");
            $(activePanel).addClass('active');

            $("#accordion").delegate('.panel', 'click', function(e){
                if(!$(this).is('.active')) {
                    $(activePanel).animate({width: "inherit"}, 300);
                    $(this).animate({width: "inherit"}, 300);
                    $('#accordion .panel').removeClass('active');
                    $(this).addClass('active');
                    activePanel = this;
                }
            });
        });
    }

    login() {
        if (this.form.valid) {
            this.api.login(this.form.value).subscribe(res => {
                if (res.token) {
                    this.setting.setStorage('token', res.token);
                    this.getUser();
                }
            }, error => {
                this.notify.showNotification('warn', 'Invalid credential');
            });
        }

        // this.setting.setAppSetting('is_loggedIn', true);
        // this.router.navigate(['/app/dashboard']);
    }

    getUser() {
        this.api.getUser().subscribe(res => {
            this.setting.user = res;

            this.setting.setAppSetting('is_loggedin', true);

            switch (this.setting.getUserSetting('profile').role) {
                case 30:
                    this.router.navigate(['/operator/dashboard']);
                    break;
                case 40:
                    this.router.navigate(['/client/dashboard']);
                    break;
            }
        });
    }
}
