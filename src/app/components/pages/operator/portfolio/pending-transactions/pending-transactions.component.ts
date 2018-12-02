/**
 * Created by Alex on 5/21/2018.
 */
import { Component, OnInit } from "@angular/core";
import { ClientApi } from "../../../../../services/clientapi.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'page-operator-pending-transactions',
    templateUrl: './pending-transactions.component.html',
    styleUrls: ['./pending-transactions.component.scss']
})
export class OperatorPendingTransactionsComponent implements OnInit {

    public pendingTransactions = [];
    public loading = false;

    public sub: any;
    public clientId: any;

    constructor(
        public api: ClientApi,
        public activateRoute: ActivatedRoute
    ) {

    }

    ngOnInit() {

        this.sub = this.activateRoute.params.subscribe(params => {
            if (params.clientId) {
                this.clientId = params.clientId;
                console.log(this.clientId);

                this.loadTransactionsForClient();
            } else {
                console.log('all');

                this.loadAllTransactions();
            }
        });
    }

    loadAllTransactions() {
        this.loading = true;
        this.api.getTransactionsForAllClients({ status: 'pending' }).subscribe(res => {
            this.pendingTransactions = res;
            this.loading = false;
            console.log(res);
        });
    }

    loadTransactionsForClient() {
        this.loading = true;
        this.api.getTransactionsForClient(this.clientId, { status: 'pending' }).subscribe(res => {
            this.pendingTransactions = res;
            this.loading = false;
            console.log(res);
        });
    }

    realize() {

    }
}
