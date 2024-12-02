<template>
  <div class="body">
    <!-- Header Section -->
    <!-- <div class="logo-container">
      
      <h1>DTC</h1>
    </div> -->

    <!-- Top Navigation -->
    <div class="top" style="margin-top: 0px; height: 50px; ">
      <img
        src="https://upload.wikimedia.org/wikipedia/hi/f/fb/Delhi_Transport_Corporation_logo.png"
        alt="Logo" style="height: 60px; height: 50px; float: left;"
         
      />
      <div style="float: left; margin-top: 0px; padding-top:0px ;">
        <p style="margin-left: 7px;margin-top:0px; margin-bottom: 0px; font-family: Arial, Helvetica, sans-serif; font-size: 20px; font-weight: bold;">Delhi Transport Corporation</p>
        <p style="margin-top:0px; margin-bottom: 0px;margin-left: 7px; float: left; ">Government of NTC of Delhi</p>
      </div>
      <div style="margin-top:17px;">
      <a href="#" id="hindi" class="hindi-link" style="margin-left:150px;">हिन्दी</a><span>|</span>
      <a href="#" id="english" style="margin-right: 150px;">English</a>
      <a href="#" class="passenger-link" style="text-decoration: none; color:black; margin-top: 0px;">Passenger</a><span style="color: black; ">|</span>
      <a href="#" class="driver-link" style="text-decoration: none; color: black;margin-right:60px;">Administrator</a>
      
    </div>
    </div>

    <!-- Navbar -->
    <div class="topnav">
      <a href="#Home" style="margin-right:15px ;" >Home</a>
      <a href="#about" style="margin-right:15px ;">About Us</a>
      <a href="#helpline" style="margin-right:15px ;">Helpline No.</a>
      <a href="#login " class="login" style="margin-right:0px ; padding-right: 10px;">Login </a> <span style="color: white;" >|</span>
      <a herf ="#sign" style="margin-left:0px ;padding-left:10px ;">SignUp</a>
     
      
      
      <span class="hamburger" style="font-size:30px;cursor:pointer; float: left;margin-left: 30px; color: white;" @click="openNav">&#9776;</span>
    </div>

    <!-- Side Navigation -->
    <div id="mySidenav" class="sidenav" :style="{ width: sidenavWidth }">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
      <a href="#">History</a>
      <a href="#">Contact us</a>
      <a href="#">About us</a>
      <a href="#">Feedback</a>
    </div>

    <!-- Hero Image and Search -->
    <div class="hero-image">
      <div class="search-container">
        <input type="text" placeholder="Source" v-model="source" class="search-input" />
        <button id="swap-button" class="swap-button" @click="swapLocations">&#8652;</button>
        <input type="text" placeholder="Destination" v-model="destination" class="search-input" />
        <input type="text" placeholder="Bus no." v-model="busNumber" class="search-input" />
        <button class="search-button" @click="searchBus">Search</button>
      </div>
    </div>

    <!-- Popular Destinations -->
    <h2 class="pop-heading">Places to Visit in Delhi</h2>
    <div class="popular-destinations">
      <div
        v-for="place in popularPlaces"
        :key="place.name"
        class="destination-box"
        :style="{ backgroundImage: 'url(' + place.image + ')' }"
      >
        <div class="destination-text">{{ place.name }}</div>
      </div>
    </div>

    <!-- Footer -->
    <footer>
      <div class="foot">
        <a href="#contact">Contact us</a>
        <a href="#helpline">Helpline No.</a>
        <a href="#about">About Us</a>
        <a href="#home">Home</a>
        <a href="#feedback">Feedback</a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidenavWidth: "0",
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
          image:
            "https://imgs.search.brave.com/Bdz-3ThM-JuUtykv2Hdo8u4yMPv5M23NpN36wh56z4g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8z/LzNmL1F1dHViX01p/bmFyX3dpdGhfdHdv/X2JpcmRzLmpwZw",
        },
        {
          name: "India Gate",
          image:
            "https://t4.ftcdn.net/jpg/05/97/78/41/360_F_597784113_nKSChMeJZ6clNK29nPn07KqtEm4VOUgu.jpg",
        },
      ],
    };
  },
  methods: {
    openNav() {
      this.sidenavWidth = "250px";
    },
    closeNav() {
      this.sidenavWidth = "0";
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
  },
};
</script>

<style scoped>


.body {
  background-image: url('@/assets/background1.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh; /* Ensures the section spans the viewport height */
  padding: 20px; /* Optional: Adds space inside the section */
}

.topnav .login{
    background-color: white;
    color: #1b263b;
    padding:14px;
    margin: 5px 8 5px 0;
    border-radius:20% ;
    cursor: pointer;
    font-size: medium;

}

.topnav {
    overflow: hidden;
    background-color: #333;
    position: relative;
  }
  
  .topnav .logo-container {
    float: left; 
    padding: 10px;
  }
  
  .topnav .sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    background-color: #111;
    overflow-x:hidden;
    transition: 0.5s;
    padding-top: 60px;
  }
  
  .topnav .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
  
  .topnav .sidenav a:hover {
    color: #f1f1f1;
  }
  
  .topnav .sidenav .closebtn {
    position: absolute;
    top: 0;
    left: 25px;
    font-size: 36px;
  }
  
  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }
.logo-container{
    position: absolute; 
    top: 10px; 
    left: 10px; 
    display: flex; 
    align-items: center;

}
.logo-container img{
    height: 20px;
    margin-right:0;
    margin-left: 5px;
}
.logo-container h1{
    font-family: 'Gill Sans', 'Gill Sans MT',' Calibri', 'Trebuchet MS', 'sans-serif';
    font-size: 40px; 
    color: #333;
    margin-left: 5px;
    padding: 1px;

}
.top{
    text-align: right;
    padding: 5px; background-color: white;
    
}
.hindi-link {
    margin-left: 20px; 
}

.topnav {
    background-color: #1b263b;
    overflow: hidden;
    box-shadow: 10px 0 10px rgba(0, 0, 0, 0.5);
    height: 80px; padding-top: 20px; 
}

/* Parent Navbar Container */
.topnav {
  background-color: #1b263b;
  overflow: hidden;
  position: relative;
  height: 70px;
  padding-top: 20px;
}

/* Anchor Links Inside Navbar */
.topnav a {
  position: relative; /* Important for pseudo-elements */
  float: centre;
  display: inline-block;
  color: #f5f5f5;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  
}

/* Hover Effect for Individual Links */
.topnav a:hover:before,
.topnav a:hover:after {
  transform: scaleX(1); /* Scale effect triggers only on hover */
}

.topnav a:before,
.topnav a:after {
  content: "";
  position: absolute;
  width: 100%; /* Full width of the anchor tag */
  height: 2px; /* Line thickness */
  background: #fff; /* Line color */
  transform: scaleX(0); /* Initially hidden */
  transition: all 0.4s ease-in-out; /* Smooth animation */
}

/* Top Line (Before) */
.topnav a:before {
  top: 0; /* Top of the anchor tag */
  left: 0;
  transform-origin: left; /* Animates from left */
}

/* Bottom Line (After) */
.topnav a:after {
  bottom: 0; /* Bottom of the anchor tag */
  left: 0;
  transform-origin: right; /* Animates from right */
}


.topnav a.active {
    color:#dd2233;
}

.sidenav {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    padding-top: 60px;
  }
  
  .sidenav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
    transition: 0.3s;
  }
  
  .sidenav a:hover {
    color: #f1f1f1;
  }
  
  .sidenav .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
  
  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }
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

.search-input {
    margin: 15px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}
.swap-button {
    text-align:center;
    color: gray; 
    cursor: pointer; 
}
.search-button {
    font-size: medium;
    padding: 15px 40px;
    border-radius: 5px;
    border: none;
    background-color: #dd2233;
    color: white;
    cursor: pointer;
}

.search-button:hover {
    background-color: #ab1e43;
}

.popular-destinations {
    display: flex;
    flex-direction: row; 
    align-items: center; 
    margin: 15px;
    padding: 20px;
    justify-content: space-evenly;
}
 
 .pop-heading{
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    margin-bottom: 20px; 
    background-color: #2094d2;
    padding: 10px;
    color: whitesmoke;
    border-radius:50px;
    width: 200px;
    text-align: center;
    margin-left: 640px;
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
    position:absolute; 
    bottom :10%; 
    left :50%; 
    transform :translate(-50%, -50%); 
    color :white; 
    font-size :24px; 
    text-shadow :2px 2px rgba(0,0,0,0.7); 
 }
 footer {
    background-color: #1b263b; 
    color: white; 
    text-align: center;
    padding: 10px 0;
    position: relative;
    width: 100%;
  }
  
  footer a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
  }
  
  footer a:hover {
    text-decoration: underline; 
  }
  
  @media screen and (max-height: 450px) {
    .sidenav {padding-top: 15px;}
    .sidenav a {font-size: 18px;}
  }
</style>
