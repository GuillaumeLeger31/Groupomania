<template>
  <body>
    <div class="carde">
      <router-link to="/menu" style="text-decoration: none;">Retour</router-link>
    <div>
    <h2>Profile</h2>
      <p>
        <u>E-mail</u>:
        {{ dataProfile.email }}
      </p>
      <p>
        <u>Nom et prénom</u>: {{ dataProfile.name }} {{ dataProfile.firstname }}
      </p>
    </div>
    <form method="post" @submit.prevent="updateProfile">
      <div>
        <label for="name"></label>
        <input type="name" id="name" placeholder="Nom" v-model="name" />
      </div>
      <div>
        <label for="firstname"></label>
        <input type="firstname" id="firstname" placeholder="Prénom" v-model="firstname"/>
      </div>
      <button type="submit" class="modifybtn" @click.prevent="updateProfile">Modifier</button>
    </form>
    <div class="error" v-if="error">
      {{ error.error }}
    </div>
    <button class="deletebtn" type="submit" @click.prevent="deleteProfile">
      Supprimer mon compte
    </button>
    </div>
  </body>
</template>


<script>
import axios from "axios";

export default {
  name: "profile",
  props: {
    id: Number,
  },
  data() {
    return {
      token: "",
      error: "",
      userId: "",
      dataProfile: [],
      messagesProfile: [],
      email: "",
      name: "",
      firstname: "",
    };
  },
  methods: {
    loadProfile() {
      let token = localStorage.getItem("token");
      let userId = localStorage.getItem("id");
      axios
        .get("http://localhost:3000/api/auth/profile/" + userId, {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          this.dataProfile = res.data;
        })
        .catch((error) => {
          console.log({ error });
        });
    },
    updateProfile() {
      let token = localStorage.getItem("token");
      let userId = localStorage.getItem("id");
      const data = {
        name: this.name,
        firstname: this.firstname,
      };
      axios
        .put("http://localhost:3000/api/auth/profile/" + userId, data, {
          headers: { Authorization: "Bearer " + token },
        })
        .then(() => {
          alert("Votre profil a bien été mis à jour !");
          document.location.reload();
        })
        .catch((error) => {
          this.error = error.response.data;
        });
    },
    deleteProfile() {
      let token = localStorage.getItem("token");
      let userId = localStorage.getItem("id");
      axios
        .delete("http://localhost:3000/api/auth/profile/" + userId, {
          headers: { Authorization: "Bearer " + token },
        })
        .then(() => {
          alert("Votre compte est supprimé !");
          this.$router.push("/");
        })
        .catch((error) => {
          console.log({ error });
        });
    },
  },
  mounted() {
    this.loadProfile();
  },
};
</script>

<style scoped>
body {
  font-family: "Poppins", sans-serif;
  background: linear-gradient( to bottom right, #5ea1ff, #2C47FA);
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column; 
  justify-content: center;
}
u {
  text-decoration: none;
  color: #5ea1ff;
}
h2 {
  color: #5ea1ff;
}
.carde {
  margin: 0 auto;
  width: 20%;
  min-width: 250px;
  height: 30%;
  min-height: 350px;
  background-color: white;
  text-align: center;
  border-radius: 20px;
}

form {
  margin-top: 30px;
}
input {
  margin-bottom: 10px;
  border: solid rgb(206, 206, 206) 1px;
  border-radius:10px;
}
.modifybtn {
  background-color:#5ea1ff;
  border: none;
  border-radius: 5px;
}
.deletebtn {
  background-color:#5ea1ff;
  margin-top: 20px;
  height: 45px;
  margin-bottom: 50px;
  border: none;
  border-radius: 5px;
}
.error {
  font-size: 13px;
  background-color: rgb(231, 185, 185);
  color: rgb(53, 21, 21);
  margin-top: 30px;
  padding: 10px;
}

@media only screen and (min-device-width : 280px) and (max-device-width : 768px) {

.carde {
  margin: 0 auto;
  width: 75%;
  height: 60%;
  
}
}

@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {

.carde {
  margin: 0 auto;
  width: 50%;
  height: 33.5%;
  
}
}
</style>