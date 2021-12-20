import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminFromComponent } from 'src/app/components/admin-from/admin-from.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdminFromComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[AdminFromComponent]
})
export class AdminModule { }
