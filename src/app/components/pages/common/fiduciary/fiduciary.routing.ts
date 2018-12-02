import {Routes} from '@angular/router';
import {FiduciaryLayoutComponent} from './fiduciary/fiduciary-layout.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ManagementComponent} from './management/management.component';
import {PriceListComponent} from './price-list/price-list.component';
import {ComparisonComponent} from './comparison/comparison.component';
import {FormsComponent} from './forms/forms.component';
import {EFiduciaryComponent} from './e-fiduciary/e-fiduciary.component';
import {EBillingComponent} from './e-billing/e-billing.component';



export const FiduciaryRoute: Routes = [
  {
    path: '', component: FiduciaryLayoutComponent,
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
        path: 'price-list',
        component: PriceListComponent
      },
      {
        path: 'comparison',
        component: ComparisonComponent
      },
      {
        path: 'forms',
        component: FormsComponent
      },
      {
        path: 'e-fiduciary',
        component: EFiduciaryComponent
      },
      {
        path: 'e-billing',
        component: EBillingComponent
      }
    ]
  }
];
