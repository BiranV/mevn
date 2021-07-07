import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import VueCompositionAPI from "@vue/composition-api";
import CircularCountDownTimer from "vue-circular-count-down-timer";
import VueSimpleAlert from "vue-simple-alert";
Vue.config.productionTip = false;
Vue.use(CircularCountDownTimer);
Vue.use(VueSimpleAlert);

new Vue({
  router,
  vuetify,
  VueCompositionAPI,

  render: (h) => h(App),
}).$mount("#app");
