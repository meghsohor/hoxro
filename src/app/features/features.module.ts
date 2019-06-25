import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeatureWrapperComponent } from './feature-wrapper.component';

import { FeaturesSidebarComponent } from '../partials/features-sidebar/features-sidebar.component';
import { FeaturesComponent } from './features.component';
import { CaseComponent } from './case/case.component';
import { PracticeComponent } from './practice/practice.component';
import { DocumentComponent } from './document/document.component';
import { ContactComponent } from './contact/contact.component';
import { BillingComponent } from './billing/billing.component';
import { FinanceComponent } from './finance/finance.component';

@NgModule({
  declarations: [
    FeaturesComponent,
    CaseComponent,
    FeatureWrapperComponent,
    FeaturesSidebarComponent,
    PracticeComponent,
    DocumentComponent,
    ContactComponent,
    BillingComponent,
    FinanceComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule { }
