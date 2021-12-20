import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IdCard } from '../class/idcard';

@Injectable({
  providedIn: 'root'
})
export class IdcardService {

  constructor(private http:HttpClient) {}
    
    addIdCard(src:IdCard):Observable<IdCard>{
     return this.http.post<IdCard>("http://localhost:1997/search/add", src);
  }
  
  getAllIdCard():Observable<IdCard[]>{
    return this.http.get<IdCard[]>("http://localhost:1997/search/all");
  }
  
  getSearchByID(id:number):Observable<IdCard>{
   return this.http.get<IdCard>(`http://localhost:1997/search/get/${id}`);
  
  }
  updateIdCard(ic:IdCard):Observable<IdCard>{
    return this.http.put<IdCard>(`http://localhost:1997/search/update`,ic);
  }
 deleteIdCard(id:number):Observable<IdCard>{
    return this.http.delete<IdCard>(`http://localhost:1997/search/delete/${id}`);
  
  }
  /*getByAdharNo(adharNo:number):Observable<IdCard>{
    return this.http.get<IdCard>(`http://localhost:8213/search//add/adharCard/${adharNo}`)
  }*/
   }



