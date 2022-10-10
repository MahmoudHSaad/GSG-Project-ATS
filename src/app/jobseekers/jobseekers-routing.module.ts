import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from '../jobs/jobs.component';
import { JobseekersComponent } from './jobseekers.component';

const routes: Routes = [
  {path:'' , component:JobseekersComponent},
  {path:'' , redirectTo:'/jobseekers/' , pathMatch:"full"},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobseekersRoutingModule { }
