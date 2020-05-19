<template>
  <v-row no-gutters>
    <v-col cols="4">
      <!-- <v-img :src="degree.image" height="200px" class="image"></v-img> -->
      <v-avatar size="200"><v-img :src="degree.image"></v-img></v-avatar>
    </v-col>

    <v-col>
      <v-card class="elevation-2" height="200">
        <v-card-title>{{ degree.school }}</v-card-title>
        <v-card-subtitle>{{ degree.title }}</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    degree: Object
  }
};
</script>
