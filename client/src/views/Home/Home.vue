<template>
  <v-container>
    <v-col align="center">
      <h1>Welcome to my MEVN Project</h1>
    </v-col>

    <v-card :to="'/foodblog'">
      <v-card-title>Food Blog</v-card-title>
      <v-card-text>
        <v-divider></v-divider>
        <v-container>
          a To Do List app using MongoDB, Express.js & Node.js on
          the backend to create RestFul API, and using Vue.js &
          Vuetify on the frontend.
        </v-container></v-card-text
      >
    </v-card>
    <br />
    <v-card :to="'/math-quiz'">
      <v-card-title>Math Quiz</v-card-title>
      <v-card-text>
        <v-divider></v-divider>
        <v-container>
          4 different levels of difficulty. You have one minute to score as many
          points as possible. For each correct answer you will receive 3 points
          and for each mistake you will lose 6 seconds of time.
        </v-container></v-card-text
      > </v-card
    ><br />
    <v-card :to="'/chat'">
      <v-card-title>Chat</v-card-title>
      <v-card-text>
        <v-divider></v-divider>
        <v-container>
          a chat app in Vue.js and Firebase using the composition API in Vue 3.
          Creating a connection to a firebase database and rendering the data
          powered by Vue.js to the browser.
        </v-container></v-card-text
      >
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style></style>
