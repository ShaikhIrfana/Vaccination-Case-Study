import { DatePipe } from "@angular/common";

export class Member{
    id:number;
    dose1date:DatePipe;
    dose1status:boolean;
    dose2date:DatePipe;
    dose2status:boolean;

    constructor(searchid:number, searchdose1date:DatePipe,  searchdose1status:boolean,  searchdose2date:DatePipe, searchdose2status:boolean){
        this.id=searchid;
        this.dose1date=searchdose1date;
        this.dose1status=searchdose1status;
        this.dose2date=searchdose2date;
        this.dose2status=searchdose2status;
}

    toString():string{

        return "Id is:"+this.id+  "Your dose 1 status is "+ this.dose1status+"1st dose on: "+this.dose1date+
        "Your dose 2 status is "+this.dose2status +"2nd dose date: "+this.dose2date;


}
}