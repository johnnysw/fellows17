import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    bgColor:'red'
}

const mutations = {
    change(state,bgColor){
        state.bgColor = bgColor;
    }
}

export default new Vuex.Store({
    state,
    mutations
});