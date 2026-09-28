import { TicketFactory } from "./TicketFactory";
import { Ticket } from "../models/Ticket";
import { TicketType } from "../enums/TicketType";

export class PistaTicketFactory extends TicketFactory{
    private readonly __basePrice: number = 100;

    createTicket(ownerName: string): Ticket {
        this.validateOwnerName(ownerName);
        return new Ticket(TicketType.NORMAL, ownerName, this.__basePrice)
    }
}