import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VaccinationCenter } from '../class/vaccination-center';


@Injectable({
  providedIn: 'root'
})
export class VaccinationCenterService {
 
  constructor(private http:HttpClient) { }
   //creating VaccinationCenter
   addVaccineCenter(center:VaccinationCenter):Observable<VaccinationCenter>{
    // center.address="tdss";
     //center.state="mh";
     //center.pincode="2333";
 //console.log(center);
    return this.http.post<VaccinationCenter>("http://localhost:1997/abcd/add", center);
  }
  
  getAllVaccineCenter():Observable<VaccinationCenter[]>{
    // the result of get function. get fun will give you Observable<VaccinationCenter[]>
    return this.http.get<VaccinationCenter[]>("http://localhost:1997/abcd/centers");
  }

  getVaccinationCenterByID(code:number):Observable<VaccinationCenter>{
      return this.http.get<VaccinationCenter>(`http://localhost:1997/abcd/center/${code}`);

  }

  deleteVaccinationCenter(code:number):Observable<VaccinationCenter>{
    return this.http.delete<VaccinationCenter>(`http://localhost:1997/abcd/delete/${code}`);

  }

  updateVaccinationCenter(cen:VaccinationCenter):Observable<VaccinationCenter>{
    return this.http.put<VaccinationCenter>("http://localhost:1997/abcd/update",cen);
  }

}
