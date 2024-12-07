<template>
  <div>
    <div class="bottom-bar">
      <div
        class="nav-item"
        :class="{ active: activeSection === 'Home', hover: hoverItem === 'Home' }"
        @click="handleClick('Home')"
        @mouseover="hover('Home')"
        @mouseleave="unhover"
      >
        <b class="icon">🚍</b>
        <span>Home</span>
      </div>
      <div
        class="nav-item"
        :class="{ active: activeSection === 'Routes', hover: hoverItem === 'Routes' }"
        @click="handleClick('Routes')"
        @mouseover="hover('Routes')"
        @mouseleave="unhover"
      >
        <b class="icon">🛣️</b>
        <span>Routes</span>
      </div>
      <div
        class="nav-item"
        :class="{ active: activeSection === 'Profile', hover: hoverItem === 'Profile' }"
        @click="handleClick('Profile')"
        @mouseover="hover('Profile')"
        @mouseleave="unhover"
      >
        <b class="icon">👤</b>
        <span>Profile</span>
      </div>
      <div
        class="nav-item"
        :class="{ active: activeSection === 'More', hover: hoverItem === 'More' }"
        @click="handleClick('More')"
        @mouseover="hover('More')"
        @mouseleave="unhover"
      >
        <b class="icon">⋯</b>
        <span>More</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeSection: 'Home',
      hoverItem: '',
    };
  },
  methods: {
    navigate(section) {
      this.activeSection = section;
    },
    hover(item) {
      if (window.innerWidth >= 768) {
        this.hoverItem = item;
      }
    },
    unhover() {
      if (window.innerWidth >= 768) {
        this.hoverItem = '';
      }
    },
    handleClick(item) {
      if (window.innerWidth < 768) {
        this.hoverItem = this.hoverItem === item ? '' : item;
      }
    },
  },
};
</script>

<style scoped>
.bottom-bar {
  background-color: rgba(245, 245, 245, 0.99);
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 0;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.nav-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
  text-align: center;
  cursor: pointer;
  padding: 8px;
  border-radius: 10px;
  transition: transform 0.3s ease, color 0.3s ease, background-color 0.3s ease;
}

.nav-item.hover {
  transform: translateY(-3px) scale(1.1);
  transition: 0.3s ease, transform 0.3s ease;
}

.icon {
  font-size: 32px;
  margin-bottom: 8px;
  margin: 0;
}

span {
  font-size: 12px;
  transition: opacity 0.3s ease;
}

.nav-item.hover span {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .nav-item {
    transition: 0.3s ease, transform 0.3s ease;
  }

  .nav-item.hover {
    transform: translateY(-3px) scale(1.1);
  }
}
</style>
