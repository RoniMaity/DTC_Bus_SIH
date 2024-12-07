<template>
  <q-page class="body">
    <div class="top">
      <q-img src="https://upload.wikimedia.org/wikipedia/hi/f/fb/Delhi_Transport_Corporation_logo.png" alt="Logo"
        class="logo" height="50px" contain />
      <div class="company-info">
        <p class="company-name">Delhi Transport Corporation</p>
        <p class="government-info">Government of NTC of Delhi</p>
      </div>
      <div class="language-selector">
        <q-btn flat label="हिन्दी" @click="switchToHindi" />
        <q-separator vertical />
        <q-btn flat label="English" @click="switchToEnglish" />
        <q-separator vertical />
        <q-btn flat label="Passenger" />
        <q-separator vertical />
        <q-btn flat label="Administrator" />
      </div>
    </div>

    <!-- Navbar -->
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>Delhi Transport Corporation</q-toolbar-title>
        <q-btn flat label="Home" />
        <q-btn flat label="About Us" />
        <q-btn flat label="Helpline No." />
        <q-btn flat label="Login" />
        <q-btn flat label="SignUp" />
        <q-btn flat icon="menu" @click="openNav" />
      </q-toolbar>
    </q-header>

    <!-- Side Navigation -->
    <q-drawer v-model="sidenavOpen" side="left" overlay>
      <q-list>
        <q-item clickable>
          <q-item-section>History</q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>Contact us</q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>About us</q-item-section>
        </q-item>
        <q-item clickable>
          <q-item-section>Feedback</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <!-- Hero Image and Search -->
    <div class="hero-image">
      <div class="search-container">
        <q-input v-model="source" label="Source" class="search-input" />
        <q-btn flat label="Swap" @click="swapLocations" class="swap-button" />
        <q-input v-model="destination" label="Destination" class="search-input" />
        <q-input v-model="busNumber" label="Bus no." class="search-input" />
        <q-btn label="Search" @click="searchBus" class="search-button" />
      </div>
    </div>

    <!-- Popular Destinations -->
    <h2 class="pop-heading">Popular places in Delhi...</h2>
    <q-carousel control-color="primary" navigation>
      <q-carousel-slide v-for="place in popularPlaces" :key="place.name" :name="place.name" :img-src="place.image">
        <div class="destination-text">{{ place.name }}</div>
      </q-carousel-slide>
    </q-carousel>

    <!-- Footer -->
    <q-footer>
      <q-toolbar>
        <q-btn flat label="Contact us" />
        <q-btn flat label="Helpline No." />
        <q-btn flat label="About Us" />
        <q-btn flat label="Home" />
        <q-btn flat label="Feedback" />
      </q-toolbar>
      <div class="footer-content">
        <div class="footer-center">
          <p>Contact Us:</p>
          <ul>
            <li><strong>Phone:</strong> +91 123 456 7890</li>
            <li><strong>Email:</strong> support@dtc.gov.in</li>
            <li><strong>Address:</strong> DTC Headquarters, Delhi, India</li>
          </ul>
        </div>
        <div class="map-container">
          <div id="map"></div>
        </div>
      </div>
      <div class="social-links">
        <p>Follow Us:</p>
        <ul>
          <li><a href="" target="_blank">Facebook</a></li>
          <li><a href="" target="_blank">Twitter</a></li>
          <li><a href="" target="_blank">Instagram</a></li>
        </ul>
      </div>
    </q-footer>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const sidenavOpen = ref(false);
const source = ref('');
const destination = ref('');
const busNumber = ref('');
const popularPlaces = [
  {
    name: 'Lotus Temple',
    image: 'https://live.staticflickr.com/1512/24704448786_1c53078fa3_b.jpg',
  },
  {
    name: 'Qutub Minar',
    image:
      'https://imgs.search.brave.com/Bdz-3ThM-JuUtykv2Hdo8u4yMPv5M23NpN36wh56z4g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzNmL1F1dHViX01p/bmFyX3dpdGhfdHdv/X2JpcmRzLmpwZw',
  },
  {
    name: 'India Gate',
    image:
      'https://t4.ftcdn.net/jpg/05/97/78/41/360_F_597784113_nKSChMeJZ6clNK29nPn07KqtEm4VOUgu.jpg',
  },
];

const openNav = () => {
  sidenavOpen.value = true;
};

const closeNav = () => {
  sidenavOpen.value = false;
};

const switchToHindi = () => {
  console.log('Switching to Hindi');
};

const switchToEnglish = () => {
  console.log('Switching to English');
};

const swapLocations = () => {
  cd
  const temp = source.value;
  source.value = destination.value;
  destination.value = temp;
};

const searchBus = () => {
  if (source.value && destination.value && busNumber.value) {
    alert(`Searching for buses from ${source.value} to ${destination.value} (Bus No: ${busNumber.value})`);
  } else {
    alert('Please fill out all fields!');
  }
};
</script>
<style scoped>
.body {
  background-image: url('@/assets/background1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding: 20px;
  display: flex;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  border-radius: 10px;
}

.top img {
  height: 50px;
  object-fit: contain;
}

.company-info {
  float: left;
}

.company-name {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin: 0;
}

.language-selector {
  display: flex;
  align-items: center;
}

.language-selector q-btn {
  margin: 0 5px;
}

.topnav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #00796b;
  padding: 10px;
}

.topnav a {
  color: white;
  text-decoration: none;
  margin-right: 15px;
  font-weight: bold;
}

.topnav a:hover {
  color: #80cbc4;
}

.topnav .login {
  font-weight: bold;
  padding-right: 10px;
}

.topnav .hamburger {
  font-size: 30px;
  cursor: pointer;
  color: white;
}

.hero-image {
  background-image: url('https://etimg.etb2bimg.com/photo/106277723.cms');
  height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.search-container {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 30px 50px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
}

.search-input {
  margin: 15px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;
}

.search-button {
  font-size: medium;
  padding: 15px 40px;
  border-radius: 5px;
  border: none;
  background-color: #dd2233;
  color: white;
  cursor: pointer;
  margin-top: 10px;
}

.search-button:hover {
  background-color: #ab1e43;
}

.pop-heading {
  font-size: 24px;
  text-align: center;
  font-family: 'Arial', sans-serif;
  margin-top: 30px;
}

.popular-destinations {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.destination-box {
  background-size: cover;
  background-position: center;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.footer-center {
  width: 40%;
}

.footer-center p {
  font-weight: bold;
}

.footer-center ul {
  list-style-type: none;
  padding: 0;
}

.footer-center ul li {
  margin-bottom: 10px;
}

.social-links {
  text-align: center;
  margin-top: 20px;
}

.social-links p {
  font-weight: bold;
}

.social-links ul {
  list-style-type: none;
  padding: 0;
}

.social-links ul li {
  display: inline;
  margin-right: 10px;
}

.social-links ul li a {
  text-decoration: none;
  color: #00796b;
  font-size: 18px;
}

.social-links ul li a:hover {
  color: #004d40;
}

@media (max-width: 768px) {
  .popular-destinations {
    flex-direction: column;
    align-items: center;
  }

  .search-container {
    padding: 20px;
    width: 90%;
    margin-top: 20px;
  }

  .hero-image {
    height: 300px;
  }
}
</style>