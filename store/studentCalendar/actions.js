export default {
    async setEducatorId({ commit }, payload) {
        return commit('SET_EDUCATOR_ID', payload);
    },
    async setEducatorContactMeansId({ commit }, payload) {
        return commit('SET_EDUCATOR_CONTACT_CONTACT_MEANS_ID', payload);
    },
    async setStudentCalendarNote({ commit }, payload) {
        return commit('SET_STUDENT_CALENDAR_NOTE', payload);
    },
    async addClassCalendar({ commit }, payload) {
        try {
            const { data } = await this.$axios.get(`/calendars/${payload.educator_calendar_id}`)
            payload.date = data
        } catch ({ response }) {
            return this.catchReponseError(response);
        }
        return commit('ADD_CLASS_CALENDAR', payload)
    },
    async removeFromClassCalendar({ commit }, payload) {
        return commit('REMOVE_CLASS_CALENDAR', payload)
    },
    async hasClassCalendarSelected({ state }, educator_calendar_id){
        for (const item of state.class_calendars) {
            if(item.educator_calendar_id == educator_calendar_id){
                return true;
            }
        }
        return false;
    },
    async updateClassCalendarNote({ commit }, payload){
        return commit('UPDATE_CLASS_CALENDAR_NOTE', payload)
    }
}