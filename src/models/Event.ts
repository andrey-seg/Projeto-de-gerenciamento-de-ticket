import { generateCustomID } from "../common/IdGenerator";
import { EventCategory } from "../enums/EventCategory";
import { Ticket } from "../models/Ticket";
import { formatCurrency } from "../common/formatCurrency";

export class Event{

    private __id: string;
    private __name: string;
    private __category: EventCategory;
    private __tickets: Ticket[];
    private __createdAt: string;

    constructor(name: string, category: EventCategory){

        this.__id = generateCustomID(Event);
        this.__name = name;
        this.__category = category;
        this.__tickets = [];
        this.__createdAt = new Date().toISOString();
    }

    addTicket(ticket: Ticket): boolean{

        const isTicketAlrdeyRegister = this.__tickets.some((t) => t.getId() === ticket.getId());

        if(isTicketAlrdeyRegister){
            throw new Error(`Ticket is alredy registed on.`)
        };

        this.__tickets.push(ticket);
        return true;
    }

    getTotalRevenue(): number{

        return this.__tickets.reduce((total, ticket) => total + ticket.getNonFormatedPrice(), 0);
    }

    getTotalRevenueFormated(): string{

        const total = this.__tickets.reduce((total, ticket) => total + ticket.getNonFormatedPrice(), 0);

        return formatCurrency(total);
    }

    toString(): string{
        return `Id => ${this.__id} | Name => ${this.__name} | Category => ${this.__category} | Tickets => ${this.__tickets} | Created at => ${this.__createdAt}`;
    }

    getId(): string{
        return this.__id;
    }

    getName(): string{
        return this.__name;
    }

    getCategory(): EventCategory{
        return this.__category;
    }

    getCreatedAt(): string{
        return this.__createdAt;
    }

    /**
     * ? Qual a função desta classe? 
     * * Está classe tem como função servir para criar e ter acesso a dados do evento.
     * 
     * ! Atenção usar getTotalRevenue para operções numericas e getTotalRevenueFormated para display.
     * 
     * ! Algumas modificações foram feitas em addTicket para ter um feedBack.
     */
}