import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Vaccines } from 'src/app/class/Vaccines';
import { VaccinesService } from 'src/app/service/vaccines.service';

@Component({
  selector: 'app-get-vaccineid',
  templateUrl: './get-vaccineid.component.html',
  styleUrls: ['./get-vaccineid.component.css']
})
export class GetVaccineidComponent implements OnInit {

  vaccineForm:FormGroup;
  vaccine:Vaccines[];
  apps:Vaccines;

  constructor(private fb: FormBuilder, private service:VaccinesService) {
    this.vaccine=new Array();
    this.apps;
   }

  ngOnInit(): void {
    this.vaccineForm=this.fb.group({
      vaccineId:['',Validators.required]
    })
  }
  getVaccineById(){
    let app:Vaccines=this.vaccineForm.value
    this.service.getAllVaccineById(app.vaccineId).subscribe(data => {
      
      this.apps= data;
      console.log("data is"+JSON.stringify(data));
      alert("Vaccine with Vaccine Id "+data.vaccineId+" is Found");
    },
    err => {console.log(err)});
  }
}
