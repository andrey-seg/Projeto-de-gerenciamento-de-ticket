src/
├── common/
│   └── generateId.ts
├── enums/
│   ├── TicketType.ts
│   └── EventCategory.ts
├── interfaces/
│   ├── IApiResponse.ts
│   ├── Repository.ts
│   └── EventFamily.ts
├── models/
│   ├── Ticket.ts
│   └── Event.ts
├── factories/
│   ├── TicketFactory.ts              (Factory Method)
│   ├── PistaTicketFactory.ts
│   ├── VipTicketFactory.ts
│   ├── CamaroteTicketFactory.ts
│   ├── EventFamilyFactory.ts         (Abstract Factory)
│   ├── RockShowFamilyFactory.ts
│   └── CorporateConferenceFamilyFactory.ts
├── builders/
│   └── TicketBuilder.ts              (Builder)
├── prototypes/
│   └── PromotionalTicket.ts          (Prototype)
├── singletons/
│   └── TicketIssuerRegistry.ts       (Singleton)
├── repositories/
│   └── TicketRepository.ts
├── services/
│   └── TicketService.ts
└── tests/
    ├── models/
    ├── factories/
    ├── builders/
    ├── prototypes/
    ├── singletons/
    └── services/ms