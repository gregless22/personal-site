<template>
  <v-content>
    <!-- <router-view /> -->
    Get all view and put in a card
    <Home />
    <About />
  </v-content>
</template>

<script>
import About from "@/views/About";
import Home from "@/views/Home";
export default {
  components: {
    About,
    Home
  }
};
</script>
