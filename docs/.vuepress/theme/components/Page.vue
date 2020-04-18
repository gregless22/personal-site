<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />
    <div v-for="page in pages"></div>
    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from "@theme/components/PageEdit.vue"
import PageNav from "@theme/components/PageNav.vue"

export default {
  components: { PageEdit, PageNav },
  props: ["sidebarItems"],
  data() {
    return {
      pages:[]
    }
  },
  mounted() {
    this.$site.pages(page => {
      return this.pages.push(page)
    })
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  // padding-bottom 2rem
  display flex
  flex-direction column
  justify-content center
  height 100vh
</style>
