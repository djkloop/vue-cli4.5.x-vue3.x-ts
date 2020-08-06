/*
 * @Author        : djkloop
 * @Date          : 2020-08-06 17:15:09
 * @LastEditors   : djkloop
 * @LastEditTime  : 2020-08-06 17:44:50
 * @Description   : 头部注释
 * @FilePath      : /vue3.x/src/router/index.ts
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
