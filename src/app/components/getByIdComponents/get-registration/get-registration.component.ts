import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VaccineRegistration } from 'src/app/class/vaccine-registration';
import { VaccineRegistrationService } from 'src/app/service/vaccine-registration.service';

@Component({
  selector: 'app-get-registration',
  templateUrl: './get-registration.component.html',
  styleUrls: ['./get-registration.component.css']
})
export class GetRegistrationComponent implements OnInit {
vaccineRegistrationForm:FormGroup;
vr:VaccineRegistration[];
v:VaccineRegistration;
  constructor(private fb: FormBuilder,private service:VaccineRegistrationService) { 
    this.vr=new Array();
this.v;
  }
  ngOnInit(): void {
    console.log("ng on init");
    this.vaccineRegistrationForm=this.fb.group({
      mobileno:['',Validators.required]
    })
  }
  
  getVaccineRegistrationById(){
alert("getbyid")
let vaccineRegistration:VaccineRegistration=this.vaccineRegistrationForm.value
this.service.getVaccineRegistration(vaccineRegistration.mobileno).subscribe(data=>{
  this.v=data;
  alert("done")
},
err =>{console.log(err)});

  }
  deleteVaccineRegistration(mobileno) {
    let candelete = confirm(`Are you Sure to Delete Employee '${mobileno}'`);
    if (candelete==true) {
      this.service.deleteVaccineRegistration(mobileno).subscribe(data => {
        alert("Deleted Scuccessfully");
        this.service.getAllVaccineRegistration().subscribe(vaccineRegistrations => {
          this.vr = vaccineRegistrations;
        });
      });
    }
    }

}
