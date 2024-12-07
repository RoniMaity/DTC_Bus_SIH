<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
  <nav class="navbar">
    <div class="container">
      <div class="navbar-content">
        <div class="logo">
          <div class="logo-icon">
            <Bus class="icon" />
          </div>
          <span class="logo-title">Driver Portal</span>
        </div>

        <div class="right-side">

          <q-btn round icon="notifications">
            <q-badge floating color="red" rounded />
          </q-btn>

          <span v-if="hasUnreadNotifications" class="notification-dot"></span>

          <div class="profile-dropdown">
            <div class="profile-info">
              <p class="profile-name">XYZABC</p>
              <p class="profile-id">Driver #4872</p>
            </div>
            <div class="profile-image" @click="toggleProfileMenu">
              <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400" alt="Driver profile"
                class="image" />
            </div>
            <div v-if="isProfileMenuOpen" class="profile-menu">
              <p class="profile-name">XYZABC</p>
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

const hasUnreadNotifications = ref(true);
const isProfileMenuOpen = ref(false);

const toggleNotifications = () => {
  hasUnreadNotifications.value = !hasUnreadNotifications.value;
  if (hasUnreadNotifications.value) {
    alert('You have new notifications!');
  } else {
    alert('All notifications are read.');
  }
};

const toggleProfileMenu = () => {
  isProfileMenuOpen.value = !isProfileMenuOpen.value;
};

const logout = () => {
  alert('You have logged out!');
};

const goHome = () => {
  alert('Going to Home');
};

const goProfile = () => {
  alert('Going to Profile');
};
</script>

<style scoped>
.navbar {
  background-color: #1e3a8a;
  color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px, rgba(0, 0, 0, 0.1) 0px 1px 3px;
  margin-bottom: 0;
}

.container {
  max-width: 7xl;
  margin: 0 auto;
  padding: 0 1rem;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4rem;
  flex-wrap: wrap;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  padding-bottom: 2rem;
}

.logo-icon {
  background-color: rgba(255, 255, 255, 0.1);
  padding-right: 0.5rem;
  padding-left: 0.7rem;
  margin-bottom: 2rem;
  padding-top: 0.3rem;
  border-radius: 40%;
}

.logo-title {
  font-weight: bold;
  font-size: 1.25rem;
  padding-bottom: 2rem;
}

.right-side {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.notification-button {
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

.profile-dropdown {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  padding-left: 0.5rem;
  position: relative;
}

.profile-info {
  text-align: right;
  gap: 0;
}

.profile-name {
  font-weight: 500;
  margin-bottom: 0;
  margin-top: 10px;
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

@media (max-width: 768px) {

  .logo {
    margin: 0;
    padding-top: 17px;
  }

  .container {
    margin: 0;
    padding: 0;
  }

  .navbar-content {
    display: flex;
    flex-direction: column;
  }

  .right-side {
    justify-content: flex-end;
    margin-left: 40px;
  }

  .side-menu {
    display: none;
  }

  .profile-dropdown {
    margin-left: 0px;
  }

  .profile-menu {
    width: auto;
  }
}
</style>
