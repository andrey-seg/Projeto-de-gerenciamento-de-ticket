import { generateCustomID } from "../common/IdGenerator";
import { formatCurrency } from "../common/formatCurrency";
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

    constructor(type: TicketType, price: number, seatNumber: string, hasParking: boolean, isHalfPrice: boolean, ownerName: string){

        this.__id = generateCustomID(Ticket);
        this.__type = type;
        this.__price = price;
        this.__seatNumber = seatNumber;
        this.__hasParking = hasParking;
        this.__isHalfPrice = isHalfPrice
        this.__ownerName = ownerName;
        this.__createdAt = new Date().toISOString();
    }

    applyDiscount(percentage: number): void{

        if(percentage <= 0 || percentage >= 100){
            throw new Error(`Percentage of discount can not be 0% or 100%`);
        };

        if(this.__isHalfPrice === true){
            this.__price = this.__price / 2
        };

        this.__price = this.__price - (percentage / 100);
    }

    toString(): string{
        return `ID => ${this.__id} | type => ${this.__type} | formated Price => ${formatCurrency(this.__price)} | Non formated price => ${this.__price} | Seat Number => ${this.__seatNumber} | Has Parking => ${this.__hasParking} | Is half price? => ${this.__isHalfPrice} | Owner name => ${this.__ownerName} | Created at => ${this.__createdAt}`
    }

    getId(): string{
        return this.__id;
    }

    getType(): TicketType{
        return this.__type;
    }

    getFormatedPrice(): string{
        return formatCurrency(this.__price);
    }

    getNonFormatedPrice(): number{
        return this.__price;
    }

    getSeatNumber(): string{
        return this.__seatNumber;
    }

    getHasParking(): boolean{
        return this.__hasParking;
    }

    getIshalfPrice(): boolean{
        return this.__isHalfPrice;
    }

    getOwnerName(): string{
        return this.__ownerName;
    }

    getCreatedAt(): string{
        return this.__createdAt;
    }

    /**
     * ? Qual a função desta classe?
     * 
     * * A função desta classe se trata de gerar o ticket de ingresso para o evento, sendo assim o usuario deve definir quais parametros devem ser ser definidos no contrutor.
     * 
     * !Atenção 
     * ! Está classe possui dois tipos de atributos price, sendo assim para operações númericas utilize o nonFormatedPrice, e para exibir o preço formatado em BRL utilize formatedPrice.
     */
}