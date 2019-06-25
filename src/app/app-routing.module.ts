import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WhyHoxroComponent } from './why-hoxro/why-hoxro.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FeaturesComponent } from './features/features.component';
import { CaseComponent } from './features/case/case.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Case Management System | Legal Software by Hoxro' } },
  { path: 'about', component: AboutComponent, data: { title: 'About HOXRO' } },
  { path: 'why-hoxro', component: WhyHoxroComponent, data: { title: 'Law Firm Software | Hoxro' } },
  { path: 'pricing', component: PricingComponent, data: { title: 'Pricing | Buy Legal Case Management Software' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact Us | Hoxro' } },
  { path: 'sign-in', component: SignInComponent, data: { title: 'Log In to HOXRO - Get First License FREE for Life' } },
  { path: 'sign-up', component: SignUpComponent, data: { title: 'Sign UP to HOXRO - Get First License FREE for Life' } },

  { path: 'features', component: FeaturesComponent, data: { title: 'Legal Case Management Software Features For Solicitors' },
    children : [
      {path: 'case-management', component: CaseComponent, data: {title: 'Legal Case and Matter Management Software For Solicitors'}}
    ]
  },

  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
