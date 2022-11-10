import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
 
  {path:'' , component:ProfileComponent},
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
