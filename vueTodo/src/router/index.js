import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import ProductsIndex from "../components/ProductsIndex.vue";
import LoginHome from "../components/LoginHome.vue";
import Todo from "../components/Todo.vue";
import Test from "../components/Test.vue";
import VuexTest from "../components/VuexTest.vue";

const routes = [
  { path: "/", name: "LoginHome", component: LoginHome },
  { path: "/Home", name: "Home", component: Home },
  { path: "/ProductsIndex", name: "ProductsIndex", component: ProductsIndex },
  { path: "/Todo", name: "Todo", component: Todo },
  { path: "/Test", name: "Test", component: Test },
  { path: "/VuexTest", name: "VuexTest", component: VuexTest },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
