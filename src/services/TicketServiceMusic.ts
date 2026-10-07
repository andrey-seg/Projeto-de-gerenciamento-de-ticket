import { IApiResponse } from "../interfaces/IApiResponse";
import { TicketRepository } from "../repositories/TicketRepository";
import { MusicShowTicket } from "../factories/eventFamily/MusicShowTicket"
import { TicketType } from "../enums/TicketType";
import { Ticket } from "../models/Ticket";
import { } from "../singletons/TicketIssuerRegistry";

export class TicketService{

    constructor(private __ticketRepository: TicketRepository){};

    async issueTicketViaFactory(family: MusicShowTicket, type: TicketType, ownerName: string): Promise<IApiResponse<Ticket>>{

        try{
            
            const ticketFactory = family.createTicketFactory(type);
            const ticket = ticketFactory.createTicket(ownerName);

            const saved = await this.__ticketRepository.save(ticket);

            TicketIssuerRegistry.getInstance().registerIssuance();  
        }
    }
}