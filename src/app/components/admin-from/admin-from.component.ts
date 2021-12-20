import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Admins } from 'src/app/class/Admins';
import { AdminsService } from 'src/app/service/admins.service';

@Component({
  selector: 'app-admin-from',
  templateUrl: './admin-from.component.html',
  styleUrls: ['./admin-from.component.css']
})
export class AdminFromComponent implements OnInit {

  adminForm:FormGroup;
  admin:Admins[];
  isUpdate:boolean=false

  constructor(private fb:FormBuilder,private srevice:AdminsService) {
    this.admin=new Array();
   }

  ngOnInit(): void {
    console.log("Admin!")
    this.adminForm=this.fb.group({
    // adminId:['',Validators.required],
    firstName:['',Validators.required],
    lastName:['',Validators.required],
    username:['',Validators.required],
    password:['',Validators.required]
  });
  this.srevice.getAllAdmin().
  subscribe(
    data=>{this.admin=data;},
    err=>{console.log(err)}
  );
  }

  saveAdmin():void{
    let ad:Admins=this.adminForm.value;
    if(!this.isUpdate){
      this.srevice.addAdmin(ad).subscribe(data=>{
        alert("Admin admin Id "+data.adminId+" is created");
        this.srevice.getAllAdmin().subscribe(adms=>{
          this.admin=adms;
        });
      });
    }
    else{
      this.srevice.updateAdmin(ad).subscribe(data=>{
        alert("Admin is uodated");
        this.srevice.getAllAdmin().subscribe(adms=>{
          this.admin=adms;
        });
      });
      this.isUpdate=false;
    }
    this.adminForm.reset();
  }
  deleteAdmin(adminId:number){
    let delad=confirm(`are you sure to dele admin '${adminId}'`);
    if(delad=true){
      this.srevice.deleteAdmin(adminId).subscribe(data=>{
        alert("Delete Sucessfully!");
        this.srevice.getAllAdmin().subscribe(adms=>{
          this.admin=adms;
        });
      });
    }
  }
  updateAdmin(adminId:number){
    let upad=this.admin.find(a=>a.adminId==adminId)
    this.adminForm=this.fb.group({
      adminId:[upad.adminId,Validators.required],
      firstName:[upad.firstName,Validators.required],
      lastName:[upad.lastName,Validators.required],
      username:[upad.username,Validators.required],
      password:[upad.password,Validators.required]
    });
    this.isUpdate=true;
  }

}
