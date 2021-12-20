export class VaccineInventory {
    push(vaccineInventory: VaccineInventory) {
      throw new Error('Method not implemented.');
    }

    id: number;
    date:string;
    code:number;
    quantity:number;
    constructor(id:number,date:string,code:number,quantity:number){
        this.id=id;
        this.date=date;
        this.code=code;
        this.quantity=quantity;
    }
    toString():string{
        return "Id:"+this.id+",Date:"+this.date+",Code:"+this.code+",Quantity:"+this.quantity;
    }

}