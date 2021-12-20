import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VaccineFormComponent } from 'src/app/components/vaccine-form/vaccine-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetVaccineidComponent } from '../components/getByIdComponents/get-vaccineid/get-vaccineid.component';
import { UpdateVaccineComponent } from '../components/updateComponents/update-vaccine/update-vaccine.component';



@NgModule({
  declarations: [VaccineFormComponent,GetVaccineidComponent,UpdateVaccineComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[VaccineFormComponent,GetVaccineidComponent,UpdateVaccineComponent]
})
export class VaccineModule { }
