/**
 * Created by Alex on 5/24/2018.
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ClientApi } from 'services/clientapi.service';
import { Validate } from 'services/validate.service';
import { NotifyService } from 'services/notify.service';

@Component({
  selector: 'page-edit-order',
  templateUrl: './order.edit.component.html',
  styleUrls: ['./order.edit.component.scss']
})
export class OperatorEditOrderComponent {
  order: any = {
    details: {}
  };

  constructor(
    public api: ClientApi,
    public activateRoute: ActivatedRoute,
    public router: Router
  ) {
    this.activateRoute.params.subscribe(params => {
      this.api.getOrder(params.orderId).subscribe(res => {
        this.order = res;
      });
    });
  }
}
