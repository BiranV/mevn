<template>
  <v-container>
    <v-col align="center">
      <h1 class="shadow">MY MEVN PROJECT</h1>
    </v-col>
    <v-container class="scroll">
      <v-row justify="center">
        <v-col cols="12" sm="4">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card :elevation="hover ? 3 : 1">
                <v-card-title class="blue--text">To Do List</v-card-title>
                <v-card-actions>
                  <v-btn icon @click="showToDoList = !showToDoList">
                    <v-icon>{{
                      showToDoList ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                  </v-btn>
                </v-card-actions>

                <v-expand-transition>
                  <div v-show="showToDoList">
                    <v-card-text>
                      a to do list app using MongoDB, Express.js & Node.js on
                      the backend to create RESTful API, and Vue.js & Vuetify on
                      the frontend.
                    </v-card-text>
                    <v-col
                      ><v-row justify="center"
                        ><v-btn :to="'/todo-list'" color="primary"
                          >Enter</v-btn
                        ></v-row
                      ></v-col
                    >
                    <br />
                  </div>
                </v-expand-transition> </v-card></template></v-hover
        ></v-col>

        <v-col cols="12" sm="4">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card :elevation="hover ? 3 : 1">
                <v-card-title class="blue--text">Math Quiz</v-card-title>
                <v-card-actions>
                  <v-btn icon @click="showQuiz = !showQuiz">
                    <v-icon>{{
                      showQuiz ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="showQuiz">
                    <v-card-text>
                      4 different levels of difficulty. You have one minute to
                      score as many points as possible. For each correct answer
                      you will receive 3 points and for each mistake you will
                      lose 6 seconds of time.
                    </v-card-text>
                                        <v-col
                      ><v-row justify="center"
                        ><v-btn :to="'/math-quiz'" color="primary"
                          >Enter</v-btn
                        ></v-row
                      ></v-col
                    >
                    <br />
                  </div>
                </v-expand-transition>
              </v-card></template
            ></v-hover
          ></v-col
        >
        <v-col cols="12" sm="4">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card :elevation="hover ? 3 : 1">
                <v-card-title class="blue--text">Chat</v-card-title>
                <v-card-actions>
                  <v-btn icon @click="showChat = !showChat">
                    <v-icon>{{
                      showChat ? "mdi-chevron-up" : "mdi-chevron-down"
                    }}</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="showChat">
                    <v-card-text>
                      a chat app in Vue.js and Firebase using the composition
                      API in Vue 3. Creating a connection to a firebase database
                      and rendering the data powered by Vue.js to the browser.
                    </v-card-text>
                                        <v-col
                      ><v-row justify="center"
                        ><v-btn :to="'/chat'" color="primary"
                          >Enter</v-btn
                        ></v-row
                      ></v-col
                    >
                    <br />
                  </div>
                </v-expand-transition>
              </v-card></template
            ></v-hover
          >
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      showToDoList: false,
      showQuiz: false,
      showChat: false,
    };
  },
};
</script>

<style>
.shadow {
  color: rgb(139, 139, 139);
  font: bold 52px Helvetica, Arial, Sans-Serif;
  text-shadow: 4px 4px #b3e5fc, 2px 2px #b3e5fc, 3px 3px #b3e5fc;
  -webkit-transition: all 0.12s ease-out;
  -moz-transition: all 0.12s ease-out;
  -ms-transition: all 0.12s ease-out;
  -o-transition: all 0.12s ease-out;
}
</style>
