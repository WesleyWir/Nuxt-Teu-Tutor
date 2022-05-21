export default {
    PUSH_ADD_CALENDAR(state, payload){
        state.addCalendar.days.push(payload);
    },
    REMOVE_FROM_ADD_CALENDAR(state, payload){
        state.addCalendar.days.splice(payload.id, 1);
    },
    SET_MONTH_ADD_CALENDAR(state, month){
        state.addCalendar.month = month
    },
    SET_ADD_CALENDAR_START_TIME(state, start_time){
        state.addCalendar.start_time = start_time
    },
    SET_ADD_CALENDAR_END_TIME(state, end_time){
        state.addCalendar.end_time = end_time
    },
    SET_ADD_CALENDAR_PRICE(state, price){
        state.addCalendar.price = price
    },
    SET_HOUR_AND_PRICE_TO_DAYS(state){
        for (const day of state.addCalendar.days) {
            day.start_time = state.addCalendar.start_time
            day.end_time = state.addCalendar.end_time
        }
    },
}