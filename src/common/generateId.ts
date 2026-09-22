export function generateCustomId<T>(instance: T): string{

    const className = (instance as any).constructor.name.toLowerCase();
    const timeStamp = Date.now();
    const randomNum = Math.floor(Math.random() * 10000000000000000);
    return `${className}-${timeStamp}-${randomNum}`;
};