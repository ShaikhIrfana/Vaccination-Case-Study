import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VaccineRegistration } from '../class/vaccine-registration';

@Injectable({
  providedIn: 'root'
})
export class VaccineRegistrationService {

  constructor(private http:HttpClient) { }

  addVaccineRegistration(vaccineRegistration:VaccineRegistration):Observable<VaccineRegistration>
  {
    return this.http.post<VaccineRegistration>("http://localhost:1997/vaccinereg/add",vaccineRegistration);
  }
  updateVaccineRegistration(vaccineRegistration:VaccineRegistration):Observable<VaccineRegistration>
  {
    return this.http.put<VaccineRegistration>("http://localhost:1997/vaccinereg/update",vaccineRegistration);
  }
  deleteVaccineRegistration(mobileno:number):Observable<VaccineRegistration>
  {
    return this.http.delete<VaccineRegistration>(`http://localhost:1997/vaccinereg/delete/${mobileno}`);
  }
  getAllVaccineRegistration():Observable<VaccineRegistration[]>{
    return this.http.get<VaccineRegistration[]>("http://localhost:1997/vaccinereg/allvaccineRegistrations")
  }
  getVaccineRegistration(mobileno:number):Observable<VaccineRegistration>{
    return this.http.get<VaccineRegistration>(`http://localhost:1997/vaccinereg/vaccineRegistration/${mobileno}`)
  }
}
