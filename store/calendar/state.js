export const strict = false

export default () => ({
    addCalendar: {
        month: 0,
        days: [],
        start_time: null,
        end_time: null,
        price: 0
    },
    loadCalendarMonth: [
        {
            month: 2,
            days: [
                {
                    start_time: '00:00',
                    end_time: '01:00',
                    price: 10,
                    status: 1
                }
            ]
        }
    ]
})