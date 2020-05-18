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
    <!-- TODO move down to the center -->

    <v-container>
      <v-row>
        <v-col>
          <h1>CONTACT</h1>
        </v-col>
      </v-row>
      <span v-for="(list, index) in lists" :key="index">
        <AboutList
          :icon="list.icon"
          :text="list.text"
          :link="list.link"
        ></AboutList>
      </span>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
import AboutList from "@/components/AboutList";
export default {
  components: {
    AboutList
  },
  // TODO clean up all the excess data
  data() {
    return {
      drawer: true,
      color: "primary",
      permanent: true,
      miniVariant: false,
      expandOnHover: false,
      background: true,
      lists: [
        {
          icon: ["fas", "map-marker-alt"],
          text: "Pottsville, NSW"
        },
        {
          icon: ["fas", "phone"],
          text: "0456 636 779"
        },
        {
          icon: ["fas", "envelope"],
          text: "gregoryconnolly@gmail.com"
        },
        {
          icon: ["fab", "github"],
          text: "Github",
          link: "https://github.com/gregless22"
        },
        {
          icon: ["fab", "linkedin"],
          text: " LinkedIn",
          link: "www.linkedin.com/in/greg-connolly-0413441b"
        }
      ]
    };
  },
  computed: {
    bg() {
      return this.background ? "./sidebar.jpg" : undefined;
    }
  }
};
</script>
