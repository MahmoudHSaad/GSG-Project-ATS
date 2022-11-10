import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { EducationsComponent } from './educations/educations.component';
import { ExperiancesComponent } from './experiances/experiances.component';
import { EducationsAddComponent } from './educations/educations-add/educations-add.component';
import { ExperiancesAddComponent } from './experiances/experiances-add/experiances-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressComponent } from './address/address.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    ProfileInfoComponent,
    ProfileComponent,
    EducationsComponent,
    ExperiancesComponent,
    EducationsAddComponent,
    ExperiancesAddComponent,
    ContactComponent,
    AddressComponent,
    
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports:[
    ProfileInfoComponent,
    ProfileComponent,
  ]
})
export class ProfileModule { }
