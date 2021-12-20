import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VaccinationCenter } from 'src/app/class/vaccination-center';
import { VaccinationCenterService } from 'src/app/service/vaccinationcenter.service';


@Component({
  selector: 'app-vaccination-center',
  templateUrl: './vaccination-center.component.html',
  styleUrls: ['./vaccination-center.component.css']
})
export class VaccinationCenterComponent implements OnInit {

  centerForm:FormGroup;
  centers:VaccinationCenter[];
  isUpdate:boolean=false;

  constructor(private fb:FormBuilder,private service:VaccinationCenterService) { 
    this.centers=new Array();
  }


  ngOnInit(): void {
    console.log("ng on init");
    this.centerForm=this.fb.group({
      // code:['',Validators.required],
      centername:['',Validators.required],
      address:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      pincode:['',Validators.required],
    });
  
    this.service.getAllVaccineCenter().subscribe(data => { this.centers = data;}, 
      err => {console.log(err)}  
      
      );
  }
  
 addVaccineCenter(): void {
    let cen:VaccinationCenter=this.centerForm.value;
    //logic for saving the Vaccination center
    if(!this.isUpdate){
      this.service.addVaccineCenter(cen)
      .subscribe(data => {
        alert("Vaccination Center with Id " + data.code + " is created");
        this.service.getAllVaccineCenter().subscribe(cen => {
          this.centers = cen;
        });
      });
    }
    //updating the Center
    else{
      this.service.updateVaccinationCenter(cen).subscribe(data => {
        alert("Vaccination center is Updated");
        this.service.getAllVaccineCenter().subscribe(cen => {
          this.centers = cen;
             });
      });
      this.isUpdate=false;
    }
    this.centerForm.reset();
   
  }
  //Deletes the Vaccination center
  deleteVaccinationCenter(code:number) {
    let candelete = confirm(`Are you Sure to Delete Vaccination Center'${code}'`);
    if (candelete==true) {
      this.service.deleteVaccinationCenter(code).subscribe(data => {
        alert("Deleted Scuccessfully");
        this.service.getAllVaccineCenter().subscribe(cens=> {
          this.centers = cens;
        });
      });
    }
  }

 UpdateVaccinationCenter(code: number) {
    let cen= this.centers.find(e => e.code == code)
    this.centerForm= this.fb.group({
      code: [cen.code, Validators.required],
      centername: [cen.centername, Validators.required],
      address:[cen.address,Validators.required],
      city: [cen.city, Validators.required],
      state:[cen.state,Validators.required],
      pincode:[cen.pincode,Validators.required]
    });
    this.isUpdate=true;
  }
  getVaccinationCenterByID(code:number){
    let cen=this.centers.find(c=>c.code==code)
    this.centerForm=this.fb.group({
      code:[cen.code,Validators.required]
     /* centername: [cen.centername, Validators.required],
      address:[cen.address,Validators.required],
      city: [cen.city, Validators.required],
      state:[cen.state,Validators.required],
      pincode:[cen.pincode,Validators.required]*/
    });
    return this.service.getVaccinationCenterByID(code);
  }
  getAllVaccineCenter(){
  let cen=this.centers.values
  this.centerForm=this.fb.group({
   
  });
  return this.service.getAllVaccineCenter();
  }
  
}
