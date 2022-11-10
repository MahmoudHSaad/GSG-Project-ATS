import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './componants/charts/charts.component';
import { DashboradComponent } from './componants/dashborad/dashborad.component';
import { FormsComponent } from './componants/forms/forms.component';
import { TablesComponent } from './componants/tables/tables.component';
 
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
{path:"dashborad",component:DashboradComponent },
{path:"tables",component:TablesComponent },
{path:"forms",component:FormsComponent },
{path:"charts",component:ChartsComponent }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
