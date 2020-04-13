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
        padding: 20px;
        grid-gap: 30px;
        }
</style>