import { TicketStatus } from "../enums/TicketStatus";
import { TicketPriority } from "../enums/TicketPriority";

export class Ticket{
    
    private __id: string;
    private __ticketNumber: string;
    private __title: string;
    private __description: string;
    private __status: TicketStatus;
    private __priority: TicketPriority;
    private __assigneedId: string | null;
    private __tags: string[];
    private __attachments: string[];
    private __watchers: string[];
    private __dueDate: string | null;
    private __createdAt: string;

}