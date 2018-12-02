/**
 * Created by Alex on 5/21/2018.
 */
import { Component, OnInit } from "@angular/core";
import { ClientApi } from "../../../../../services/clientapi.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'page-operator-all-transactions',
    templateUrl: './all-transactions.component.html',
    styleUrls: ['./all-transactions.component.scss']
})
export class OperatorAllTransctionsComponent implements OnInit {

    public allTransactions = [];
    public sub: any;
    public clientId: any;
    public loading = false;

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
        this.api.getTransactionsForAllClients({ status: 'realized' }).subscribe(res => {
            this.allTransactions = res;
            this.loading = false;
            console.log(res);
        });
    }

    loadTransactionsForClient() {
        this.loading = true;
        this.api.getTransactionsForClient(this.clientId, { status: 'realized' }).subscribe(res => {
            this.allTransactions = res;
            this.loading = false;
            console.log(res);
        });
    }
}
