import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobseekersRoutingModule } from './jobseekers-routing.module';
import { JobseekersComponent } from './jobseekers.component';
import { ProfileModule } from './profile/profile.module';


@NgModule({
  declarations: [
    JobseekersComponent
  ],
  imports: [
    CommonModule,
    JobseekersRoutingModule,
    ProfileModule
  ]
})
export class JobseekersModule { }
