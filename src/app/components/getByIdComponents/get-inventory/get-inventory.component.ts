import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VaccineInventory } from 'src/app/class/vaccine-inventory';
import { VaccineInventoryService } from 'src/app/service/vaccine-inventory.service';

@Component({
  selector: 'app-get-inventory',
  templateUrl: './get-inventory.component.html',
  styleUrls: ['./get-inventory.component.css']
})
export class GetInventoryComponent implements OnInit {

  vaccineInventoryForm:FormGroup;
vi:VaccineInventory[];
v:VaccineInventory;
  constructor(private fb: FormBuilder,private service:VaccineInventoryService) { 
    this.vi=new Array();
this.v;
  }
  ngOnInit(): void {
    console.log("ng on init");
    this.vaccineInventoryForm=this.fb.group({
      id:['',Validators.required]
    })
  }
  
  getVaccineInventoryById(){
alert("getbyid")
let vaccineInventory:VaccineInventory=this.vaccineInventoryForm.value
this.service.getVaccineInventoryByCenter(vaccineInventory.id).subscribe(data=>{
  this.v=data;
  alert("done")
},
err =>{console.log(err)});

  }
  deleteVaccineInventory(id) {
    let candelete = confirm(`Are you Sure to Delete Employee '${id}'`);
    if (candelete==true) {
      this.service.deleteVaccineInventory(id).subscribe(data => {
        alert("Deleted Scuccessfully");
        this.service.getAllVaccineInventory().subscribe(vaccineInventorys => {
          this.vi = vaccineInventorys;
        });
      });
    }
    }

}