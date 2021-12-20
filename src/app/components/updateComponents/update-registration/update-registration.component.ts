import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VaccineRegistration } from 'src/app/class/vaccine-registration';
import { VaccineRegistrationService } from 'src/app/service/vaccine-registration.service';

@Component({
  selector: 'app-update-registration',
  templateUrl: './update-registration.component.html',
  styleUrls: ['./update-registration.component.css']
})
export class UpdateRegistrationComponent implements OnInit {
  vaccineRegistrationForm:FormGroup;
vr:VaccineRegistration[];
isUpdate:boolean=false;

  constructor(private fb: FormBuilder,private service:VaccineRegistrationService) { 
    this.vr=new Array();
  }

  ngOnInit(): void {
    console.log("ng on init");
    this.vaccineRegistrationForm=this.fb.group({
      mobileno:['',Validators.required],
      dateofregistration:['',Validators.required]
    });
  }
updateDetails(){
  alert("Do you want to update the existing details?")
  let v:VaccineRegistration=this.vaccineRegistrationForm.value
  this.service.updateVaccineRegistration(v).subscribe(data=>{
    alert("your details have been updated")
  })
}
}
