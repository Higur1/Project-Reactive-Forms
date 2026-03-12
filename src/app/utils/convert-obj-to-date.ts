export const convertObjToDate = (date: Date): string => {
    const month = padZero(date.getMonth() + 1);
    const day = padZero(date.getDate());
    const year = padZero(date.getFullYear());

    return `${month}/${day}/${year}`;
}

const padZero = (value: number): string => {
    return value < 10 ? `0${value}` : value.toString();
}