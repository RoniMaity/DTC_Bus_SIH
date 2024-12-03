<template>
  <div class="weather-widget">
    <!-- Optional background image -->
    <div class="bg-image-overlay">
      <img
        :src="bgImageUrl"
        alt="weather background"
        class="bg-image"
      />
    </div>
    <div class="weather-content">
      <div class="flex justify-between items-start"> <!-- Added items-start to align to top -->
        <!-- Left section: Weather info -->
        <div class="weather-info">
          <h1 class="weather-title">Weather Conditions</h1>
          <div class="flex items-center space-x-3">
            <!-- Dynamically change icon based on weather condition -->
            <component :is="currentIcon" class="icon-sun" />
            <div>
              <span class="temperature">{{ temperature }}°C</span>
              <p class="city-name">{{ cityName }}</p>
            </div>
          </div>
        </div>
        <!-- Right section: Weather details -->
        <div class="weather-details">
          <div v-for="(detail, index) in weatherDetails" :key="index" class="weather-detail">
            <div class="flex items-center space-x-2">
              <component :is="detail.icon" class="icon" />
              <span>{{ detail.label }}: {{ detail.value }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { Cloud, Sun, Wind, Droplets, CloudRain, CloudSnow } from 'lucide-vue-next'

// State variables for weather data
const temperature = ref(0) // Temperature in Celsius
const cityName = ref('') // City name
const windSpeed = ref(0) // Wind speed in km/h
const humidity = ref(0) // Humidity percentage
const weatherDescription = ref('') // Weather description
const bgImageUrl = ref('') // Background image URL
const currentIcon = ref(Sun) // Default icon for sunny weather

// Weather details array (dynamically updated)
const weatherDetails = ref([
  { label: 'Wind', value: `${windSpeed.value} km/h`, icon: Wind },
  { label: 'Humidity', value: `${humidity.value}%`, icon: Droplets },
  { label: 'Description', value: weatherDescription.value, icon: Cloud }
])

// Function to fetch weather data based on user's location
const fetchWeatherData = async (lat, lon) => {
  try {
    const apiKey = 'c2a177b38371233ec459d1158924de81' // Replace with your API key
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
      params: {
        lat,
        lon,
        appid: apiKey,
        units: 'metric', // For Celsius
        lang: 'en'
      }
    })
    const data = response.data
    temperature.value = Math.round(data.main.temp)
    cityName.value = data.name
    windSpeed.value = data.wind.speed
    humidity.value = data.main.humidity
    weatherDescription.value = data.weather[0].description

    // Update background and icon based on weather
    updateBackground(data.weather[0].main)
    updateIcon(data.weather[0].main)

    // Dynamically update weather details
    weatherDetails.value = [
      { label: 'Wind', value: `${windSpeed.value} km/h`, icon: Wind },
      { label: 'Humidity', value: `${humidity.value}%`, icon: Droplets },
      { label: 'Description', value: weatherDescription.value, icon: Cloud }
    ]
  } catch (error) {
    console.error('Error fetching weather data:', error)
  }
}

// Function to change the background based on the weather condition
const updateBackground = (weatherCondition) => {
  if (weatherCondition.includes('Clear')) {
    bgImageUrl.value = 'https://media.istockphoto.com/id/612023744/photo/blue-and-orange-sunset-sky.jpg?s=612x612&w=0&k=20&c=bqPHaI4d3ghIbLIwtbTDPxV8QQ2pIN2mbCfzLb7gucQ='
  } else if (weatherCondition.includes('Cloud')) {
    bgImageUrl.value = 'https://i.pinimg.com/originals/32/19/b5/3219b5bacd3c712241660b5465785e8c.jpg'
  } else if (weatherCondition.includes('Rain')) {
    bgImageUrl.value = 'https://static.vecteezy.com/system/resources/previews/042/146/565/non_2x/ai-generated-beautiful-rain-day-view-photo.jpg'
  } else if (weatherCondition.includes('Snow')) {
    bgImageUrl.value = 'https://images.unsplash.com/photo-1477601263568-180e2c6d046e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c25vd3xlbnwwfHwwfHx8MA%3D%3D'
  } else {
    bgImageUrl.value = 'https://your-image-url.com/default.jpg'
  }
}

// Function to change the icon based on the weather condition
const updateIcon = (weatherCondition) => {
  if (weatherCondition.includes('Clear')) {
    currentIcon.value = Sun
  } else if (weatherCondition.includes('Cloud')) {
    currentIcon.value = Cloud
  } else if (weatherCondition.includes('Rain')) {
    currentIcon.value = CloudRain
  } else if (weatherCondition.includes('Snow')) {
    currentIcon.value = CloudSnow
  } else {
    currentIcon.value = Sun // Default to sun icon
  }
}

// Function to get the user's location
const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      fetchWeatherData(latitude, longitude)
    }, (error) => {
      console.error('Error getting location:', error)
    })
  } else {
    console.error('Geolocation is not supported by this browser.')
  }
}

// Fetch weather data when the component is mounted
onMounted(() => {
  getLocation()
})
</script>


<style scoped>
.weather-widget {
  position: relative;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 55%;
  height: 300px;
  margin-bottom: 2rem;
  margin-left: 3rem;
}

.bg-image-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.8;
}

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.weather-content {
  position: relative;
  z-index: 10;
}

.weather-info {
  margin-top: 0;
  margin-bottom: 1.5rem;
  display: inline-flex;
  flex-direction: column; /* Changed to column for better alignment */
  flex: 1; /* Allows this section to grow */
}

.weather-title {
  font-size: 1.25rem;
  font-weight: 600;
}

.icon-sun {
  width: 3rem;
  height: 3rem;
  color: #fbbf24;
}

.temperature {
  font-size: 2.25rem;
  font-weight: 700;
}

.city-name {
  font-size: 1.125rem;
  color: #93c5fd;
}

.weather-details {
  display: inline-flex;
  flex-direction: column;
  gap: 12px;
  max-width: 250px; /* Ensure it's contained */
  margin-left: 330px;
  margin-top: 30px;
  justify-content: flex-start; /* Align to the top */
}

.weather-detail {
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  border-radius: 0.5rem;
  padding: 0.5rem;
}

.icon {
  width: 1rem;
  height: 1rem;
  color: white;
}

.weather-detail span {
  color: white;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .weather-widget {
    padding: 1rem;
  }
  .weather-info {
    margin-bottom: 1rem;
  }
}
</style>
