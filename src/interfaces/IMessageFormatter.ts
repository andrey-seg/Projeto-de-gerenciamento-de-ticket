import { Ticket } from "../models/Ticket";

export interface MessageFormatter{
    format(ticket: Ticket): string;
}