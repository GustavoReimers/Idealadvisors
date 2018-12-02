import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../../../services/authguard.service';
import { OperatorOrderLayoutComponent } from './order-layout/order-layout.component';
import { OperatorNewCashOrderComponent } from './newcash/newcash.component';
import { OperatorNewFxOrderComponent } from './newfx/newfx.component';
import { OperatorNewLoanOrderComponent } from './newloan/newloan.component';
import { OperatorNewDepositOrderComponent } from './newdeposit/newdeposit.component';
import { OperatorNewSecurityOrderComponent } from './newsecurity/newsecurity.component';
import { OperatorEditOrderComponent } from './edit/order.edit.component';

export const OperatorOrderRoute: Routes = [
  {
    path: '',
    component: OperatorOrderLayoutComponent,
    children: [
      {
        path: 'new/cash/:clientId',
        component: OperatorNewCashOrderComponent
      },
      {
        path: 'new/fx/:clientId',
        component: OperatorNewFxOrderComponent
      },
      {
        path: 'execute/:orderId',
        component: OperatorEditOrderComponent
      },
      {
        path: 'new/loan/:clientId',
        component: OperatorNewLoanOrderComponent
      },
      {
        path: 'new/deposit/:clientId',
        component: OperatorNewDepositOrderComponent
      },
      {
        path: 'new/security/:clientId',
        component: OperatorNewSecurityOrderComponent
      }
    ]
  }
];
