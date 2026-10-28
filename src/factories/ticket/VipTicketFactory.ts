import { SeatLimiter } from "../../common/SeatLimiter";
import { TicketType } from "../../enums/TicketType";
import { Ticket } from "../../models/Ticket";
import { TicketFactory } from "./TicketFactory";

export class VipTicketFactory extends TicketFactory{

    private readonly __basePrice: number;
    private readonly __seatLimiter: SeatLimiter;

    constructor(basePrice: number, maxCapacity: number){
        
        super();

        this.__basePrice = basePrice;
        this.__seatLimiter = new SeatLimiter(maxCapacity, "V");
    }

    createTicket(ownerName: string): Ticket {
        
        this.validateOwnerName(ownerName);
        const seatNumber = this.__seatLimiter.generateSeatNumber();
        return new Ticket(TicketType.VIP, this.__basePrice, ownerName, seatNumber);
    }

    getRemaningSeats(): number{
        return this.__seatLimiter.getRemaningSeats();
    }
}

/**
 * ! Está factory serve para gerar apenas geração de tickets vip
 * 
 * * para utilizar serve para gerar tickets vip.
 * * Utilize com createTicket e passe o ownerName.
 */