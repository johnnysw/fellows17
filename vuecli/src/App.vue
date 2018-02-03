<template>
  <div id="app">
    <!-- <button @click="goBack()">上一页</button>
    <button @click="goNext()">下一页</button>
    <button @click="goHome()">首页</button>
    <img src="./assets/logo.png"><br>
    <router-link to="/">首页</router-link>
    <router-link to="/test/">test1</router-link>
    <router-link to="/home/">home</router-link>
    <router-link to="/redirect/5/lisi">redirect to subtest2</router-link>
    <router-link to="/abc">abc</router-link>
    <router-link to="/xyz">error</router-link> -->
    <!-- <router-link to="/homecom">home</router-link> -->
    <!-- <transition name="xx" mode="out in"> -->
      <router-view/>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goNext(){
      this.$router.go(1);
    }
    ,goHome(){
      this.$router.push('/test/');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.xx-enter{
  opacity: 0;
}
.xx-leave{
  opacity: 1;
}
.xx-enter-active{
  transition:opacity 1s;
}
.xx-leave-active{
  transition:opacity 1s;
}
</style>
