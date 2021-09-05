<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px; color: white;">
        <p style="width:200px;margin: 30px 0 20px 150px; font-size: 64px">LibCity</p>
        <p style="width:900px;margin: 0px 0 20px 150px; font-size: 32px">
          一个统一、全面的交通预测框架。
        </p>
        <div class="btn-list">
          <a-button class="btn" type="primary" shape="round" @click="toInstallToolkit">安装</a-button>
          <a-button class="btn" id="long_btn" type="primary" shape="round" @click="toQuickStart">快速开始</a-button>
        </div>
      </div>
    </div>
    <div class="main">
      <div style="min-height: 330px">
        <feat-card class="feature"></feat-card>
      </div>
      <div class="latestnews">
         <div class="news-header"><span class="news-block-title">最近新闻</span>
        <a-button class="seemore-btn" value="large" style="background-color: white;" @click="toNews">
          所有新闻<a-icon type="right" style="color: red;"/>
        </a-button></div>
        <new-card class="news"></new-card>
      </div>
      <div class="toolkit">
        <div class="news-header"> <span class="block-title">框架</span></div>
        <div style="width: 80%; margin: 10px auto 20px auto; text-align: center">
          <img src="../../assets/img/toolkit-CN.png" alt="toolkit" height="550"/>
        </div>
      </div> 
      <div class="platform">
         <div class="news-header"><span class="block-title">平台</span></div>
        <div>
          <plat-card class="feature"></plat-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import featCard from './home/featureCardCN.vue';
import platCard from './home/platformCardCN.vue';
import newCard from './home/newsCardCN.vue';

export default {
  data() {
    return {
      focus: 0,
    };
  },
  components: {
    featCard,
    newCard,
    platCard
  },
  methods: {
    toNews() {
      this.$router.push({
            name: "NewsCN",
      });
    },
    toInstallToolkit() {
        this.$router.push({
            name: "InstallLibCityCN",
        });
    },
    toQuickStart() {
      this.$router.push({
        name: "QuickStartCN",
      })
    }
  }
};
</script>

<style scoped>
.container {
  margin: auto;
  width: 100%;
  min-height: 1000px;
  background-color: white;
  /* border: red solid 1px; */
}
.header {
  min-width:900px;
  width: 100%;
  height: 360px;
  background:  rgb(27, 140, 233) linear-gradient(to right,  rgb(27, 140, 233), rgb(11, 247, 188));
  /* border: blue solid 1px; */
}
.btn-list {
  margin: 20px 20px 0px 130px;
}
.btn {
  width: 120px;
  height: 60px;
  margin: 20px;
  background-color: transparent;
  border-color: white;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif;
}
.btn:hover {
  background-color: white;
  color: rgb(103, 179, 241);
}
#long_btn {
  width: 160px;
}
.main {
  width: 100%;
  min-height: 800px;
  margin: auto;
  /* border: rgb(99, 97, 99) solid 1px; */
}
.feature {
  min-width:1050px;
  width: 80%;
  margin: 20px auto 20px auto;
}
.latestnews {
  min-width: 700px;
  width: 100%;
  height: 500px;
  background-color: whitesmoke;
  padding-top: 20px;
  padding-bottom: 20px;
}
.news {
  min-width: 1000px;
  width: 80%;
  margin: 20px auto 20px auto;
}
.toolkit {
  height: 660px;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 20px;
}
.platform {
  height: 400px;
  background-color: whitesmoke;
  padding-top: 20px;
  padding-bottom: 20px;
}

.block-title {
  /* border: red solid 1px; */
  margin:auto;
  font-size: 32px; 
  width: 250px; 
  line-height: 48px; 
  height: 48px; 
  font-weight: 700;
}
.news-block-title {
  width:250px;
  font-size: 32px; 
  display: inline-block; 
  line-height: 48px; 
  height: 48px; 
  font-weight: 700;
}
.seemore-btn {
  display: block;
  float: right;
  width: 160px; 
  height: 48px; 
  line-height: 48px; 
  font-size: 18px; 
  border: 0;
}
.news-header{
  min-width: 1000px;
  width: 80%;
  margin:auto
}
</style>
