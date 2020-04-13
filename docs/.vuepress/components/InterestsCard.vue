<template>
<div>
    Hello
    <slot name="icon" class="icon"></slot>
    <slot name="description" class="description"></slot>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="css" scoped>
.icon {
    padding: 10px;
}
</style>