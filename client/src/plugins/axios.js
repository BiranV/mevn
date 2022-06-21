import axios from "axios";

const instance = axios.create({
  baseURL: "/",
});

export default {
  install: function(Vue) {
    Object.defineProperty(Vue.prototype, "$axios", { value: instance });
  },
};
