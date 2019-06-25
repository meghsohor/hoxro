import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeatureWrapperComponent } from './feature-wrapper.component';
import { FeaturesComponent } from './features.component';
import { CaseComponent } from './case/case.component';
import { PracticeComponent } from './practice/practice.component';
import { DocumentComponent } from './document/document.component';
import { ContactComponent } from './contact/contact.component';
import { BillingComponent } from './billing/billing.component';
import { FinanceComponent } from './finance/finance.component';

const routes: Routes = [
  {
    path: '',
    component: FeatureWrapperComponent,
    children: [
      { path: '',
        component: FeaturesComponent,
        data: { title: 'Legal Case Management Software Features For Solicitors' }
      },
      { path: 'case-management', 
        component: CaseComponent, 
        data: { title: 'Legal Case and Matter Management Software For Solicitors' } 
      },
      { path: 'practice-management', 
        component: PracticeComponent, 
        data: { title: 'Legal Practice Management Software | Hoxro' } 
      },
      { path: 'document-management', 
        component: DocumentComponent, 
        data: { title: 'Legal Document Management Software for Law Firms' } 
      },
      { path: 'contact-management', 
        component: ContactComponent, 
        data: { title: 'Legal Client Management Software for Solicitors' } 
      },
      { path: 'billing-management', 
        component: BillingComponent, 
        data: { title: 'Legal Billing and Accounting Software for Law Firms' } 
      },
      { path: 'finance-management', 
        component: FinanceComponent, 
        data: { title: 'Cloud-based Finance & Accounting Software For Lawyers - Hoxro LMS' } 
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
