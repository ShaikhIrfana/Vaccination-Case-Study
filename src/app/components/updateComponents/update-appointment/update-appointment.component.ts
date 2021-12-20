import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Appointment } from 'src/app/class/appointment';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {

  appointmentForm: FormGroup;
  appointment: Appointment[];
  constructor(private fb: FormBuilder, private service: AppointmentService) { 
    this.appointment= new Array();
  }

  ngOnInit(): void {
    console.log("ng on init");
    
    this.appointmentForm=this.fb.group({

      bookingid:['',Validators.required],
      mobileno: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      dateofbooking: ['', Validators.required],
      slot: ['', Validators.required],
    })
  }

  updateAppointment() {
    
    let app:Appointment=this.appointmentForm.value
    
    this.service.updateAppointment(app).subscribe(date => {
      alert("Appointment Details Updated Succesfully")
    })
  }
}
