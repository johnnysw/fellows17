<template>
    <div>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
        <h2>Movie</h2>
    </div>
</template>

<script>
    export default {
        mounted:function(){
            this.$store.commit('change','rgb(33, 150, 243)');
        }
    }
</script>

<style scoped>

</style>