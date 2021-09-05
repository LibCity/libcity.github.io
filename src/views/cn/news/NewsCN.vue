<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 0 130px; font-size: 18px">Featured Post</p>
        <p style="margin: 0 0 10px 130px; font-size: 60px">LibCity 0.1.0版本正式发布</p>
        <p style="margin: 0 0 20px 130px; font-size: 22px">
          今天，我们正式发布了LibCity 0.1.0版本。
        </p>
        <a-button class="readmore-btn" value="large" style="margin: 5px 0 0 130px; background-color: white;" @click="toNamedNews('LibCity-V0.1.0-Has-ReleasedCN')">
          详情<a-icon type="right" style="color: red;"/>
        </a-button>
      </div>
    </div>

    <div class="content">
        <div id="hermes-v0.1.0-has-released">
            <p class="news-date">2021年4月12日</p>
            <h2 class="news-title" @click="toNamedNews('LibCity-V0.1.0-Has-ReleasedCN')" style="cursor:pointer">LibCity 0.1.0版本正式发布</h2>
            <p class="news-summary">今天，我们正式发布了LibCity 0.1.0版本。</p>
        </div>
        <a-divider style="background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"/>
    </div>
  </div>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
        components: {
        },
        methods: {
            toNamedNews(link){
                this.$router.push({
                    name: link
                })
            }
        }
    };
</script>

<style scoped>
.container {
  margin: auto;
  width: 100%;
  height: auto;
  /* border: red solid 1px; */
}
.header {
  width: 100%;
  height: 300px;
  background:  rgb(27, 140, 233) linear-gradient(to right,  rgb(27, 140, 233), rgb(11, 247, 188));
  /* border: blue solid 1px; */
}
.content {
    width: 80%;
    height: auto;
    margin: 50px auto 0 auto;
    font-size: 20px;
    line-height: 36px;
    color: black;
    font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    /* border: blue solid 3px; */
}
.title {
    font-size: 32px;
    font-weight: 700;
    font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    margin-bottom: 0;
}
.readmore-btn {
  width: 150px; 
  height: 48px; 
  line-height: 48px; 
  font-size: 18px; 
  border: 0;
}
.news-date {
  color: #6c6c6d;
  font-size: 20px;
  font-family: 'FreightSans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  margin-bottom: 10px;
}
.news-title {
  cursor: pointer;
}
.news-title:hover {
  color: #40a9ff;
}
.news-summary {
  font-size: 18px;
  font-family: 'FreightSans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  width: 100%;
  /* word-break:normal; */
    word-wrap:break-word;
}
</style>