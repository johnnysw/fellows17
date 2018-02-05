<template>
    <div>
        <aplayer autoplay :music="musicData" :showlrc="true" v-if="isShow"></aplayer>
    </div>
</template>

<script>
    import axios from 'axios';
    import Aplayer from 'vue-aplayer';

    export default {
        data() {
            return {
                musicData: [],
                isShow:false
            }
        },
        components: {
            Aplayer
        },
        mounted:function(){
            axios.get('/static/data/musicdata.json').then(res=>{
                var arr = res.data.musicData;
                for(var i=0; i<arr.length; i++){
                    arr[i].lrc = '/static/'+arr[i].lrc;
                     //解构
                    var {title,author,src:url,musicImgSrc:pic,lrc} = arr[i];
                    //对象属性简写
                    var obj = {title,author,url,pic,lrc}
                    this.musicData.push(obj);
                    // /static/lrc/我要你.lrc
                }
                this.isShow = true;
            })
           
           console.log(this.musicData);
            // title = "就是爱你"


        }
        
    }
</script>

<style scoped>

</style>