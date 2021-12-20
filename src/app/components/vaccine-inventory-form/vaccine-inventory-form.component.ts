import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { VaccineInventory } from 'src/app/class/vaccine-inventory';
import { VaccineInventoryService } from 'src/app/service/vaccine-inventory.service';

@Component({
  selector: 'app-vaccine-inventory-form',
  templateUrl: './vaccine-inventory-form.component.html',
  styleUrls: ['./vaccine-inventory-form.component.css']
})
export class VaccineInventoryFormComponent implements OnInit {
  vaccineInventoryForm:FormGroup;
  //vi:VaccineInventory[]=new Array();
  vi:VaccineInventory[];
  isUpdate:boolean=false;

  constructor(private fb: FormBuilder,private service:VaccineInventoryService) {
    this.vi=new Array();
   }

  ngOnInit(): void {
    console.log("ng on init");
    //this.vaccineInventoryForm=new FormGroup({
      //id:new FormControl()
      this.vaccineInventoryForm=this.fb.group({
      //  id: ['',Validators.required],
       date:['',Validators.required],
       //code:['',Validators.required],
      // quantity:['',Validators.required]  
      });
this.service.getAllVaccineInventory()
.subscribe(
  data =>{this.vi=data;},
  err =>{console.log(err)}
);
  }
saveVaccineInventory():void{
  //let vaccineInventory:VaccineInventory=new VaccineInventory(this.vaccineInventoryForm.controls['id'].value);
  //this.vi.push(vaccineInventory);
  let vaccineInventory:VaccineInventory=this.vaccineInventoryForm.value;
  //logic for saving the employee
  if(!this.isUpdate){
    this.service.addVaccineInventory(vaccineInventory)
    .subscribe(data =>{
      alert("VaccineInventory with id " + data.id +" is created");
      this.service.getAllVaccineInventory().subscribe(vaccineInventorys =>{
        this.vi=vaccineInventorys;
      });
    });
  }
  else{
    this.service.updateVaccineInventory(vaccineInventory).subscribe(data =>{
      alert("vaccineInventory is updated");
      this.service.getAllVaccineInventory().subscribe(vaccineInventorys =>{
        this.vi=vaccineInventorys;
      });
    });
    this.isUpdate=false;
    }
    this.vaccineInventoryForm.reset();
  }
  deleteVaccineInventory(id: number) {

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
  
  UpdateVaccineInventory(id: number) {
  
    let vaccineInventory = this.vi.find(v => v.id == id)
  
    this.vaccineInventoryForm = this.fb.group({
  
      id: [vaccineInventory.id, Validators.required],
  
      date:[vaccineInventory.date, Validators.required],  
  
    });
  
    this.isUpdate=true;
  
  }
}


