<template>
  <v-row no-gutters>
    <v-avatar size="200" class="avatar">
      <v-img :src="degree.image"></v-img>
    </v-avatar>

    <v-card class="elevation-2 card" height="200">
      <v-card-title class="v-card-title">{{ degree.school }}</v-card-title>
      <v-card-subtitle>
        <h3>{{ degree.title }}</h3>
      </v-card-subtitle>
    </v-card>
  </v-row>
</template>

<script>
export default {
  props: {
    degree: Object
  }
};
</script>

<style lang="css" scoped>
.v-card-title {
  text-justify: auto;
}
.avatar {
  margin: 0px 20px;
}
.card {
  min-width: 410px;
}
</style>
