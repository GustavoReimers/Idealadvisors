import {Routes} from '@angular/router';
import {InvestorsLayoutComponent} from './investors-layout/investors-layout.component';
import {WealthComponent} from './wealth/wealth.component';
import {FinanceComponent} from './finance/finance.component';
import {CapitalComponent} from './capital/capital.component';


export const InvestorsRoute: Routes = [
  {
    path: '', component: InvestorsLayoutComponent,
    children: [
      {
        path: 'wealth',
        component: WealthComponent
      },
      {
        path: 'finance',
        component: FinanceComponent
      },
      {
        path: 'capital',
        component: CapitalComponent
      }
    ]
  }
];
