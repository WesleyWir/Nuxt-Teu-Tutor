export default {
    PUSH_ADD_CALENDAR(state, payload){
        state.addCalendar.days.push(payload);
    },
    REMOVE_FROM_ADD_CALENDAR(state, payload){
        state.addCalendar.days.splice(payload.id, 1);
    }
}