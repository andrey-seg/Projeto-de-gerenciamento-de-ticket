export interface INotifier{
    send(message: string, recipient: string): Promise<boolean>;
}