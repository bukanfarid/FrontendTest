import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AnimalComponent } from './animal/animal.component';
import { AnimalFormComponent } from './animal/animal-form/animal-form.component';
import { OwnerComponent } from './owner/owner.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { OwnerFormComponent } from './owner/owner-form/owner-form.component';
import { AppointmentFormComponent } from './appointment/appointment-form/appointment-form.component';

@NgModule({
  declarations: [
    AppComponent, 
    NavMenuComponent,
    AnimalComponent,
    AnimalFormComponent,
    OwnerComponent,
    AppointmentComponent,
    OwnerFormComponent,
    AppointmentFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: AppointmentComponent, pathMatch: 'full' }, 
      { path: 'animal', component: AnimalComponent },
      { path: 'owner', component: OwnerComponent },
      { path: 'appointment', component: AppointmentComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
