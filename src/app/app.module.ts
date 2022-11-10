import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from './layout/layout.module';
import { ChartsComponent } from './componants/charts/charts.component';
import { FormsComponent } from './componants/forms/forms.component';
import { TablesComponent } from './componants/tables/tables.component';
import { DashboradComponent } from './componants/dashborad/dashborad.component';
import { UsersModule } from './users/users.module';
import { RouterModule } from '@angular/router';
 
@NgModule({
  declarations: [
    AppComponent,
    ChartsComponent,
    FormsComponent,
    TablesComponent,
    DashboradComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule,
    ReactiveFormsModule,
    LayoutModule,
    UsersModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
