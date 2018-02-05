<template>
    <div class="photo" :style="{background:bg}">
        <!-- {{$route.params.idx}} -->
        <!-- {{$store.state.photoData}} -->

    </div>
</template>

<script>
    export default {
        computed:{
            bg:function(){
                //url(.....jpg)
                // background:#000 url(../jpg) no-repeat center/contain 
                return `#000 url(${this.$store.state.photoData[this.$route.params.idx].src}) no-repeat center/contain`;
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