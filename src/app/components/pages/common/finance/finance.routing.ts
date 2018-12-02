import {Routes} from '@angular/router';
import {FinanceLayoutComponent} from './finance-layout/finance-layout.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ManagementComponent} from './management/management.component';
import {ServicesComponent} from './services/services.component';
import {MAComponent} from './m-a/m-a.component';
import {LoanFacilitiesComponent} from './loan-facilities/loan-facilities.component';
import {TaxIncentivesComponent} from './tax-incentives/tax-incentives.component';




export const FinanceRoute: Routes = [
  {
    path: '', component: FinanceLayoutComponent,
    children: [
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'management',
        component: ManagementComponent
      },
      {
        path: 'services',
        component: ServicesComponent
      },
      {
        path: 'm-a',
        component: MAComponent
      },
      {
        path: 'loan-facilities',
        component: LoanFacilitiesComponent
      },
      {
        path: 'tax-incentives',
        component: TaxIncentivesComponent
      },

    ]
  }
];
