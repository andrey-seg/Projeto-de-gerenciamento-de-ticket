import { TicketFactory } from "../factories/ticket/TicketFactory";

export interface IVentFamily{
    createTicketFactory(): TicketFactory;
    createNotificationTemplate(): string;
    createMerchandiseTag(): string;
}