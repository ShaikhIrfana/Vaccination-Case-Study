import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VaccinationCenter } from 'src/app/class/vaccination-center';
import { VaccinationCenterService } from 'src/app/service/vaccinationcenter.service';

@Component({
  selector: 'app-get-vaccinationcenter',
  templateUrl: './get-vaccinationcenter.component.html',
  styleUrls: ['./get-vaccinationcenter.component.css']
})
export class GetVaccinationcenterComponent implements OnInit {
  centerForm:FormGroup;
  centers:VaccinationCenter;

  constructor(private fb:FormBuilder,private service:VaccinationCenterService) { 
    this.centers;
  }

  ngOnInit(): void {
    this.centerForm=this.fb.group({
      code:['',Validators.required],
    })
  }
  getVaccinationcenterById(){
   // alert("getbyid")
    let cen:VaccinationCenter=this.centerForm.value
    this.service.getVaccinationCenterByID(cen.code).subscribe(data=>{
      this.centers=data;
      //console.log("data is"+JSON.stringify(data))
      alert("data")
    }
   // err =>{console.log(err)}
  );
  }

}
