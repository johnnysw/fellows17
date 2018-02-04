<template>
    <div>
        <div class="detail-box">
            <div class="detail-img"><img :src="details.img" alt=""></div>
            <div class="detail-info">
                <h2>{{details.nm}}</h2>
                <p>{{details.sc}}分</p>
                <p>{{details.cat}}</p>
                <p>{{details.src}}/{{details.pn}}</p>
                <p>{{details.rt}}</p>
            </div>
        </div>
        <div class="detail-content">
            <h1>主演</h1>
            <p>{{details.star}}</p>
        </div>
        <div class="detail-content">
            <h1>简介</h1>
            <div v-html="details.dra"></div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                details: {}
            }
        },
        
        mounted:function(){
            axios.get(API_INTERFACE+'http://m.maoyan.com/movie/'+this.$route.params.id+'.json').then((res)=>{
                this.details = res.data.data.MovieDetailModel
            }).catch(()=>{
                console.log('请求失败');
            });
        }
    }
</script>

<style scoped>
    .detail-box{
        display: flex;
        margin: 0 0.2rem;
        border-bottom:1px solid #ccc;
    }
    .detail-img{
        flex-grow: 1;
        width: 0;
        margin-right: 0.2rem;
    }
    .detail-info{
        flex-grow: 2;
        width: 0;
    }
    .detail-info h2{
        text-align: center;
        font-size:0.4rem;
        font-weight: bold;
    }
    h1{
        text-align: center;
        font-size: 0.43rem;
    }
    .detail-content{
        margin: 0.2rem;
        border-bottom: 1px solid #ccc;
    }

</style>