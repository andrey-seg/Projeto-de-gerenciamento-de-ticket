import { TicketType } from "../enums/TicketType";

export class Ticket{

    private __id: string;
    private __type: TicketType;
    private __price: number;
    private __seatNumber: string;
    private __hasParking: boolean;
    private __isHalfPrice: boolean;
    private __ownerName: string;
    private __createdAt: string;

    constructor(id: string, type: TicketType, price: number, seatNumber: string, hasParking: boolean, isHalfPrice: boolean, ownerName: string, createdAt: string){
        
    }
}