<template>
  <div class="schedule-container">
    <div class="header">
      <h2 class="title">
        <CalendarIcon class="title-icon" @click="toggleCalendar" />
        This Week's Schedule
      </h2>
    </div>

    <div class="content">
      <!-- Calendar Section -->
      <div class="calendar-container">
        <div class="calendar-header">
          <span class="calendar-month">{{ currentMonth }}</span>
          <button @click="toggleCalendar" class="calendar-icon-btn">
            <CalendarIcon class="calendar-icon" />
          </button>
        </div>
        <div class="calendar-days">
          <!-- Calendar Days (7 days of the week) -->
          <div v-for="(day, index) in weekDays" :key="index" class="calendar-day">
            <div class="day-name">{{ day.name }}</div>
            <div class="day-date" @click="showDaySchedule(day.date)">
              {{ day.date }}
            </div>
            <div v-if="isShiftScheduled(day.date) && selectedDate === day.date" class="shift-details">
              <p v-for="(shift, shiftIndex) in selectedShifts" :key="shiftIndex">{{ shift }}</p>
            </div>
            <div v-if="selectedDate === day.date" class="no-shift">
  No shifts scheduled
</div>

          </div>
        </div>
      </div>

      <!-- Upcoming Schedule List -->
      <div class="schedule-list">
        <div v-if="selectedDate" class="schedule-item">
          <h3 class="schedule-date">{{ selectedDate }}</h3>
          <p v-for="(shift, shiftIndex) in selectedShifts" :key="shiftIndex" class="shift-details">
            {{ shift }}
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Full Month Calendar Modal -->
  <div v-if="isCalendarVisible" class="calendar-modal-overlay" @click="toggleCalendar">
    <div class="calendar-modal" @click.stop>
      <div class="calendar-month-modal">{{ currentMonth }}</div>
      <div class="calendar-modal-days">
        <div class="calendar-modal-day" v-for="(day, index) in fullMonthDays" :key="index">
          <div class="calendar-modal-day-name">{{ day.name }}</div>
          <div class="calendar-modal-day-date" :class="{ 'current-day': isCurrentDay(day.date) }" @click="showDaySchedule(day.date)">
            {{ day.date }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UpcomingSchedule',
  data() {
    return {
      upcomingShifts: [
        { date: 'Mon 11', shifts: ['Morning Shift (6 AM - 2 PM)', 'Route 423', 'Afternoon Shift (2 PM - 10 PM)', 'Route 440'] },
        { date: 'Tue 12', shifts: ['Evening Shift (2 PM - 10 PM)', 'Route 340', 'Night Shift (10 PM - 6 AM)', 'Route 560'] },
        { date: 'Wed 13', shifts: ['Morning Shift (6 AM - 2 PM)', 'Route 423', 'Afternoon Shift (2 PM - 10 PM)', 'Route 325'] },
        { date: 'Thu 14', shifts: ['Morning Shift (7 AM - 3 PM)', 'Route 105', 'Afternoon Shift (3 PM - 11 PM)', 'Route 410'] },
        { date: 'Fri 15', shifts: ['Evening Shift (4 PM - 12 AM)', 'Route 555'] },
        { date: 'Sat 16', shifts: ['Morning Shift (6 AM - 2 PM)', 'Route 231', 'Evening Shift (3 PM - 11 PM)', 'Route 389'] },
        { date: 'Sun 17', shifts: ['No shifts scheduled'] }
      ],
      scheduledDates: ['Mon 11', 'Tue 12', 'Wed 13', 'Thu 14', 'Fri 15', 'Sat 16'],
      currentDate: new Date(),
      isCalendarVisible: false, // To toggle calendar modal visibility
      selectedDate: null, // To store the clicked date
      selectedShifts: [], // To store shifts for the selected day
    };
  },
  computed: {
    // Get the list of 7 days for the current week
    weekDays() {
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const currentDayIndex = this.currentDate.getDay(); // Get the current day (0-6)
      const week = [];
      for (let i = 0; i < 7; i++) {
        const dayIndex = (currentDayIndex + i) % 7;
        const date = new Date();
        date.setDate(this.currentDate.getDate() + i); // Increment the current day by i
        const formattedDate = `${daysOfWeek[dayIndex]} ${date.getDate()}`;
        week.push({ name: daysOfWeek[dayIndex], date: formattedDate });
      }
      return week;
    },
    // Full month calendar days (for modal view)
    fullMonthDays() {
      const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const currentMonth = this.currentDate.getMonth(); // Get current month
      const firstDayOfMonth = new Date(this.currentDate.getFullYear(), currentMonth, 1);
      const lastDayOfMonth = new Date(this.currentDate.getFullYear(), currentMonth + 1, 0);
      const totalDaysInMonth = lastDayOfMonth.getDate();
      const firstDayIndex = firstDayOfMonth.getDay();
      
      let days = [];
      for (let i = 0; i < firstDayIndex; i++) {
        days.push(null); // Add empty slots for previous month's days
      }
      for (let i = 1; i <= totalDaysInMonth; i++) {
        const dayName = daysOfWeek[(firstDayIndex + i - 1) % 7];
        days.push({ name: dayName, date: i });
      }
      return days;
    },
    // Current month displayed in the calendar
    currentMonth() {
      const months = [
        'January', 'February', 'March', 'April', 'May', 'June', 'July', 
        'August', 'September', 'October', 'November', 'December'
      ];
      return `${months[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`;
    }
  },
  methods: {
    // Check if a shift is scheduled for a given day
    isShiftScheduled(date) {
      return this.scheduledDates.includes(date);
    },
    // Get the shifts scheduled for a particular day
    getShiftsForDay(date) {
      const shift = this.upcomingShifts.find(shift => shift.date === date);
      return shift ? shift.shifts : [];
    },
    // Show shifts for a selected day
    showDaySchedule(date) {
      this.selectedDate = date;
      this.selectedShifts = this.getShiftsForDay(date);
    },
    // Toggle the calendar modal visibility
    toggleCalendar() {
      this.isCalendarVisible = !this.isCalendarVisible;
    },
    // Check if a day is the current day
    isCurrentDay(date) {
      const currentDate = new Date();
      const targetDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), date);
      return currentDate.toDateString() === targetDate.toDateString();
    }
  }
};
</script>

<style scoped>
/* Container for the whole schedule card */
.schedule-container {
  background-color: transparent;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin: auto;
  max-width: 100%;
}

/* Header section */
.header {
  display: flex;
  align-items: center;
}

.title {
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
}

.title-icon {
  margin-right: 0.5rem;
  height: 1.25rem;
  width: 1.25rem;
  color: #2563eb;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.title-icon:hover {
  transform: scale(1.1);
}

/* Calendar Section */
.calendar-container {
  background-color: #f7fafc;
  border-radius: 0.75rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  width: 100%;
  margin-bottom: 2rem;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  color: #4a5568;
}

.calendar-icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin-left: 10px;
  transition: transform 0.2s ease;
}

.calendar-icon-btn:hover {
  transform: scale(1.1);
}

.calendar-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
}

.calendar-day {
  font-size: 0.875rem;
  font-weight: 500;
  text-align: center;
  color: #4a5568;
}

.day-name {
  font-weight: 600;
}

.day-date {
  padding: 0.5rem;
  cursor: pointer;
  text-align: center;
  border-radius: 0.375rem;
  transition: background-color 0.2s ease;
}

.day-date:hover {
  background-color: #e2e8f0;
}

.scheduled {
  background-color: #ebf8ff;
  color: #2563eb;
}

/* Modal styles */
.calendar-modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.calendar-modal {
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 500px;
}

.calendar-month-modal {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.calendar-modal-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
}

.calendar-modal-day {
  text-align: center;
  font-size: 0.875rem;
  padding: 0.75rem;
}

.calendar-modal-day-name {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.calendar-modal-day-date {
  color: #4a5568;
}

.current-day {
  background-color: #3b82f6;
  color: white;
  border-radius: 0.375rem;
}

/* Spacing between schedule items */
.schedule-list {
  margin-left: 1.5rem;
}

.schedule-item {
  border-left: 4px solid #3b82f6;
  padding-left: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.schedule-date {
  font-weight: 600;
  color: #2d3748;
}

.shift-details {
  color: #4a5568;
  margin-top: 0.25rem;
}

.schedule-item + .schedule-item {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .schedule-container {
    padding: 1rem;
  }

  .calendar-days {
    grid-template-columns: repeat(2, 1fr);
  }

  .calendar-day {
    font-size: 0.75rem;
  }
}
</style>
4