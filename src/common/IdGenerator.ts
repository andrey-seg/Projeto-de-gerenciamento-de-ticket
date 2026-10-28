export function generateCustomID<T>(instance: T): string{

    const className = (instance as any).constructor.name.toLowerCase();
    const createAt = Date.now();
    const randomId = Math.floor(Math.random() * 9027097389373128798738749);
    return `${className}-${createAt}-${randomId}`;
}