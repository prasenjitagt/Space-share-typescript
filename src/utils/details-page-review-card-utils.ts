export const DateToStringConverter = (date: string | Date): string => {
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    // Ensure consistent date parsing
    const isoDate = dateObj.toISOString().split('T')[0]; // Get date in YYYY-MM-DD format

    const options: Intl.DateTimeFormatOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    };

    return new Date(isoDate).toLocaleDateString('en-GB', options); // Format consistently
};
