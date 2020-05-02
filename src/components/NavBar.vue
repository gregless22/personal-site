<template>
  <v-app-bar app clipped-left flat dark>
    <v-toolbar-title>Greg Connolly</v-toolbar-title>
    <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
    <v-spacer></v-spacer>
    <v-tabs>
      <v-tab>
        <router-link to="/">Home</router-link>
      </v-tab>
      <v-tab>
        <router-link to="/about">About</router-link>
      </v-tab>
    </v-tabs>
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
