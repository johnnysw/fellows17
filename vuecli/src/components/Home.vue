<template>
    <div>
        {{msg}}
        <com-a @aa="fn">
            <p slot="content">主页面传值aaaa</p>
        </com-a>
        <com-b :title="msg"></com-b>
    </div>
</template>

<script>

    import ComA from '@/components/ComA';
    import ComB from '@/components/ComB';
    export default {
        data() {
            return {
                msg:' 我是home页'
            }
        },
        methods:{
            
            fn(val){
                this.msg = val;
            }
        },
    
        components:{
            ComA,
            ComB
        }

        
    }
</script>

<style scoped>

</style>