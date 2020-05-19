<template>
  <v-app-bar app flat>
    <v-toolbar-title>Greg Connolly CV</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- need to work on this spacing etc -->
    <v-row>
      <v-col>
        <v-btn to="/" text dark min-width="150">
          Home
        </v-btn>
        <v-btn to="/about" text dar min-width="150">
          About
        </v-btn>
        <v-btn to="/education" text dar min-width="150">
          Education
        </v-btn>
        <v-btn to="/experience" text dar min-width="150">
          Experience
        </v-btn>
        <v-btn to="/interests" text dar min-width="150">
          Interests
        </v-btn>
        <v-btn to="/skills" text dar min-width="150">
          Skills
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "NavBar",
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style lang="scss" scoped></style>
