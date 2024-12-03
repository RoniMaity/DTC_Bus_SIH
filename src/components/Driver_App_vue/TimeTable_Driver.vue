<template>
  <div class="route-card-container">
    <div class="header">
      <h2 class="title">
        <Clock class="title-icon" />
        Route Schedule
      </h2>
      <div class="tabs">
        <button
          v-for="tab in ['today', 'tomorrow']"
          :key="tab"
          @click="activeTab = tab"
          :class="['tab-button', activeTab === tab ? 'active-tab' : 'inactive-tab']"
        >
          {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
        </button>
      </div>
    </div>

    <div class="route-list">
      <div
        v-for="(route, index) in filteredRoutes"
        :key="index"
        class="route-card"
      >
        <div class="route-card-background">
          <img 
            :src="getBusImage(index)"
            alt="Bus Image"
            class="background-image"
          />
        </div>
        <div class="route-details">
          <div class="route-header">
            <span class="route-time">{{ route.time }}</span>
            <span :class="[
              'status-label',
              {
                'completed': route.status === 'Completed',
                'in-progress': route.status === 'In Progress',
                'upcoming': route.status === 'Upcoming'
              }
            ]">
              {{ route.status }}
            </span>
          </div>
          <div class="route-location">
            <div class="location">
              <MapPin class="location-icon" />
              {{ route.from }}
            </div>
            <ArrowRight class="arrow-icon" />
            <div class="location">
              <MapPin class="location-icon" />
              {{ route.to }}
            </div>
          </div>
          <div class="route-info">
            {{ route.route }} • 
            {{ route.status === 'Completed' ? '32 stops completed' : '45 min estimated' }}
          </div>
        </div>

        <!-- Join Button -->
        <button class="join-button" @click="joinRoute(route)">Join</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Clock, MapPin, ArrowRight } from 'lucide-vue-next';

// Reactive state for the active tab
const activeTab = ref('today');

// Routes data
const routes = [
  { time: '09:00', route: 'Route 423', from: 'Dwarka', to: 'Nehru Place', status: 'Completed' },
  { time: '11:30', route: 'Route 340', from: 'Nehru Place', to: 'Karol Bagh', status: 'In Progress' },
  { time: '14:00', route: 'Route 423', from: 'Karol Bagh', to: 'Dwarka', status: 'Upcoming' },
  { time: '16:30', route: 'Route 340', from: 'Dwarka', to: 'Nehru Place', status: 'Upcoming' },
];

// Bus images
const busImages = [
  'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800',
  'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800',
  'https://img.freepik.com/premium-photo/night-bus-free-photo-hd-8k-wallpaper_915071-92097.jpg',
  'https://images.unsplash.com/photo-1494515843206-f3117d3f51b7?w=800'
];

// Method to get a bus image based on the index
const getBusImage = (index) => busImages[index % busImages.length];

// Filter routes based on active tab (today or tomorrow)
const filteredRoutes = computed(() => {
  return routes.filter(() => {
    return activeTab.value === 'today' || activeTab.value === 'tomorrow';
  });
});


// Method to handle the "Join" button click
const joinRoute = (route) => {
  alert(`Joined ${route.route} from ${route.from} to ${route.to}!`);
};
</script>


<style scoped>
/* Container for the whole card component */
.route-card-container {
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 55%;
  margin-left: 3rem;
  margin-bottom: 2rem;
  color: #1f2937; /* Dark text color for better visibility */
}

/* Header section */
.header {
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 1.5rem; */
}

.title {
  padding-top: 0;
  font-size: 1.25rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  color: #1f2937; /* Darker title text */
}

.title-icon {
  margin-right: 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
  color: #2563eb;
}

.tabs {
  display: flex;
  gap: 0.5rem;
  height: 50px;
}

.tab-button {
  padding: 0.5rem 1rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: background-color 0.3s, color 0.3s;
  color: #1f2937; /* Dark text for tab buttons */
}

.tab-button:hover {
  background-color: #e5e7eb;
  color: #1f2937; /* Ensure dark color on hover */
}

.active-tab {
  background-color: #2563eb;
  color: white;
}

.inactive-tab {
  background-color: #f3f4f6;
  color: #1f2937; /* Darker color for inactive tabs */
}

/* Route List */
.route-list {
  /* margin-top: 1rem; */
  gap: 1rem;
}

.route-card {
  position: relative;
  border-radius: 0.75rem;
  padding: 1rem;
  background-color: white;
  border: 1px solid #e5e7eb;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  margin-bottom: 1.5rem;
}

/* Background image in the route card */
.route-card-background {
  position: absolute;
  inset: 0;
  opacity: 0.5; /* Opacity of background image */
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* Route card content */
.route-details {
  position: relative;
  z-index: 1;
  color: #1f2937; /* Darker text color for readability */
}

/* Route header */
.route-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.route-time {
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937; /* Dark color for time */
}

.status-label {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
}

.completed {
  background-color: #d1fae5;
  color: #10b981;
}

.in-progress {
  background-color: #fef3c7;
  color: #eab308;
}

.upcoming {
  background-color: #f3f4f6;
  color: #6b7280;
}

/* Location section */
.route-location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
  color: #000000; /* Dark text for locations */
}

.location {
  display: flex;
  align-items: center;
  color: #000000; /* Darker color for location names */
}

.location-icon {
  height: 1rem;
  width: 1rem;
  margin-right: 0.25rem;
  color: #000000; /* Light color for icons */
}

.arrow-icon {
  height: 1rem;
  width: 1rem;
  color: #6b7280;
}

/* Route Info */
.route-info {
  font-size: 0.875rem;
  color: #000000; /* Dark color for route info */
  margin-top: 0.5rem;
}

/* Join Button */
.join-button {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 2; /* Ensure button stays above the background */
}

.join-button:hover {
  background-color: #1d4ed8;
}

/* Accessibility and Focus Styles */
button:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}
</style>
