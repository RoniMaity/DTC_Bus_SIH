<template>
  <q-page>
    <div class="hero-image">
      <div class="search-container">
        <q-input v-model="source" placeholder="Source" />
        <q-btn @click="swapLocations" icon="swap_horiz" />
        <q-input v-model="destination" placeholder="Destination" />
        <q-input v-model="busNumber" placeholder="Bus no." />
        <q-btn @click="searchBus" label="Search" />
      </div>
    </div>

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
            <q-card>
              <q-img :src="place.image" :ratio="4 / 3"></q-img>
              <q-card-section class="destination-text">
                {{ place.name }}
              </q-card-section>
            </q-card>
          </div>
        </transition-group>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      source: "",
      destination: "",
      busNumber: "",
      popularPlaces: [
        {
          id: 1,
          name: "Lotus Temple",
          image:
            "https://live.staticflickr.com/1512/24704448786_1c53078fa3_b.jpg",
        },
        {
          id: 2,
          name: "Qutub Minar",
          image:
            "https://imgs.search.brave.com/Bdz-3ThM-JuUtykv2Hdo8u4yMPv5M23NpN36wh56z4g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzNmL1F1dHViX01p/bmFyX",
        },
        {
          id: 3,
          name: "India Gate",
          image:
            "https://t4.ftcdn.net/jpg/05/97/78/41/360_F_597784113_nKSChMeJZ6clNK29nPn07KqtEm4VOUgu.jpg",
        },
        {
          id: 4,
          name: "India Gate",
          image:
            "https://t4.ftcdn.net/jpg/05/97/78/41/360_F_597784113_nKSChMeJZ6clNK29nPn07KqtEm4VOUgu.jpg",
        },
      ],

      //
      enterAnimationClass: "",
      exitAnimationClass: "",
    };
  },
  methods: {
    swapLocations() {
      const temp = this.source;
      this.source = this.destination;
      this.destination = temp;
    },
    searchBus() {
      if (this.source && this.destination && this.busNumber) {
        alert(
          `Searching for buses from ${this.source} to ${this.destination} (Bus No: ${this.busNumber})`
        );
      } else {
        alert("Please fill out all fields!");
      }
    },
    mounted() {
      this.loadMapScript();
    },
    loadMapScript() {
      const script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      window.initMap = () => {
        const map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: 28.613496314759633, lng: 77.23187604183494 },
          zoom: 12,
        });
        console.log(map);
      };
    },
    toggleChat() {
      this.isOpen = !this.isOpen;
    },
    sendMessage() {
      if (this.userInput.trim() === "") return;
      this.messages.push({ text: this.userInput, is: "User" });
      setTimeout(() => {
        this.messages.push({ text: `You said: ${this.userInput}`, is: "Bot" });
      }, 1000);
      this.userInput = "";
    },
    animateCards() {
      console.log("triggering animations");
      this.enterAnimationClass = "animated slideInUp";
      this.exitAnimationClass = "animated slideOutDown";
    },
  },
};
</script>

<style scoped>
.hero-image {
  background-image: url("https://etimg.etb2bimg.com/photo/106277723.cms");
  height: 400px;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.search-container {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  padding: 30px 50px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.foot {
  display: flex;
  justify-content: center;
}

.social-links {
  display: flex;
  justify-content: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.map-container {
  position: relative;
  width: 300px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}

#map {
  height: 100%;
  width: 100%;
}
</style>
