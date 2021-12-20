import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppointmentFormComponent } from '../components/appointment-form/appointment-form.component';
import { GetAppointmentComponent } from '../components/getByIdComponents/get-appointment/get-appointment.component';
import { UpdateAppointmentComponent } from '../components/updateComponents/update-appointment/update-appointment.component';




@NgModule({
  declarations: [AppointmentFormComponent, GetAppointmentComponent,UpdateAppointmentComponent],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [AppointmentFormComponent, GetAppointmentComponent,UpdateAppointmentComponent]
})
export class AppointmentModule { }