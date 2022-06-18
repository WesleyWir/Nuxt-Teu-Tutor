export default {
    SET_EDUCATOR_ID(state, id){
        state.educator_id = id
    },
    SET_EDUCATOR_CONTACT_CONTACT_MEANS_ID(state, id){
        state.educator_contact_means_id = id
    },
    SET_STUDENT_CALENDAR_NOTE(state, note){
        state.note = note
    },
    ADD_CLASS_CALENDAR(state, classPayload){
        state.class_calendars.push(classPayload)
    },
    REMOVE_CLASS_CALENDAR(state, educator_calendar_id){
        state.class_calendars = state.class_calendars.filter(item => item.educator_calendar_id !== educator_calendar_id)
    },
    UPDATE_CLASS_CALENDAR_NOTE(state, payload){
        state.class_calendars[payload.index].note = payload.note 
    }
}