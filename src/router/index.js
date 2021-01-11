import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";
import Login from "../views/Login.vue";
import Details from "../views/details.vue";
import Cart from '../views/Cart.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/products",
    component: Products
  },
  {
    path: "/product/detail/:id",
    component: Details
  },
  {
    path: "/login",
    component: Login
  },
  {
    path : '/cart',
    component : Cart
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
