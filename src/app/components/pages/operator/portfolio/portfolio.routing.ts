import { Routes, RouterModule } from '@angular/router';
import { OperatorPortfolioLayoutComponent } from './portfolio-layout/portfolio-layout.component';
import { OperatorClientListComponent } from './client-list/client-list.component';
import { AuthGuard } from '../../../../services/authguard.service';
import { OperatorWaitingOrdersComponent } from './waiting-orders/waiting-orders.component';
import { OperatorPendingTransactionsComponent } from './pending-transactions/pending-transactions.component';
import { OperatorAllTransctionsComponent } from './all-transactions/all-transactions.component';
import { PortfolioShowPage } from './show/portfolio.show.page';

export const OperatorPortfolioRoute: Routes = [
  {
    path: '',
    component: OperatorPortfolioLayoutComponent,
    children: [
      {
        path: 'client-list',
        component: OperatorClientListComponent
      },
      {
        path: 'waiting-orders',
        component: OperatorWaitingOrdersComponent
      },
      {
        path: 'waiting-orders/:clientId',
        component: OperatorWaitingOrdersComponent
      },
      {
        path: 'pending-transactions',
        component: OperatorPendingTransactionsComponent
      },
      {
        path: 'pending-transactions/:clientId',
        component: OperatorPendingTransactionsComponent
      },
      {
        path: 'all-transactions',
        component: OperatorAllTransctionsComponent
      },
      {
        path: 'all-transactions/:clientId',
        component: OperatorAllTransctionsComponent
      },
      {
        path: 'show/:type/:clientId',
        component: PortfolioShowPage
      }
    ]
  }
];
