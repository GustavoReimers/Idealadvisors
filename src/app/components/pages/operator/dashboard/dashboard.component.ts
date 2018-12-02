/**
 * Created by ApolloYr on 5/10/2018.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
    selector: 'page-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class OperatorDashboardComponent {

    constructor(
        public router: Router
    ) {

    }

    gotoPortfolio() {
        this.router.navigate(['/operator/portfolio/client-list']);
    }
}
