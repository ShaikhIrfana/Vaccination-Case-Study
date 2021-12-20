import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VaccineInventory } from '../class/vaccine-inventory';

@Injectable({
  providedIn: 'root'
})
export class VaccineInventoryService {

  constructor(private http:HttpClient) { }

  addVaccineInventory(vaccineInventory:VaccineInventory):Observable<VaccineInventory>
  {
    return this.http.post<VaccineInventory>("http://localhost:1997/inventory/add",vaccineInventory);
  }
  /*addVaccineCount(vaccineInventory:VaccineInventory):Observable<VaccineInventory>
  {
    return this.http.post<VaccineInventory>("http://localhost:1995/inventory/add",vaccineInventory);
  }*/
  updateVaccineInventory(vaccineInventory:VaccineInventory):Observable<VaccineInventory>
  {
    return this.http.put<VaccineInventory>("http://localhost:1997/inventory/update",vaccineInventory);
  }
  deleteVaccineInventory(id:number):Observable<VaccineInventory>
  {
    return this.http.delete<VaccineInventory>(`http://localhost:1997/inventory/delete/${id}`);
  }
  getVaccineInventoryByCenter(id:number):Observable<VaccineInventory>
  {
    return this.http.get<VaccineInventory>(`http://localhost:1997/inventory/vaccineInventory/${id}`);
  }
  getAllVaccineInventory():Observable<VaccineInventory[]>{
    return this.http.get<VaccineInventory[]>("http://localhost:1997/inventory/vaccineInventory")
  }
}
