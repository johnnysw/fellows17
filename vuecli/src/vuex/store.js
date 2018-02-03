import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    num : 5,
    x:10
}

const mutations = {
    add(state){
        state.num++;
    }
}


export default new Vuex.Store({
    state,
    mutations
});
