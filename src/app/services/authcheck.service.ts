/**
 * Created by ApolloYr on 11/17/2017.
 */
import {Injectable} from '@angular/core';
import {Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';

import {Api} from './api.service';
import {SettingsService} from "./setting.service";
import {ClientApi} from "./clientapi.service";

@Injectable()
export class AuthCheck implements Resolve<any> {

    constructor(private router: Router,
                public settings: SettingsService,
                public api: ClientApi
    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.settings.getAppSetting('is_loggedin')) {
                resolve(true);
            } else if (this.settings.getStorage('token')) {
                this.api.getUser().subscribe(res => {
                    this.settings.setAppSetting('is_loggedin', true);
                    this.settings.user = res;

                    resolve(true);
                }, error => {
                    this.settings.setStorage('token', false);
                    resolve(true);
                });
            } else {
                resolve(true);
            }
        });
    }
}

