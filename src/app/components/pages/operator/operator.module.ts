/**
 * Created by ApolloYr on 5/10/2018.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { OperatorRoute } from './operator.routing';
import { OperatorDashboardComponent } from './dashboard/dashboard.component';
import { LayoutModule } from '../../layout/layout.module';
import { LayoutComponent } from '../../layout/layout.component';
import { OperatorPortfolioModule } from './portfolio/portfolio.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(OperatorRoute),

    LayoutModule
  ],
  entryComponents: [],
  declarations: [OperatorDashboardComponent],
  exports: [OperatorDashboardComponent],
  providers: []
})
export class OperatorModule {}
