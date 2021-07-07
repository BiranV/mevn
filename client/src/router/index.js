import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import TodoList from "../views/TodoList/TodoList.vue";
import MathQuiz from "../views/MathQuiz/MathQuiz.vue";
import Chat from "../views/Chat/Chat.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/todo-list",
    name: "todo-list",
    component: TodoList,
  },
  {
    path: "/math-quiz",
    name: "math-quiz",
    component: MathQuiz,
  },
  {
    path: "/chat",
    name: "chat",
    component: Chat,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
