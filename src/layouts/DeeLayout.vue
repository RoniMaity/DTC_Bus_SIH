<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-white">
        <q-toolbar-title>
          <q-item>
            <q-item-section avatar>
              <q-img
                src="https://upload.wikimedia.org/wikipedia/hi/f/fb/Delhi_Transport_Corporation_logo.png"
              >
              </q-img>
            </q-item-section>
            <q-item-section>
              <div class="text-h6 text-primary">
                Delhi Transport Corporation
              </div>
              <div class="text-caption text-primary">
                Government of NTC of Delhi
              </div>
            </q-item-section>
          </q-item>

          <!-- <img  alt="Logo" style="height: 50px;"/> -->
        </q-toolbar-title>

        <q-btn
          flat
          stretch
          color="primary"
          @click="switchToHindi"
          label="हिन्दी"
        />
        <q-btn
          flat
          stretch
          color="primary"
          @click="switchToEnglish"
          label="English"
        />
        <q-btn flat stretch color="primary" label="Passenger" />
        <q-btn flat stretch color="primary" label="Administrator" />
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <div class="page-footer bg-grey-3 q-py-md">
      <div class="row">
        <div class="col-12 col-md-3">
          <p>
            <router-link to="Contact us"> Contact Us</router-link>
          </p>
          <p>
            <router-link to="Helpline No."> Helpline </router-link>
          </p>
          <p>
            <router-link to="About Us"> About Us </router-link>
          </p>
          <p>
            <router-link to="Home"> Home </router-link>
          </p>
          <p>
            <router-link to="Feedback"> Feedback </router-link>
          </p>
        </div>
        <div class="col-12 col-md-3">
          <div class="text-h6">Contact Us</div>

          <p>Phone: +91 123 456 7890</p>

          <p>Email: support@dtc.gov.in</p>

          <p>Address: DTC Headquarters, Delhi, India</p>

          <div class="row q-gutter-md">
            <q-btn round flat icon="fab fa-facebook"></q-btn>

            <q-btn round flat icon="fab fa-x-twitter"></q-btn>

            <q-btn round flat icon="fab fa-instagram"></q-btn>

            <q-btn round flat icon="fab fa-linkedin"></q-btn>

            <q-btn round flat icon="fab fa-youtube"></q-btn>
          </div>
        </div>

        <div class="col-12 col-md-3" id="social-links-container">
          <div class="map-container">
            <div id="map"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="map-container"></div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <ChatbotWindow />
    </q-page-sticky>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import ChatbotWindow from "src/components/ChatbotWindow.vue";

export default defineComponent({
  components: {
    ChatbotWindow,
  },
  methods: {
    switchToHindi() {
      console.log("Switching to Hindi");
    },
    switchToEnglish() {
      console.log("Switching to English");
    },
  },
});
</script>
