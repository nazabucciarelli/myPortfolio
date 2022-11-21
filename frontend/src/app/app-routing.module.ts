import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { HomeComponent } from './components/home/home.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditHeaderComponent } from './components/header/edit-header.component';
import { NewCertificationComponent } from './components/certifications-and-projects/new-certification.component';
import { EditCertificationComponent } from './components/certifications-and-projects/edit-certification.component';
import { NewProjectComponent } from './components/certifications-and-projects/new-project.component';
import { EditProjectComponent } from './components/certifications-and-projects/edit-project.component';
import { NewFrontSkillComponent } from './components/skills/new-front-skill.component';
import { EditFrontSkillComponent } from './components/skills/edit-front-skill.component';
import { NewBackSkillComponent } from './components/skills/new-back-skill.component';
import { EditBackSkillComponent } from './components/skills/edit-back-skill.component';
import { NewOtraSkillComponent } from './components/skills/new-otra-skill.component';
import { EditOtraSkillComponent } from './components/skills/edit-otra-skill.component';

const routes:Routes = [
  { path: '', component: HomeComponent },
  { path: 'addexp', component: NewExperienceComponent },
  { path: 'editexp/:id', component: EditExperienceComponent },
  { path: 'addedu', component: NewEducationComponent},
  { path: 'editedu/:id', component: EditEducationComponent},
  { path: 'editsobremi', component: EditAboutComponent},
  { path: 'editheader', component: EditHeaderComponent},
  { path: 'addcertification', component: NewCertificationComponent},
  { path: 'editcertification/:id', component: EditCertificationComponent},
  { path: 'addproyecto',component:NewProjectComponent},
  { path: 'editproyecto/:id',component:EditProjectComponent},
  { path: 'addfrontskill',component: NewFrontSkillComponent},
  { path: 'editfrontskill/:id', component: EditFrontSkillComponent},
  { path: 'addbackskill', component: NewBackSkillComponent},
  { path: 'editbackskill/:id', component: EditBackSkillComponent},
  { path: 'addotraskill', component: NewOtraSkillComponent},
  { path: 'editotraskill/:id', component: EditOtraSkillComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
