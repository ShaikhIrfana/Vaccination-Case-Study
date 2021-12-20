import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Vaccines } from 'src/app/class/Vaccines';
import { VaccinesService } from 'src/app/service/vaccines.service';

@Component({
  selector: 'app-vaccine-form',
  templateUrl: './vaccine-form.component.html',
  styleUrls: ['./vaccine-form.component.css']
})
export class VaccineFormComponent implements OnInit {

  vaccineForm:FormGroup;
  vaccine:Vaccines[];
  isUpdate:boolean=false;

  constructor(private fb:FormBuilder,private service:VaccinesService) {
    this.vaccine=new Array();
   }

  ngOnInit() {
    console.log("Sucess!")
    this.vaccineForm=this.fb.group({
      // vaccineId:['',Validators.required],
      description:['',Validators.required],
      vaccineName:['',Validators.required]
  });
  this.service.getAllVaccine().
    subscribe(
      data=>{this.vaccine=data;},
      err=>{console.log(err)}
    );
    }
    saveVaccine():void{
      let vc:Vaccines=this.vaccineForm.value;
      if(!this.isUpdate){
        this.service.addVaccine(vc)
        .subscribe(data=>{
          alert("Vaccine with Vaccine Id "+data.vaccineId+" is created");
          this.service.getAllVaccine().subscribe(vcns=>{
            this.vaccine=vcns;
          });
        });
        
      }
      else{
        this.service.updateVaccine(vc).subscribe(data=>{
          alert("Vaccine is updated");
          this.service.getAllVaccine().subscribe(vcns=>{
            this.vaccine=vcns;
          });
        });
        this.isUpdate=false;
      }
      this.vaccineForm.reset();
      
    }
    
    deleteVaccine(vaccineId:number){
      let delvac=confirm(`are you sure to delete vaccine '${vaccineId}'`);
      if (delvac=true){
        this.service.deleteVaccine(vaccineId).subscribe(data=>{
          alert("Deleted Successfully!");
          this.service.getAllVaccine().subscribe(vcns=>{
            this.vaccine=vcns;
          });
        });
      }
    }
    getVaccineById(vaccineId: number) {
      let vcns = this.vaccine.find(a => a.vaccineId == vaccineId)
      this.vaccineForm = this.fb.group({
        vaccineId: [vcns.vaccineId, Validators.required]
      });
      return this.service.getAllVaccineById(vaccineId);
    }
    
}
