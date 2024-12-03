<template>
    <div id="app">
      <!-- Navbar Section -->
      <div class="logo-container">
        <img src="https://upload.wikimedia.org/wikipedia/hi/f/fb/Delhi_Transport_Corporation_logo.png" alt="Logo">
        <h1>DTC</h1>
      </div>
      <div class="top">
        <a href="#" class="passenger-link">Passenger </a><span>|</span>
        <a href="#" class="driver-link">Administrator</a>
        <a href="#" id="hindi" class="hindi-link">हिन्दी </a><span>|</span>
        <a href="#" id="english">English</a>
      </div>
      <div class="topnav">
        <a href="#login">Login/Signup</a>
        <a href="#helpline">Helpline No.</a>
        <a href="#about">About Us</a>
        <a href="#Home">Home</a>
      </div>
  
      <header>
        <div class="container navbar">
          <div class="logo">
          </div>
          <div class="search-fields">
            <div class="input-group">
              <label for="from">From:
                <input type="text" id="from-i" placeholder="From Bus-Stop" v-model="fromBusStop" />
              </label>
            </div>
            <div>
                <button id="swap-button" class="swap-button">&#8652;</button>
            </div>
            <div class="input-group">
              <label for="to">To:
                <input type="text" id="to" placeholder="To Bus-Stop" v-model="toBusStop" />
              </label>
            </div>
            <div class="input-group">
              <label for="date">Date:
                <input type="date" id="date" v-model="journeyDate" />
              </label>
            </div>
            <button class="search-btn" @click="searchTickets">Search</button>
          </div>
        </div>
      </header>
  
      <!-- Filters and Map Section -->
      <section class="filters-map-container">
        <div class="filters-container">
          <div class="filters-header">
            <button class="back-btn" @click="goBack" style="content: attr(150%);">&#8592; </button>
            <h2>
              Bus Search Filters
            </h2>
          </div>
  
          <div class="fair">
            <label for="priceRange"><div style="background-color: white;padding: 5px;border-radius: 10%;">Fare: 50/-</div></label>
          </div>
  
          <div class="filter-item">
            <label for="boardingPoint">Select Stop:</label>
            <select v-model="filters.boardingPoint" id="boardingPoint">
              <option value="">Select a stop</option>
              <option v-for="stop in availableStops" :key="stop" :value="stop">{{ stop }}</option>
            </select>
          </div>
  
          <div class="filter-item">
            <label for="droppingPoint">To:</label>
            <select v-model="filters.droppingPoint" id="droppingPoint">
              <option value="">Select a stop</option>
              <option v-for="stop in availableStops" :key="stop" :value="stop">{{ stop }}</option>
            </select>
          </div>
  
          <button class="buttonshow" @click="showroutes">SHOW ROUTES</button>
        </div>
  
        <div class="map">
          <img src="https://architexturez.net/data/styles/large/public/media/dtc-bus-flag-cw-reduced.jpg?itok=SJKrv2Zt" alt="">
  
        </div> <!-- Map Section on the Right -->
      </section>
  
      <!-- Book Button -->
      <div class="idk">
        <button class="book-button">Book Now</button>
      </div>
  
      <!-- Footer Section -->
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-left">
            <p>&copy; {{ currentYear }} DTC Bus Service. All rights reserved.</p>
            <p>Operating Hours: Mon-Sun, 6:00 AM - 11:00 PM</p>
          </div>
          <div class="footer-center">
            <p>Contact Us:</p>
            <ul>
              <li><strong>Phone:</strong> +91 123 456 7890</li>
              <li><strong>Email:</strong> support@dtc.gov.in</li>
              <li><strong>Address:</strong> DTC Headquarters, Delhi, India</li>
            </ul>
          </div>
          <div class="footer-right">
            <p>Follow Us:</p>
            <ul class="social-links">
              <li><a href="" target="_blank">Facebook</a></li>
              <li><a href="" target="_blank">Twitter</a></li>
              <li><a href="" target="_blank">Instagram</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "App",
    data() {
      return {
        fromBusStop: '',
        toBusStop: '', // Corrected this to match the v-model in the template
        journeyDate: this.getCurrentDate(), // Set the current date as the default value
        filters: {
          priceDrop: false,
          busType: "",
          priceMin: 950,
          priceMax: 3198,
          departureTime: "",
          busPartner: "",
          boardingPoint: "",
          droppingPoint: ""
        },
        currentYear: new Date().getFullYear(),
        availableStops: ["PUNE", "MUMBAI", "THANE", "NAGPUR", "PIMPIRI"],
      };
    },
    methods: {
      getCurrentDate() {
        const today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // January is 0!
        let dd = today.getDate();
  
        // Add leading zero to month and day if necessary
        if (mm < 10) mm = '0' + mm;
        if (dd < 10) dd = '0' + dd;
  
        return `${yyyy}-${mm}-${dd}`;
      },
      searchTickets() {
        if (this.fromBusStop && this.toBusStop && this.journeyDate) {
          console.log("Searching tickets from", this.fromBusStop, "to", this.toBusStop, "on", this.journeyDate);
        } else {
          alert("Please fill in all fields.");
        }
      },
      showroutes() {
        console.log('Filters applied:', this.filters);
      },
      goBack() {
        window.history.back(); // Navigate to the previous page in browser history
      }
    }
  };
  </script>
  
  <style scoped>
  /* Importing a Google font (Roboto) */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  
  /* Global Styles */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Roboto', sans-serif; /* Updated font family to Roboto */
    background-color: #f7f8fa;
    color: #333;
  }
  
  /* Logo and Top Navigation */
  .logo-container {
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    align-items: center;
  }
  
  .logo-container img {
    height: 20px;
    margin-right: 15px;
    margin-left: 5px;
  }
  
  .logo-container h1 {
    font-family: 'Roboto', sans-serif; /* Updated font family */
    font-size: 40px;
    color: #333;
  }
  
  .top {
    text-align: right;
    padding: 10px;
  }
  
  .hindi-link {
    margin-left: 20px;
  }
  
  .topnav {
    background-color: rgb(251, 251, 251);
    overflow: hidden;
    box-shadow: 10px 0 10px rgba(0, 0, 0, 0.5);
  }
  
  .topnav a {
    float: right;
    display: block;
    color: grey;
    text-align: right;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font-family: 'Roboto', sans-serif; /* Updated font family */
  }
  
  .topnav a:hover {
    background-color: #ddd;
    color: #dd2233;
  }
  
  .topnav a.active {
    color: #dd2233;
  }
  
  /* Navbar styles */
  .navbar {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    align-items: center;
    background-color: rgba(0,150,136,1.5);
    padding: 1rem 2rem 1.5rem 2rem;
    color: white;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    top: 0;
    z-index: 1000;
    margin-top: 20px;
  }
  
  .search-fields {
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    align-items: center;
    height: 40px;
  }
  
  .input-group {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  input,
  select {
    padding: 1rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif; /* Updated font family */
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 250px;
    transition: border-color 0.3s ease-in-out;
  }
  
  input:focus,
  select:focus {
    border-color: #009688;
  }
  
  .search-btn {
    background-color: #23d5af;
    color: white;
    padding: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.2rem;
    width: 120px;
    transition: background-color 0.3s;
    font-family: 'Roboto', sans-serif; /* Updated font family */
  }
  
  .search-btn:hover {
    background-color: #f50057;
  }
  
  /* Filters and Map Section */
  .filters-map-container {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
  
  .filters-container {
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    width: 29%;
    height: 500px;
    margin-right: 8px;
    background-color: #ffffff;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out; /* Smooth transition */
  }
  
  .filters-container:hover {
    transform: scale(1.05); 
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.2); 
    background-color: #f0f0f0;
    border-color: #009688;
  }
  
  .filters-container h2 {
    transition: color 0.3s ease-in-out; 
  }
  
  .filters-container:hover h2 {
    color: #009688; 
  }
  
  .filter-item {
    margin-bottom: 20px;
    padding: 10px;
    background-color: #009688;
    border-radius: 8px;
  }
  
  .filter-item label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    font-family: 'Roboto', sans-serif; /* Updated font family */
  }
  
  button {
    background-color: #009685;
    color: white;
    padding: 12px;
    width: 20%;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    font-family: 'Roboto', sans-serif; /* Updated font family */
  }
  
  button:hover {
    background-color: #3edaca;
    transform: scale(1.05);
  }
  
  .buttonshow {
    background-color: #009685;
    color: white;
    padding: 12px;
    width: 80%;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
    font-family: 'Roboto', sans-serif; /* Updated font family */
    margin-left: 30px;
    margin-top: 12px;
  }
  
  .buttonshow:hover {
    background-color: #3edaca;
    transform: scale(1.05);
  }
  
  /* Map Section */
  .map {
    height: auto;
    padding-bottom: 40px;
    margin-bottom: 30px;
    width: 100%;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    padding-left: 30px;
    justify-content: center;
  } 
  
  /* Book Button */
  .idk {
    display: flex;
    justify-content: flex-end;
    margin-right: 70px;
  }
  
  .book-button {
    background-color: #00bcd4;
    color: white;
    font-size: 1.2rem;
    border: none;
    border-radius: 8px;
    padding: 15px 25px;
    width: 200px;
    transition: background-color 0.3s, transform 0.3s;
    font-family: 'Roboto', sans-serif; /* Updated font family */
  }
  
  .book-button:hover {
    background-color: #0097a7;
    transform: scale(1.05);
  }
  
  /* Footer Section */
  .footer {
    background-color: #26a69a;
    color: white;
    padding: 20px;
    margin-top: 20px;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  
  .footer-left,
  .footer-center,
  .footer-right {
    flex: 1;
    margin: 10px;
  }
  
  .footer-left p,
  .footer-center p,
  .footer-right p {
    margin: 5px 0;
    font-family: 'Roboto', sans-serif; /* Updated font family */
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  ul li {
    margin: 5px 0;
  }
  
  .social-links li {
    display: inline;
    margin-right: 10px;
  }
  
  .social-links a {
    color: white;
    text-decoration: none;
    font-family: 'Roboto', sans-serif; /* Updated font family */
  }
  
  .social-links a:hover {
    text-decoration: underline;
  }
  
  .fair {
    display: flex;
    width: 100px;
    height: 50px;
    justify-content: center;
    align-items: center;
    background-color: #009685;
    border-radius: 10%;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  
  /* Adjusting header to move the title next to the back button */
  .filters-header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px; /* Add space between button and heading */
  }
  .swap-button {
    color: #009688; /* Make the icon color match the brand */
    cursor: pointer; 
    width: 40px;
    height: 40px;
    background-color: #ffffff;
    border: 1px solid #009688;
    border-radius: 50%;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    transition: all 0.3s ease-in-out; /* Smooth transition */
  }
  
  .swap-button:hover {
    background-color: #027368;
    color: white;
    transform: scale(1.1); /* Slightly increase the size on hover */
  }
  </style>