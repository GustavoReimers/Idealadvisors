/**
 * Created by Alex on 5/21/2018.
 */
import { Component, OnInit } from "@angular/core";
import { ClientApi } from "../../../../../services/clientapi.service";

@Component({
    selector: 'page-client-list',
    templateUrl: './client-list.component.html',
    styleUrls: ['./client-list.component.scss']
})
export class OperatorClientListComponent implements OnInit {

    public clientList = [];
    public loading = false;

    constructor(
        public api: ClientApi
    ) {

    }

    ngOnInit() {
        this.loading = true;
        this.api.getClientList().subscribe(res => {
            console.log(res);
            this.loading = false;
            this.clientList = res;
        });
    }
}
