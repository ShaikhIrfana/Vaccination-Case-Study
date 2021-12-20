import { DatePipe } from "@angular/common";

export class Appointment{
    bookingid:number;
    mobileno:number;
    dateofbooking:DatePipe;
    slot:string;
    //code: number;
    constructor(bookingid:number, mobileno:number, dateofbooking:DatePipe, slot:string){
        this.bookingid = bookingid;
        this.mobileno = mobileno;
        this.dateofbooking = dateofbooking;
        this.slot = slot;
    }
    toString():string{
        return "Id: "+this.bookingid+", Name: "+this.mobileno;
    }
}