import { TicketFactory } from "../factories/ticket/TicketFactory";
import { TicketType } from "../enums/TicketType"

export interface EventFamilyFactory{
    
    createTicketFactory(type: TicketType): TicketFactory;
    createNotificationTemplate(): string;
    createMerchandiseTag(merchan1?: string, merchan2?: string, merchan3?: string, merchan4?: string): string;
}

/**
 * ! Está interface serve padronizar as factorys de musica e corporativo das facotories.
 * 
 * * Implemente a interface para e crie os metodos da mesma.
 * * para utilizar use import { }.
 * 
 * ! disclamer, não utilize em outras classes alem das factories
 */