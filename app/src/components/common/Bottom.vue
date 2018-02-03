<template>
    <ul class="com-bottom">
        <li><router-link to="/">电影</router-link></li>
        <li><router-link to="/musicList">音乐</router-link></li>
        <li><router-link to="/bookList">书籍</router-link></li>
        <li><router-link to="/photoList">图片</router-link></li>
    </ul>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .com-bottom{
        height: 1rem;
        background:rgb(33, 150, 243); 
        position: fixed;
        bottom:0;
        left: 0;
        width: 100%;
        display: flex;
    }
    .com-bottom li{
        flex-grow:1;
        line-height: 1rem;
        text-align: center;
        
    }
    .com-bottom li a{
        color: #ccc;
    }


</style>