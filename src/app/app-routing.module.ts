import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
{path:"" , redirectTo:"/dashboard" , pathMatch:"full"},
{path:'dashboard',loadChildren:()=>import("./dashboard/dashboard.module").then(m=>{ return  m.DashboardModule})},
{path:"users",loadChildren:()=>import("./users/users.module").then(m=>{return m.UsersModule})},
{path:"jobseekers", loadChildren:  ()=> import("./jobseekers/jobseekers.module").then( m=>{ return m.JobseekersModule})},
{path:"settings",   loadChildren : ()=> import("./settings/settings.module").then(m=>{return m.SettingsModule})},
{path:"jobs",       loadChildren : ()=> import("./jobs/jobs.module").then(m=>{return m.JobsModule})},
{path:"search",     loadChildren : ()=> import("./search/search.module").then(m=>{return m.SearchModule})},
{path:"companies",  loadChildren : ()=> import("./companies/companies.module").then(m=>{return m.CompaniesModule})},
{path:"folders",    loadChildren : ()=> import("./folders/folders.module").then(m=>{return m.FoldersModule})},
{path:"interviews", loadChildren : ()=> import("./interviews/interviews.module").then(m=>{return m.InterviewsModule})},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
