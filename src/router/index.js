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
    path: "/ranking/PEMS-BAY",
    name: "PEMS-BAY",
    component: () => import("../views/ranking/speed/PEMS-BAY.vue")
  },
  {
    path: "/ranking/PEMSD4",
    name: "PEMSD4",
    component: () => import("../views/ranking/speed/PEMSD4.vue")
  },
  {
    path: "/ranking/PEMSD8",
    name: "PEMSD8",
    component: () => import("../views/ranking/speed/PEMSD8.vue")
  },
  {
    path: "/ranking/T-Drive20150206",
    name: "T-Drive20150206",
    component: () => import("../views/ranking/speed/T-Drive20150206.vue")
  },
  {
    path: "/ranking/TAXIBJ2015",
    name: "TAXIBJ2015",
    component: () => import("../views/ranking/speed/TAXIBJ2015.vue")
  },
  {
    path: "/ranking/TAXIBJ",
    name: "TAXIBJ",
    component: () => import("../views/ranking/speed/TAXIBJ.vue")
  },
  {
    path: "/ranking/NYCBike20140409",
    name: "NYCBike20140409",
    component: () => import("../views/ranking/speed/NYCBike20140409.vue")
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
    path: "/cn/ranking",
    name: "RankingCN",
    component: () => import("../views/cn/RankingCN.vue")
  },
  {
    path: "/cn/ranking/METR-LA",
    name: "METR-LACN",
    component: () => import("../views/cn/ranking/speed/METR-LACN.vue")
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
