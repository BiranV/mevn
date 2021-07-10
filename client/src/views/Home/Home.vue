<template>
  <v-container>
    <v-col align="center">
      <h1 class="shadow">MY MEVN PROJECT</h1>
    </v-col>
    <v-col
      ><v-row>
        <v-col cols="4">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                height="300"
                :to="'/todo-list'"
                :elevation="hover ? 3 : 1"
              >
                <v-card-title class="blue--text">To Do List</v-card-title>
                <v-card-text>
                  <v-divider></v-divider>
                   <p><div>
                    a to do list app using MongoDB, Express.js & Node.js on the
                    backend to create RESTful API, and Vue.js & Vuetify on
                    the frontend.
                  </div></p></v-card-text
                >
              </v-card></template
            ></v-hover
          >
        </v-col>
        <v-col cols="4">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card
                height="300"
                :to="'/math-quiz'"
                :elevation="hover ? 3 : 1"
              >
                <v-card-title class="blue--text">Math Quiz</v-card-title>
                <v-card-text>
                  <v-divider></v-divider>
                  <p>
                  <div>
                    4 different levels of difficulty. You have one minute to
                    score as many points as possible. For each correct answer
                    you will receive 3 points and for each mistake you will lose
                    6 seconds of time.
                  </div>  </p></v-card-text
                >
              </v-card></template
            ></v-hover
          >
        </v-col>
        <v-col cols="4">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card height="300" :to="'/chat'" :elevation="hover ? 3 : 1">
                <v-card-title class="blue--text">Chat</v-card-title>
                <v-card-text>
                  <v-divider></v-divider>
                  <p> <div>
                    a chat app in Vue.js and Firebase using the composition API
                    in Vue 3. Creating a connection to a firebase database and
                    rendering the data powered by Vue.js to the browser.
                  </div></p></v-card-text
                >
              </v-card></template
            ></v-hover
          >
        </v-col></v-row
      ></v-col
    >
  </v-container>
</template>

<script>
export default {};
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
