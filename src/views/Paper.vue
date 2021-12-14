<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">Paper</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          This page provides the related papers of LibCity.
        </p>
      </div>
    </div>
    <div class="content">
        <div>
            <p>
                <a-button type="link" class="title" @click="toPaperDetail('LibCity-An-Open-Library-For-Traffic-Prediction')">LibCity: An Open Library for Traffic Prediction</a-button>
            </p>
            <p>Jingyuan Wang, Jiawei Jiang, Wenjun Jiang, Chao Li, Wayne Xin Zhao<br>
            <b><i>In Proceedings of the 29th International Conference on Advances in Geographic Information Systems (SIGSPATIAL'21)</i></b>.</p>
            <p><b>Abstract</b>: With the increase of traffic prediction models, there has become an urgent need to develop a standardized framework to implement and evaluate these methods. This paper presents LibCity, a unified, comprehensive, and extensible library for traffic prediction, which provides researchers with a credible experimental tool and a convenient development framework. In this library, we reproduce 42 traffic prediction models and collect 29 spatial-temporal datasets, which allows researchers to conduct comprehensive experiments in a convenient way. To accelerate the development of new models, we design unified model interfaces based on unified data formats, which effectively encapsulate the details of the implementation. To verify the effectiveness of our implementations, we also report the reproducibility comparison results of LibCity, and set up a performance leaderboard for the four kinds of traffic prediction tasks. Our library will contribute to the standardization and reproducibility in the field of traffic prediction. The open source link of LibCity is https://github.com/LibCity/Bigscity-LibCity.</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), rgb(103, 179, 241), rgb(103, 179, 241));"></a-divider>
            <br>
        </div>
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
            toPaperDetail(paper) {
                this.$router.push({
                    name: paper,
                });
            },
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
  height: 250px;
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
    padding: 0;
    margin-bottom: 0px;
    line-height: 36px;
    color: black;
}
.title:hover {
    color: rgb(27, 140, 233);
}
</style>