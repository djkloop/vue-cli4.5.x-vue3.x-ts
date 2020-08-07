/*
 * @Author        : djkloop
 * @Date          : 2020-08-07 17:05:35
 * @LastEditors   : djkloop
 * @LastEditTime  : 2020-08-07 17:53:02
 * @Description   : 头部注释
 * @FilePath      : /vue3.x/src/components/index.ts
 */
import Button from "./button";
import { App } from "vue";

const components = [Button];

/// 把install方法暴露出去
/// https://github.com/vuejs/vue-router-next/blob/61022a6680f4cae14baf10582068b454218d530d/src/RouterLink.ts
const install = (app: App) => {
  components.forEach(component => {
    app.use(component);
  });
};

export default {
  install
};
