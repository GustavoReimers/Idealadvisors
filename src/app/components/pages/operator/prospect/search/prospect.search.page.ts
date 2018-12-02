/**
 * Created by Alex on 5/24/2018.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NotifyService } from 'services/notify.service';
import {ProspectApi} from '../prospect.api';

@Component({
  selector: 'page-prospect-search',
  templateUrl: './prospect.search.page.html',
  styleUrls: []
})
export class ProspectSearchPage {
  query: string = '';
  prospects = [];

  constructor(
    private api: ProspectApi,
    public notify: NotifyService,
    public route: ActivatedRoute,
    public router: Router
  ) {
    this.route.queryParams.subscribe(params => {
      this.query = params['query'] || '';
      if (this.query && this.query.length < 3) {
        this.notify.showNotification(
          'error',
          'Enter a minimum of 3 characters for search terms.'
        );
      } else if (this.query) {
        this.api.searchProspect(this.query).subscribe(res => {
          this.prospects = res;
        });
      } else {
        this.prospects = [];
      }
    });
  }

  search() {
    if (!this.query || this.query.length < 3) {
      this.notify.showNotification(
        'error',
        'Enter a minimum of 3 characters for search terms.'
      );
      return;
    }
    this.router.navigate([`/operator/prospect/search`], {
      queryParams: { query: this.query }
    });
  }
}
