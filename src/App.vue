<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
   <!-- <img alt ="dtbusc" src="./assets/delhi_transport_corporation_web_banner_1.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
   <!-- <delhi_transport_corporation_web_banner_1/> -->
  <!-- <HomePage></HomePage> -->
  <!-- <h1></h1> -->
<!-- <router-view></router-view> -->
<!-- <HelloWorld> mdscwd</HelloWorld> -->
<!-- <trial /> -->
<!-- <login/> -->
<!-- <help/> -->
<!-- <Schedular></Schedular> -->
<feedback/>
</template>

<script>
// import hello from './components/Ticket_map.vue'
// import Navbar from './components/Navbar.vue'
// import WeatherWidget from './components/WeatherWidget.vue'
// import TimeTable from './components/TimeTable.vue'
// import WeeklySchedule from './components/WeeklySchedule.vue'
// import QuickStats from './components/QuickStats.vue'
// import UpcomingSchedule from './components/UpcomingSchedule.vue'
// import secondpage from './components/secondpage.vue'
// import HelloWorld from './components/HelloWorld.vue'
// import HomePage from './components/HomePage.vue';
// import AboutUs from '/src/components/AboutUs.vue'
// import delhi_transport_corporation_web_banner_1 from './assets/delhi_transport_corporation_web_banner_1.png';
// import Schedular from './components/schedular.vue';

//hello
// Define Vue feature flags globally
global._VUE_PROD_HYDRATION_MISMATCH_DETAILS_ = false;
// import help from './components/help.vue'
import feedback from './components/feedback.vue'
// import trial from './components/trial.vue'
// eslint-disable-next-line
// import login from './components/login.vue'

export default {
  name: 'App',
  components: {
  // HomePage,
  // AboutUs,
  // delhi_transport_corporation_web_banner_1,
  // Schedular,
        // trial,
        // login,
        // help,
        feedback
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
