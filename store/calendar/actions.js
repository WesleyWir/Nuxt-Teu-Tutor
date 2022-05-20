export default {
    async pushToAddCalendar({ commit }, payload){
        return commit('PUSH_ADD_CALENDAR', payload);
    },
    async removeFromAddCalendar({ commit }, payload){
        return commit('REMOVE_FROM_ADD_CALENDAR', payload);
    }
}