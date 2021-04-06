import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import echarts from "echarts";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import api from "./api/index.js";
import path from "./api/path.js";

Vue.prototype.$echarts = echarts;
Vue.config.productionTip = false;
Vue.use(Antd);
Vue.use(echarts);
Vue.prototype.$api = api;
Vue.prototype.$urlPath = path;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
