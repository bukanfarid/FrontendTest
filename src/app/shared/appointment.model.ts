export class Appointment {
    AppointmentId:string;
    AppointmentDateTime:string;
    AppointmentCancelDate?:string;

    constructor() {
        this.AppointmentId="";
        this.AppointmentDateTime="";
    }
}
