export class TicketIssuerRegistry{

    private static __instance: TicketIssuerRegistry;
    private __totalIssued: number = 0;

    private constructor(){} //! construtor privado serve apenas para não ser possivel gerar um novo objeto fora da classe.

    static getInstance(): TicketIssuerRegistry{

        if(!TicketIssuerRegistry.__instance){ //? Qual o motivo? Garante que caso não exista um objeto criado ele ira criar um novo.
            TicketIssuerRegistry.__instance = new TicketIssuerRegistry;
        }

        return TicketIssuerRegistry.__instance;
    }

    registeIssuance(): void{
        this.__totalIssued++;
    }

    getTotalIssued(): number{
        return this.__totalIssued;
    }
}

/**
 * ?  Como funciona?
 * 
 * * nesta classe os static realizam a função de dizer que tal metodo ou classe pertence a apenas TicketIssuerRegistry, sendo assim não e possivel clonar ou gerar uma novo TickeIssuerRegister (Contrutor privado garante isso.).
 * 
 * * Como todos os metodos são privados isso garante que classes externas não possam ter acesso a os metodos desta classe 
 */