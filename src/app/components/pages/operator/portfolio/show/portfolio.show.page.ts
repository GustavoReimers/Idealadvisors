/**
 * Created by Alex on 5/21/2018.
 */
import { Component, OnInit } from '@angular/core';
import { ClientApi } from '../../../../../services/clientapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-portfolio-show',
  templateUrl: './portfolio.show.page.html',
  styleUrls: ['./portfolio.show.page.scss']
})
export class PortfolioShowPage implements OnInit {
  public search: string = '';
  public clientId: any = '';
  public portfolio: any = {
    holdings: []
  };
  public filteredHoldings = [];

  constructor(public api: ClientApi, public activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activateRoute.params.subscribe(params => {
      this.clientId = params.clientId;
      this.activateRoute.queryParams.subscribe(query => {
        this.api
          .getClientPortfolio(this.clientId, query.T ? { T: query.T || 0 } : {})
          .subscribe(res => {
            this.portfolio = res;
            this.filteredHoldings = res.holdings;
            this.search = '';
          });
      });
    });
  }

  filterHoldings($e) {
    const query = $e.target.value.toLowerCase();
    this.filteredHoldings = this.portfolio.holdings.filter(item => {
      for (let i in item) {
        if (
          item[i] &&
          item[i]
            .toString()
            .toLowerCase()
            .indexOf(query) > -1
        ) {
          return true;
        }
      }
      return false;
    });
  }

  printPage($event) {
    $event.preventDefault();
    window.print();
  }
}
