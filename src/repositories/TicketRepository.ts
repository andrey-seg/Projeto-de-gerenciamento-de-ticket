import { IRepository } from "../interfaces/IRepository";
import { Ticket } from "../models/Ticket";

export class TicketRepository implements IRepository<Ticket>{
     
    constructor(private __ticket: Ticket[] = []){};

    findById(id: string): Promise<Ticket | null> {
        
        return new Promise((resolve) => {

            const findTicketById = this.__ticket.find((t) => t.getId() === id);

            resolve(findTicketById ?? null);
        });
    }

    findAll(): Promise<Ticket[]> {
        
        return new Promise((resolve) => {
            return this.__ticket;
        });
    }

    save(entity: Ticket): Promise<Ticket> {
        
        return new Promise((resolve) => {

            this.__ticket.push(entity);
            resolve(entity);
            return;
        });
    }

    delete(id: string): Promise<boolean> {
        
        return new Promise((resolve) => {

            const findTicketIndex = this.__ticket.findIndex((t) => t.getId() === id);

            if(findTicketIndex === -1){
                resolve( false );
                return
            }

            this.__ticket.splice(findTicketIndex, 1);
            resolve( true );
            return
        })
    }

    findByOwner(ownerName: string): Promise<Ticket | null>{

        return new Promise((resolve) => {

            const findByOwnerName = this.__ticket.find((t) => t.getOwnerName() === ownerName);

            if(!findByOwnerName){
                resolve( null );
                return;
            }

            resolve( findByOwnerName );
            return;
        })
    }
}