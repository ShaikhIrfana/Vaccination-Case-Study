import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Member } from 'src/app/class/member';
import { MemberService } from 'src/app/service/member.service';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {
  memberForm: FormGroup;

  member:Member[];
  isUpdate:boolean=false;
  constructor(private fb: FormBuilder, private service: MemberService) {
    this.member= new Array();
  }

 ngOnInit(): void {
  
  console.log("ng on init");
    this.memberForm = this.fb.group({
      id: ['', Validators.required, Validators.minLength(4), Validators.maxLength(4)],
      dose1date: [''],
      dose1status: ['',Validators.required],
      dose2date:[''],
      dose2status: ['',Validators.required],
    });

    this.service.getAllMember()
    .subscribe(
      data => { this.member = data;}, 
      err => {console.log(err)} 
      
      );
    }
    saveMember(): void {
      let mem:Member=this.memberForm.value;
      if(!this.isUpdate){
        this.service.addMember(mem)
        .subscribe(data => {
          alert("Id is:"+data.id);
         this.service.getAllMember().subscribe(mem => {
            this.member = mem;
          });
        });
      }
      else{
        this.service.updateMember(mem).subscribe(data => {
          alert("Member  is Updated");
          this.service.getAllMember().subscribe(mem => {
            this.member= mem;
               });
        });
        this.isUpdate=false;
      }
      this.memberForm.reset();
      
      
    }

      updateMember(id:number) {
      let src = this.member.find(s => s.id == id)
      this.memberForm = this.fb.group({
        id: [src.id, Validators.required],
        dose1status: [src.dose1status, Validators.required],
        dose2status: [src.dose2status, Validators.required],
        dose1date:[src.dose1date],
        dose2date:[src.dose2date]

      });
      this.isUpdate=true;
    }
    deleteMember(id:number) {
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

