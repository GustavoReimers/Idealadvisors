/**
 * Created by Alex on 5/24/2018.
 */
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'component-order-info',
  templateUrl: './orderinfo.component.html',
  styleUrls: []
})
export class OperatorOrderInfoComponent {
  @Input() order: any = {};
  constructor() {}
}
