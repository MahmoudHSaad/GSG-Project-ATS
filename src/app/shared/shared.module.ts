import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { DropDownComponent } from './componants/drop-down/drop-down.component';
import { MultiDropDownComponent } from './componants/multi-drop-down/multi-drop-down.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DropDownComponent,
    MultiDropDownComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  exports:[
    DropDownComponent,
    MultiDropDownComponent
  ]
})
export class SharedModule { }
