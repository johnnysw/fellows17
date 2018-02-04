<template>
    <div class="movieList">
        <ul>
            <li v-for="(obj,index) in movies" :key="index">
                <div class="img-box">
                    <img :src="obj.img" alt="">
                </div>
                <div class="info-box">
                    <h2 class="title">{{obj.nm}}</h2>
                    <p>{{obj.ver}}</p>
                    <p>{{obj.star}}</p>
                    <p>{{obj.showInfo}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                movies:[]
            }
        },
        mounted:function(){
            //改变footer top 颜色 标题
            this.$store.commit('change',{bgColr:'rgb(33, 150, 243)',title:'Movie'});
            //axios请求
            axios.get(API_INTERFACE+'http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=10').then((res)=>{
                this.movies = res.data.data.movies;
            }).catch(()=>{
                
            });
            // console.log('dfghjlkjh');

        }
    }
</script>

<style scoped>
    .movieList li{
        display: flex;
        padding: 0.2rem;
        border-bottom:0.02rem solid #ccc;
    }
    .img-box{
        flex-grow: 1;
        width: 0;
        margin-right: 0.2rem;
    }
    .img-box img{
        width:100%;
    }


    .info-box{
        flex-grow: 2;
        width: 0;
    }
    .title{
        font-size: 0.33rem;
        font-weight: bold;
    }
    .info-box p{
        font-size: 0.27rem;
    }

</style>