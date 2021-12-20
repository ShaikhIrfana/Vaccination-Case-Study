
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Appointment } from 'src/app/class/appointment';
import { AppointmentService } from 'src/app/service/appointment.service';



@Component({
  selector: 'app-get-appointment',
  templateUrl: './get-appointment.component.html',
  styleUrls: ['./get-appointment.component.css']
})
export class GetAppointmentComponent implements OnInit {

  appointmentForm: FormGroup;
  appointment: Appointment[];
  apps: Appointment;
  message:string;
  
  constructor(private fb: FormBuilder, private service: AppointmentService) { 
    this.appointment = new Array();
    //this.apps;
  }

  ngOnInit(): void {
    console.log("ng on init");
    //console.log(this.route.snapshot.params['id'])

    this.appointmentForm=this.fb.group({

      bookingid:['',Validators.required],

    })
  }
  getAppointmentById() {
    
    let app:Appointment=this.appointmentForm.value
    this.service.getAppointment(app.bookingid).subscribe(data => 
      {
        if(app.bookingid==data.bookingid){
      
      this.apps= data;
      //console.log("data is" +JSON.stringify(data))
        }
        else {
          this.message="error";
         }
    },
    err => {console.log(err)});
  }

  deleteAppointment() {
    let app:Appointment=this.appointmentForm.value
    let candelete = confirm(`Are you Sure to Delete Appointment '${app.bookingid}'`);
    if (candelete==true) {
      this.service.deleteAppointment(app.bookingid).subscribe(data => {
        alert("Deleted Scuccessfully");
      });
    }
  }

  updateAppointment() {
    alert("entering update")
    let app:Appointment=this.appointmentForm.value
    alert("value ")
    let ap = this.appointment.find(a => a.bookingid ==app. bookingid)
    this.appointmentForm = this.fb.group({
      bookingid: [app.bookingid, Validators.required],
      mobileno: [ap.mobileno, Validators.required], 
      dateofbooking: [ap.dateofbooking, Validators.required],
      slot: [ap.slot, Validators.required]
    });
  }
}
