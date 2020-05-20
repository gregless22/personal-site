<template>
  <v-app-bar app flat>
    <v-toolbar-title>Greg Connolly CV</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- need to work on this spacing etc -->
    <v-row>
      <v-col>
        <v-btn to="/" text>
          About
        </v-btn>
        <v-btn to="/education" text>
          Education
        </v-btn>
        <v-btn to="/experience" text>
          Experience
        </v-btn>
        <v-btn to="/interests" text>
          Interests
        </v-btn>
        <v-btn to="/skills" text>
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
