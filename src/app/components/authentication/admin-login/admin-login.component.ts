import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public adminloginform:FormGroup;

  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.adminloginform=this.formbuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  adminLogin(){
    this.http.get<any>("http://localhost:1997/admin/view")
    .subscribe(res=>{
      const admin=res.find((a:any)=>{
        return a.username==this.adminloginform.value.username && a.password==this.adminloginform.value.password
      });
      if(admin){
        alert("Login Success!");
        this.adminloginform.reset();
        this.router.navigate(['homeAdmin']);
      }else{
        alert("Wrong Credentials")
      }
    })
    ,err=>{
      alert('Something Went wrong!')
    }
  }

}
