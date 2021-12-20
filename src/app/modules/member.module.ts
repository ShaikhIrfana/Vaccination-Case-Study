import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MemberComponent } from '../components/member/member.component';
import { GetDetailsComponent } from '../components/getByIdComponents/get-details/get-details.component';
import { GetmemberComponent } from '../components/getByIdComponents/getmember/getmember.component';
import { UpdatedetailsComponent } from '../components/updateComponents/updatedetails/updatedetails.component';
import { UpdatememberComponent } from '../components/updateComponents/updatemember/updatemember.component';

@NgModule({

  declarations: [MemberComponent,GetDetailsComponent,GetmemberComponent,
    UpdatedetailsComponent,UpdatememberComponent],

  imports: [

    CommonModule,
    FormsModule,
    ReactiveFormsModule

  ],

  exports: [MemberComponent,GetDetailsComponent,
    GetmemberComponent,
    UpdatedetailsComponent,
    UpdatememberComponent,]

})

export class MemberModule { }
