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
        <div class="load" v-show="isLoad">
            <img src="@/assets/images/loading.gif" alt="">
        </div>
        <div class="end" v-show="isEnd">
            已经到底了~~
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                movies:[],
                isLoad:true,
                isEnd:false,
                flag:true //没有请求
            }
        },
        methods:{
            load(){
                if(this.flag){//当前没有请求的时候才发送
                    this.flag = false;//我正在发请求
                    axios.get(API_INTERFACE+'http://m.maoyan.com/movie/list.json?type=hot&offset='+this.movies.length+'&limit=10').then((res)=>{
                        if(res.data.data.movies.length < 10){
                            this.isEnd = true;
                        }
                        this.movies = [...this.movies,...res.data.data.movies];
                        this.isLoad = false;
                        this.flag = true;
                    }).catch(()=>{
                        console.log('请求失败');
                    });
                }
            }
        },
        mounted:function(){
            //改变footer top 颜色 标题
            this.$store.commit('change',{bgColr:'rgb(33, 150, 243)',title:'Movie'});
            //axios请求
            this.load();

            window.onscroll = () => {
                //滚动条滚动高度（页面上）
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                //可视区高度
                var clientHeight = document.documentElement.clientHeight;
                //整个页面的高度
                var scrollHeight = document.documentElement.scrollHeight;
                if(scrollTop + clientHeight == scrollHeight){
                    //isEnd ==  true 数据加完完  判断到达底部 
                    if(!this.isEnd){//数据没有加载完 再发请求 loading show
                        this.load();
                        this.isLoad = true;
                    } 
                }
          
          }
            
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
    .load{
        text-align:center;
    }
    .end{
        text-align:center;
    }

</style>