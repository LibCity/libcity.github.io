<template>
  <div style="background-color: transparent; padding: 5px 20px 20px 20px;">
    <a-row :gutter="[48, 16]" style="margin-bottom: 30px">
      <a-col :span="8">
        <div class="fcard">
            <a-card :bordered="false">
                <div style="text-align: center">
                  <img src="../../assets/img/data.png" alt="data"  height="80" style="margin-bottom: 10px"/>
                  <h3 style="font-size: 20px;">Comprehensive Datasets and Unified Data Structures</h3>
                  <p style="text-align: left">LibCity provides 29 spatio-temporal datasets and introduces unified data structures to format representations of datas and the input of algorithms.</p>
                </div>
            </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="fcard">
            <a-card :bordered="false">
              <div style="text-align: center">
                <img src="../../assets/img/algorithm.png" alt="algorithm"  height="80" style="margin-bottom: 10px"/>
                <h3 style="font-size: 20px;">Mainstream Tasks and Intelligence Algorithms</h3>
                <p style="text-align: left">LibCity supports 4 mainstream spatio-temporal data mining tasks and implements 42 commonly used intelligence algorithms.</p>
              </div>
            </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="fcard">
            <a-card :bordered="false">
              <div style="text-align: center">
                <img src="../../assets/img/evaluation.png" alt="algorithm"  height="80" style="margin-bottom: 10px"/>
                <h3 style="font-size: 20px;">Extensive and Standard Evaluation Metrics</h3>
                <p style="text-align: left">LibCity incorporates extensive and standard evaluation metrics for testing and comparing spatio-temporal data mining algorithms.</p>
              </div>
            </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
    name: 'featCard',
    data() {
        return {};
    }
}
</script>

<style>
.fcard .ant-card-head {
    border-bottom: 0 !important;
    height: 64px !important;
}
/* .fcard .ant-card-head-title {
    font-size: 20px;
    white-space: pre-wrap !important;
    text-align: center;
} */
.fcard .ant-card-body {
  font-size: 17px;
  height: 170px;
}
</style>