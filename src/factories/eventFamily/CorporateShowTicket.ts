import { EventFamilyFactory } from "../../interfaces/EventFamilyFactory";
import { TicketFactory } from "../ticket/TicketFactory";

export class CorporateShowTicket implements EventFamilyFactory{

    private readonly __basePrice: number;
    private readonly __maxCapacity: number;

    constructor()
}