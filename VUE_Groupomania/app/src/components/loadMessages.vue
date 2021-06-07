<template>
  <div class="menus">
      <div id="message-card" v-for="message in messages" :key="message.id">
        <h1 class="title">{{ message.title }}</h1>
        <div class="content">
          <img id="size"
            :src="message.image"
            :alt="message.image"
            v-if="message.image != null"
          /><br />
          {{ message.content }}
        </div>
        <div class="createdAt">
          <i>{{ moment(message.createdAt).fromNow() }}</i>
          <i>{{ message.User.name }} {{ message.User.firstname }}</i>
        </div>
        <div class="adminDelete" v-if=" userId == message.idUsers || isAdmin == true">
          <deleteMessage :id="message.id"/>
        </div>
      </div>
    </div>
</template>

<script>
import deleteMessage from "./deleteMessage";
let moment = require("moment");
let jwt = require("jsonwebtoken");

import axios from "axios";

export default {
  name: "loadMessages",
  components: {
    deleteMessage,
  },
  data() {
    return {
      moment: moment,
      token: "",
      userId: localStorage.getItem("id"),
      isAdmin: "",
      messages: [],
      idUsers: "",
      title: "",
      content: "",
      createAt: "",
    };
  },
  methods: {
    loadFeed() {
      let token = localStorage.getItem("token");
      let decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
      axios
        .get("http://localhost:3000/api/messages/", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          this.messages = res.data;
          this.isAdmin = decodedToken.isAdmin;
        })
        .catch((error) => {
          console.log({ error });
        });
    },
  },
  mounted() {
    this.loadFeed();
  },
};
</script>

<style scoped>
.menus {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#message-card {
  background-color: #5ea1ff;
  color: white;
  width: 80%;
  max-width: 500px;
  border: solid 2px;
  margin: 15px;
  border-radius: 20px;
}
a {
  text-decoration: none;
  color: red;
}
.content {
  font-size: 18px;
  padding-bottom: 15px;
}
img {
  max-width: 500px;
  width: 90%;
  height: 90%;
}
.createdAt {
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 15px;

}
.one-message {
  background-color: #ffff;
  color: black;
  padding: 9px;
  border-radius: 25px;
  font-size: 14px;
}
#divmsg {
  margin-bottom: 15px;
}
.adminDelete {
  margin: 30px;
}
#size {
  width: 150px;
  height:150px;
}
</style>
