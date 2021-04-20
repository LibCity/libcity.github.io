import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from 'axios';
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
Vue.prototype.$axios = axios;

const axiosInstance = axios.create({
  baseURL : "http://112.124.28.130:8088/",
  timeout: 600000,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export { axiosInstance };
Vue.prototype.$axios = axiosInstance;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount("#app");
