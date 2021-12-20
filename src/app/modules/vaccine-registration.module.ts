import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GetRegistrationComponent } from "../components/getByIdComponents/get-registration/get-registration.component";
import { UpdateRegistrationComponent } from "../components/updateComponents/update-registration/update-registration.component";
import { VaccineRegistrationFormComponent } from "../components/vaccine-registration-form/vaccine-registration-form.component";

@NgModule({
    declarations: [VaccineRegistrationFormComponent,UpdateRegistrationComponent,GetRegistrationComponent],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ],
   exports:[VaccineRegistrationFormComponent,UpdateRegistrationComponent,GetRegistrationComponent]
  })
  export class VaccineRegistrationModule { }