/**
 * Created by Alex on 5/16/2018.
 */
import {Component, OnDestroy, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ClientApi} from "../../../../services/clientapi.service";
import {SettingsService} from "../../../../services/setting.service";

@Component({
    selector: 'page-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class ClientPortfolioComponent implements OnInit, OnDestroy {

    private sub: any;
    public tId = '';


    public placedOrders = [];
    public processOrders = [];
    public executedOrders = [];

    public portfolioDetail: any;

    public latestTransactions = [];

    constructor(
        public activateRoute: ActivatedRoute,
        public api: ClientApi,
        public setting: SettingsService
    ) {

    }

    ngOnInit() {
        this.sub = this.activateRoute.params.subscribe(params => {
            if (params.tId) {
                this.tId = this.getId(params.tId);
                console.log(this.tId);

                this.loadPortfolio();
            } else {
                this.loadPortfolio();
            }
        });

        this.loadData();
    }

    loadData() {
        this.api.getOrdersList({status: 'waiting'}).subscribe(res => {
            this.placedOrders = res;

            console.log(res);
        });

        this.api.getOrdersList({status: 'executed'}).subscribe(res => {
            this.executedOrders = res;

            console.log(res);
        });

        let id = this.setting.getUserSetting('profile').client.id;
        if (id) {
            this.api.getClientTransactions(id, {}).subscribe(res => {
                this.processOrders = res;

                console.log(res);
            });

            this.api.getClientTransactions(id, {status: 'realized'}).subscribe(res => {
                this.latestTransactions = res;

                console.log(res);
            });
        }
    }

    loadPortfolio() {
        let id = this.setting.getUserSetting('profile').client.id;
        this.api.getClientPortfolio(id, {T: this.tId}).subscribe(res => {
            this.portfolioDetail = res;

            console.log(res);
        });
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    getId(tid) {
        let tmp = '';
        switch (tid) {
            case 'T-2':
                tmp = '-2';
                break;
            case 'T-1':
                tmp = '-1';
                break;
            case 'T0':
                tmp = '';
                break;
            case 'T1':
                tmp = '+1';
                break;
            case 'T2':
                tmp = '+2';
                break;
        }

        return tmp;
    }
}
