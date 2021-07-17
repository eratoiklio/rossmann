import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Article from "../views/Article.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Article",
    component: Article,
  },
  {
    path: "/containers",
    name: "Box",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Box.vue"),
   },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
