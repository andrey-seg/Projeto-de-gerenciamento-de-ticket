import { generateCustomID } from "../common/IdGenerator";
import { formatCurrency } from "../common/formatCurrency";
import { paymentType } from "../enums/paymentType";
import { payementStatus } from "../enums/paymentStatus";

export class PaymentTicket{

    private __id: string;
    private __status: payementStatus;
    private __paymentType: paymentType;
    private __payerName: string;
    private __moneyReciver: string;
    private __price: number;

    constructor(payerName: string, paymentType: paymentType, moneyReciver: string, price: number){

        this.__id = generateCustomID(PaymentTicket);
        this.__status = payementStatus.NOT_PAYED;
        this.__paymentType = paymentType;
        this.__payerName = payerName;
        this.__moneyReciver = moneyReciver;
        this.__price = price < 0 ? 0 : price;
    }

    completePayment(): boolean{

        if(this.__status === payementStatus.PAYED){
            console.log(`Status is alredy payed`);
            return false;
        }

        this.__status = payementStatus.PAYED

        return true;
    }

    calcelPayment(): boolean{

        if(this.__status === payementStatus.NOT_PAYED){
            console.log(`Status is alredy mark as not payed`);
            return false
        }

        this.__status = payementStatus.NOT_PAYED;
        return true;
    }

    toString(): string{
        return `id: ${this.__id} | status: ${this.__status} | payment type: ${this.__paymentType} | payer name: ${this.__payerName} | money reciver: ${this.__moneyReciver} | price: ${this.__price} | formated price: ${formatCurrency(this.__price)}`;
    }

    getId(): string{
        return this.__id;
    }

    getStatus(): payementStatus{
        return this.__status;
    }

    getPaymentType(): paymentType{
        return this.__paymentType;
    }

    getPayerName(): string{
        return this.__payerName;
    }

    getMoneyReciver(): string{
        return this.__moneyReciver;
    }

    getPrice(): number{
        return this.__price;
    }

    getFormatedPrice(): string{
        return formatCurrency(this.__price);
    }
}