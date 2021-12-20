export class Admins{
    adminId:number;
    firstName:string;
    lastName:string;
    username:string;
    password:string;
    constructor(adminId:number,firstName:string,lastName:string,username:string,password:string){
        this.adminId=adminId;
        this.firstName=firstName;
        this.lastName=lastName;
        this.password=password;
        this.username=username;
    }
    toString():string{
        return "Id: "+this.adminId+" First Name: "+this.firstName+" Last Name: "+this.lastName+" Password: "+this.password+" User Name: "+this.username;
    }

}