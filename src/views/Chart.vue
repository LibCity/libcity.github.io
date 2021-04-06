<template>
  <div class="main">
    <div class="left">
      <div class="title-one">PARAMETERS</div>
      <a-divider ></a-divider>
      <div class="basic">
        <div class="basic-header">BASIC</div>
        <a-form-model style="width:800px;margin:20px auto" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
          <a-form-model-item label="Task">
           <a-select :default-value="taskData[0]" style="width: 280px;" @change="handleTaskChange" v-model="form.task">
              <a-select-option v-for="task in taskData" :key="task">
                {{ task }}
              </a-select-option>
            </a-select>
        </a-form-model-item>
        <a-form-model-item label="Dataset">
           <a-select v-model="form.dataset" style="width: 150px">
              <a-select-option v-for="dataset in datasetData" :key="dataset">
                {{ dataset}}
              </a-select-option>
            </a-select>
        </a-form-model-item>
        <a-form-model-item label="Model">
           <a-select v-model="form.model" style="width: 150px">
              <a-select-option v-for="model in modelData" :key="model">
                {{ model }}
              </a-select-option>
            </a-select>
        </a-form-model-item>
        </a-form-model>
      </div>
      <div class="middle">
        <div class="data">
          <div class="data-header">DATA</div>
          <a-form-model style="width:750px;margin:20px auto;" :model="dataform" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="batch_size">
            <a-select v-model="dataform.batch_size" style="width: 70px;" >
                <a-select-option v-for="batch_size in batch_sizeData" :key="batch_size">
                  {{ batch_size}}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          <a-form-model-item label="inout_window">
            <a-select v-model="dataform.input_window" style="width: 70px">
                <a-select-option v-for="input_window in input_windowData" :key="input_window">
                  {{ input_window}}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          <a-form-model-item label="output_window">
            <a-select v-model="dataform.output_window" style="width: 70px">
                <a-select-option v-for="output_window in output_windowData" :key="output_window">
                  {{ output_window }}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          <a-form-model-item label="train_rate">
            <a-select v-model="dataform.train_rate" style="width: 70px">
                <a-select-option v-for="train_rate in train_rateData" :key="train_rate">
                  {{ train_rate }}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          <a-form-model-item label="eval_rate">
            <a-select v-model="dataform.eval_rate" style="width: 70px">
                <a-select-option v-for="eval_rate in eval_rateData" :key="eval_rate">
                  {{ eval_rate }}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          </a-form-model>
          </div>
        <div class="executor">
          <div class="executor-header">EXECUTOR</div>
          <a-form-model style="width:720px;margin:20px auto" :model="executorform" :label-col="labelCol" :wrapper-col="wrapperCol">
            <a-form-model-item label="max_epoch">
            <a-select v-model="executorform.max_epoch" style="width: 80px;" >
                <a-select-option v-for="max_epoch in max_epochData" :key="max_epoch">
                  {{ max_epoch}}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          <a-form-model-item label="learner">
            <a-select v-model="executorform.learner" style="width: 110px">
                <a-select-option v-for="learner in learnerData" :key="learner">
                  {{ learner}}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          <a-form-model-item label="learning_rate">
            <a-select v-model="executorform.learning_rate" style="width: 80px">
                <a-select-option v-for="learning_rate in learning_rateData" :key="learning_rate">
                  {{ learning_rate }}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          <a-form-model-item label="lr_scheduler">
            <a-select v-model="executorform.lr_scheduler" style="width: 110px">
                <a-select-option v-for="lr_scheduler in lr_schedulerData" :key="lr_scheduler">
                  {{ lr_scheduler }}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          <a-form-model-item label="step_size">
            <a-select v-model="executorform.step_size" style="width: 80px">
                <a-select-option v-for="step_size in step_sizeData" :key="step_size">
                  {{ step_size }}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          <a-form-model-item label="lr_decay_ratio">
            <a-select v-model="executorform.lr_decay_ratio" style="width: 80px">
                <a-select-option v-for="lr_decay_ratio in lr_decay_ratioData" :key="lr_decay_ratio">
                  {{ lr_decay_ratio }}
                </a-select-option>
              </a-select>
          </a-form-model-item>
          </a-form-model>
          </div>
        </div>
        <div class="evaluator">
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
    </div>  
    </div>
    <div class="right" > 
      <div class="title-one">RESULTS</div>
      <a-divider ></a-divider>
       <a-button  class="redo-btn" type="primary" >
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
        metricsData:dat.evaluator.metrics,
      form:{
        task:dat.basic.task[0],
        dataset:dat.basic.dataset[0][0],
        model:dat.basic.model[0][0]
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
      evaluatorform:{
        metrics:dat.evaluator.metrics[0]
      },
      option :{
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            data: ['train_loss', 'val_loss']
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
                name: 'train_loss',
                type: 'line',
                stack: '总量',
                data: [3.3774, 2.4176, 2.3156, 2.2701, 2.2835, 2.1878, 2.1711, 2.1584, 2.1468, 2.1358, 2.1272, 2.1181, 2.1104, 2.1039, 2.0958, 2.0908, 2.0864, 2.0802, 2.0775, 2.0717, 2.0633, 2.0633, 2.066, 2.068, 2.0687, 2.0703, 2.0741, 2.0794, 2.083, 2.09, 2.0937, 2.1046, 2.1165, 2.1276, 2.1422, 2.1496, 2.1621, 2.1952, 2.207, 2.2362, 2.2548, 2.2816, 2.3167, 2.3501, 2.3824, 2.4414, 2.4544, 2.5075, 2.5376, 2.5775, 2.5981, 2.642, 2.6583, 2.6752, 2.7168, 2.7312, 2.738, 2.7472, 2.7632, 2.7736, 2.7872, 2.7862, 2.7866, 2.7916, 2.7989, 2.797, 2.8, 2.8032, 2.8048, 2.8082, 2.8077, 2.8077, 2.8061, 2.8068, 2.8063, 2.8072, 2.8091, 2.8096, 2.8089, 2.8094, 2.8063, 2.8094, 2.8083, 2.8092, 2.8087, 2.8088, 2.8079, 2.809, 2.8086, 2.808, 2.8081, 2.8082, 2.8081, 2.8078, 2.8079, 2.8078, 2.8083, 2.8081, 2.8077, 2.8075]
            },
            {
                name: 'val_loss',
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
                  type: 'value'
              }
          ],
          series: [
              {
                  name: 'test_loss',
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
        value = 0;
      }else if(value == "Traffic State Prediction"){
        value = 1;
      }
      this.form.task = this.taskData[value];
      this.datasetData = this.datasetAllData[value];
      this.form.dataset = this.datasetData[0];
      this.modelData = this.modelAllData[value];
      this.form.model = this.modelData[0];
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
  height:400px;
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
.evaluator{
  width:500px;
  height:130px;
  margin:10px auto;
  /* border:1px red solid; */
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
  background-color: transparent;
}
.title-one{
  padding-top:10px;
  font-size:24px;
  margin-left: 50px;
}
</style>
