import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Charities from "../views/Charities.vue"
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Success from "../views/Success.vue";
import UserPage from "../views/UserPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/success",
    name: "Success",
    component: Success,
  },
  {
    path: "/userpage",
    name: "UserPage",
    component: UserPage,
  },
  {
    path: "/charities",
    name: "Charities",
    component: Charities,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
