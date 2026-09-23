export const formatCurrency = (value: number, locate: string = 'pt-BR', currency: string = 'BRL'): string => {

    return new Intl.NumberFormat(locate, {
        style: 'currency',
        currency: currency,
        minimumFractionDigits: 2
    }).format(value);
};

