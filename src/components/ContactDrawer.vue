<template>
  <v-navigation-drawer
    width="400"
    v-model="drawer"
    :color="color"
    :src="bg"
    app
    fixed
  >
    <v-container>
      <v-row>
        <v-col>
          <h1>CONTACT</h1>
        </v-col>
      </v-row>
      <span v-for="(list, index) in lists" :key="index">
        <ContactList
          :icon="list.icon"
          :text="list.text"
          :link="list.link"
        ></ContactList>
      </span>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
import ContactList from "@/components/ContactList";
export default {
  components: {
    ContactList
  },
  // TODO clean up all the excess data
  data() {
    return {
      drawer: true,
      color: "primary",
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
