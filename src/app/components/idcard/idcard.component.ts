import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdCard } from 'src/app/class/idcard';
import { IdcardService } from 'src/app/service/idcard.service';


@Component({
  selector: 'app-idcard',
  templateUrl: './idcard.component.html',
  styleUrls: ['./idcard.component.css']
})
export class IdcardComponent implements OnInit {

  searchForm: FormGroup;

  idcard:IdCard[];
  isUpdate:boolean=false;
  id:number;
  constructor(private fb: FormBuilder, private service: IdcardService) {
    this.idcard = new Array();
  }

   ngOnInit(): void {
    console.log("ng on init");
    this.searchForm = this.fb.group({
      //id: ['', Validators.required],
      name: ['',Validators.required],
      dob: ['',Validators.required],
      gender:['',Validators.required],
      address: ['',Validators.required],
      city: ['',Validators.required],
      state:['',Validators.required],
      pincode:['',Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      adharNo:['',Validators.required, Validators.minLength(12), Validators.maxLength(12)],
      panNo:['',Validators.required]
});
this.service.getAllIdCard()
.subscribe(
  data => { this.idcard = data;}, 
  err => {console.log(err)}  
  
  );
}
// saveDetails(): void {
//   let src:IdCard=this.searchForm.value;
//   if(!this.isUpdate){
//     this.service.addIdCard(src)
//     .subscribe(data => {
//       alert("Id is:"+data.id);
//      this.service.getAllIdCard().subscribe(src => {
//         this.idcard = src;
//       });
//     });
//   }
saveDetails(): void {

  let src:IdCard=this.searchForm.value;

  if(!this.isUpdate){

    this.service.addIdCard(src)

    .subscribe(data => {

      alert("Id is:"+data.id);

     this.service.getAllIdCard().subscribe(src => {

        this.idcard = src;

      });

    });

  }
  else{
    this.service.updateIdCard(src).subscribe(data => {
      alert("Id  is Updated");
      this.service.getAllIdCard().subscribe(src => {
        this.idcard = src;
           });
    });
    this.isUpdate=false;
  }
  this.searchForm.reset();
  
  
}
updateIdCard(id:number) {
  let src = this.idcard.find(s => s.id == id)
  this.searchForm = this.fb.group({
    id: [src.id, Validators.required],
    name: [src.name, Validators.required],
    dob: [src.dob, Validators.required],
    gender:[src.gender,Validators.required],
    address:[src.address,Validators.required],
    city:[src.city,Validators.required],
    state:[src.state,Validators.required],
    pincode:[src.pincode,Validators.required, Validators.minLength(6), Validators.maxLength(6)],
    adharNo:[src.adharNo,Validators.required, Validators.minLength(12), Validators.maxLength(12)],
    panNo:[src.panNo,Validators.required]
    });
  this.isUpdate=true;
}
deleteIdCard(id:number) {
  let candelete = confirm(`Are you Sure to Delete Details '${id}'`);
  if (candelete==true) {
    this.service.deleteIdCard(id).subscribe(data => {
      alert("Deleted Successfully");
      this.service.getAllIdCard().subscribe(src => {
        this.idcard = src;
      });
    });
  }
}

}



