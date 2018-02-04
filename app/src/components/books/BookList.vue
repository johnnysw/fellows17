<template>
    <div>
        <h2>Book</h2>
        <h2>Book</h2>
        <h2>Book</h2>
        <h2>Book</h2>
    </div>
</template>

<script>
    export default {
        mounted:function(){
            this.$store.commit('change',{bgColor:'rgb(121, 85, 72)',title:'Movie'});
        }
       
    }
</script>

<style scoped>

</style>