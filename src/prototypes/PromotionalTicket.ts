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
        );
    }
}

/**
 * ? Como funciona o prototype?
 * 
 * * O prototipe funciona usando um objeto que já existe apenas alterando seus paramentros, como foi feito aqui apenas alterando o nome do donmo do ingresso.
 * 
 * * Utilize está classe para criar novos ingressos em precisar gerar mais e mais objetos que terão as mesmas caracteristicas
 */