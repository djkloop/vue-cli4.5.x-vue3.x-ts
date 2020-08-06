/*
 * @Author        : djkloop
 * @Date          : 2020-08-06 17:15:09
 * @LastEditors   : djkloop
 * @LastEditTime  : 2020-08-06 17:49:19
 * @Description   : 头部注释
 * @FilePath      : /vue3.x/src/main.ts
 */
import { createApp } from "vue";
import App from "./App";
import router from "./router";
import store from "./store";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
