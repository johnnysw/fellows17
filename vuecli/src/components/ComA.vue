<template>
    <div>
        <h3 @click="$emit('aa','我是compnonetA')">我是compnonetA</h3>
        <slot name="content">
         <p>aaaa</p>
        </slot>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>