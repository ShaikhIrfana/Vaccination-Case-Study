import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { GetInventoryComponent } from "../components/getByIdComponents/get-inventory/get-inventory.component";
import { UpdateInventoryComponent } from "../components/updateComponents/update-inventory/update-inventory.component";
import { VaccineInventoryFormComponent } from "../components/vaccine-inventory-form/vaccine-inventory-form.component";

@NgModule({
    declarations: [VaccineInventoryFormComponent,GetInventoryComponent,UpdateInventoryComponent],
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule
    ],
   exports:[VaccineInventoryFormComponent,GetInventoryComponent,UpdateInventoryComponent]
  })
  export class VaccineInventoryModule { }