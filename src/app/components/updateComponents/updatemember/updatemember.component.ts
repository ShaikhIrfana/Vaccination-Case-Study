import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Member } from 'src/app/class/member';
import { MemberService } from 'src/app/service/member.service';

@Component({
  selector: 'app-updatemember',
  templateUrl: './updatemember.component.html',
  styleUrls: ['./updatemember.component.css']
})
export class UpdatememberComponent implements OnInit {
  memberForm: FormGroup;
  member:Member[];
  isUpdate:boolean=false;

  constructor(private fb: FormBuilder, private service: MemberService) {
    this.member= new Array();
   }

  ngOnInit(): void {
    console.log("ng on init");
    this.memberForm = this.fb.group({
      id: ['', Validators.required],
      dose1date: [''],
      dose1status: ['',Validators.required],
      dose2date:[''],
      dose2status: ['',Validators.required],
    });
  }
  updateDetails(){
    alert("Do you want to update the existing details?")
    let mem:Member=this.memberForm.value
    this.service.updateMember(mem).subscribe(data =>{
      alert("Your details have been updated")
    })
  }

}
