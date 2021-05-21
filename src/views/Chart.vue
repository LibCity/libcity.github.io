<template>
  <div class="main">
    <div class="left">
      <div class="title-one">PARAMETERS</div>
      <a-divider style="margin: 5px 0 10px 0;"></a-divider>
      <!-- <a-divider></a-divider> -->
      <div class="basic">
        <div class="basic-header">BASIC</div>
        <a-form-model style="width:800px;margin:20px auto; font-weight: 700;font-family: 'Nunito', 'Microsoft YaHei', Arial, Helvetica, sans-serif" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="Task">
           <a-select :default-value="taskData[0]" style="width: 280px; font-weight: 400;" @change="handleTaskChange" v-model="form.task">
              <a-select-option v-for="task in taskData" :key="task">
                {{ task }}
              </a-select-option>
            </a-select>
        </a-form-model-item>
        <a-form-model-item label="Dataset">
           <a-select v-model="form.dataset" style="width: 280px; font-weight: 400;">
              <a-select-option v-for="dataset in datasetData" :key="dataset">
                {{ dataset}}
              </a-select-option>
            </a-select>
        </a-form-model-item>
        <a-form-model-item label="Model">
           <a-select v-model="form.model" style="width: 280px; font-weight: 400;">
              <a-select-option v-for="model in modelData" :key="model">
                {{ model }}
              </a-select-option>
            </a-select>
        </a-form-model-item>
        <!-- </a-form-model> -->
        <a-form-model-item label="Metrics">
           <a-select v-model="form.metrics" style="width: 280px; font-weight: 400;">
              <a-select-option v-for="metrics in metricsData" :key="metrics">
                {{ metrics }}
              </a-select-option>
            </a-select>
        </a-form-model-item>
        </a-form-model>
      </div>
      <div class="middle">
        <div class="data">
          <div class="data-header">DATA</div>
          <a-form-model style="width:750px;margin:20px auto;font-weight: 700;font-family: 'Nunito', 'Microsoft YaHei', Arial, Helvetica, sans-serif" :model="dataform" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="batch_size">
            <a-select v-model="dataform.batch_size" style="width: 70px;font-weight: 400;" >
                <a-select-option v-for="batch_size in batch_sizeData" :key="batch_size">
                  {{ batch_size}}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          <a-form-model-item label="in_window">
            <a-select v-model="dataform.input_window" style="width: 70px;font-weight: 400;">
                <a-select-option v-for="input_window in input_windowData" :key="input_window">
                  {{ input_window}}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          <a-form-model-item label="out_window">
            <a-select v-model="dataform.output_window" style="width: 70px;font-weight: 400;">
                <a-select-option v-for="output_window in output_windowData" :key="output_window">
                  {{ output_window }}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          <a-form-model-item label="train_rate">
            <a-select v-model="dataform.train_rate" style="width: 70px;font-weight: 400;">
                <a-select-option v-for="train_rate in train_rateData" :key="train_rate">
                  {{ train_rate }}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          <a-form-model-item label="eval_rate">
            <a-select v-model="dataform.eval_rate" style="width: 70px;font-weight: 400;">
                <a-select-option v-for="eval_rate in eval_rateData" :key="eval_rate">
                  {{ eval_rate }}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          </a-form-model>
          </div>
        <div class="executor">
          <div class="executor-header">EXECUTOR</div>
          <a-form-model style="width:720px;margin:20px auto;font-weight: 700;font-family: 'Nunito', 'Microsoft YaHei', Arial, Helvetica, sans-serif" :model="executorform" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="max_epoch">
            <a-select v-model="executorform.max_epoch" style="width: 110px;font-weight: 400;" >
                <a-select-option v-for="max_epoch in max_epochData" :key="max_epoch">
                  {{ max_epoch}}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          <a-form-model-item label="learner">
            <a-select v-model="executorform.learner" style="width: 110px;font-weight: 400;">
                <a-select-option v-for="learner in learnerData" :key="learner">
                  {{ learner}}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          <a-form-model-item label="learning_rate">
            <a-select v-model="executorform.learning_rate" style="width: 110px;font-weight: 400;">
                <a-select-option v-for="learning_rate in learning_rateData" :key="learning_rate">
                  {{ learning_rate }}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          <a-form-model-item label="lr_scheduler">
            <a-select v-model="executorform.lr_scheduler" style="width: 110px;;font-weight: 400;">
                <a-select-option v-for="lr_scheduler in lr_schedulerData" :key="lr_scheduler">
                  {{ lr_scheduler }}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          <a-form-model-item label="step_size">
            <a-select v-model="executorform.step_size" style="width: 110px;;font-weight: 400;">
                <a-select-option v-for="step_size in step_sizeData" :key="step_size">
                  {{ step_size }}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          <a-form-model-item label="lr_decay_ratio">
            <a-select v-model="executorform.lr_decay_ratio" style="width: 110px;font-weight: 400;">
                <a-select-option v-for="lr_decay_ratio in lr_decay_ratioData" :key="lr_decay_ratio">
                  {{ lr_decay_ratio }}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          </a-form-model>
          </div>
        </div>
        <!-- <div class="evaluator">
        <div class="basic-header">EVALUATOR</div>
        <a-form-model style="width:800px;margin:20px auto" :model="evaluatorform" :label-col="labelCol" :wrapper-col="wrapperCol">
        <a-form-model-item label="metrics">
           <a-select v-model="evaluatorform.metrics" style="width: 150px">
              <a-select-option v-for="metrics in metricsData" :key="metrics">
                {{ metrics}}
              </a-select-option>
            </a-select>
        </a-form-model-item>
        </a-form-model>
    </div>   -->
    </div>
    <div class="right" > 
      <div class="title-one">RESULTS</div>
      <a-divider style="margin: 5px 0 10px 0;"></a-divider>
       <a-button  class="redo-btn" type="primary" @click="changeData()">
         <a-icon type="reload" :style="{ fontSize: '20px'} "/>
        </a-button>
      <div class="chart-one" id="chart" ></div>
      <div class="chart-two" id="histogram" ></div>          
    </div>
  </div>
</template>

<script>

import dat from "./dataOnline.js";
export default {
  data() {
    return {
      customStyle:
        'background-color: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden',
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      taskData:dat.basic.task,
      datasetAllData:dat.basic.dataset,
      datasetData:dat.basic.dataset[0],
      modelAllData:dat.basic.model,
      modelData:dat.basic.model[0],
      metricsAllData:dat.basic.metrics,
      metricsData:dat.basic.metrics[0],
      batch_sizeData:dat.data.batch_size,
        input_windowData:dat.data.input_window,
        output_windowData:dat.data.output_window,
        train_rateData: dat.data.train_rate,
        eval_rateData: dat.data.eval_rate,
        max_epochData: dat.executor.max_epoch,
        learnerData: dat.executor.learner,
        learning_rateData: dat.executor.learning_rate,
        lr_schedulerData: dat.executor.lr_scheduler,
        step_sizeData:dat.executor.step_size,
        lr_decay_ratioData: dat.executor.lr_decay_ratio,
        max_epoch: dat.executor.max_epoch,
        learner: dat.executor.learner,
        learning_rate: dat.executor.learning_rate,
        lr_scheduler: dat.executor.lr_scheduler,
        step_size:dat.executor.step_size,
        lr_decay_ratio: dat.executor.lr_decay_ratio,
        // metricsData:dat.evaluator.metrics,
      form:{
        task:dat.basic.task[0],
        dataset:dat.basic.dataset[0][0],
        model:dat.basic.model[0][0],
        metrics:dat.basic.metrics[0][0]
      },
      dataform:{
        batch_size:dat.data.batch_size[0],
        input_window:dat.data.input_window[0],
        output_window:dat.data.output_window[0],
        train_rate: dat.data.train_rate[0],
        eval_rate: dat.data.eval_rate[0],
      },
      executorform:{
        max_epoch: dat.executor.max_epoch[0],
        learner: dat.executor.learner[0],
        learning_rate: dat.executor.learning_rate[0],
        lr_scheduler: dat.executor.lr_scheduler[0],
        step_size:dat.executor.step_size[0],
        lr_decay_ratio: dat.executor.lr_decay_ratio[0],
      },
      // evaluatorform:{
      //   metrics:dat.evaluator.metrics[0]
      // },
      option :{
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['train loss', 'val loss']
        },
        grid: {
            left: '3%',
            right: '10%',
            bottom: '1%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            name:'epoch',
            type: 'category',
            boundaryGap: false,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'train loss',
                type: 'line',
                stack: '总量',
                data: [3.3774, 2.4176, 2.3156, 2.2701, 2.2835, 2.1878, 2.1711, 2.1584, 2.1468, 2.1358, 2.1272, 2.1181, 2.1104, 2.1039, 2.0958, 2.0908, 2.0864, 2.0802, 2.0775, 2.0717, 2.0633, 2.0633, 2.066, 2.068, 2.0687, 2.0703, 2.0741, 2.0794, 2.083, 2.09, 2.0937, 2.1046, 2.1165, 2.1276, 2.1422, 2.1496, 2.1621, 2.1952, 2.207, 2.2362, 2.2548, 2.2816, 2.3167, 2.3501, 2.3824, 2.4414, 2.4544, 2.5075, 2.5376, 2.5775, 2.5981, 2.642, 2.6583, 2.6752, 2.7168, 2.7312, 2.738, 2.7472, 2.7632, 2.7736, 2.7872, 2.7862, 2.7866, 2.7916, 2.7989, 2.797, 2.8, 2.8032, 2.8048, 2.8082, 2.8077, 2.8077, 2.8061, 2.8068, 2.8063, 2.8072, 2.8091, 2.8096, 2.8089, 2.8094, 2.8063, 2.8094, 2.8083, 2.8092, 2.8087, 2.8088, 2.8079, 2.809, 2.8086, 2.808, 2.8081, 2.8082, 2.8081, 2.8078, 2.8079, 2.8078, 2.8083, 2.8081, 2.8077, 2.8075]
            },
            {
                name: 'val loss',
                type: 'line',
                stack: '总量',
                data: [4.3733, 3.6081, 3.6812, 3.5217, 3.4736, 3.1115, 3.0969, 3.0714, 3.0755, 3.036, 3.0494, 3.0125, 2.9988, 3.0089, 3.0382, 2.9857, 3.01, 2.9784, 2.9566, 2.9489, 2.9406, 2.9432, 2.945, 2.9358, 2.9313, 2.9278, 2.9371, 2.9283, 2.9305, 2.9361, 2.9472, 2.9264, 2.9265, 2.9071, 2.9433, 2.933, 2.8941, 2.9127, 2.8873, 2.8804, 2.8759, 2.8752, 2.8702, 2.8729, 2.8685, 2.8592, 2.8612, 2.8605, 2.86, 2.8618, 2.8588, 2.8568, 2.853, 2.855, 2.854, 2.8516, 2.8528, 2.8532, 2.851, 2.8526, 2.8516, 2.8495, 2.8494, 2.8546, 2.8523, 2.8477, 2.8464, 2.8535, 2.8492, 2.8525, 2.8511, 2.8492, 2.8506, 2.8489, 2.8509, 2.8485, 2.8499, 2.8495, 2.8499, 2.8497, 2.8484, 2.8485, 2.8493, 2.8505, 2.8487, 2.849, 2.8491, 2.849, 2.8504, 2.8506, 2.8478, 2.8495, 2.8501, 2.8487, 2.8498, 2.8484, 2.8497, 2.8499, 2.8515, 2.8501]
            }
          ]
        } ,
        optionH :{
        //   title: {
        //     text: '折线图堆叠'
        // },
          tooltip: {
              trigger: 'axis',
              axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                  type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
              }
          },
          grid: {
              left: '3%',
              right: '10%',
              bottom: '3%',
              containLabel: true
          },
          xAxis: [
              {
                  name:'step',
                  type: 'category',
                  data: [1,2,3,4,5,6,7,8,9,10,11,12],
                  axisTick: {
                      alignWithLabel: true
                  }
              }
          ],
          yAxis: [
              {
                  name: 'prediction loss',
                  type: 'value'
              }
          ],
          series: [
              {
                  name: 'test loss',
                  type: 'bar',
                  barWidth: '60%',
                  data: [2.2572438716888428, 2.3957266807556152, 2.505777359008789, 2.6010701656341553, 2.6851282119750977, 2.7633702754974365, 2.832709312438965, 2.8964741230010986, 2.955946207046509, 3.0112195014953613, 3.063225269317627, 3.11252760887146]
              }
          ]
      }
    };
  },
  methods: {
    handleTaskChange(value) {
      console.log(value);
      if(value == "Trajectory Next-Location Prediction"){
        value = 1;
      }else if(value == "Traffic State Prediction"){
        value = 0;
      }
      this.form.task = this.taskData[value];
      this.datasetData = this.datasetAllData[value];
      this.form.dataset = this.datasetData[0];
      this.modelData = this.modelAllData[value];
      this.form.model = this.modelData[0];
      this.metricsData = this.metricsAllData[value];
      this.form.metrics = this.metricsData[0];
    },
    changeData() {
      this.option.series[0].data = [5.2213, 3.7211, 3.5511, 3.4343, 3.3407, 3.2695, 3.2151, 3.1644, 3.1271, 3.0955, 3.0677, 3.045, 3.0249, 3.0059, 2.9908, 2.9728, 2.9584, 2.9438, 2.9283, 2.9152, 2.8982, 2.8874, 2.874, 2.862, 2.847, 2.8354, 2.8217, 2.8109, 2.7993, 2.7877, 2.7758, 2.7654, 2.7526, 2.742, 2.7309, 2.7208, 2.7093, 2.7002, 2.689, 2.6776, 2.6689, 2.6587, 2.6503, 2.6412, 2.6319, 2.6199, 2.6133, 2.6026, 2.5971, 2.5877, 2.5787, 2.5729, 2.5639, 2.5572, 2.5486, 2.5404, 2.5358, 2.5253, 2.5218, 2.5145, 2.5065, 2.5024, 2.4927, 2.4955, 2.4833, 2.4738, 2.472, 2.4652, 2.4595, 2.455, 2.4612, 2.4432, 2.4381, 2.4344, 2.4299, 2.4234, 2.4197, 2.4129, 2.412];
      this.option.series[1].data = [3.8082, 3.4865, 3.3945, 3.2602, 3.1891, 3.1153, 3.0934, 3.0368, 3.0269, 3.0107, 2.9702, 2.9688, 2.9581, 2.9641, 2.9508, 2.9444, 2.9323, 2.9304, 2.9374, 2.9264, 2.9301, 2.934, 2.9437, 2.9223, 2.9386, 2.925, 2.9304, 2.9278, 2.9191, 2.9392, 2.926, 2.9454, 2.9328, 2.9375, 2.9425, 2.9465, 2.9654, 2.9497, 2.9498, 2.956, 2.9839, 2.9743, 2.9667, 2.9612, 2.965, 2.9719, 2.9746, 2.9687, 2.9788, 2.991, 2.9766, 2.9747, 2.9754, 2.9857, 2.9911, 2.9777, 2.9835, 2.9857, 2.9992, 2.9833, 2.9967, 2.9897, 3.0084, 3.0018, 2.984, 3.0046, 2.9925, 2.9976, 2.9976, 3.0037, 2.9953, 3.0092, 3.0039, 3.0171, 3.0056, 3.0224, 3.0094, 3.0101, 3.0306];
      this.optionH.series[0].data = [2.397073984146118, 2.529601573944092, 2.638655424118042, 2.733477830886841, 2.815753221511841, 2.8897476196289062, 2.954035997390747, 3.0122416019439697, 3.0644476413726807, 3.11205792427063, 3.1556878089904785, 3.196779251098633];
      this.draw();
      this.drawH();
    },
    // onSubmit(){
    //   if(this.form.type[0] == 1){
    //     this.option.series = null;
    //     let myChart = this.$echarts.init(document.getElementById("chart"));
    //     myChart.setOption(this.option,true);
    //      console.log("change params");
    //   }else{
    //     this.option.series = this.dataseries;
    //     let myChart = this.$echarts.init(document.getElementById("chart"));
    //     myChart.setOption(this.option,true);
    //      console.log("not change params");
    //   }
     
    // },
    draw() {
      let myChart = this.$echarts.init(document.getElementById("chart"));
      myChart.setOption(this.option);
    },
    drawH(){
      let myChart = this.$echarts.init(document.getElementById("histogram"));
      myChart.setOption(this.optionH);
    }
  },
  mounted(){
    this.draw();
    this.drawH();
    console.log("wrong here");
  }
};
</script>

<style scoped>
.main {
  height: 1000px;
  width: 1350px;
  margin: auto;
  /* border: red 1px solid; */
}
.left {
  margin:10px 0px;
  display: block;
  height: 1000px;
  width: 600px;
  /* border: blue 1px solid; */
}
.right {
  /* padding-left: 10px; */
  margin-top:-1010px;
  display: block;
  float: right;
  height: 800px;
  width: 750px;
  /* border: black 1px solid; */
}
.chart-one{
  margin:0 auto 20px auto;
  height: 300px;
  width: 650px;
  /* border: black 1px solid; */
}
.chart-two{
  margin:0 auto 20px auto;
  height: 300px;
  width: 650px;
  /* border: black 1px solid; */
}
.redo-btn{
  margin-left:50px;
  margin-bottom: 5px;
  width:30px;
  height:30px;
  padding-right:30px;
  padding-left:10px
}
.basic{
  background-color: #f7f7f7;
  border-radius: 12px;
  width:500px;
  min-height:200px;
  margin:10px auto 20px auto;
  padding-bottom: 5px;
  /* border:1px red solid; */
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  background-color: transparent;
}
.basic-header{
  width:500px;
  height:40px;
  background-color:#97b9f7;
  color:white;
  font-size:16px;
  font-weight:700;
  padding:10px;
}
.data-header{
  width:220px;
  height:40px;
  background-color:#97b9f7;
  color:white;
  font-size:16px;
  font-weight:700;
  padding:10px;
}
.executor-header{
  width:250px;
  height:40px;
  background-color:#97b9f7;
  color:white;
  font-size:16px;
  font-weight:700;
  padding:10px;
}

.middle{
  width:500px;
  height:450px;
  margin:10px auto 20px auto;
  /* border:1px black solid; */
}
.data{
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  background-color: transparent;
  display: block;
  float: left;
  width:220px;
  height:450px;
  margin:auto;
  /* border:1px red solid; */
}
.executor{
  display: block;
  float: right;
  width:250px;
  height:450px;
  margin:auto;
  /* border:1px black solid; */
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  background-color: transparent;
}
/* .evaluator{
  width:500px;
  height:130px;
  margin:10px auto;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  background-color: transparent;
} */
.title-one{
  padding-top:10px;
  font-size:24px;
  margin-left: 50px;
  font-weight: 700;
  font-family: 'Nunito', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
}
</style>
