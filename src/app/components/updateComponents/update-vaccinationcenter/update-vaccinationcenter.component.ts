import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VaccinationCenter } from 'src/app/class/vaccination-center';
import { VaccinationCenterService } from 'src/app/service/vaccinationcenter.service';

@Component({
  selector: 'app-update-vaccinationcenter',
  templateUrl: './update-vaccinationcenter.component.html',
  styleUrls: ['./update-vaccinationcenter.component.css']
})
export class UpdateVaccinationcenterComponent implements OnInit {
  centerForm:FormGroup;
  centers:VaccinationCenter;
  constructor(private fb:FormBuilder,private service:VaccinationCenterService) { 
    this.centers;
  }

  ngOnInit(): void {
    this.centerForm=this.fb.group({
      code:['',Validators.required],
      centername: ['', Validators.required],
      address:['',Validators.required],
      city: ['', Validators.required],
      state:['',Validators.required],
      pincode:['',Validators.required]
    })
  }
  UpdateVaccinationCenter(){
    let cen:VaccinationCenter=this.centerForm.value
    this.service.updateVaccinationCenter(cen).subscribe(data=>{
      this.centers=data;
    });
  }
}
