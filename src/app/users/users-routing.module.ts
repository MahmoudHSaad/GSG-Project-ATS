import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersComponent } from './users.component';

const routes: Routes = [
 
  {path:'' , component:UsersComponent},
  {path:'' , redirectTo:'/users/' , pathMatch:"full"},
  {path:'users/list' ,component:UsersComponent },
  {path:'users/add' , component:UsersFormComponent},
  {path:'users/edit/:id' , component:UsersFormComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
