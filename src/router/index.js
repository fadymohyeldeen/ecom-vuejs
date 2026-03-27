import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/ProductList.vue"),
  },
  {
    path: "/products/:id",
    name: "single-product",
    component: () => import("../views/SingleProduct.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

/*
Notes:
- component: ProductList .. eager loading: loads the component immediately
- component: () => import("../views/ProductList.vue") .. lazy loading: loads the component when the route is accessed only.
*/
