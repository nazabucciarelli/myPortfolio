import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule} from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { CertificationsAndProjectsComponent } from './components/certifications-and-projects/certifications-and-projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditHeaderComponent } from './components/header/edit-header.component';
import { NewCertificationComponent } from './components/certifications-and-projects/new-certification.component';
import { EditCertificationComponent } from './components/certifications-and-projects/edit-certification.component';
import { EditProjectComponent } from './components/certifications-and-projects/edit-project.component';
import { NewProjectComponent } from './components/certifications-and-projects/new-project.component';
import { NewFrontSkillComponent } from './components/skills/new-front-skill.component';
import { EditFrontSkillComponent } from './components/skills/edit-front-skill.component';
import { NewBackSkillComponent } from './components/skills/new-back-skill.component';
import { EditBackSkillComponent } from './components/skills/edit-back-skill.component';
import { NewOtraSkillComponent } from './components/skills/new-otra-skill.component';
import { EditOtraSkillComponent } from './components/skills/edit-otra-skill.component';
import { interceptorProvider } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    CertificationsAndProjectsComponent,
    SkillsComponent,
    FooterComponent,
    ModalLoginComponent,
    NewExperienceComponent,
    HomeComponent,
    EditExperienceComponent,
    NewEducationComponent,
    EditEducationComponent,
    EditAboutComponent,
    EditHeaderComponent,
    NewCertificationComponent,
    EditCertificationComponent,
    EditProjectComponent,
    NewProjectComponent,
    NewFrontSkillComponent,
    EditFrontSkillComponent,
    NewBackSkillComponent,
    EditBackSkillComponent,
    NewOtraSkillComponent,
    EditOtraSkillComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
