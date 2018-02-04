<template>
  <div id="app">
    <top></top>
    <div class="content">
      <router-view/>
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import rem from '@/assets/js/rem';
import reset from '@/assets/css/reset.css';
import top from '@/components/common/Top';
import bottom from '@/components/common/Bottom';
export default {
  name: 'App',
  components: {
    top,
    bottom
  }
}
</script>

<style>
  .content{
    margin: 1rem 0;
  }
</style>
