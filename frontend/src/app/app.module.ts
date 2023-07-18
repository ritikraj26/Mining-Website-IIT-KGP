import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/header/home/home.component';
import { PeopleComponent } from './components/header/people/people.component';

import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StudentsComponent } from './components/header/students/students.component';
import { EventsComponent } from './components/header/events/events.component';
import { GalleryComponent } from './components/header/gallery/gallery.component';
import { EducationComponent } from './components/header/education/education.component';
import { SocitiesComponent } from './components/header/socities/socities.component';
import { ContactComponent } from './components/header/contact/contact.component';
import { LabsComponent } from './components/header/labs/labs.component';
import { AboutComponent } from './components/header/about/about.component';
import { ResearchComponent } from './components/header/research/research.component';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'people', component:PeopleComponent},
  {path:'about', component:AboutComponent},
  {path:'education', component:EducationComponent},
  {path:'events', component:EventsComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'labs', component:LabsComponent},
  {path:'socities', component:SocitiesComponent},
  {path:'students', component:StudentsComponent},
  {path:'research', component:ResearchComponent},
  {path:'contact', component:ContactComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PeopleComponent,
    StudentsComponent,
    EventsComponent,
    GalleryComponent,
    EducationComponent,
    SocitiesComponent,
    ContactComponent,
    LabsComponent,
    AboutComponent,
    ResearchComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatTabsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
