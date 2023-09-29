import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import ProductsIndex from "../components/ProductsIndex.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/ProductsIndex", name: "ProductsIndex", component: ProductsIndex },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
