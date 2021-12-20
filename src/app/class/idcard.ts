export class IdCard{
    id:number;
    name:string;
    dob:Date;
    gender:string;
    address:string;
    city:string;
    state:string;
    pincode:string;
    adharNo:number;
    panNo:string;
    

    constructor(searchid:number, searchname:string, searchdob:Date, searchgender:string, searchaddress:string, searchcity:string, searchstate:string,searchpincode:string, searchadharNo:number, searchpanNo:string){
        this.id=searchid;
        this.name = searchname;
        this.dob = searchdob;
        this.gender = searchgender;
        this.address = searchaddress;
        this.city = searchcity;
        this.state = searchstate;
        this.pincode = searchpincode;
        this.adharNo = searchadharNo;
        this.panNo = searchpanNo;


    }

    toString():string{

        return "Id is:"+this.id+"Name is: "+this.name+"Gender is: "+this.gender;  


}
}
