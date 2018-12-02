/**
 * Created by Alex on 5/21/2018.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OperatorOrderRoute } from './order.routing';

import { CommonModule } from '@angular/common';
import { OperatorNewCashOrderComponent } from './newcash/newcash.component';
import { OperatorOrderLayoutComponent } from './order-layout/order-layout.component';
import { OperatorNewFxOrderComponent } from './newfx/newfx.component';
import { OperatorNewLoanOrderComponent } from './newloan/newloan.component';
import { OperatorNewDepositOrderComponent } from './newdeposit/newdeposit.component';
import { OperatorNewSecurityOrderComponent } from './newsecurity/newsecurity.component';
import { OperatorEditOrderComponent } from './edit/order.edit.component';
import { OperatorEditFxOrderComponent } from './edit/editfx/editfx.component';
import { OperatorEditSecurityOrderComponent } from './edit/editsecurity/editsecurity.component';
import { OperatorOrderInfoComponent } from './edit/orderinfo/orderinfo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(OperatorOrderRoute)
  ],
  entryComponents: [],
  declarations: [
    OperatorOrderLayoutComponent,
    OperatorNewCashOrderComponent,
    OperatorNewFxOrderComponent,
    OperatorNewLoanOrderComponent,
    OperatorNewDepositOrderComponent,
    OperatorNewSecurityOrderComponent,
    OperatorEditOrderComponent,
    OperatorEditSecurityOrderComponent,
    OperatorEditFxOrderComponent,
    OperatorEditSecurityOrderComponent,
    OperatorOrderInfoComponent
  ],
  exports: [
    OperatorOrderLayoutComponent,
    OperatorNewCashOrderComponent,
    OperatorNewFxOrderComponent,
    OperatorNewLoanOrderComponent,
    OperatorNewDepositOrderComponent,
    OperatorNewSecurityOrderComponent
  ],
  providers: []
})
export class OperatorOrderModule {}
