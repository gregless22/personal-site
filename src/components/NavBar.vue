<template>
  <v-app-bar app clipped-left flat>
    <v-toolbar-title>Greg Connolly</v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- need to work on this spacing etc -->
    <v-row>
      <v-col>
        <v-btn to="/" text dark min-width="200">
          Home
        </v-btn>
        <v-btn to="/about" text dar min-width="200">
          About
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
