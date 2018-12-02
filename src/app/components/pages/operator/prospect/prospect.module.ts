/**
 * Created by Alex on 5/21/2018.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { CollapseModule } from 'ngx-bootstrap/collapse';

import { ProspectHeaderBlock } from './header/prospect.header.block';
import { ProspectSearchPage } from './search/prospect.search.page';
import { ProspectNewPage } from './new/prospect.new.page';
import { ProspectEditPage } from './edit/prospect.edit.page';
import { ProspectNNMSPage } from './nnms/prospect.nnms.page';
import { ProspectCompanyEditPage } from './company/edit/prospect.company.edit.page';
import { ProspectApi } from './prospect.api';

// main
import { ProspectMainForm } from './forms/main/prospect.main.form';
// contact
import { ProspectMailingForm } from './forms/contact/mailing/prospect.mailing.form';
import { ProspectResidenceForm } from './forms/contact/residence/prospect.residence.form';
import { ProspectFaxForm } from './forms/contact/fax/prospect.fax.form';
import { ProspectEMailingForm } from './forms/contact/emailing/prospect.emailing.form';
import { ProspectAssistantForm } from './forms/contact/assistant/prospect.assistant.form';
// company
import { ProspectCompanyForm } from './forms/company/prospect.company.form';
// family
import { ProspectFamilyForm } from './forms/family/prospect.family.form';
// hobby
import { ProspectHobbyForm } from './forms/hobby/prospect.hobby.form';
// ca
import { ProspectCAForm } from './forms/ca/prospect.ca.form';
// wealth
import { ProspectWealthForm } from './forms/wealth/prospect.wealth.form';
import { ProspectMemoForm } from './forms/memo/prospect.memo.form';
import { ProspectTrackForm } from './forms/track/prospect.track.form';

const routes: Routes = [
  { path: 'search', component: ProspectSearchPage },
  { path: 'new', component: ProspectNewPage },
  { path: 'edit/:id', component: ProspectEditPage },
  { path: 'company/edit/:id', component: ProspectCompanyEditPage },
  { path: 'my_nnms', component: ProspectNNMSPage },
  { path: '**', redirectTo: 'search' }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    TabsModule,
    CollapseModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [],
  declarations: [
    ProspectHeaderBlock,
    ProspectSearchPage,
    ProspectNewPage,
    ProspectEditPage,
    ProspectNNMSPage,
    ProspectCompanyEditPage,

    // main tab
    ProspectMainForm,
    // contact tab
    ProspectMailingForm,
    ProspectResidenceForm,
    ProspectFaxForm,
    ProspectEMailingForm,
    ProspectAssistantForm,
    // company
    ProspectCompanyForm,
    // family tabs
    ProspectFamilyForm,
    // hobby
    ProspectHobbyForm,
    // ca
    ProspectCAForm,
    ProspectWealthForm,
    ProspectMemoForm,
    ProspectTrackForm
  ],
  exports: [],
  providers: [ProspectApi]
})
export class ProspectModule {}
