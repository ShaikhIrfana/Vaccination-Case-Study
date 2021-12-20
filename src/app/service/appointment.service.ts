import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../class/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { }

  addAppointment(app: Appointment):Observable<Appointment>
  {
    return this.http.post<Appointment>("http://localhost:1997/appointment/add",app);
  }

  updateAppointment(app: Appointment):Observable<Appointment>
  {
    return this.http.put<Appointment>("http://localhost:1997/appointment/update", app);
  }

  deleteAppointment(bookingid:number):Observable<Appointment>
  {
    return this.http.delete<Appointment>(`http://localhost:1997/appointment/delete/${bookingid}`);
  }

  getAppointment(bookingid:number):Observable<Appointment>
  {
    return this.http.get<Appointment>(`http://localhost:1997/appointment/getappointment/${bookingid}`);
  }

  getAllAppointment():Observable<Appointment[]>{
    return this.http.get<Appointment[]>("http://localhost:1997/appointment/allappointment");
  }
}