/**
 * Created by Alex on 5/21/2018.
 */
import { Component, OnInit } from "@angular/core";
import { ClientApi } from "../../../../../services/clientapi.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'page-operator-waiting-orders',
    templateUrl: './waiting-orders.component.html',
    styleUrls: ['./waiting-orders.component.scss']
})
export class OperatorWaitingOrdersComponent implements OnInit {

    public waitingOrders = [];
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

                this.loadWaitingOrdersForClient();
            } else {
                console.log('all');

                this.loadAllWaitingOrders();
            }
        });
    }

    loadWaitingOrdersForClient() {
        this.loading = true;
        this.api.getOrdersForClient(this.clientId, { status: 'waiting' }).subscribe(res => {
            this.waitingOrders = res;
            this.loading = false;
            console.log(res);
        });
    }

    loadAllWaitingOrders() {
        this.loading = true;
        this.api.getOrdersList({ status: 'waiting' }).subscribe(res => {
            this.waitingOrders = res;
            this.loading = false;
            console.log(res);
        });
    }
}
