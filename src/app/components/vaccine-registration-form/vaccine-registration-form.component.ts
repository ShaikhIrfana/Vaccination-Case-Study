import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VaccineRegistration } from 'src/app/class/vaccine-registration';
import { VaccineRegistrationService } from 'src/app/service/vaccine-registration.service';


@Component({
  selector: 'app-vaccine-registration-form',
  templateUrl: './vaccine-registration-form.component.html',
  styleUrls: ['./vaccine-registration-form.component.css']
})
export class VaccineRegistrationFormComponent implements OnInit {
  vaccineRegistrationForm:FormGroup;
  //vi:VaccineInventory[]=new Array();
  vr:VaccineRegistration[];
  
  isUpdate:boolean=false;

  constructor(private fb: FormBuilder,private service:VaccineRegistrationService) {
    this.vr=new Array();
   }

  ngOnInit(): void {
    console.log("ng on init");
    //this.vaccineInventoryForm=new FormGroup({
      //id:new FormControl()
      this.vaccineRegistrationForm=this.fb.group({
       mobileno: ['',Validators.required],
       dateofregistration:['',Validators.required] 
      });
this.service.getAllVaccineRegistration()
.subscribe(
  data =>{this.vr=data;},
  err =>{console.log(err)}
);
  }
saveVaccineRegistration():void{
  //let vaccineInventory:VaccineInventory=new VaccineInventory(this.vaccineInventoryForm.controls['id'].value);
  //this.vi.push(vaccineInventory);
  let vaccineRegistration:VaccineRegistration=this.vaccineRegistrationForm.value;
  //logic for saving the employee
  if(!this.isUpdate){
    this.service.addVaccineRegistration(vaccineRegistration)
    .subscribe(data =>{
      alert("VaccineRegistration with id" + data.mobileno +"is created");
      this.service.getAllVaccineRegistration().subscribe(vaccineRegistrations =>{
        this.vr=vaccineRegistrations;
      });
    });
  }

else{
  this.service.updateVaccineRegistration(vaccineRegistration).subscribe(data =>{
    alert("vaccineregistration is updated");
    this.service.getAllVaccineRegistration().subscribe(vaccineRegistrations =>{
      this.vr=vaccineRegistrations;
    });
  });
  this.isUpdate=false;
  }
  this.vaccineRegistrationForm.reset();
}
}
