<template>
    <div>
        <h2>页面走丢了。。。。</h2>
    </div>
</template>

<script>
    export default {
        methods:{
            
        },
        beforeRouteEnter: (to, from, next) => {
            console.log('去哪。。。',to);
            console.log('从哪来',from);
            next();
        }
        
    }
</script>

<style scoped>

</style>