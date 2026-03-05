export const convertToDateObj = (date: string): Date | null => {

    if (!date) {
        return null;
    }

    const [day, month, year] = date.split('/').map(Number);

    if (isValidDate(month, day, year)) {
        return new Date(year, month - 1, day)
    }

    return null;
}

const isValidDate = (month: number, day: number, year: number): boolean => {
    const date = new Date(year, month - 1, day);

    return (
        date.getMonth() === month - 1 &&
        date.getDate() === day &&
        date.getFullYear() === year
    );
}