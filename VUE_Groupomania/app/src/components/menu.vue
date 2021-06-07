<template>
<body class="text-center">
<nav class="navbar navbar-light justify-content-end ml-50" style="background-color: #ffff;">
  <ul class="nav">
   <li class="nav-item">
    <router-link class="nav-link" to="/profile"> Profil</router-link>
  </li>
  <li class="nav-item">
    <router-link class="nav-link" to="/login" v-on:click="Logout()">Déconnexion</router-link>
  </li>
  </ul>
</nav>
  <div class="text-center">
  <div id="contenairPhoto">
  <img src="../assets/texte.png" id="icone" alt="User Icon" />
  </div>
  <div id="msg">
    <div>
      <loadMessages />
    </div>
  </div>
    <div>
      <newMessage />
    </div>
  </div>
  </body>
</template>

<script>
import loadMessages from "./loadMessages";
import newMessage from "./newMessage";

export default {
  name: "home",
  components: {
    loadMessages,
    newMessage,
  },
  data() {
    return {
      token: "",
      messages: [],
    };
  },
  methods: {
    Logout() {
      localStorage.clear();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
html {
  background-color: #56baed;
}
body {
  font-family: "Poppins", sans-serif;
  background: linear-gradient( to bottom right, #5ea1ff, #2C47FA);
  height: auto;
  margin: auto;
}
.navbar {
width: 60%;
margin-left:20%;
border-radius:10px;
height: 70px;
}
#contenairPhoto {
    height: 50px;
}
#icone {
  width: 35vh;
}
#msg {
  margin: 0 auto;
  margin-top: 100px;
  border-radius:10px;
  margin-bottom:50px;
  background-color: white;
  overflow-x: hidden;
  overflow-y: scroll;
  border: 0px;
  width: 40%;
  height: 675px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(255,255,255,0.47); 
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(255,255,255,0.47);
}
::-webkit-scrollbar { 
    display: none;
}
@media only screen and (min-device-width : 280px) and (max-device-width : 1024px) {
  #msg {
  width: 75%;
}
  .navbar {
  width: 100%;
  margin-left:0%;
  border-radius:10px;
  height: 50px;
  margin-bottom: 30px;
}
#icone {
  width: 30vh;
}
}
</style>