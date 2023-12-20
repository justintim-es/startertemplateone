import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './routs/landing/landing.component';
import { RegisterComponent } from './routs/register/register.component';
import { PleaseComponent } from './routs/please/please.component';
import { UnexpectedComponent } from './routs/unexpected/unexpected.component';
import { ConfirmComponent } from './routs/confirm/confirm.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent
  },
  {
    path: 'unexpected', component: UnexpectedComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'please', component: PleaseComponent
  },
  {
    path: 'confirm/:token', component: ConfirmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
