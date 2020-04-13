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
        padding: 10px;
        grid-gap: 10px;
        }
</style>