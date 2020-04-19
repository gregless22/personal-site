<template>
  <main class="page">
    <slot name="top" />
    <Content slot-key="about" class="theme-default-content" />
    <Content slot-key="experience" class="theme-default-content" />
    <slot name="bottom" />
  </main>
</template>

<script>

export default {
  props: ["sidebarItems"],
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  display flex
  flex-direction column
  justify-content center
</style>
