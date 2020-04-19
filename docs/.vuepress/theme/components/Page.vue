<template>
  <main class="page">
    <slot name="top" />
    <Content class="theme-default-content" />
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
  // padding-bottom 2rem
  display flex
  flex-direction column
  justify-content center
  // height 100vh
</style>
