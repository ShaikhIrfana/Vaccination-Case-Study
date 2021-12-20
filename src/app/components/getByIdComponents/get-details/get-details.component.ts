import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdCard } from 'src/app/class/idcard';
import { IdcardService } from 'src/app/service/idcard.service';

@Component({
  selector: 'app-get-details',
  templateUrl: './get-details.component.html',
  styleUrls: ['./get-details.component.css']
})
export class GetDetailsComponent implements OnInit {
  searchForm:FormGroup;
  idcard:IdCard[];
  details:IdCard;
  isUpdate:boolean=false;

  constructor(private fb: FormBuilder, private service: IdcardService) {
    this.idcard = new Array();
    this.details
   }

  ngOnInit(): void {
    console.log("ng on init");
    this.searchForm = this.fb.group({
      id: ['', Validators.required],
    });
  }
  getDetailsById(){
    let ic:IdCard=this.searchForm.value
    this.service.getSearchByID(ic.id).subscribe(data => {
      
      this.details= data;
      //console.log("data is" +JSON.stringify(data))
    },
    err => {console.log(err)});
    
  }

  deleteIdCard(id) {
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
