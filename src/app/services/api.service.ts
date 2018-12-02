/**
 * Created by ApolloYr on 1/28/2018.
 */

import {Injectable} from '@angular/core';
import 'rxjs/add/operator/catch';
import {SettingsService} from './setting.service';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class Api {
    constructor(private http: HttpClient,
                private router: Router,
                public settings: SettingsService,
    ) {

    }

    createAuthorizationHeader() {
        return new HttpHeaders().set('Authorization', 'JWT ' + this.settings.getStorage('token'));
    }

    get(url, data?) {
        const headers = this.createAuthorizationHeader();
        headers.append('Access-Control-Allow-Origin', '*');

        return this.http.get(this.settings.apiUrl + url, {
            headers: headers,
            params: data
        }).map(res => res).catch((error: any) => this.handleError(this, error));


        // let headers = this.createAuthorizationHeader();
        //
        // return this.http.request('get', this.settings.apiUrl + url, {
        //     body: data,
        //     headers: headers
        // }).map(res => res).catch((error: any) => this.handleError(this, error));
    }

    post(url, data) {
        const headers = this.createAuthorizationHeader();
        return this.http.post(this.settings.apiUrl + url, data, {
            headers
        }).map(res => res).catch((error: any) => this.handleError(this, error));
    }

    put(url, data) {
        const headers = this.createAuthorizationHeader();

        return this.http.put(this.settings.apiUrl + url, data, {
            headers: headers
        }).map(res => res).catch((error: any) => this.handleError(this, error));
    }

    handleError(_parent, error: any) {
        if (error.status === 401 && error.url && !error.url.endsWith('/login')) {
            console.log('unauthorized');

            _parent.router.navigate(['/']);
        } else if (error.status === 500) {

        }
        // In a real world app, you might use a remote logging infrastructure

        return Observable.throw(error);
    }
}
