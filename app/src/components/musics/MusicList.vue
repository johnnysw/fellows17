<template>
    <ul class="musicList">
        <li v-for="(obj,index) in musicList" :key="index">
            <router-link :to="'/musicDetail/'+obj.id">
                <img :src="obj.bg" alt="">
            </router-link>
        </li>
    </ul>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                musicList: []
            }
        },
        mounted:function(){
            this.$store.commit('change',{bgColor:'rgb(0, 150, 136)',title:'Music'});
            //ajax请求数据
            axios.get('/static/data/musiclist.json').then(res=>{
                this.musicList = res.data.albums;
            })


        }
    }
</script>

<style scoped>
    .musicList li{
        width:50%;
        float: left;
    }
    .musicList li img{
        width:100%;
    }

</style>