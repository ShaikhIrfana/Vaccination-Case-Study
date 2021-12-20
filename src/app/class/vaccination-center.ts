export class VaccinationCenter{
    code:number;
    centername:string;
    address:string;
    city:string;
    state:string;
    pincode:string
    constructor(code:number, centername:string,address:string, city:string,state:string,pincode:string){
        this.code=code;
        this.centername=centername;
        this.city=city;
        this.address=address;
        this.state=state;
        this.pincode=pincode;
    }
    toString():string{
        return "code: "+this.code+", Name: "+this.centername+", address:"+this.address+", city:"+this.city+",state:"+this.state+", pincode:"+this.pincode;
    }
}