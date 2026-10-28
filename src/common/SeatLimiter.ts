export class SeatLimiter{

    private __totalSeats: number = 0;

    constructor(private readonly __maxCapacity: number, private readonly __prefix: string){

        if(__maxCapacity <= 0){
            throw new Error(`Capaciti cannot be lower or equal to 0`);
        }
    }

    private __validateCapacity(): void{

        if(this.__totalSeats >= this.__maxCapacity){
            throw new Error(`Limite de ${this.__maxCapacity} atingido`);
        }
    } //! Validador de capacidade deve ser usado para criar os metodos.

    generateSeatNumber(): string{
        this.__validateCapacity();
        this.__totalSeats++;
        return `${this.__prefix}-=-${this.__totalSeats}`;
    }//! A criar um acento use este metodo.

    getTotalSeat(): number{
        return this.__totalSeats;
    }

    getRemaningSeats(): number{
        return this.__maxCapacity - this.__totalSeats;
    }
}

/**
 * ! Está classe foi criada para apos durante o desenvolvimento das factorys se foi percebido que não existia um gerador de número de acentos e um definidor de acentos maximos.
 * 
 * ? Ao utilizar leia a classe para melhor concepsão de seus metodos.
 */