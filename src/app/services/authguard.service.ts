/**
 * Created by ApolloYr on 1/28/2018.
 */
import {Injectable} from '@angular/core';
import {Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {SettingsService} from './setting.service';
import {ClientApi} from "./clientapi.service";

@Injectable()
export class AuthGuard implements Resolve<any> {

    constructor(private router: Router,
                private settings: SettingsService,
                public api: ClientApi

    ) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.settings.getAppSetting('is_loggedin')) {
                console.log('isLoggedIn');
                resolve(true);
            } else if (this.settings.getStorage('token')) {
                this.api.getUser().subscribe(res => {
                    this.settings.user = res;
                    this.settings.setAppSetting('is_loggedin', true);

                    resolve(true);
                }, error => {
                    this.settings.setStorage('token', false);
                    reject('not logged in');
                    this.router.navigate(['/']);
                });
            } else {
                reject('not logged in');
                this.settings.setStorage('token', false);
                this.settings.setAppSetting('is_loggedin', false);
                this.router.navigate(['/']);
            }
        });
    }
}
