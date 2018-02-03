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
    },
    reduce(state,n){
        state.num-=n;
    }
}

const getters = {
    count(state){
        return state.num +100;
    }
}

const actions = {
    actionsAdd({commit}){
        setTimeout(function(){
            commit('add');
        },1000)
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});
