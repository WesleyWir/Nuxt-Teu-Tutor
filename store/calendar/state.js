export const strict = false

export default () => ({
    addCalendar: {
        month: 0,
        days: [],
        start_time: '',
        end_time: '',
        price: 0
    },
    loadedCalendar:
    {
        month: 0,
        year: 0,
        dates: []
    },
    selectedMonth: 0,
    loadedCalendarDates: []
})