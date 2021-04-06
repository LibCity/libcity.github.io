import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/paper",
    name: "Paper",
    component: () => import("../views/Paper.vue")
  },
  {
    path: "/chart",
    name: "Chart",
    component: () => import("../views/Chart.vue")
  },
  {
    path: "/ranking",
    name: "Ranking",
    component: () => import("../views/Ranking.vue")
  },
  {
    path: "/install_libtraffic",
    name: "InstallLibTraffic",
    component: () => import("../views/started/InstallLibTraffic.vue")
  },
  {
    path: "/quick_start",
    name: "QuickStart",
    component: () => import("../views/started/QuickStart.vue")
  },
  {
    path: "/task",
    name: "Task",
    component: () => import("../views/Task.vue")
  },
  {
    path: "/data",
    name: "Data",
    component: () => import("../views/toolkit/Data.vue")
  },
  {
    path: "/model",
    name: "Model",
    component: () => import("../views/toolkit/Model.vue")
  },
  {
    path: "/evaluation",
    name: "Evaluation",
    component: () => import("../views/toolkit/Evaluation.vue")
  },
  {
    path: "/ranking/METR-LA",
    name: "METR-LA",
    component: () => import("../views/ranking/speed/METR-LA.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue")
  },
  {
    path: "/chart",
    name: "Chart",
    component: () => import("../views/Chart.vue")
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/news/News.vue")
  },
  {
    path: "/news/LibTraffic-v0.1.0-has-released",
    name: 'LibTraffic-V0.1.0-Has-Released',
    component: () => import("../views/news/content/LibTraffic-V0.1.0-Has-Released.vue")
  },


  {
    path: "/cn/index",
    name: "HomeCN",
    component: () => import("../views/cn/HomeCN.vue")
  },
  {
    path: "/cn/install_libtraffic",
    name: "InstallLibTrafficCN",
    component: () => import("../views/cn/started/InstallLibTrafficCN.vue")
  },
  {
    path: "/cn/quick_start",
    name: "QuickStartCN",
    component: () => import("../views/cn/started/QuickStartCN.vue")
  },
  {
    path: "/cn/task",
    name: "TaskCN",
    component: () => import("../views/cn/TaskCN.vue")
  },
  {
    path: "/cn/data",
    name: "DataCN",
    component: () => import("../views/cn/toolkit/DataCN.vue")
  },
  {
    path: "/cn/model",
    name: "ModelCN",
    component: () => import("../views/cn/toolkit/ModelCN.vue")
  },
  {
    path: "/cn/evaluation",
    name: "EvaluationCN",
    component: () => import("../views/cn/toolkit/EvaluationCN.vue")
  },
  {
    path: "/cn/paper",
    name: "PaperCN",
    component: () => import("../views/cn/PaperCN.vue")
  },
  {
    path: "/cn/news",
    name: "NewsCN",
    component: () => import("../views/cn/news/NewsCN.vue")
  },
  {
    path: "/cn/news/LibTraffic-v0.1.0-has-released",
    name: 'LibTraffic-V0.1.0-Has-ReleasedCN',
    component: () => import("../views/cn/news/content/LibTraffic-V0.1.0-Has-ReleasedCN.vue")
  },
];

const router = new VueRouter({
  // mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
