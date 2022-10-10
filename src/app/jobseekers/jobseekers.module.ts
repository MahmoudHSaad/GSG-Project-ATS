import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobseekersRoutingModule } from './jobseekers-routing.module';
import { JobseekersComponent } from './jobseekers.component';


@NgModule({
  declarations: [
    JobseekersComponent
  ],
  imports: [
    CommonModule,
    JobseekersRoutingModule
  ]
})
export class JobseekersModule { }
