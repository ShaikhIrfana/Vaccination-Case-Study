import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaccines } from '../class/Vaccines';

@Injectable({
  providedIn: 'root'
})
export class VaccinesService {
  
  constructor(private http:HttpClient) {}

   addVaccine(vc:Vaccines):Observable<Vaccines>{
      return this.http.post<Vaccines>("http://localhost:1997/vaccine/add",vc);
    }
    getAllVaccine():Observable<Vaccines[]>{
      return this.http.get<Vaccines[]>("http://localhost:1997/vaccine/vaccines");
    }
    getAllVaccineById(vaccineId:number):Observable<Vaccines>{
      return this.http.get<Vaccines>(`http://localhost:1997/vaccine/vaccines/${vaccineId}`);
    }
    deleteVaccine(vaccineId:number):Observable<Vaccines>{
      return this.http.delete<Vaccines>(`http://localhost:1997/vaccine/delete/${vaccineId}`);
    }
    updateVaccine(vc:Vaccines):Observable<Vaccines>{
      return this.http.put<Vaccines>(`http://localhost:1997/vaccine/update`,vc);
    }
}
