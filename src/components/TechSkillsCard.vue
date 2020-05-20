<template>
  <v-card class="tech-skills-card">
    <v-avatar size="75" class="margin"
      ><v-img :src="skill.logo"></v-img
    ></v-avatar>
    <v-card-title class="d-block">
      {{ skill.title }}
    </v-card-title>
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
.tech-skills-card {
  margin: 10px;
  min-width: 150px;
  text-align: center;
}
.d-block {
  display: block;
}
.margin {
  margin: 5px;
}
</style>
