export class Owner {
   OwnerId:string;
   FirstName: string;
   LastName: string;
   PreferedName: string;
   IsOptInForNotif: boolean;
   IsNew:boolean;
     
    constructor() {
      this.OwnerId = "";
      this.FirstName = "";
      this.LastName = "";
      this.PreferedName = "";
      this.IsOptInForNotif = true;
      this.IsNew = true;
    }
}
