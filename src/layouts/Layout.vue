<template>
  <div>
    <NavBar></NavBar>
    <ContactDrawer></ContactDrawer>
    <Content></Content>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import ContactDrawer from "@/components/ContactDrawer";
import Content from "@/components/Content";
export default {
  components: {
    NavBar,
    ContactDrawer,
    Content
  }
};
</script>
