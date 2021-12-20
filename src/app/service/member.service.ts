import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../class/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private http:HttpClient) { }
    addMember(mem:Member):Observable<Member>{
      alert(JSON.stringify(mem))
     return this.http.post<Member>("http://localhost:1997/member/abc", mem);
  }
  
  getAllMember():Observable<Member[]>{
    return this.http.get<Member[]>("http://localhost:1997/member/allmember");
  }
  
  getMemberByID(id:number):Observable<Member>{
    return this.http.get<Member>(`http://localhost:1997/member/idcard/${id}`);
  
  }
  updateMember(mem:Member):Observable<Member>{
    return this.http.put<Member>(`http://localhost:1997/member/put`,mem);
  }
  deleteMember(id:number):Observable<Member>{
    return this.http.delete<Member>(`http://localhost:1997/member/delete/${id}`);
  
  }
}



