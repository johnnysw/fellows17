<template>
  <div class="test1">
      <h2>我是测试页面1</h2>
      <router-link to="/subTest1/">subtest1</router-link>
      <!-- <router-link :to="{name:'subTest2',params:{id:2,name:'xx'}}">subtest2</router-link> -->
      <router-link to="/subTest2/a/lisi">subtest2</router-link>
      <router-view></router-view>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .test1{
    height: 300px;
    background: #ff0000;
  }

</style>