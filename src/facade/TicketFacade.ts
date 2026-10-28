import { TicketBuilder } from "../builders/TicketBuilder";
import { PaymentTicket } from "../models/PaymentTicket";
import { sendPaymentConfirmation } from "../common/SendPaymetConfirmation";

export class TicketFacade{

    private ticketBuilder = new TicketBuilder();
    private paymentTicket = new PaymentTicket();
    private sendPaymentConfirmation = new sendPaymentConfirmation();

}