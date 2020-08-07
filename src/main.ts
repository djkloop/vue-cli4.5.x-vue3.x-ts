/*
 * @Author        : djkloop
 * @Date          : 2020-08-06 17:15:09
 * @LastEditors   : djkloop
 * @LastEditTime  : 2020-08-07 17:51:41
 * @Description   : 头部注释
 * @FilePath      : /vue3.x/src/main.ts
 */
import { createApp } from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import AntDesignVue from "./components";

createApp(App)
  .use(store)
  .use(router)
  .use(AntDesignVue)
  .mount("#app");
