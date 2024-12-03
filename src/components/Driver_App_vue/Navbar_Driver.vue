<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-content">
        <!-- Logo and Title -->
        <div class="logo">
          <div class="logo-icon">
            <Bus class="icon" />
          </div>
          <span class="logo-title">DTC Driver Portal</span>
        </div>

        <!-- Hamburger Button (Always Visible) -->
        <button class="toggle-button" @click="toggleMenu">
          <div class="toggle-icon"></div>
          <div class="toggle-icon"></div>
          <div class="toggle-icon"></div>
        </button>

        <!-- Right side (Notification, Profile) -->
        <div class="right-side">
          <!-- Notifications Bell -->
          <button class="notification-button" @click="toggleNotifications">
            <Bell class="icon-small" />
            <span v-if="hasUnreadNotifications" class="notification-dot"></span>
          </button>

          <!-- Profile Dropdown -->
          <div class="profile-dropdown">
            <div class="profile-info">
              <p class="profile-name">XYZABC</p>
              <p class="profile-id">Driver #4872</p>
            </div>
            <div class="profile-image" @click="toggleProfileMenu">
              <img
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400"
                alt="Driver profile"
                class="image"
              />
            </div>
            <!-- Profile Dropdown Menu -->
            <div v-if="isProfileMenuOpen" class="profile-menu">
              <p class="profile-name">Rajesh Kumar</p>
              <p class="profile-id">Driver #4872</p>
              <div>
                <button @click="logout" class="logout-button">
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Side Menu (Hamburger Menu) -->
    <div v-if="isMenuOpen" class="side-menu">
      <ul>
        <li><button @click="goHome">Home</button></li>
        <li><button @click="goProfile">Profile</button></li>
        <li><button @click="toggleNotifications">Notifications</button></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { Bus, Bell } from 'lucide-vue-next';

// State for unread notifications, profile dropdown, and mobile menu
const hasUnreadNotifications = ref(true);
const isProfileMenuOpen = ref(false);
const isMenuOpen = ref(false); // For mobile hamburger menu

// Toggle notification state
const toggleNotifications = () => {
  hasUnreadNotifications.value = !hasUnreadNotifications.value;
  if (hasUnreadNotifications.value) {
    alert('You have new notifications!');
  } else {
    alert('All notifications are read.');
  }
};

// Toggle profile menu
const toggleProfileMenu = () => {
  isProfileMenuOpen.value = !isProfileMenuOpen.value;
};

// Log out
const logout = () => {
  alert('You have logged out!');
};

// Toggle the mobile hamburger menu
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Navigation actions (these can be customized further)
const goHome = () => {
  alert('Going to Home');
};

const goProfile = () => {
  alert('Going to Profile');
};
</script>

<style scoped>
/* Navbar styling */
.navbar {
  background: linear-gradient(to right, #1e3a8a, #1d4ed8); /* from-blue-800 to-blue-900 */
  color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px, rgba(0, 0, 0, 0.1) 0px 1px 3px;
  margin-bottom: 0;
}

/* Container for navbar content */
.container {
  max-width: 7xl;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Main navbar content, flexbox layout */
.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
}

/* Hamburger Button (Always Visible) */
.toggle-button {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 2rem;
  height: 1.25rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.toggle-icon {
  width: 100%;
  height: 2px;
  background-color: white;
  transition: all 0.3s ease;
}

/* Logo section */
.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.logo-icon {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.5rem;
  border-radius: 0.375rem;
}

.logo-title {
  font-weight: bold;
  font-size: 1.25rem;
}

/* Right side (Notification, Profile) */
.right-side {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

/* Notification button */
.notification-button {
  /* padding: 0.5rem; */
  padding-bottom: 7px;
  padding-top: 9px;
  border-radius: 1000px;
  border: 2px bold black;
  background: white;
  cursor: pointer;
  position: relative;
  color: black;
  width: 48px;
}

.notification-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.notification-dot {
  position: absolute;
  top: 0;
  right: 0;
  height: 0.5rem;
  width: 0.5rem;
  background-color: #f56565;
  border-radius: 9999px;
}

/* Profile dropdown */
.profile-dropdown {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  padding-left: 1.5rem;
  position: relative;
}

.profile-info {
  text-align: right;
  gap: 0;
}

.profile-name {
  font-weight: 500;
}

.profile-id {
  font-size: 0.875rem;
  color: rgba(59, 130, 246, 0.75);
}

.profile-image {
  width: 2.5rem;
  height: 2.5rem;
  overflow: hidden;
  border-radius: 9999px;
  cursor: pointer;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Profile dropdown menu */
.profile-menu {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  color: black;
  padding: 1rem;
  border-radius: 0.375rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px, rgba(0, 0, 0, 0.1) 0px 1px 3px;
  width: 10rem;
}

.profile-menu button {
  width: 100%;
  text-align: left;
  color: #f56565;
}

/* Side Menu (Hamburger) */
.side-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #1e3a8a;
  padding: 2rem 1rem;
  box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.side-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.side-menu li {
  margin: 1rem 0;
}

.side-menu button {
  width: 100%;
  padding: 1rem;
  text-align: left;
  background-color: transparent;
  color: white;
  font-size: 1rem;
  border: none;
  cursor: pointer;
}

.side-menu button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Prevent wrapping on smaller screens */
@media (max-width: 768px) {
  .navbar-content {
    flex-wrap: wrap;
  }

  /* Ensure the hamburger button is always visible */
  .toggle-button {
    display: flex;
  }
}

</style>
