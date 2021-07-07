<template>
  <div v-if="this.username == '' || this.username == null" class="view login">
    <v-container>
      <v-col align="center">
        <h1>Login to Chat</h1>
        <v-col sm="6">
          <v-text-field
            filled
            rounded
            dense
            v-model="inputUserName"
            placeholder="Please enter your username"
          />
          <v-btn small color="primary" @click="login()">Login</v-btn>
        </v-col>
      </v-col>
    </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-col align="center" justify="center">
        <v-row justify="end">
          <v-btn small color="primary" @click="logout()">Logout</v-btn>
        </v-row>

        <h2>Welcome, {{ username }}</h2>

        <v-card outlined class="chat-box scroll">
          <div
            v-for="message in messages"
            :key="message.key"
            :class="
              message.username == username ? 'message current-user' : 'message'
            "
          >
            <div class=" message-inner">
              <div class="username">{{ message.username }}</div>
              <div class="content">{{ message.content }}</div>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-container>
    <v-container>
      <v-row align="center" justify="center">
        <v-card flat tile>
          <v-row justify="center" align="center">
            <v-text-field hide-details
              filled
              outlined
              dense
              v-model="inputMessage"
              placeholder="Write a message..."
              @keyup.enter="sendMseeages()"
            /><v-col >
              <v-btn  color="green" dark @click="sendMseeages()">Send</v-btn>
            </v-col></v-row
          >
        </v-card>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import db from "./db.js";
import { ref, reactive, onMounted } from "@vue/composition-api";

export default {
  data() {
    return {
      index: true,
      inputUserName: "",
      username: "",
      messages: [],
      inputMessage: "",
    };
  },
  mounted() {
    const messageRef = db.database().ref("messages");
    messageRef.on("value", (snapshot) => {
      const data = snapshot.val();
      let messsages = [];

      Object.keys(data).forEach((key) => {
        messsages.push({
          id: key,
          username: data[key].username,
          content: data[key].content,
        });
      });
      this.messages = messsages;
      this.scrollToEnd();
    });
  },
  methods: {
    scrollToEnd() {
      var container = document.querySelector(".scroll");
      var scrollHeight = container.scrollHeight;
      container.scrollTop = scrollHeight;
    },
    login() {
      if (this.inputUserName != "" || this.inputUserName != null) {
        this.username = this.inputUserName;
      }
    },
    logout() {
      this.username = "";
      this.inputUserName = "";
    },
    sendMseeages() {
      const messageRef = db.database().ref("messages");
      if (this.inputMessage === "" || this.inputMessage == null) {
        return;
      }
      const message = {
        username: this.username,
        content: this.inputMessage,
      };
      messageRef.push(message);
      this.inputMessage = "";
    },
  },
    updated() {
    this.scrollToEnd();
  },
};
</script>

<style lang="scss">
.scroll {
  overflow-y: scroll;
}
.v-text-field {
  width: 300px;
}
.chat-box {
  width: 400px;
  height: 420px;
  padding: 30px;
  .scroll {
    overflow: scroll;
  }

  .message {
    display: flex;

    .message-inner {
      .content {
        padding: 10px 20px;
        background-color: #f3f3f3;
        border-radius: 999px;
        color: #333;
        font-size: 15px;
        text-align: left;
      }
    }
    &.current-user {
      margin-top: 10px;
      justify-content: flex-end;
      text-align: right;
      .message-inner {
        .content {
          color: #fff;
          background-color: #1976d2;
        }
      }
    }
  }
}
</style>
