import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import ProductsIndex from "../components/ProductsIndex.vue";
import LoginHome from "../components/LoginHome.vue";
import Todo from "../components/Todo.vue";

const routes = [
  { path: "/", name: "LoginHome", component: LoginHome },
  { path: "/Home", name: "Home", component: Home },
  { path: "/ProductsIndex", name: "ProductsIndex", component: ProductsIndex },
  { path: "/Todo", name: "Todo", component: Todo },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
