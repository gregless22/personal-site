<template>
  <v-row no-gutters class="layout">
    <v-card class="card">
      <v-card-title>{{ experience.company }}</v-card-title>
      <v-card-subtitle>
        <h3>{{ experience.title }}</h3>
        <h4>{{ experience.location }}</h4>
      </v-card-subtitle>
      <v-card-text
        ><h4>Tasks:</h4>
        {{ experience.tasks }}</v-card-text
      >
      <v-card-text>
        <h4>Achievements:</h4>
        {{ experience.achievements }}</v-card-text
      >
    </v-card>

    <!-- <v-img :src="degree.image" height="200px" class="image"></v-img> -->
    <v-avatar size="200" class="avatar">
      <v-img :src="experience.image"> </v-img>
    </v-avatar>
  </v-row>
</template>

<script>
export default {
  props: {
    experience: Object
  }
};
</script>

<style scoped>
.v-card {
  text-align: left;
}
.avatar {
  margin: 0px 20px 20px 20px;
}
.card {
  width: 410px;
}
.layout {
  justify-content: center;
  flex-wrap: wrap-reverse;
}
</style>
