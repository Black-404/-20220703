<template>
   <router-view></router-view>
</template>
<script>
import mainPage from "./view/mainPage.vue";

export default {
  name: "App",
  setup(){
    
  },
  components: {
    mainPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
