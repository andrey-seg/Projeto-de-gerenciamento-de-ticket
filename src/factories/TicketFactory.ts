import { Ticket } from "../models/Ticket";

export abstract class TicketFactory{

    abstract createTicket(ownerName: string): Ticket;

    protected validateOwnerName(ownerName: string): void{
        if(!ownerName || ownerName.trim() === ""){
            throw new Error(`O nome do titular é obrigatorio.`)
        }
    }
}