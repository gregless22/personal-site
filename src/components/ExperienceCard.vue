<template>
  <v-card>
    <v-row no-gutters>
      <v-col cols="4">
        <v-img :src="experience.image" height="200px"></v-img>
      </v-col>
      <v-col cols="1"></v-col>
      <v-col>
        <v-row>
          <v-card-title>{{ experience.school }}</v-card-title>
        </v-row>
        <v-row>
          <v-card-subtitle>{{ experience.title }}</v-card-subtitle>
        </v-row>
      </v-col>
    </v-row></v-card
  >
</template>

<script>
export default {
  props: {
    experience: Object
  }
};
</script>
