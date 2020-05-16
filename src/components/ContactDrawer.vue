<template>
  <v-navigation-drawer
    width="512"
    v-model="drawer"
    :color="color"
    :expand-on-hover="expandOnHover"
    :mini-variant="miniVariant"
    :permanent="permanent"
    :src="bg"
    app
  >
    <v-container>
      <v-row align-content="center" justify="center">
        <v-col>
          <h1>CONTACT</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <font-awesome-icon :icon="['fas', 'map-marker-alt']" />
          <h3>Location:</h3>
          <h4>Pottsville, NSW</h4>
        </v-col>
      </v-row>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  // TODO clean up all the excess data
  data() {
    return {
      drawer: true,
      color: "primary",
      permanent: true,
      miniVariant: false,
      expandOnHover: false,
      background: true
    };
  },
  computed: {
    bg() {
      return this.background ? "./sidebar.jpg" : undefined;
    }
  }
};
</script>
