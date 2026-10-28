import { payementStatus } from "../enums/paymentStatus";
import { PaymentTicket } from "../models/PaymentTicket";

export class SendPaymentConfirmation{

    constructor( private readonly __paymentTicket: PaymentTicket){};

    sendConfirmationEmail(email: string): boolean{

        if(this.__paymentTicket.getStatus() === payementStatus.NOT_PAYED){
            throw new Error(`Payment status is mark as Not Payed`);
        }

        console.log(`Email send to ${this.__paymentTicket.getPayerName()} to email ${email}`);
        return true;
    }
}