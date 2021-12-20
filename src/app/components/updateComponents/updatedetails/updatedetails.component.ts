import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdCard } from 'src/app/class/idcard';
import { IdcardService } from 'src/app/service/idcard.service';

@Component({
  selector: 'app-updatedetails',
  templateUrl: './updatedetails.component.html',
  styleUrls: ['./updatedetails.component.css']
})
export class UpdatedetailsComponent implements OnInit {
  searchForm: FormGroup;
    idcard:IdCard[];
  isUpdate:boolean=false;

  constructor(private fb: FormBuilder, private service: IdcardService) {
    this.idcard = new Array();
   }

  ngOnInit(): void {
    console.log("ng on init");
    this.searchForm = this.fb.group({
      id: ['', Validators.required],
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
  }

  updateDetails(){
    confirm(`are you sure to Update existing details?`);
    let det:IdCard=this.searchForm.value
    this.service.updateIdCard(det).subscribe(data =>{
      alert("Your details have been updated")
    })
  }

}
