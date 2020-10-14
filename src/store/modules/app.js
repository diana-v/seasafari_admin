import Vue from 'vue'
import Vuex from "vuex";
Vue.use(Vuex);

const state = {
    drawer: {
        status: null
    },
};

// getters
const getters = {
    getDrawerStatus: (state) => {
        return state.drawer.status
    },
};

// actions
const actions = {
    changeDrawerStatus({commit, state}) {
        commit('setDrawerStatus', state.drawer.status ? null : true)
    }
};

// mutations
const mutations = {
    setDrawerStatus(state, value) {
        state.drawer.status = value;
    }
};

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})