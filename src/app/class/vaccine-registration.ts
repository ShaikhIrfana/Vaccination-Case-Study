export class VaccineRegistration {
    /*push(reg: VaccineRegistration) {
      throw new Error('Method not implemented.');
    }*/

    mobileno: number;
    dateofregistration:string;

    constructor(no:number,dateofregistration:string){
        this.mobileno=no;
        this.dateofregistration=dateofregistration;
    }
    toString():string{
        return "Mobileno:"+this.mobileno+",Dateofregistration:"+this.dateofregistration;
    }

}