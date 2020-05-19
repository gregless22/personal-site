<template>
  <v-content>
    <!-- <router-view /> -->
    <!-- TODO Get all view and put in a card -->
    <About />
    <!-- <Education /> -->
    <Experience />
    <Interests />
    <Skills />
  </v-content>
</template>

<script>
import About from "@/views/About";
// import Education from "@/views/Education";
import Experience from "@/views/Experience";
import Interests from "@/views/Interests";
import Skills from "@/views/Skills";
export default {
  components: {
    About,
    // Education,
    Experience,
    Interests,
    Skills
  }
};
</script>
