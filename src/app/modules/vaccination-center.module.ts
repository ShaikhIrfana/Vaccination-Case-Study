import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VaccinationCenterComponent } from '../components/vaccination-center/vaccination-center.component';
import { GetVaccinationcenterComponent } from '../components/getByIdComponents/get-vaccinationcenter/get-vaccinationcenter.component';
import { UpdateVaccinationcenterComponent } from '../components/updateComponents/update-vaccinationcenter/update-vaccinationcenter.component';



@NgModule({
  declarations: [VaccinationCenterComponent,GetVaccinationcenterComponent,UpdateVaccinationcenterComponent],
  imports: [
    CommonModule,ReactiveFormsModule,FormsModule
  ],
  exports:[VaccinationCenterComponent,GetVaccinationcenterComponent,UpdateVaccinationcenterComponent]
})
export class VaccinationCenterModule { }
