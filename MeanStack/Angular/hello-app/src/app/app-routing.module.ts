import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyProjectComponent } from './my-project/my-project.component';
import { MyEducationComponent } from './my-education/my-education.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { MyAchivementComponent } from './my-achivement/my-achivement.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: MyProjectComponent },
  { path: 'education', component: MyEducationComponent },
  { path: 'achivement', component: MyAchivementComponent },
  { path: 'contact-me', component: ContactMeComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
