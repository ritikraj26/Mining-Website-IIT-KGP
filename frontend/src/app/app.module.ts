import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/header/home/home.component';
import { ResearchComponent } from './components/header/research/research.component';
import { ProgrammeComponent } from './components/header/programme/programme.component';
import { PeopleComponent } from './components/header/people/people.component';
import { FormerFacultyComponent } from './components/header/former-faculty/former-faculty.component';
import { HistoryComponent } from './components/nav/history/history.component';
import { HeadComponent } from './components/nav/head/head.component';
import { AwardsAndRecognitionComponent } from './components/nav/awards-and-recognition/awards-and-recognition.component';
import { StaffComponent } from './components/nav/staff/staff.component';
import { AcademicProgrammeComponent } from './components/nav/academic-programme/academic-programme.component';
import { PublicationComponent } from './components/nav/publication/publication.component';
import { ContactComponent } from './components/nav/contact/contact.component';
import { VisitorsHelpComponent } from './components/nav/visitors-help/visitors-help.component';

import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'research', component:ResearchComponent},
  {path:'programme', component:ProgrammeComponent},
  {path:'former-faculty', component:FormerFacultyComponent},
  {path:'history', component:HistoryComponent},
  {path:'head', component:HeadComponent},
  {path:'people', component:PeopleComponent},
  {path:'awards-and-recognition', component:AwardsAndRecognitionComponent},
  {path:'staff', component:StaffComponent},
  {path:'academic-programme', component:AcademicProgrammeComponent},
  {path:'publication', component:PublicationComponent},
  {path:'contact', component:ContactComponent},
  {path:'visitors-help', component:VisitorsHelpComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ResearchComponent,
    ProgrammeComponent,
    PeopleComponent,
    FormerFacultyComponent,
    HistoryComponent,
    HeadComponent,
    AwardsAndRecognitionComponent,
    StaffComponent,
    AcademicProgrammeComponent,
    PublicationComponent,
    ContactComponent,
    VisitorsHelpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
