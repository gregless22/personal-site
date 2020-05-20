<template>
  <v-card class="soft-skills-card">
    <v-card-title class="d-block">
      {{ skill.title }}
    </v-card-title>
    <v-card-subtitle>
      {{ skill.example }}
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    skill: Object
  }
};
</script>

<style lang="css" scoped>
.soft-skills-card {
  min-width: 200px;
  margin: 20px;
}
.d-block {
  display: block;
}
</style>
