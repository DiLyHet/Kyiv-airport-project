export const getCurrentFormattedDate = (): string => {
    const today = new Date();
    const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);
    const day = formatNumber(today.getDate());
    const month = formatNumber(today.getMonth() + 1);
    const year = today.getFullYear();
    return `${year}-${month}-${day}`;
};

export const formatNumber = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

export const getPreviousDate = (currentDate: string): string => {
    const [year, month, day] = currentDate.split("-").map(Number);
    const prevDate = new Date(year, month - 1, day);
    prevDate.setDate(prevDate.getDate() - 1);
    const prevDay = formatNumber(prevDate.getDate());
    const prevMonth = formatNumber(prevDate.getMonth() + 1);
    const prevYear = prevDate.getFullYear();
    return `${prevYear}-${prevMonth}-${prevDay}`;
};

export const getNextDate = (currentDate: string): string => {
    const [year, month, day] = currentDate.split("-").map(Number);
    const nextDate = new Date(year, month - 1, day);
    nextDate.setDate(nextDate.getDate() + 1);
    const nextDay = formatNumber(nextDate.getDate());
    const nextMonth = formatNumber(nextDate.getMonth() + 1);
    const nextYear = nextDate.getFullYear();
    return `${nextYear}-${nextMonth}-${nextDay}`;
};
