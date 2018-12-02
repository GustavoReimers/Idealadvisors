import {Routes} from '@angular/router';
import {CapitalLayoutComponent} from './capital-layout/capital-layout.component';
import {FundComponent} from './fund/fund.component';
import {LicensingComponent} from './licensing/licensing.component';
import {EamRelationsComponent} from './eam-relations/eam-relations.component';


export const CapitalRoute: Routes = [
  {
    path: '', component: CapitalLayoutComponent,
    children: [
      {
        path: 'fund-services',
        component: FundComponent
      },
      {
        path: 'licensing',
        component: LicensingComponent
      },
      {
        path: 'eam-relations',
        component: EamRelationsComponent
      }
    ]
  }
];
