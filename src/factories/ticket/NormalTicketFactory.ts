import { TicketFactory } from "./TicketFactory";
import { Ticket } from "../../models/Ticket";
import { TicketType } from "../../enums/TicketType";
import { SeatLimiter } from "../../common/SeatLimiter";

export class NormalTicketFactory extends TicketFactory{
    private readonly __basePrice: number = 100;
    private readonly __seatLimiter: SeatLimiter;

    constructor(basePrice: number,maxCapacity: number){
        super();

        this.__basePrice = basePrice;
        this.__seatLimiter = new SeatLimiter(maxCapacity, "p");
    }

    createTicket(ownerName: string): Ticket {
        this.validateOwnerName(ownerName);
       
        const seatNumber = this.__seatLimiter.generateSeatNumber();
        return new Ticket(TicketType.NORMAL, this.__basePrice, ownerName, seatNumber);
    }

    getRemaningSets(): number{
        return this.__seatLimiter.getRemaningSeats();
    }
}

/**
 * ! Está classe deve ser utilizada para gerar ingressos do tipo Normal
 * 
 * * para utilizar está está factory deve ser utilizada para gerar ingresso do tipo normal com o metodo create ticket.
 * 
 * * para utilizar use o import
 */