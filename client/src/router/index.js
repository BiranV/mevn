import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import Post from "../views/FoodBlog/Post.vue";
import FoodBlog from "../views/FoodBlog/FoodBlog.vue";
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
    path: "/foodblog",
    name: "foodblog",
    component: FoodBlog,
  },
  {
    path: "/post/:id",
    name: "post",
    component: Post,
  },
  {
    path: "/math-quiz",
    name: "mathquiz",
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
