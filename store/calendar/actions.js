export default {
    async pushToAddCalendar({ commit }, payload) {
        return commit('PUSH_ADD_CALENDAR', payload);
    },
    async removeFromAddCalendar({ commit }, payload) {
        return commit('REMOVE_FROM_ADD_CALENDAR', payload);
    },
    async setAddCalendarMonth({ commit }, payload) {
        return commit('SET_MONTH_ADD_CALENDAR', payload)
    },
    async setAddCalendarStartTime({ commit }, payload) {
        return commit('SET_ADD_CALENDAR_START_TIME', payload)
    },
    async setAddCalendarEndTime({ commit }, payload) {
        return commit('SET_ADD_CALENDAR_END_TIME', payload)
    },
    async setHoursToAddCalendar({ commit }, payload) {
        return commit('SET_HOUR_TO_DAYS', payload)
    },
    async setAddCalendarPrice({ commit }, payload){
        return commit('SET_ADD_CALENDAR_PRICE', payload)
    },
    async postDays({ state, commit }) {
        commit('SET_HOUR_AND_PRICE_TO_DAYS')
        console.log(state.addCalendar)
    }
}