<template>
    <v-touch class="photo" @tap="fn()" @swipeleft="next" @swiperight="prev" :style="{background:bg}">
    </v-touch>
</template>

<script>
//npm install vue-touch@next --save
    import VueTouch from "vue-touch";
    import Vue from 'vue';
    Vue.use(VueTouch,{name:'v-touch'});

    export default {
        data() {
            return {
                idx: this.$route.params.idx
            }
        },

        components:{
            VueTouch
        },
        methods:{
            next(){
                this.idx++;
                if(this.idx == this.$store.state.photoData.length){
                    this.idx = 0;
                }
            },
            prev(){
                this.idx--;
                if(this.idx == -1){
                    this.idx = this.$store.state.photoData.length-1;
                }
            },
            fn(){
                this.$router.push('/photoList');
                event.preventDefault();
            }
        },
        computed:{
            bg:function(){
                //url(.....jpg)
                // background:#000 url(../jpg) no-repeat center/contain 
                return `#000 url(${this.$store.state.photoData[this.idx].src}) no-repeat center/contain`;
            }
        }
        
    }
</script>

<style scoped>
    .photo{
        position: absolute;
        left: 0;
        right: 0;
        top:1rem;
        bottom: 1rem;
    }
</style>