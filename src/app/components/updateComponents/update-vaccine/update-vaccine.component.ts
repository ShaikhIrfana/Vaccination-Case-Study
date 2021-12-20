import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vaccines } from 'src/app/class/Vaccines';
import { VaccinesService } from 'src/app/service/vaccines.service';

@Component({
  selector: 'app-update-vaccine',
  templateUrl: './update-vaccine.component.html',
  styleUrls: ['./update-vaccine.component.css']
})
export class UpdateVaccineComponent implements OnInit {

  vaccineForm:FormGroup;
  vaccine:Vaccines[];

  constructor(private fb:FormBuilder,private service:VaccinesService) {
    this.vaccine=new Array();
   }

  ngOnInit() {
    console.log("Sucess!")
  this.vaccineForm=this.fb.group({
    vaccineId:['',Validators.required],
    description:['',Validators.required],
    vaccineName:['',Validators.required]
});
  }
  updateVaccine(){
    confirm(`are you sure to Update vaccine ?`);
    let vu:Vaccines=this.vaccineForm.value
    this.service.updateVaccine(vu).subscribe(data=>{
      alert("your details have been updated")
    });  
    this.service.getAllVaccine().
    subscribe(
      data=>{this.vaccine=data;},
      err=>{console.log(err)}
    );
  }
}
