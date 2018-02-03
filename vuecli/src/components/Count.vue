<template>
    <div>
        {{$store.state.num}}--
        <!-- {{count}}-- -->
        {{num}}
        --------
        {{count}}
        <button @click="add()">+1</button>
        <button @click="reduce(10)">-1</button> 
        <button @click="actionsAdd()">actions +1</button>           
    </div>
</template>

<script>
    import store from '@/vuex/store';
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex'
    export default {
        store,
        /* computed:{
            count(){
                return this.$store.state.num;
            }
        } */

       /*  computed:mapState({
            count:state=>state.count
        }) */

        /* computed:mapState({
            count(state){
                return state.num;
            }
        }) */
        computed:mapState(['num']),
        
        computed:{
            ...mapState(['num']),
            ...mapGetters(['count'])
            },
        methods:{
            ...mapMutations(['add','reduce']),
            ...mapActions(['actionsAdd'])
        }

        
        
    }
</script>

<style scoped>

</style>