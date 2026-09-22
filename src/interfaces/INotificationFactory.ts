export interface INotificationFactory{
    createNotifier(): Notifier;
    createFormatter(): MessageFormatter;
}