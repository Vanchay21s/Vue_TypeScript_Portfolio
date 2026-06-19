<template>
  <article class="w-full flex ">
  <SideMenu />
  <div class="w-full"> 
    <router-view></router-view>
  </div>
  </article>
</template>

<script>
import Footer from "./components/Footer.vue";
import SideMenu from "./components/SideMenu.vue";

export default {
  name: "App",
  components: {
    SideMenu,
    Footer,
  },
};
</script>
