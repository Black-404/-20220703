
import { createApp } from "vue";
import App from "./App.vue";
// 路由
import router from './router/index'
import * as echarts from 'echarts';

// 全局引入ElementPlus，当然也可以使用局部引入
import ElementPlus from "element-plus";
import 'element-plus/dist/index.css'//引入样式
import less from 'less'


createApp(App)
  .use(ElementPlus, { size: "small", zIndex: 3000})
  .use(router)
  .use(less)
  .mount("#app");


