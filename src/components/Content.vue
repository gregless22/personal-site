<template>
  <v-content>
    <about />
    <v-divider inset class="divider"></v-divider>
    <timeline />
    <v-divider inset class="divider"></v-divider>
    <skills />
    <v-divider inset class="divider"></v-divider>
    <interests />
  </v-content>
</template>

<script>
import About from "@/views/About";

import Timeline from "@/views/Timeline";
import Interests from "@/views/Interests";
import Skills from "@/views/Skills";
export default {
  components: {
    About,
    Timeline,
    Interests,
    Skills
  }
};
</script>

<style lang="css" scoped>
.divider {
  margin: 100px 30px 100px 30px;
}
</style>
