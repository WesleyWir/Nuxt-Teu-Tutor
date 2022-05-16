export default {
    async loadClassType({ state, commit }) {
        let { data } = await this.$axios.get(`/class-types/educators/${this.$auth.user.id}`)
        if (!Boolean(data.length)) {
            return
        }

        const classType = data[0]
        commit('setClassType', classType.type)

        let response = null
        switch (classType.type) {
            case 'both':
                commit('setClassTypeInPerson', true)
                response = await this.$axios.get(`/addresses/educators/${this.$auth.user.id}`);
                commit('setAddress', response.data[0])
                commit('setClassTypeOnline', true)
                response = await this.$axios.get(`/educator-online-tools/${this.$auth.user.id}`);
                for (const tool of response.data) {
                    commit('pushClassOnlineTool', tool.educator_options_tool_id)
                }
                break;
            case 'in_person':
                commit('setClassTypeInPerson', true)
                response = await this.$axios.get(`/addresses/educators/${this.$auth.user.id}`);
                commit('setAddress', response.data[0])
                break;
            case 'online':
                commit('setClassTypeOnline', true)
                response = await this.$axios.get(`/educator-online-tools/${this.$auth.user.id}`);
                for (const tool of response.data) {
                    commit('pushClassOnlineTool', tool.educator_options_tool_id)
                }
                break;
            default:
                break;
        }
    },
    async saveClassType({ state, commit }) {
        if (!state.in_person && !state.online) {
            return
        }
        let type = ''
        if (state.in_person && state.online) {
            type = 'both'
        }else if (state.in_person){
            type = 'in_person'
        }else if (state.online){
            type = 'online'
        }

        await this.$axios.post('/class-types/educators', { type });

        if (state.in_person && state.online) {
            await this.$axios.post('/addresses/educators/', state.address)
            await this.$axios.delete('/educator-online-tools/all/');
            for (const tool of state.onlineTools) {
                await this.$axios.post('/educator-online-tools/', { option_tool: tool })
            }
            return;
        }

        if (state.in_person) {
            await this.$axios.post('/addresses/educators/', state.address)
        }

        if (state.online) {
            await this.$axios.delete('/educator-online-tools/all/');
            for (const tool of state.onlineTools) {
                await this.$axios.post('/educator-online-tools/', { option_tool: tool })
            }
        }
    }
}