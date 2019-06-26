import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { WhyHoxroComponent } from './why-hoxro/why-hoxro.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HoxroWrapperComponent } from './hoxro-wrapper.component';


const routes: Routes = [
  {
    path: '',
    component: HoxroWrapperComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent,
        data: { title: 'Case Management System | Legal Software by Hoxro' }
      },
      {
        path: 'about',
        component: AboutComponent,
        data: { title: 'About HOXRO' }
      },
      {
        path: 'why-hoxro',
        component: WhyHoxroComponent,
        data: { title: 'Law Firm Software | Hoxro' }
      },
      {
        path: 'pricing',
        component: PricingComponent,
        data: { title: 'Pricing | Buy Legal Case Management Software' }
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: { title: 'Contact Us | Hoxro' }
      },
      {
        path: 'sign-in',
        component: SignInComponent,
        data: { title: 'Log In to HOXRO - Get First License FREE for Life' }
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
        data: { title: 'Sign UP to HOXRO - Get First License FREE for Life' }
      },

      {
        path: 'features',
        loadChildren: './features/features.module#FeaturesModule',

      },
    ]
  },

  { path: '**', 
    component: NotFoundComponent,
    data: { title: 'An apology from Hoxro' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
