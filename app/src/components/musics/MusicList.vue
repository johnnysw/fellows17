<template>
    <div>
        <h2>Music</h2>
        <h2>Music</h2>
        <h2>Music</h2>
        <h2>Music</h2>
    </div>
</template>

<script>
    export default {
        mounted:function(){
            this.$store.commit('change',{bgColor:'rgb(0, 150, 136)',title:'Music'});
        }
    }
</script>

<style scoped>

</style>