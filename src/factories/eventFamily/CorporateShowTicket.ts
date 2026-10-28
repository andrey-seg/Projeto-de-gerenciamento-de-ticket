import { EventFamilyFactory } from "../../interfaces/EventFamilyFactory";
import { TicketFactory } from "../ticket/TicketFactory";
import { NormalTicketFactory } from "../ticket/NormalTicketFactory";
import { VipTicketFactory } from "../ticket/VipTicketFactory";
import { CamaroteTicketFactory } from "../ticket/CamaroteTicketFactory";
import { TicketType } from "../../enums/TicketType";

export class CorporateShowTicket implements EventFamilyFactory{

    constructor(

            private readonly __basePrice: number,
            private readonly __maxCapacity: number
        ) {

                if (__basePrice <= 0) {
                    throw new Error("Price must be bigger than 0.");
                }

                if (__maxCapacity <= 0) {
                    throw new Error("Max capacity must be bigger than 0.");
                }
        }

    createTicketFactory(type: TicketType): TicketFactory {
        switch (type) {
            case TicketType.NORMAL:
                
                return new NormalTicketFactory(this.__basePrice * 0.4, this.__maxCapacity);

            case TicketType.VIP:
            
                return new VipTicketFactory(this.__basePrice, Math.floor(this.__maxCapacity * 0.05));

            case TicketType.VIP_BOX:
        
                return new CamaroteTicketFactory(this.__basePrice * 2, Math.floor(this.__maxCapacity * 0.2));

            default:
                throw new Error("Tipo de ingresso inválido para esta família de evento.");
        }
    }

    createNotificationTemplate(): string {
        return `Ingresso para evento confirmado.`
    }

    createMerchandiseTag(merchan1?: string, merchan2?: string, merchan3?: string, merchan4?: string): string {
        
        const items = [merchan1, merchan2, merchan3, merchan4].filter((item): item is string => item !== undefined && item.trim() !== "");

        if (items.length === 0) {
            return "Kit coporativo => não definido";
        }

        return `Kit coporativo => ${items.join(" + ")}`;
    }
}