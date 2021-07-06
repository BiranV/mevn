<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-avatar
        :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
      ></v-avatar>

      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab v-for="(item, i) in items" :key="i" :to="item.link" link>
          <v-col
            ><v-row justify="center"><v-icon v-text="item.icon"></v-icon></v-row
            ><v-row justify="center">{{ item.text }}</v-row></v-col
          >
        </v-tab>
      </v-tabs>

      <v-btn icon id="no-background-hover" large target="_blank" href="https://github.com/BiranV/mevn">
        <v-icon medium>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="8">
            <v-card height="600px">
              <v-card-text>
                <router-view></router-view>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    user: {
      initials: "CV",
      fullName: "Biran Varon",
      email: "Biraniv@gmail.com",
    },
    items: [
      { text: "Home", icon: "mdi-home", link: "/" },
      { text: "Food Blog", icon: "mdi-chef-hat", link: "/foodblog" },
      { text: "Math Quiz", icon: "mdi-math-integral", link: "/math-quiz" },
      { text: "Chat", icon: "mdi-chat", link: "/chat" },
    ],
  }),
};
</script>
<style>
.v-main__wrap {
  background-color: #e4e9fd;
  background-image: -webkit-linear-gradient(65deg, #bdbdbd 50%, #e9e9e9 50%);
}
.scroll {
  overflow-y: scroll;
  height: 500px;
}

.scroll::-webkit-scrollbar {
  width: 15px;
}

.scroll::-webkit-scrollbar-track {
  background: #e6e6e6;
  border-left: 1px solid #dadada;
}

.scroll::-webkit-scrollbar-thumb {
  background: #b0b0b0;
  border: solid 3px #e6e6e6;
  border-radius: 7px;
}

.scroll::-webkit-scrollbar-thumb:hover {
  background: black;
}
</style>
