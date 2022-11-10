import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from '../jobs/jobs.component';
import { JobseekersComponent } from './jobseekers.component';

const routes: Routes = [
  // {path:'sdsdvs' , component:JobseekersComponent},
  // {path:'' , redirectTo:'/jobseekers/' , pathMatch:"full"},
  {path:'' , redirectTo:'/profile/' , pathMatch:"full"},

{path:'profile' , loadChildren:()=> import('./profile/profile.module').then(m => m.ProfileModule) },
{path:'job' , loadChildren:()=> import('./job/job.module').then(m => m.JobModule) }




 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobseekersRoutingModule { }
