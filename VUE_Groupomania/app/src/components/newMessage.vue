<template>
  <div class="feed">
    <form method="post" @submit.prevent="buttonNewMessage">
      <h2>Envoyer un message <i class="far fa-paper-plane"></i></h2>
      <div>
        <label  for="title"></label>
        <input type="title" id="title" placeholder="Titre" v-model="title" />
      </div>
      <div>
        <label  for="content"></label>
        <textarea type="text" id="content" placeholder="Votre message" rows="5" cols="33" v-model="content" />
      </div>
      <div>
        <label for="File"></label><br />
        <div class="parent-div">
        <button class="btn-upload">Choisir une photo</button>
        <input  type="file" ref="file" @change="selectFile()" />
        </div>
      </div>
      <input  id="envoyer" type="submit" @click.prevent="buttonNewMessage" value="Envoyer"/>
      <div class="error" v-if="error">
        {{ error.error }}
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "newMessage",
  data() {
    return {
      token: "",
      title: "",
      content: "",
      file: null,
      error: "",
    };
  },
  methods: {
    buttonNewMessage() {
      let token = localStorage.getItem("token");
      const data = new FormData();
      if (this.file !== null) {
        data.append("title", this.title);
        data.append("content", this.content);
        data.append("image", this.file, this.file.name);
      } else {
        data.append("title", this.title);
        data.append("content", this.content);
      }
      axios
        .post("http://localhost:3000/api/messages/", data, {
          headers: { Authorization: "Bearer " + token },
        })
        .then(() => {
          alert("Votre message a bien été envoyé !");
          document.location.reload();
        })
        .catch((error) => {
          this.error = error.response.data;
        });
    },
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>

<style scoped>
.feed {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h2 {
  color: black;
  font-size:25px;
  margin-bottom: 15px;
}
form {
  background-color: #ffff;
  border-radius: 10px;
  width: 40%;
  padding: 10px;
  color: white;
  margin-bottom: 40px;
  -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(255,255,255,0.47); 
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(255,255,255,0.47);
}
textarea {
  width: 80%;
  margin-bottom: 10px;
  border-radius:10px;
  text-align: center;
}
label {
  font-size: 12px;
}
input {
  border: solid rgb(206, 206, 206) 1px;
  text-decoration: none;
  margin-bottom: 30px;
  width: 50%;
  border-radius:10px;
  text-align: center;
}
.error {
  font-size: 13px;
  background-color: rgb(231, 185, 185);
  color: rgb(53, 21, 21);
  margin: 20px;
  padding: 10px;
}
input[type=button], input[type=submit], input[type=reset]  {
  background-color:#5ea1ff;
  border: none;
  color: white;
  padding: 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
input[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {
  background-color: #39ace7;
}
input[type=button]:active, input[type=submit]:active, input[type=reset]:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}
.msg {
  background-color:#5ea1ff;
  border: none;
  color: white;
  padding: 15px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  font-size: 13px;
  -webkit-box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);
  -webkit-border-radius: 5px 5px 5px 5px;
  border-radius: 5px 5px 5px 5px;
  margin: 5px 20px 40px 20px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.msg:hover {
  background-color: #39ace7;
}
.msg:active  {
  -moz-transform: scale(0.95);
  -webkit-transform: scale(0.95);
  -o-transform: scale(0.95);
  -ms-transform: scale(0.95);
  transform: scale(0.95);
}
input::placeholder {
  color: black;
}
.parent-div {
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.parent-div input[type=file] {
  left: 0;
  top: 0;
  opacity: 0;
  position: absolute;
  width:170px;
  height: 44px;
  font-size: 90px;
}
.btn-upload {
  background-color: #fff;
  border: 1px solid #000;
  color: black;
  padding: 10px 25px;
  border-radius: 10px;
  font-size: 15px;
  margin-bottom: 20px;
}

@media only screen and (min-device-width : 280px) and (max-device-width : 1024px) {
  form {
  width: 75%; 
}
  #envoyer {
  width: 70%;
  padding: 15px;
}
}
</style>