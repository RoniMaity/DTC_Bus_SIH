<template>
  <div class="stats-grid">
    <div
      v-for="stat in stats"
      :key="stat.label"
      :class="`stat-card ${stat.color}-card`"
    >
      <div :class="`icon ${stat.color}-icon`">
        <component :is="stat.icon" class="icon-size" />
      </div>
      <p :class="`stat-value ${stat.color}-text`">{{ stat.value }}</p>
      <p class="stat-label">{{ stat.label }}</p>
    </div>
  </div>
</template>

<script setup>
import { Route, Clock, Fuel, MapPin } from 'lucide-vue-next'

// Define the stats data in Vue reactive state
const stats = [
  { icon: Route, label: "Today's Routes", value: '4', color: 'blue' },
  { icon: Clock, label: 'Hours Driven', value: '6.5', color: 'green' },
  { icon: Fuel, label: 'Distance Travelled', value: '8.2 km', color: 'orange' },
  { icon: MapPin, label: 'Stops Today', value: '28', color: 'purple' }
]
</script>

<style scoped>
/* Main grid container for the stat cards */
.stats-grid {
  margin: 2rem 1rem 2rem 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

@media (min-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Individual stat card styles */
.stat-card {
  padding: 1rem;
  border-radius: 0.75rem;
  border-width: 1px;
  border-style: solid;
  transition: all 0.3s ease;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.stat-card:hover {
  transform: scale(1.05);
}

.blue-card {
  background-color: #ebf8ff;
  border-color: #b3daff;
}

.green-card {
  background-color: #f0fdf4;
  border-color: #bbf7d0;
}

.orange-card {
  background-color: #ffedd5;
  border-color: #ffd8a8;
}

.purple-card {
  background-color: #f3e8ff;
  border-color: #e9d7fe;
}

/* Icon styling */
.icon {
  margin-bottom: 0.5rem;
}

.icon-size {
  height: 1.5rem;
  width: 1.5rem;
}

.blue-icon {
  color: #3182ce;
}

.green-icon {
  color: #38a169;
}

.orange-icon {
  color: #dd6b20;
}

.purple-icon {
  color: #6b46c1;
}

/* Text color styling */
.stat-value {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
}

.blue-text {
  color: #3182ce;
}

.green-text {
  color: #38a169;
}

.orange-text {
  color: #dd6b20;
}

.purple-text {
  color: #6b46c1;
}

/* Label styling */
.stat-label {
  font-size: 0.875rem;
  color: #718096;
}

/* Responsive styling */
@media (min-width: 1024px) {
  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
