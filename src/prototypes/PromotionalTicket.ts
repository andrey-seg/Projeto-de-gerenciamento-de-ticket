import { IClonable } from "../interfaces/IClonable"
import { Ticket } from "../models/Ticket";

export class PromotionalTicket extends Ticket implements IClonable<PromotionalTicket>{
    
    clone(newOwnerName?: string): PromotionalTicket {
        
        return new PromotionalTicket(
            this.getType(),
            this.getNonFormatedPrice(),
            newOwnerName ?? this.getOwnerName(), 
            this.getSeatNumber(),
            this.getHasParking(),
            this.getIshalfPrice()
        )
    }
}