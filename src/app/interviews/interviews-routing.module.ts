import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewsComponent } from './interviews.component';

const routes: Routes = [
  {path:'' , component:InterviewsComponent},
  {path:'' , redirectTo:'/interviews' , pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewsRoutingModule { }
