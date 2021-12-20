import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Member } from 'src/app/class/member';
import { MemberService } from 'src/app/service/member.service';


@Component({
  selector: 'app-getmember',
  templateUrl: './getmember.component.html',
  styleUrls: ['./getmember.component.css']
})
export class GetmemberComponent implements OnInit {
  memberForm: FormGroup;
  member:Member[];
  mb:Member;
  isUpdate:boolean=false;

  constructor(private fb: FormBuilder, private service: MemberService) { 
    this.member= new Array();
    this.mb
  }

  ngOnInit(): void {
    console.log("ng on init");
    this.memberForm = this.fb.group({
      id: ['', Validators.required, Validators.minLength(4), Validators.maxLength(4)],
    });
  }
  getMemberById(){
    let mem:Member=this.memberForm.value
    this.service.getMemberByID(mem.id).subscribe(data => {
      
      this.mb= data;
      //console.log("data is" +JSON.stringify(data))
    },
    err => {console.log(err)});
    
  }
  deleteMember(id) {
    let candelete = confirm(`Are you Sure to Delete Member '${id}'`);
    if (candelete==true) {
      this.service.deleteMember(id).subscribe(data => {
        alert("Deleted Successfully");
        this.service.getAllMember().subscribe(mem => {
          this.member = mem;
        });
      });
    }
  }



}
