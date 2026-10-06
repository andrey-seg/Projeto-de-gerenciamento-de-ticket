import { TicketType } from "../enums/TicketType";
import { Ticket } from "../models/Ticket";

export class TicketBuilder {

    private __type?: TicketType;
    private __ownerName?: string;
    private __price?: number;
    private __seatNumber?: string;
    private __hasParking: boolean = false;
    private __isHalfPrice: boolean = false;

    setType(type: TicketType): TicketBuilder {
        this.__type = type;
        return this;
    }

    setOwnerName(name: string): TicketBuilder {
        this.__ownerName = name;
        return this;
    }

    setPrice(price: number): TicketBuilder {
        this.__price = price;
        return this;
    }

    setSeatNumber(seat: string): TicketBuilder {
        this.__seatNumber = seat;
        return this;
    }

    setHalfPrice(isHalf: boolean): TicketBuilder {
        this.__isHalfPrice = isHalf;
        return this;
    }

    setParking(hasParking: boolean): TicketBuilder {
        this.__hasParking = hasParking;
        return this;
    }

    build(): Ticket {
        if (this.__type === undefined) {
            throw new Error("O tipo do ingresso é obrigatório.");
        }

        if (!this.__ownerName || this.__ownerName.trim() === "") {
            throw new Error("O nome do titular é obrigatório.");
        }

        if (this.__price === undefined) {
            throw new Error("O preço é obrigatório.");
        }

        if (!this.__seatNumber || this.__seatNumber.trim() === "") {
            throw new Error("O número do assento é obrigatório.");
        }

        return new Ticket(
            this.__type,
            this.__price,
            this.__ownerName,
            this.__seatNumber,
            this.__hasParking,
            this.__isHalfPrice
        );
    }
}

/**
 * ? como funciona está classe builder?
 * 
 * * Builders não matem construtores sendo assim os usuarios deve definir quais os tipos de atributos ele deve e quer definir.
 */