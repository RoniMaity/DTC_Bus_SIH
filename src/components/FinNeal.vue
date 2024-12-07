<template>
    <q-layout>
      <!-- Header Section -->
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title>
            <img
              src="https://upload.wikimedia.org/wikipedia/hi/f/fb/Delhi_Transport_Corporation_logo.png"
              alt="Logo"
              style="height: 50px;"
            />
            <span class="q-mx-md">Delhi Transport Corporation</span>
            <span>Government of NTC of Delhi</span>
          </q-toolbar-title>
          <q-btn flat @click="switchToHindi" label="हिन्दी" />
          <q-btn flat @click="switchToEnglish" label="English" />
          <q-btn flat label="Passenger"/>
          <q-btn flat label="Administrator"/>
        </q-toolbar>
      </q-header>
  
      <!-- Main Content -->
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
  
        <h2 class="pop-heading">Popular places in Delhi...</h2>
        <div class="popular-destinations">
          <q-card
            v-for="place in popularPlaces"
            :key="place.name"
            class="destination-box"
            :style="{ backgroundImage: 'url(' + place.image + ')' }"
          >
            <q-card-section class="destination-text">{{ place.name }}</q-card-section>
          </q-card>
        </div>
      </q-page>
  
      <!-- Footer -->
      <q-footer>
        <div class="foot">
          <q-btn flat label="Contact us" />
          <q-btn flat label="Helpline No." />
          <q-btn flat label="About Us" />
          <q-btn flat label="Home" />
          <q-btn flat label="Feedback" />
        </div>
  
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
            <div id="map"></div> <!-- Map container -->
          </div>
        </div>
  
        <div class="social-links">
          <p>Follow Us:</p>
          <ul>
            <li><q-btn flat label="Facebook" /></li>
            <li><q-btn flat label="Twitter" /></li>
            <li><q-btn flat label="Instagram" /></li>
          </ul>
        </div>
      </q-footer>
  
      <!-- Chatbot Component -->
      <div class="chatbot">
        <div class="chat-window" v-if="isOpen">
          <div class="messages">
            <div v-for="(msg, index) in messages" :key="index" class="message">
              <span :class="{'user-message': msg.isUser  , 'bot-message': !msg.isUser  }">
                {{ msg.text }}
              </span>
            </div>
          </div>
          <div class="input-container">
            <input v-model="userInput" @keyup.enter="sendMessage" placeholder="Type a message..." />
            <button @click="sendMessage">Send</button>
          </div>
        </div>
        <div class="chat-icon" @click="toggleChat">
          <img src="https://example.com/chatbot-icon.png" alt="Chatbot" />
        </div>
      </div>
    </q-layout>
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
            name: "Lotus Temple",
            image: "https://live.staticflickr.com/1512/24704448786_1c53078fa3_b.jpg",
          },
          {
            name: "Qutub Minar",
            image: "https://imgs.search.brave.com/Bdz-3ThM-JuUtykv 2Hdo8u4yMPv5M23NpN36wh56z4g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzNmL1F1dHViX01p/bmFyX"
          },
          {
            name: "India Gate",
            image: "https://t4.ftcdn.net/jpg/05/97/78/41/360_F_597784113_nKSChMeJZ6clNK29nPn07KqtEm4VOUgu.jpg"
          },
        ],
        isOpen: false,
        userInput: '',
        messages: [],
      };
    },
    methods: {
      switchToHindi() {
        console.log('Switching to Hindi');
      },
      switchToEnglish() {
        console.log('Switching to English');
      },
      swapLocations() {
        const temp = this.source;
        this.source = this.destination;
        this.destination = temp;
      },
      searchBus() {
        if (this.source && this.destination && this.busNumber) {
          alert(`Searching for buses from ${this.source} to ${this.destination} (Bus No: ${this.busNumber})`);
        } else {
          alert("Please fill out all fields!");
        }
      },
      toggleChat() {
        this.isOpen = !this.isOpen;
      },
      sendMessage() {
        if (this.userInput.trim() === '') return;
  
        // Add user message
        this.messages.push({ text: this.userInput, is:'User' });
  
        // Simulate bot response
        setTimeout(() => {
          this.messages.push({ text: `You said: ${this.userInput}`, is:'Bot' });
        }, 1000);
  
        // Clear input
        this.userInput = '';
      },
      mounted() {
        this.loadMapScript();
      },
      loadMapScript() {
        const script = document.createElement("script");
        script.src = "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap";
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
    },
  };
  </script>
  <style>
  
  .hero-image {
    background-image: url('https://etimg.etb2bimg.com/photo/106277723.cms');
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
  
  .popular-destinations {
    display: flex;
    flex-direction: row; 
    align-items: center; 
    margin: 15px;
    padding: 20px;
    justify-content: space-evenly;
  }
  
  .destination-box {
    font-family: 'Times New Roman', Times, serif;
    width: calc(30% - 20px); 
    height: 200px; 
    margin-bottom: 20px; 
    position: relative; 
    border-radius: 10px; 
    box-shadow: 0 4px 10px rgba(0,0,0,0.5); 
    background-size: cover; 
    background-position: center;
  }
  
  .destination-text {
    position: absolute; 
    bottom: 10%; 
    left: 50%; 
    transform: translate(-50%, -50%); 
    color: white; 
    font-size: 24px; 
    text-shadow: 2px 2px rgba(0,0,0,0.7); 
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
  
  .chatbot {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
  }
  
  .chat-window {
    display: flex; 
    flex-direction: column;
    width: 100%;  
    height: 400px;
  }
  
  .messages {
    flex: 1;
    padding: 10px;
    overflow-y: auto;
  }
  
  .message {
    margin: 5px 0;
  }
  
  .user-message {
    text-align: right;
    color: blue;
  }
  
  .bot-message {
    text-align: left;
    color: green;
  }
  
  .input-container {
    display: flex;
    padding: 10px;
    border-top: 1px solid #ccc;
    background-color: white;
  }
  
  input {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-right: 5px;
  }
  
  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
  }
  
  .chat-icon {
    cursor: pointer;
  }
  
  .chat-icon img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }
</style>