import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoldersComponent } from './folders.component';

const routes: Routes = [
  {path:'' , component:FoldersComponent},
  {path:'' , redirectTo:'/folders/' , pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoldersRoutingModule { }
