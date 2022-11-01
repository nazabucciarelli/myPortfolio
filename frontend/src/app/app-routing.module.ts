import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { HomeComponent } from './components/home/home.component';
import { EditExperienceComponent } from './components/experience/edit-experience.component';

const routes:Routes = [
  { path: '', component: HomeComponent },
  { path: 'addexp', component: NewExperienceComponent },
  { path: 'editexp/:id', component: EditExperienceComponent }
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
