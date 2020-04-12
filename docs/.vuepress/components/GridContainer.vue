<template>
    <div class="grid-container">
        <slot></slot>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="css" scoped>
    .grid-container {  
        display: grid;
        grid-template-columns: auto auto auto;
        background-color: #2196F3;
        padding: 10px;}
</style>