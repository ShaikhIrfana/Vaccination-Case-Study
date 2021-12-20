export class Vaccines{
    vaccineId:number;
    description:string;
    vaccineName:string;
    constructor(id:number,desc:string,name:string){
        this.vaccineId=id;
        this.description=desc;
        this.vaccineName=name;
    }
    toString():string{
        return "id: "+this.vaccineId+" description: "+this.description+" name: "+this.vaccineName;
    }
    
}