<template>
  <div class="weekly-overview">
    <!-- Background Image (Optional) -->
    <div class="bg-overlay">
      <img alt="Background" class="bg-image" />
    </div>

    <div class="content">
      <!-- Header Section -->
      <h2 class="title">
        <Calendar class="icon" />
        Weekly Overview
      </h2>

      <!-- Days of the Week -->
      <div class="days">
        <div
          v-for="day in weekDays"
          :key="day"
          :class="['day', { active: day === currentDay }]"
        >
          <div class="day-header">
            <span :class="['day-name', { active: day === currentDay }]">{{ day }}</span>
            <span class="shift-time">
              {{ getShiftTime(day) }}
            </span>
          </div>

          <!-- Show route information if the day is not Sunday -->
          <div v-if="day !== 'Sunday'" class="route-info">
            Route 423: Dwarka ↔ Nehru Place
          </div>
        </div>
      </div>
    </div>
  </div>
  
  
</template>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Calendar } from 'lucide-vue-next'

// Array of days in the week, starting from Monday
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

// Track the current day of the week and current time
const currentDay = ref('')
const currentTime = ref('')

// Update the current day and time every minute
const updateTime = () => {
  const currentDate = new Date()
  const dayIndex = currentDate.getDay() // Get the day as a number (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  
  // Set current day (adjust for Sunday = 0, we want Sunday to be the 7th day)
  currentDay.value = weekDays[dayIndex === 0 ? 6 : dayIndex - 1]
  
  // Set current time in HH:MM format
  currentTime.value = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

// Get the shift time based on the current time of the day
const getShiftTime = (day) => {
  if (day === 'Sunday') return 'Off Day'
  
  const currentDate = new Date()
  const currentHour = currentDate.getHours()

  // Morning shift
  if (currentHour >= 6 && currentHour < 14) {
    return `6 AM - 2 PM`
  }

  // Evening shift (Optional, can be customized)
  if (currentHour >= 14 && currentHour < 22) {
    return `2 PM - 10 PM`
  }

  // After hours (Off Duty)
  return 'Off Duty'
}

// Watch and update current time every minute
onMounted(() => {
  updateTime()
  setInterval(updateTime, 60000) // Update every minute
})

// Cleanup interval when component is destroyed
onUnmounted(() => {
  clearInterval(updateTime)
})
</script>
<style scoped>
/* Container styling */
.weekly-overview {
  background-color: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  width: 40%;
  margin-left: 3rem;
  margin-bottom: 2rem;
}

/* Background overlay */
.bg-overlay {
  position: absolute;
  inset: 0;
  opacity: 0.05;
}

.bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Content section */
.content {
  position: relative;
  z-index: 10;
}

/* Header styling */
.title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
}

.icon {
  margin-right: 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
  color: #2563eb;
}

/* Days container */
.days {
  margin-bottom: 1rem;
}

.day {
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  transition: all 0.3s ease;
}

.day.active {
  border-color: #3b82f6;
  background-color: rgba(219, 234, 254, 0.8); /* Light blue with transparency */
  backdrop-filter: blur(4px);
}

.day-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.day-name {
  font-weight: 500;
  color: #374151;
}

.day-name.active {
  color: #2563eb;
}

.shift-time {
  font-size: 0.875rem;
  color: #6b7280;
}

.route-info {
  margin-top: 0.5rem;
  color: #4b5563;
  font-size: 0.875rem;
}

/* Hover effect for days */
.day:hover {
  border-color: #93c5fd;
}
</style>
