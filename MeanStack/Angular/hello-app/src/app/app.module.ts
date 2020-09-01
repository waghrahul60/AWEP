import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyProjectComponent } from './my-project/my-project.component';
import { MyEducationComponent } from './my-education/my-education.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { MyAchivementComponent } from './my-achivement/my-achivement.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    MyProjectComponent,
    MyEducationComponent,
    ContactMeComponent,
    MyAchivementComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
