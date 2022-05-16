export default {
    setAddress(state, address){
        state.address = address
    },
    setClassTypeInPerson(state, in_person){
        state.in_person = in_person
    },
    setClassTypeOnline(state, online){
        state.online = online
    },
    setCountry(state, country){
        state.address.country = country
    },
    setState(state, stateInitial){
        state.address.state = stateInitial
    },
    setCity(state, city){
        state.address.city = city
    },
    setNeighborhood(state, neighborhood){
        state.address.neighborhood = neighborhood
    },
    setClassType(state, type){
        state.type = type
    },
    setClassOnlineTool(state, tool){
        state.onlineTools = tool
    },
    pushClassOnlineTool(state, tool){
        state.onlineTools.push(tool)
    },
    removeClassOnlineTool(state, tool){
        const index = state.onlineTools.indexOf(parseInt(tool));
        if (index > -1) {
            state.onlineTools.splice(index, 1);
        }
    }
}