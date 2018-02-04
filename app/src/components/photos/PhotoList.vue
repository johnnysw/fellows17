<template>
    <div>
        <h2>Photo</h2>
        <h2>Photo</h2>
        <h2>Photo</h2>
        <h2>Photo</h2>
    </div>
</template>

<script>
    export default {
         mounted:function(){
            this.$store.commit('change',{bgColor:'rgb(63, 81, 181)',title:'Movie'});

        }
      
    }
</script>

<style scoped>

</style>