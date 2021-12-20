
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Appointment } from 'src/app/class/appointment';
import { AppointmentService } from 'src/app/service/appointment.service';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent implements OnInit {

  appointmentForm: FormGroup;
  appointment: Appointment[];
  isUpdate:boolean=false;
  successMessage1:string;
  id:number;
  successMessage2:string;
  constructor(private fb: FormBuilder, private service: AppointmentService) { 
    this.appointment = new Array();
  }

  ngOnInit() {
    console.log(" ng on init");
    this.appointmentForm = this.fb.group({
      
      mobileno: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      dateofbooking: ['', Validators.required],
      slot: ['', Validators.required],
    });
  }

  saveAppointment(): void {
    
    let app: Appointment=this.appointmentForm.value;
    if(!this.isUpdate){
      this.service.addAppointment(app)
      .subscribe(data => {
        alert("This is your booking id : " + data.bookingid + ". PLEASE KEEP THIS BOOKING ID FOR FUTURE REFERENCE");
        this.id=data.bookingid;
        this.successMessage1="Your Appointment is Booked Successfully";
        this.successMessage2="Your Booking id is "+this.id+". PLEASE KEEP THIS BOOKING ID FOR FUTURE REFERENCE";
        this.service.getAllAppointment().subscribe(apps => {
          this.appointment = apps;
        });
      });
    }

    else{
      this.service.updateAppointment(app).subscribe(data => {
        alert("Your Appointment details are Updated");
        this.service.getAllAppointment().subscribe(apps => {
          this.appointment = apps;
             });
      });
      this.isUpdate=false;
    }
    this.appointmentForm.reset();
  }

  updateAppointment(bookingid: number) {
    let app = this.appointment.find(a => a.bookingid == bookingid)
    this.appointmentForm = this.fb.group({
      mobileno: [app.mobileno, Validators.required], 
      dateofbooking: [app.dateofbooking, Validators.required],
      slot: [app.slot, Validators.required]
    });
    this.isUpdate=true;
  }

  deleteAppointment(bookingid: number) {
    let candelete = confirm(`Are you Sure to Delete Appointment '${bookingid}'`);
    if (candelete==true) {
      this.service.deleteAppointment(bookingid).subscribe(data => {
        alert("Deleted Scuccessfully");
        this.service.getAllAppointment().subscribe(apps => {
          this.appointment = apps;
        });
      });
    }
  }
  getAllAppointment() {
    this.service.getAllAppointment()
    .subscribe(
      data => { this.appointment = data;},
      err => {console.log(err)}  
      );
  }
}