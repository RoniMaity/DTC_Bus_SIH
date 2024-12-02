<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
   <!-- <img alt ="dtbusc" src="./assets/delhi_transport_corporation_web_banner_1.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   <!-- <delhi_transport_corporation_web_banner_1/> -->
  <HomePage></HomePage>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HomePage from './components/HomePage.vue';
// import delhi_transport_corporation_web_banner_1 from './assets/delhi_transport_corporation_web_banner_1.png';

export default {
  name: 'App',
  components: {
  HomePage,
  // delhi_transport_corporation_web_banner_1,
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
