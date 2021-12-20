import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admins } from '../class/Admins';

@Injectable({
  providedIn: 'root'
})
export class AdminsService {

  constructor(private http:HttpClient) { }

  addAdmin(ad:Admins):Observable<Admins>{
    return this.http.post<Admins>("http://localhost:1997/admin/insert",ad);
  }
  getAllAdmin():Observable<Admins[]>{
    return this.http.get<Admins[]>("http://localhost:1997/admin/view")
  }
  updateAdmin(ad:Admins):Observable<Admins>{
    return this.http.put<Admins>(`http://localhost:1997/admin/update`,ad);
  }
  deleteAdmin(adminId:number):Observable<Admins>{
    return this.http.delete<Admins>(`http://localhost:1997/admin/delete/${adminId}`)
  }
}
