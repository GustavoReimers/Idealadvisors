import {Routes, RouterModule} from '@angular/router';
import {WealthLayoutComponent} from './wealth-layout/wealth-layout.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {InfrastructureComponent} from './infrastructure/infrastructure.component';


export const WealthRoute: Routes = [
  {
    path: '', component: WealthLayoutComponent,
    children: [
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'infrastructure',
        component: InfrastructureComponent
      }
    ]
  }
];
