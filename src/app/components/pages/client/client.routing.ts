import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from "../../layout/layout.component";
import {ClientDashboardComponent} from "./dashboard/dashboard.component";
import {AuthGuard} from "../../../services/authguard.service";
import {ClientOrderCreateComponent} from "./ordercreate/ordercreate.component";
import {ClientOrderBuyComponent} from "./orderbuy/orderbuy.component";
import {ClientOrderSellComponent} from "./ordersell/ordersell.component";
import {ClientOrderFxComponent} from "./orderfx/orderfx.component";
import {ClientPortfolioComponent} from "./portfolio/portfolio.component";

export const ClientRoute: Routes = [
    {
        path: 'client',
        component: LayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: ClientDashboardComponent,
            },
            {
                path: 'order/create',
                component: ClientOrderCreateComponent
            },
            {
                path: 'orderbuy/create',
                component: ClientOrderBuyComponent
            },
            {
                path: 'ordersell/create',
                component: ClientOrderSellComponent
            },
            {
                path: 'orderfx/create',
                component: ClientOrderFxComponent
            },
            {
                path: 'portfolio',
                component: ClientPortfolioComponent
            },
            {
                path: 'portfolio/:tId',
                component: ClientPortfolioComponent
            }
        ],
        resolve: {
            user: AuthGuard
        }
    }
];
