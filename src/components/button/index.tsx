import { App } from "vue";
import Button from "./button";

/// 把组件的install方法暴露给顶层,然后在聚合index文件的install方法里面use一下
const install = (app: App) => {
  app.component(Button.name, Button);
};

export default {
  install
};
