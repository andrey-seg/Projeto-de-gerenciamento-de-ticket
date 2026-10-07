import { IApiResponse } from "../interfaces/IApiResponse";
import { TicketRepository } from "../repositories/TicketRepository";
import { MusicShowTicket } from "../factories/eventFamily/MusicShowTicket"
import { TicketType } from "../enums/TicketType";
import { Ticket } from "../models/Ticket";
import { TicketIssuerRegistry } from "../singletons/TicketIssuerRegistry";
import { TicketBuilder } from "../builders/TicketBuilder";
import { PromotionalTicket } from "../prototypes/PromotionalTicket";

export class TicketService{

    constructor(private __ticketRepository: TicketRepository){};

    async issueTicketViaFactory(family: MusicShowTicket, type: TicketType, ownerName: string): Promise<IApiResponse<Ticket>>{

        try{
            
            const ticketFactory = family.createTicketFactory(type);
            const ticket = ticketFactory.createTicket(ownerName);

            const saved = await this.__ticketRepository.save(ticket);

            TicketIssuerRegistry.getInstance().registeIssuance();  
            return { success: true, data: saved };
        }catch(error){
            return { success: false, error: (error as Error).message };
        }
    }

    async issueCustomTicket(builderConfig: {
        type: TicketType,
        ownerName: string,
        price: number,
        seatNumber: string,
        hasParking?: boolean,
        isHalfPrice?: boolean,
    }): Promise<IApiResponse<Ticket>>{

        try{
            const ticket = new TicketBuilder()
            .setType(builderConfig.type)
            .setOwnerName(builderConfig.ownerName)
            .setPrice(builderConfig.price)
            .setSeatNumber(builderConfig.seatNumber)
            .setParking(builderConfig.hasParking ?? false)
            .setHalfPrice(builderConfig.isHalfPrice ?? false)
            .build();

            const saved = await this.__ticketRepository.save(ticket);

            return { success: true, data: saved };
        }catch(error){
            return { success: true, error: (error as Error).message };
        } //? Este metodo recebe o objeto de forma solta e o cria de forma que gere os objetos a de o cria e salva no repositorio.  
    }

    async cloneFromPromotion(
    
        orifinalId: string,
        newOwnerName: string
    ): Promise<IApiResponse<Ticket>>{
        
        try{
            const original = await this.__ticketRepository.findById(orifinalId);

            if(!original){
                return { success: false, error: `Original ticket not found` };
            }

            if(!(original instanceof PromotionalTicket)){
                return { success: false, error: `Ticket cannot be clonned.` };
            }

            const cloned = original.clone(newOwnerName);
            const saved = await this.__ticketRepository.save(cloned);

            return{ success: true, data: saved };
        }catch(error){
            return { success: false, error: (error as Error).message };
        }//? este metodo busca o original pelo id, caso ele não exista ele cria,.
    }

    async getByOwner(ownerName: string): Promise<IApiResponse<Ticket[]>>{

        try{
            const ticket = await this.__ticketRepository.find
        }
    }
}