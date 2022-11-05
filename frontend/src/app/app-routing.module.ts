import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { HomeComponent } from './components/home/home.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditEducationComponent } from './components/education/edit-education.component';

const routes:Routes = [
  { path: '', component: HomeComponent },
  { path: 'addexp', component: NewExperienceComponent },
  { path: 'editexp/:id', component: EditExperienceComponent },
  { path: 'addedu', component: NewEducationComponent},
  { path: 'editedu/:id', component: EditEducationComponent}
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
