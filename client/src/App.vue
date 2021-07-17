<template>
  <v-app id="inspire">
    <v-app-bar app color="#F5F5F5" flat>
      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab v-for="(item, i) in items" :key="i" :to="item.link" link>
          <v-col
            ><v-row justify="center"><v-icon v-text="item.icon"></v-icon></v-row
            ><v-row justify="center">{{ item.text }}</v-row></v-col
          >
        </v-tab>
      </v-tabs>

      <v-btn
        icon
        x-large
        color="primary"
        target="_blank"
        href="https://github.com/BiranV/mevn"
      >
        <v-icon medium>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8">
            <v-card class="scroll" height="600px">
              <router-view></router-view>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      itemss: [],
      items: [
        { text: "Home", icon: "mdi-home-outline", link: "/" },
        {
          text: "Todo List",
          icon: "mdi-format-list-checks",
          link: "/todo-list",
        },
        { text: "Math Quiz", icon: "mdi-math-integral", link: "/math-quiz" },
        { text: "Chat", icon: "mdi-chat-outline", link: "/chat" },
      ],
    };
  },
};
</script>
<style>
.v-main__wrap {
  background-color: #bdbdbd;
}
.scroll {
  overflow-x: auto;
}

.scroll::-webkit-scrollbar {
  width: 11px;
}

.scroll::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  border: solid 3px #e6e6e6;
  border-radius: 7px;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background: black;
}

.shadow-nested {
  color: rgb(139, 139, 139);
  font: bold 36px Helvetica, Arial, Sans-Serif;
  text-shadow: 1px 1px #b3e5fc, 2px 2px #b3e5fc, 3px 3px #b3e5fc;
  -webkit-transition: all 0.12s ease-out;
  -moz-transition: all 0.12s ease-out;
  -ms-transition: all 0.12s ease-out;
  -o-transition: all 0.12s ease-out;
}
</style>
