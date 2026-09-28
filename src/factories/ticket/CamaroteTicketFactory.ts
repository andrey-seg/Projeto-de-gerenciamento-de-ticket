import { SeatLimiter } from "../../common/SeatLimiter";
import { Ticket } from "../../models/Ticket";
import { TicketFactory } from "./TicketFactory";
import { TicketType } from "../../enums/TicketType";

export class CamaroteTicketFactory extends TicketFactory{

    private readonly __basePrice: number;
    private readonly __seatLimiter: SeatLimiter;

    constructor(basePrice: number, maxCapacity: number){

        super();

        this.__basePrice = basePrice;
        this.__seatLimiter = new SeatLimiter(maxCapacity, "C");
    }

    createTicket(ownerName: string): Ticket {
        
        this.validateOwnerName(ownerName);
        const seatNumber = this.__seatLimiter.generateSeatNumber();
        return new Ticket(TicketType.VIP_BOX, this.__basePrice, ownerName, seatNumber);
    }

    getRemaningSeats(): number{
        return this.__seatLimiter.getRemaningSeats();
    }
    
}

/**
 * ! Está factory deve ser utilizada para gerar tickets vips com camarotes
 * 
 * * Use esta factory para gerar o ticket para o camarote.
 * * Para utilizar use o createTicket.
 */