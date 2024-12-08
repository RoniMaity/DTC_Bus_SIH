<template>
  <q-page class="q-pa-none">
    <!-- Hero Image Section -->
    <div class="hero-image q-py-xl">
      <div class="row justify-center q-py-xl q-my-xl">
        <div class="col-10 col-md-6">
          <q-card>
            <q-item>
              <q-item-section>
                <q-input outlined dense v-model="source" placeholder="Source" />
              </q-item-section>
              <q-item-section side style="padding: 0">
                <q-btn flat round @click="swapLocations" icon="swap_horiz" />
              </q-item-section>
              <q-item-section>
                <q-input outlined dense v-model="destination" placeholder="Destination" />
              </q-item-section>
              <q-item-section>
                <q-input outlined dense v-model="busNumber" placeholder="Bus no." />
              </q-item-section>
              <q-item-section>
                <q-btn @click="searchBus" label="Search" class="search-btn" />
              </q-item-section>
            </q-item>
          </q-card>
        </div>
      </div>
    </div>

    <!-- Popular Destinations Section -->
    <div class="q-px-xl">
      <h2 class="pop-heading">Popular places in Delhi...</h2>
      <div class="row popular-destinations q-col-gutter-md">
        <transition-group
          appear
          enter-active-class="animated slideInUp"
          leave-active-class="animated slideOutDown"
        >
          <div
            v-for="place in popularPlaces"
            :key="place.id"
            class="col-6 col-md-3"
          >
            <q-card class="popular-card">
              <q-img :src="place.image" :ratio="4 / 3"></q-img>
              <q-card-section class="destination-text">
                <a :href="place.link" target="_blank">{{ place.name }}</a>
              </q-card-section>
            </q-card>
          </div>
        </transition-group>
      </div>
    </div>

    <!-- News and Announcement Section -->
    <div class="news-announcements">
      <h2 class="news-heading">Latest News and Announcements</h2>
      <div class="news-item">
        <h3>New Bus Routes Added!</h3>
        <p>
          We are excited to announce the addition of new bus routes across
          Delhi. Stay tuned for further updates!
        </p>
      </div>
      <div class="news-item">
        <h3>Bus Timings Changed</h3>
        <p>
          Due to road construction, some bus routes have updated timings. Check
          your local routes for the new schedules.
        </p>
      </div>
      <div class="news-item">
        <h3>Feedback Program</h3>
        <p>
          Your feedback matters! We are launching a new feedback program to
          improve our services. Share your thoughts with us!
        </p>
      </div>
    </div>

    <!-- Footer Section with Map and Contact Us -->
    <footer class="footer-container">
      <div class="contact-us">
        <p class="quick"><b>Quick links</b></p>
        <p>
          <router-link to="Helpline No."> Helpline </router-link>
        </p>
        <p>
          <router-link to="About Us"> About Us </router-link>
        </p>
        <p>
          <router-link to="Privacy Policy">Privacy Policy</router-link>
        </p>
        <p>
          <router-link to="Home"> Home </router-link>
        </p>
        <p>
          <router-link to="Feedback"> Feedback </router-link>
        </p>
      </div>

      <div class="contact-info">
        <h3>Contact Us</h3>
        <p>For inquiries, reach us at:</p>
        <p>Email: contact@busapp.com</p>
        <p>Phone: +91 123 456 7890</p>
      </div>

      <div class="social-media">
        <q-btn round flat icon="fab fa-facebook" class="social-icon" />
        <q-btn round flat icon="fab fa-x-twitter" class="social-icon" />
        <q-btn round flat icon="fab fa-instagram" class="social-icon" />
        <q-btn round flat icon="fab fa-linkedin" class="social-icon" />
        <q-btn round flat icon="fab fa-youtube" class="social-icon" />
      </div>

      <div class="col-12 col-md-3" id="social-links-container"></div>

      <!-- Google Map Section in Footer -->
      <div class="map-box">
        <GoogleMap
          api-key="AIzaSyCX7YZQFXhOtlyC-El4uG9baq4qSY68MZg"
          style="width: 100%; height: 100%"
          :center="center"
          :zoom="12"
        >
          <GMapMarker
            :options="{
              position: center,
              title: 'Delhi, India',
            }"
          />
        </GoogleMap>
      </div>
    </footer>
  </q-page>
</template>

<script>
import { GoogleMap, Marker as GMapMarker } from "vue3-google-map";

export default {
  data() {
    return {
      source: "",
      destination: "",
      busNumber: "",
      center: { lat: 28.6139, lng: 77.209 },
      heroImages: [
        "https://etimg.etb2bimg.com/photo/106277723.cms",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/DTC_AC_Bus.jpg/2560px-DTC_AC_Bus.jpg",
        "data:image/jpeg;base64,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",
      ],

      popularPlaces: [
        {
          id: 1,
          name: "India Gate",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/7/79/India_Gate.jpg",
          link: "https://en.wikipedia.org/wiki/India_Gate",
        },
        {
          id: 2,
          name: "Qutub Minar",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Qutb_minar_ruins.jpg/800px-Qutb_minar_ruins.jpg",
          link: "https://en.wikipedia.org/wiki/Qutub_Minar",
        },
        {
          id: 3,
          name: "Red Fort",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/3/34/Red_Fort.jpg",
          link: "https://en.wikipedia.org/wiki/Red_Fort",
        },
        {
          id: 4,
          name: "Lotus Temple",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/e/e7/Lotus_Temple.jpg",
          link: "https://en.wikipedia.org/wiki/Lotus_Temple",
        },
      ],
    };
  },
  mounted() {},
  methods: {
    swapLocations() {
      let temp = this.source;
      this.source = this.destination;
      this.destination = temp;
    },
    searchBus() {
      // Placeholder function for searching bus routes
      console.log(
        "Searching buses from",
        this.source,
        "to",
        this.destination,
        "Bus Number:",
        this.busNumber
      );
    },
  },
  components: {
    GoogleMap,
    GMapMarker,
  },
};
</script>

<style scoped>
.hero-image {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-image: url("assets/images/hero/hero1.jpeg");
  transition: all 0.5s ease;
  animation: heroImageChanger 7s infinite;
  animation-direction: alternate;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
}

@keyframes heroImageChanger {
  0% {
    background-image: url("assets/images/hero/hero1.jpeg");
  }
  24% {
    background-image: url("assets/images/hero/hero1.jpeg");
  }

  25% {
    background-image: url("assets/images/hero/hero2.jpg");
  }

  49% {
    background-image: url("assets/images/hero/hero2.jpg");
  }
  50% {
    background-image: url("assets/images/hero/hero3.jpg");
  }

  74% {
    background-image: url("assets/images/hero/hero3.jpg");
  }

  75% {
    background-image: url("assets/images/hero/hero1.jpeg");
  }

  100% {
    background-image: url("assets/images/hero/hero1.jpeg");
  }
}

.image {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
}

.search-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 10px;
}

.search-btn {
  background-color: #761111;
  color: white;
}

.pop-heading {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.popular-destinations {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.popular-card {
  max-width: 250px;
  margin: 10px;
}

.destination-text {
  text-align: center;
  font-size: 16px;
}

.q-page {
  background-color: #f5f5f5;
  padding: 20px;
}

/* News and Announcement Section Styles */
.news-announcements {
  margin-top: 30px;
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 8px;
}

.news-heading {
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  margin-bottom: 20px;
}

.news-item {
  margin-bottom: 20px;
}

.news-item h3 {
  font-size: 20px;
  color: #333;
}

.news-item p {
  font-size: 16px;
  color: #555;
}

/* Footer Styles */
.footer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px;
  background-color: #333;
  color: white;
  margin-top: 50px;
  border-radius: 10px;
}

.contact-us,
.contact-info {
  flex: 1;
  padding: 20px;
}

.social-media {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
}

.social-icon {
  font-size: 24px;
  color: white;
  transition: transform 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.2);
}

.map-box {
  flex: 2;
  height: 300px;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.15);
  transform: perspective(1000px) rotateX(5deg) rotateY(5deg);
  transition: transform 0.3s ease;
}

.map-box:hover {
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1.05);
}
</style>
