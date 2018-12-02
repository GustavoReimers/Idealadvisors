/**
 * Created by ApolloYr on 1/28/2018.
 */
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class SettingsService {

    public serverUrl = environment.serverUrl;
    public apiUrl = environment.apiUrl;

    public user: any;
    public app: any;
    public sys: any;


    private storagePrefix = 'idealadvisor_';

    constructor() {
        // User settings
        this.user = {};

        // App Settings
        this.app = {
            name: 'idealadvisor'
        };
    }

    init() {

    }

    getUserSetting(name) {
        return name ? this.user[name] : this.user;
    }

    setUserSetting(name, value) {
        this.user[name] = value;
    }

    getAppSetting(name) {
        return name ? this.app[name] : this.app;
    }

    setAppSetting(name, value) {
        this.app[name] = value;
    }

    getSysSetting(name) {
        return name ? this.sys[name] : this.sys;
    }

    setSysSetting(name, value) {
        this.sys[name] = value;
    }

    clearUserSetting() {
        this.setStorage('user', false);
    }

    getStorage (key, defaultVal?) {
        return window.localStorage[this.storagePrefix + key] ? JSON.parse(window.localStorage[this.storagePrefix + key]) : defaultVal || false;
    }

    setStorage (key, val) {
        window.localStorage.setItem(this.storagePrefix + key, JSON.stringify(val));
    }
}
