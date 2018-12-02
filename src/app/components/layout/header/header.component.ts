/**
 * Created by ApolloYr on 4/26/2018.
 */
import {Component} from "@angular/core";
import {SettingsService} from "../../../services/setting.service";
import {Router} from "@angular/router";
@Component({
    selector: 'page-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(
        public setting: SettingsService,
        public router: Router
    ) {

    }

    logout() {
        this.setting.setAppSetting('is_loggedin', false);
        this.setting.setStorage('token', false);
        this.router.navigate(['/']);
    }
}
