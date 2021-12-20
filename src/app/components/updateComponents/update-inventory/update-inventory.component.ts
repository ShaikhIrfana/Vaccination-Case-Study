import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VaccineInventory } from 'src/app/class/vaccine-inventory';
import { VaccineInventoryService } from 'src/app/service/vaccine-inventory.service';

@Component({
  selector: 'app-update-inventory',
  templateUrl: './update-inventory.component.html',
  styleUrls: ['./update-inventory.component.css']
})
export class UpdateInventoryComponent implements OnInit {
  vaccineInventoryForm:FormGroup;
  vi:VaccineInventory[];
  isUpdate:boolean=false;
  
    constructor(private fb: FormBuilder,private service:VaccineInventoryService) { 
      this.vi=new Array();
    }
  
    ngOnInit(): void {
      console.log("ng on init");
      this.vaccineInventoryForm=this.fb.group({
        id:['',Validators.required],
        date:['',Validators.required]
      });
    }
  updateDetails(){
    alert("Do you want to update the existing details?")
    let v:VaccineInventory=this.vaccineInventoryForm.value
    this.service.updateVaccineInventory(v).subscribe(data=>{
      alert("your details have been updated")
    })
  }
  }