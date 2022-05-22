export default {
    async pushToAddCalendar({ commit }, payload) {
        return commit('PUSH_ADD_CALENDAR', payload);
    },
    async resetAddCalendar({ commit }){
        return commit('RESET_ADD_CALENDAR')
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
    async setAddCalendarPrice({ commit }, payload) {
        return commit('SET_ADD_CALENDAR_PRICE', payload)
    },
    async prepareToPostDays({ state, commit }) {
        return commit('SET_HOUR_AND_PRICE_TO_DAYS')
    },
    async setLoadedCalendarYear({ state, commit }, year) {
        return commit('SET_YEAR_LOADED_CALENDAR', year)
    },
    async setselectedMonth({ state, commit }, month) {
        return commit('SET_MONTH_LOADED_CALENDAR', month)
    },
    async setLoadedCalendarDates({ state, commit }, payload) {
        return commit('SET_DATES_LOADED_CALENDAR', payload)
    },
    async fetchLoadedCalendarDates({ state, commit }, educatorId) {
        try {
            const { data } = await this.$axios.get(
                `/calendars/educators/${educatorId}`,
                {
                    params: {
                        order_by: "date",
                        order: "ASC",
                        year: state.loadedCalendar.year,
                        month: state.selectedMonth,
                    },
                }
            );
            return commit('SET_DATES_LOADED_CALENDAR', data)
        } catch (error) {
            console.error(error);
        }
    }
}