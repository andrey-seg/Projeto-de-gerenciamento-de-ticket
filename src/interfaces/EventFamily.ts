import { } from "../factories/EventFamilyFactory";

export interface IVentFamily{
    createTicketFactory(): TicketFactoy;
    createNotificationTemplate(): string;
    createMerchandiseTag(): string;
}