<template>
  <div>
    <v-container
      v-if="this.username == '' || this.username == null"
      class="view login"
    >
      <v-col align="center" justify="center">
        <v-row align="center" justify="center">
          <v-col align="center">
            <h1 class="shadow-nested">Chat</h1>
          </v-col>

          <v-container>
            <v-col align="center" justify="center">
              <v-row align="center" justify="center" no-gutters>
                <v-card flat tile>
                  <v-row justify="center" align="center">
                    <v-text-field
                      hide-details
                      filled
                      outlined
                      rounded
                      dense
                      v-model="inputUserName"
                      placeholder="Please enter your username"
                      @keyup.enter="login()"/></v-row
                  ><br />
                  <v-btn
                    color="green"
                    class="white--text"
                    :disabled="!inputUserName"
                    @click="login()"
                    >Login</v-btn
                  >
                </v-card>
              </v-row>
            </v-col>
          </v-container>
        </v-row></v-col
      >
    </v-container>

    <v-container v-else>
      <v-col align="center" justify="center">
        <v-row justify="end">
          <v-btn small color="primary" @click="logout()">Logout</v-btn>
        </v-row>

        <h2 class="shadow-nested">Welcome, {{ username }}</h2>

        <v-card outlined class="chat-box scrollchat rounded-lg">
          <section
            v-for="message in messages"
            :key="message.key"
            :class="
              message.username == username ? 'message current-user' : 'message'
            "
          >
            <div class="message-inner">
              <div class="username">{{ message.username }}</div>
              <div class="content">{{ message.content }}</div>
            </div>
          </section>
        </v-card>
      </v-col>

      <v-row no-gutters align="center" justify="center">
        <v-card flat tile>
          <v-row no-gutters justify="center" align="center">
            <v-text-field
              hide-details
              filled
              outlined
              dense
              v-model="inputMessage"
              placeholder="Write a message..."
              @keyup.enter="sendMseeages()"
            /><v-col align="center">
              <v-btn color="green" small class="ml-2" dark @click="sendMseeages()">Send</v-btn>
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
      var container = document.querySelector(".scrollchat");
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

<style scoped lang="scss">
.scrollchat {
  overflow-y: auto;
}

.scrollchat::-webkit-scrollbar {
  width: 9px;
}

.scrollchat::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  border: solid 3px #e6e6e6;
  border-radius: 7px;
}

.scrollchat::-webkit-scrollbar-thumb:hover {
  background: black;
}

.v-text-field {
  width: 300px;
}
.chat-box {
  width: 400px;
  height: 420px;
  padding: 30px;
  .scrollchat {
    overflow: scroll;
  }

  .message {
    display: flex;
    margin-bottom: 15px;
    text-align: left;

    .message-inner {
      .username {
        color: #888;
        font-size: 16px;
        margin-bottom: 5px;
        padding-left: 15px;
        padding-right: 15px;
      }
      .content {
        display: inline-block;
        padding: 10px 20px;
        background-color: #f3f3f3;
        border-radius: 999px;
        color: #333;
        font-size: 15px;
        line-height: 1.2em;
        text-align: left;
      }
    }
    &.current-user {
      margin-top: 30px;
      justify-content: flex-end;
      text-align: right;

      .message-inner {
        max-width: 75%;

        .content {
          color: #fff;
          background-color: #1976d2;
        }
      }
    }
  }
}
</style>
