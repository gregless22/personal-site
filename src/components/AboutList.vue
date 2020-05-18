<template>
  <v-row>
    <span class="icon">
      <font-awesome-icon :icon="icon" />
    </span>
    <a :href="link">
      <h4>{{ text }}</h4>
    </a>
  </v-row>
</template>

<script>
export default {
  props: {
    icon: Array,
    heading: String,
    text: String,
    link: String
  }
};
</script>

<style scoped>
.icon {
  margin: 0px 10px;
}
</style>
