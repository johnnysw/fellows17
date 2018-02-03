<template>
    <div>
        {{$store.state.num}}--
        <!-- {{count}}-- -->
        {{num}}
        <button @click="$store.commit('add')">+1</button>
    </div>
</template>

<script>
    import store from '@/vuex/store';
    import {mapState} from 'vuex'
    export default {
        store,
        /* computed:{
            count(){
                return this.$store.state.num;
            }
        } */
        /* computed:mapState({
            count(state){
                return state.num;
            }
        }) */
        computed:mapState(['num'])

        
        
    }
</script>

<style scoped>

</style>