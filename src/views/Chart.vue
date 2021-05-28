<template>
  <div class="main">
    <div class="left">
      <div class="title-one">PARAMETERS</div>
      <a-divider style="margin: 10px 0 10px 0;"></a-divider>
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
      <a-divider style="margin: 10px 0 10px 0;"></a-divider>
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
            data: ['Train Loss', 'Val Loss']
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
            name:'Epoch',
            type: 'category',
            boundaryGap: false,
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: 'Train Loss',
                type: 'line',
                stack: '总量',
                data: [3.3774, 2.4176, 2.3156, 2.2701, 2.2835, 2.1878, 2.1711, 2.1584, 2.1468, 2.1358, 2.1272, 2.1181, 2.1104, 2.1039, 2.0958, 2.0908, 2.0864, 2.0802, 2.0775, 2.0717, 2.0633, 2.0633, 2.066, 2.068, 2.0687, 2.0703, 2.0741, 2.0794, 2.083, 2.09, 2.0937, 2.1046, 2.1165, 2.1276, 2.1422, 2.1496, 2.1621, 2.1952, 2.207, 2.2362, 2.2548, 2.2816, 2.3167, 2.3501, 2.3824, 2.4414, 2.4544, 2.5075, 2.5376, 2.5775, 2.5981, 2.642, 2.6583, 2.6752, 2.7168, 2.7312, 2.738, 2.7472, 2.7632, 2.7736, 2.7872, 2.7862, 2.7866, 2.7916, 2.7989, 2.797, 2.8, 2.8032, 2.8048, 2.8082, 2.8077, 2.8077, 2.8061, 2.8068, 2.8063, 2.8072, 2.8091, 2.8096, 2.8089, 2.8094, 2.8063, 2.8094, 2.8083, 2.8092, 2.8087, 2.8088, 2.8079, 2.809, 2.8086, 2.808, 2.8081, 2.8082, 2.8081, 2.8078, 2.8079, 2.8078, 2.8083, 2.8081, 2.8077, 2.8075]
            },
            {
                name: 'Val Loss',
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
          toolbox: {
            feature: {
                saveAsImage: {}
            }
          },
          xAxis: [
              {
                  name:'Step',
                  type: 'category',
                  data: [1,2,3,4,5,6,7,8,9,10,11,12],
                  axisTick: {
                      alignWithLabel: true
                  }
              }
          ],
          yAxis: [
              {
                  name: 'Prediction Loss',
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
      if (this.form.dataset == 'METR_LA') {
        if (this.form.model == 'GWNET') {
          this.option.series[0].data = [4.0412, 3.6256, 3.5236, 3.4444, 3.3946, 3.3629, 3.3292, 3.3032, 3.2802, 3.2599, 3.2356, 3.2146, 3.1945, 3.1793, 3.1665, 3.1467, 3.1357, 3.1213, 3.1064, 3.0986, 3.087, 3.0807, 3.0673, 3.0589, 3.0527, 3.0413, 3.0401, 3.0317, 3.0255, 3.0204, 3.0122, 3.0071, 2.9995, 3.0017, 2.9923, 2.9883, 2.9832, 2.9771, 2.973, 2.9738, 2.9694, 2.9621, 2.9602, 2.9573, 2.9494, 2.9487, 2.9443, 2.943, 2.9403, 2.9312, 2.9339, 2.9327, 2.9256, 2.9255, 2.9219, 2.9167, 2.9195, 2.9161, 2.9163, 2.9079, 2.9063, 2.9059, 2.9044, 2.8998, 2.9, 2.8973, 2.8978, 2.8909, 2.888, 2.8871, 2.8866, 2.8831, 2.8843, 2.8836, 2.8789, 2.881, 2.8763, 2.8748, 2.874, 2.8689, 2.8665, 2.8677, 2.8668, 2.8631, 2.8639, 2.8622, 2.8608, 2.8541, 2.8591, 2.8595, 2.8544, 2.8512, 2.8537, 2.8526, 2.8449, 2.8491, 2.8479, 2.8461, 2.8452, 2.843]
          this.option.series[1].data = [3.6475, 3.3391, 3.3214, 3.2204, 3.1944, 3.1679, 3.1258, 3.2154, 3.1206, 3.0991, 3.1032, 3.0446, 3.0383, 3.1336, 3.0484, 3.0446, 3.0272, 2.9979, 3.0096, 2.983, 2.9923, 2.9647, 2.9927, 3.0024, 2.9751, 2.9492, 2.9722, 2.959, 2.9502, 2.977, 2.9589, 2.9601, 2.9381, 2.9539, 2.9528, 2.9269, 2.9903, 2.9237, 2.9829, 2.9418, 2.9187, 2.9208, 2.952, 2.943, 2.9346, 2.9236, 2.938, 2.9171, 2.912, 2.9346, 2.9406, 2.9499, 2.9235, 2.913, 2.9414, 2.9135, 2.9215, 2.9406, 2.91, 2.9612, 2.9135, 2.9314, 2.926, 2.916, 2.9168, 2.9144, 2.9268, 2.9436, 2.9065, 2.9041, 2.9305, 2.9144, 2.9284, 2.9293, 2.926, 2.9263, 2.9178, 2.9279, 2.919, 2.925, 2.8998, 2.9078, 2.9367, 2.9033, 2.9473, 2.9476, 2.9434, 2.9012, 2.9225, 2.9206, 2.9344, 2.9469, 2.9296, 2.9111, 2.9038, 2.9118, 2.924, 2.9344, 2.9106, 2.9285]
          this.optionH.series[0].data = [2.311938762664795, 2.6092865467071533, 2.8120381832122803, 2.97009539604187, 3.098574638366699, 3.219252824783325, 3.2995378971099854, 3.377214193344116, 3.4469220638275146, 3.504133462905884, 3.5650389194488525, 3.6211559772491455]
        } else if (this.form.model == 'MTGNN') {
          this.option.series[0].data = [2.6517, 2.4015, 2.3555, 2.3171, 2.2975, 2.2775, 2.3815, 2.3815, 2.3584, 2.3394, 2.3264, 2.3076, 2.2957, 2.4243, 2.3996, 2.3895, 2.3816, 2.3736, 2.3691, 2.3639, 2.4982, 2.4527, 2.4445, 2.4395, 2.4352, 2.4316, 2.4921, 2.5098, 2.5052, 2.5014, 2.497, 2.4943, 2.4902, 2.5704, 2.5573, 2.5544, 2.551, 2.5486, 2.5431, 2.5425, 2.6311, 2.6, 2.5956, 2.5936, 2.592, 2.5865, 2.6265, 2.6428, 2.6337, 2.6323, 2.6326, 2.6287, 2.6271, 2.6822, 2.6711, 2.6709, 2.6682, 2.6681, 2.6652, 2.6595, 2.7262, 2.7043, 2.7022, 2.6965, 2.6947, 2.6936, 2.7223, 2.7304, 2.7263, 2.7256, 2.725, 2.7244, 2.7229, 2.7606, 2.753, 2.7498, 2.7511, 2.7461, 2.7449, 2.7415, 2.7404, 2.7367, 2.7389, 2.7346, 2.7361, 2.7339, 2.7286, 2.7292, 2.7264, 2.7274, 2.7237, 2.7238, 2.7197, 2.7213, 2.7175, 2.7185, 2.7146, 2.7172, 2.7164, 2.7112]
          this.option.series[1].data = [10.8, 10.7969, 10.7954, 10.7956, 10.7909, 10.7904, 10.0304, 10.0241, 10.0185, 10.0154, 10.0127, 10.0153, 10.0123, 9.2543, 9.2533, 9.2478, 9.2512, 9.2456, 9.2472, 9.2458, 8.506, 8.4975, 8.5104, 8.4972, 8.4965, 8.4981, 7.758, 7.7526, 7.7554, 7.7583, 7.7569, 7.7517, 7.7553, 7.0295, 7.0226, 7.03, 7.0252, 7.0195, 7.0155, 7.0156, 6.3015, 6.2986, 6.297, 6.3126, 6.2892, 6.3003, 5.5817, 5.5781, 5.5852, 5.5744, 5.5826, 5.5775, 5.5773, 4.8655, 4.8673, 4.8739, 4.8708, 4.86, 4.8541, 4.8546, 4.1388, 4.1752, 4.1602, 4.1558, 4.1604, 4.1597, 3.4642, 3.4495, 3.4633, 3.4786, 3.4693, 3.4585, 3.4657, 2.7661, 2.7519, 2.7665, 2.742, 2.7589, 2.7538, 2.7595, 2.7697, 2.756, 2.7532, 2.7468, 2.7466, 2.7575, 2.7697, 2.762, 2.781, 2.7579, 2.7635, 2.7606, 2.7497, 2.7564, 2.7838, 2.7637, 2.7599, 2.772, 2.7635, 2.7551]
          this.optionH.series[0].data = [2.2359530925750732, 2.4878334999084473, 2.667365789413452, 2.8143727779388428, 2.936577320098877, 3.0570785999298096, 3.1434621810913086, 3.2292418479919434, 3.3061394691467285, 3.3711791038513184, 3.4289886951446533, 3.4861061573028564]
        } else if (this.form.model == 'AGCRN') {
          this.option.series[0].data = [5.2213, 3.7211, 3.5511, 3.4343, 3.3407, 3.2695, 3.2151, 3.1644, 3.1271, 3.0955, 3.0677, 3.045, 3.0249, 3.0059, 2.9908, 2.9728, 2.9584, 2.9438, 2.9283, 2.9152, 2.8982, 2.8874, 2.874, 2.862, 2.847, 2.8354, 2.8217, 2.8109, 2.7993, 2.7877, 2.7758, 2.7654, 2.7526, 2.742, 2.7309, 2.7208, 2.7093, 2.7002, 2.689, 2.6776, 2.6689, 2.6587, 2.6503, 2.6412, 2.6319, 2.6199, 2.6133, 2.6026, 2.5971, 2.5877, 2.5787, 2.5729, 2.5639, 2.5572, 2.5486, 2.5404, 2.5358, 2.5253, 2.5218, 2.5145, 2.5065, 2.5024, 2.4927, 2.4955, 2.4833, 2.4738, 2.472, 2.4652, 2.4595, 2.455, 2.4612, 2.4432, 2.4381, 2.4344, 2.4299, 2.4234, 2.4197, 2.4129, 2.412]
          this.option.series[1].data = [3.8082, 3.4865, 3.3945, 3.2602, 3.1891, 3.1153, 3.0934, 3.0368, 3.0269, 3.0107, 2.9702, 2.9688, 2.9581, 2.9641, 2.9508, 2.9444, 2.9323, 2.9304, 2.9374, 2.9264, 2.9301, 2.934, 2.9437, 2.9223, 2.9386, 2.925, 2.9304, 2.9278, 2.9191, 2.9392, 2.926, 2.9454, 2.9328, 2.9375, 2.9425, 2.9465, 2.9654, 2.9497, 2.9498, 2.956, 2.9839, 2.9743, 2.9667, 2.9612, 2.965, 2.9719, 2.9746, 2.9687, 2.9788, 2.991, 2.9766, 2.9747, 2.9754, 2.9857, 2.9911, 2.9777, 2.9835, 2.9857, 2.9992, 2.9833, 2.9967, 2.9897, 3.0084, 3.0018, 2.984, 3.0046, 2.9925, 2.9976, 2.9976, 3.0037, 2.9953, 3.0092, 3.0039, 3.0171, 3.0056, 3.0224, 3.0094, 3.0101, 3.0306]
          this.optionH.series[0].data = [2.397073984146118, 2.529601573944092, 2.638655424118042, 2.733477830886841, 2.815753221511841, 2.8897476196289062, 2.954035997390747, 3.0122416019439697, 3.0644476413726807, 3.11205792427063, 3.1556878089904785, 3.196779251098633]
        } else {
          this.option.series[0].data = [3.3774, 2.4176, 2.3156, 2.2701, 2.2835, 2.1878, 2.1711, 2.1584, 2.1468, 2.1358, 2.1272, 2.1181, 2.1104, 2.1039, 2.0958, 2.0908, 2.0864, 2.0802, 2.0775, 2.0717, 2.0633, 2.0633, 2.066, 2.068, 2.0687, 2.0703, 2.0741, 2.0794, 2.083, 2.09, 2.0937, 2.1046, 2.1165, 2.1276, 2.1422, 2.1496, 2.1621, 2.1952, 2.207, 2.2362, 2.2548, 2.2816, 2.3167, 2.3501, 2.3824, 2.4414, 2.4544, 2.5075, 2.5376, 2.5775, 2.5981, 2.642, 2.6583, 2.6752, 2.7168, 2.7312, 2.738, 2.7472, 2.7632, 2.7736, 2.7872, 2.7862, 2.7866, 2.7916, 2.7989, 2.797, 2.8, 2.8032, 2.8048, 2.8082, 2.8077, 2.8077, 2.8061, 2.8068, 2.8063, 2.8072, 2.8091, 2.8096, 2.8089, 2.8094, 2.8063, 2.8094, 2.8083, 2.8092, 2.8087, 2.8088, 2.8079, 2.809, 2.8086, 2.808, 2.8081, 2.8082, 2.8081, 2.8078, 2.8079, 2.8078, 2.8083, 2.8081, 2.8077, 2.8075]
          this.option.series[1].data = [4.3733, 3.6081, 3.6812, 3.5217, 3.4736, 3.1115, 3.0969, 3.0714, 3.0755, 3.036, 3.0494, 3.0125, 2.9988, 3.0089, 3.0382, 2.9857, 3.01, 2.9784, 2.9566, 2.9489, 2.9406, 2.9432, 2.945, 2.9358, 2.9313, 2.9278, 2.9371, 2.9283, 2.9305, 2.9361, 2.9472, 2.9264, 2.9265, 2.9071, 2.9433, 2.933, 2.8941, 2.9127, 2.8873, 2.8804, 2.8759, 2.8752, 2.8702, 2.8729, 2.8685, 2.8592, 2.8612, 2.8605, 2.86, 2.8618, 2.8588, 2.8568, 2.853, 2.855, 2.854, 2.8516, 2.8528, 2.8532, 2.851, 2.8526, 2.8516, 2.8495, 2.8494, 2.8546, 2.8523, 2.8477, 2.8464, 2.8535, 2.8492, 2.8525, 2.8511, 2.8492, 2.8506, 2.8489, 2.8509, 2.8485, 2.8499, 2.8495, 2.8499, 2.8497, 2.8484, 2.8485, 2.8493, 2.8505, 2.8487, 2.849, 2.8491, 2.849, 2.8504, 2.8506, 2.8478, 2.8495, 2.8501, 2.8487, 2.8498, 2.8484, 2.8497, 2.8499, 2.8515, 2.8501]
          this.optionH.series[0].data = [2.2572438716888428, 2.3957266807556152, 2.505777359008789, 2.6010701656341553, 2.6851282119750977, 2.7633702754974365, 2.832709312438965, 2.8964741230010986, 2.955946207046509, 3.0112195014953613, 3.063225269317627, 3.11252760887146]
        }
      } else {
        if (this.form.model == 'GWNET') {
            this.option.series[0].data = [2.0685, 1.8654, 1.8021, 1.7719, 1.7475, 1.726, 1.7103, 1.6924, 1.6762, 1.6626, 1.6491, 1.6364, 1.6238, 1.6182, 1.6087, 1.6001, 1.5908, 1.5857, 1.5821, 1.5714, 1.5651, 1.5613, 1.5549, 1.5518, 1.5451, 1.5404, 1.5365, 1.5332, 1.5284, 1.5229, 1.5221, 1.519, 1.5133, 1.5108, 1.5078, 1.5064, 1.5016, 1.5, 1.4986, 1.4951, 1.4912, 1.4904, 1.4895, 1.4855, 1.4841, 1.4822, 1.4805, 1.477, 1.478, 1.4746, 1.4739, 1.472, 1.4707, 1.4685, 1.468, 1.4662, 1.4645, 1.4644, 1.4609, 1.4603, 1.4608, 1.4578, 1.4555, 1.4572, 1.4566, 1.4527, 1.4535, 1.4514, 1.4494, 1.4492, 1.4504, 1.4472, 1.4473, 1.4443, 1.4452, 1.4435, 1.4416, 1.4411, 1.4408, 1.4405, 1.4405, 1.4379, 1.4377, 1.4361, 1.4363, 1.4365, 1.4351, 1.4334, 1.433, 1.4326, 1.4309, 1.4307, 1.4302, 1.4302, 1.4284, 1.4287, 1.4268, 1.427, 1.4302, 1.4252]
            this.option.series[1].data = [2.0847, 1.9676, 1.9294, 1.9319, 1.8889, 1.854, 1.8383, 1.8218, 1.8047, 1.8152, 1.7792, 1.7769, 1.7712, 1.7356, 1.7566, 1.7554, 1.7393, 1.7421, 1.7156, 1.7165, 1.693, 1.6964, 1.6978, 1.6917, 1.701, 1.6773, 1.6746, 1.6949, 1.6807, 1.6661, 1.685, 1.6646, 1.6658, 1.6588, 1.6549, 1.6638, 1.7061, 1.675, 1.6601, 1.6513, 1.6594, 1.6479, 1.6468, 1.6606, 1.6534, 1.6511, 1.6426, 1.6422, 1.6492, 1.648, 1.6405, 1.6396, 1.6503, 1.6464, 1.6517, 1.6304, 1.6361, 1.6331, 1.6303, 1.6456, 1.6475, 1.6306, 1.6338, 1.6333, 1.6381, 1.6372, 1.6223, 1.6327, 1.6386, 1.6357, 1.6211, 1.62, 1.6226, 1.6229, 1.6254, 1.6268, 1.6268, 1.659, 1.6235, 1.6371, 1.6297, 1.6296, 1.6249, 1.6303, 1.6256, 1.6194, 1.6209, 1.6294, 1.6207, 1.6212, 1.6249, 1.6363, 1.6173, 1.6243, 1.6223, 1.6145, 1.6218, 1.6155, 1.6217, 1.6255]
            this.optionH.series[0].data = [0.8612831830978394, 1.1387757062911987, 1.3309690952301025, 1.472216010093689, 1.5798112154006958, 1.6665114164352417, 1.7360045909881592, 1.7918963432312012, 1.8428270816802979, 1.8887732028961182, 1.9318770170211792, 1.9752581119537354]
        } else if (this.form.model == 'MTGNN') {
            this.option.series[0].data = [1.008, 0.8785, 0.8661, 0.8607, 0.9715, 0.9919, 0.9841, 0.9783, 1.0203, 1.086, 1.0809, 1.0758, 1.0722, 1.1635, 1.1578, 1.1518, 1.1485, 1.1925, 1.2196, 1.2145, 1.2107, 1.2236, 1.2724, 1.2664, 1.264, 1.2604, 1.3064, 1.3105, 1.308, 1.3039, 1.328, 1.3498, 1.3448, 1.3438, 1.3413, 1.3869, 1.3787, 1.375, 1.3735, 1.4016, 1.4082, 1.4052, 1.4037, 1.4134, 1.4344, 1.4328, 1.4291, 1.4269, 1.4574, 1.4555, 1.4528, 1.4509, 1.4502, 1.4478, 1.446, 1.445, 1.4442, 1.4417, 1.44, 1.4401, 1.4377, 1.4379, 1.4352, 1.435, 1.435, 1.4342, 1.4316, 1.4306, 1.4312, 1.4316, 1.4303, 1.4283, 1.4276, 1.4283, 1.4271, 1.4259, 1.4254, 1.4252, 1.4229, 1.4241, 1.4233, 1.4221, 1.4226, 1.4214, 1.4219, 1.4217, 1.4201, 1.4194, 1.4183, 1.4173, 1.419, 1.4174, 1.4166, 1.418, 1.4169, 1.4154, 1.4153, 1.4152, 1.417, 1.4141]
            this.option.series[1].data = [5.677, 5.6749, 5.6748, 5.6738, 5.2669, 5.2621, 5.2644, 5.2626, 4.8735, 4.8657, 4.8641, 4.864, 4.8628, 4.4872, 4.4832, 4.4861, 4.4799, 4.109, 4.1023, 4.1043, 4.1011, 3.7447, 3.7333, 3.7326, 3.734, 3.7303, 3.402, 3.3737, 3.3711, 3.3719, 3.0209, 3.0135, 3.0087, 3.0066, 3.0115, 2.6545, 2.6547, 2.6619, 2.6584, 2.3099, 2.3397, 2.3025, 2.3226, 1.9798, 1.9558, 1.9645, 1.9611, 1.9628, 1.6152, 1.6104, 1.6218, 1.6153, 1.6316, 1.62, 1.6083, 1.6078, 1.6227, 1.6141, 1.6064, 1.6002, 1.6015, 1.6274, 1.5969, 1.6218, 1.5953, 1.5999, 1.6053, 1.601, 1.6, 1.6006, 1.6024, 1.5979, 1.5928, 1.5919, 1.5935, 1.604, 1.5962, 1.6026, 1.6186, 1.6243, 1.5994, 1.6064, 1.5935, 1.5893, 1.5921, 1.5918, 1.5911, 1.5965, 1.5895, 1.596, 1.5962, 1.5923, 1.6016, 1.5932, 1.5953, 1.5899, 1.5954, 1.6005, 1.5941, 1.592]
            this.optionH.series[0].data = [0.8669857978820801, 1.1422849893569946, 1.330915093421936, 1.4678558111190796, 1.5695898532867432, 1.6511613130569458, 1.7164974212646484, 1.7691638469696045, 1.8149851560592651, 1.8552731275558472, 1.8940578699111938, 1.9338783025741577]
        } else {
            this.option.series[0].data = [3.3774, 2.4176, 2.3156, 2.2701, 2.2835, 2.1878, 2.1711, 2.1584, 2.1468, 2.1358, 2.1272, 2.1181, 2.1104, 2.1039, 2.0958, 2.0908, 2.0864, 2.0802, 2.0775, 2.0717, 2.0633, 2.0633, 2.066, 2.068, 2.0687, 2.0703, 2.0741, 2.0794, 2.083, 2.09, 2.0937, 2.1046, 2.1165, 2.1276, 2.1422, 2.1496, 2.1621, 2.1952, 2.207, 2.2362, 2.2548, 2.2816, 2.3167, 2.3501, 2.3824, 2.4414, 2.4544, 2.5075, 2.5376, 2.5775, 2.5981, 2.642, 2.6583, 2.6752, 2.7168, 2.7312, 2.738, 2.7472, 2.7632, 2.7736, 2.7872, 2.7862, 2.7866, 2.7916, 2.7989, 2.797, 2.8, 2.8032, 2.8048, 2.8082, 2.8077, 2.8077, 2.8061, 2.8068, 2.8063, 2.8072, 2.8091, 2.8096, 2.8089, 2.8094, 2.8063, 2.8094, 2.8083, 2.8092, 2.8087, 2.8088, 2.8079, 2.809, 2.8086, 2.808, 2.8081, 2.8082, 2.8081, 2.8078, 2.8079, 2.8078, 2.8083, 2.8081, 2.8077, 2.8075]
            this.option.series[1].data = [4.3733, 3.6081, 3.6812, 3.5217, 3.4736, 3.1115, 3.0969, 3.0714, 3.0755, 3.036, 3.0494, 3.0125, 2.9988, 3.0089, 3.0382, 2.9857, 3.01, 2.9784, 2.9566, 2.9489, 2.9406, 2.9432, 2.945, 2.9358, 2.9313, 2.9278, 2.9371, 2.9283, 2.9305, 2.9361, 2.9472, 2.9264, 2.9265, 2.9071, 2.9433, 2.933, 2.8941, 2.9127, 2.8873, 2.8804, 2.8759, 2.8752, 2.8702, 2.8729, 2.8685, 2.8592, 2.8612, 2.8605, 2.86, 2.8618, 2.8588, 2.8568, 2.853, 2.855, 2.854, 2.8516, 2.8528, 2.8532, 2.851, 2.8526, 2.8516, 2.8495, 2.8494, 2.8546, 2.8523, 2.8477, 2.8464, 2.8535, 2.8492, 2.8525, 2.8511, 2.8492, 2.8506, 2.8489, 2.8509, 2.8485, 2.8499, 2.8495, 2.8499, 2.8497, 2.8484, 2.8485, 2.8493, 2.8505, 2.8487, 2.849, 2.8491, 2.849, 2.8504, 2.8506, 2.8478, 2.8495, 2.8501, 2.8487, 2.8498, 2.8484, 2.8497, 2.8499, 2.8515, 2.8501]
            this.optionH.series[0].data = [2.2572438716888428, 2.3957266807556152, 2.505777359008789, 2.6010701656341553, 2.6851282119750977, 2.7633702754974365, 2.832709312438965, 2.8964741230010986, 2.955946207046509, 3.0112195014953613, 3.063225269317627, 3.11252760887146]
        }
      }
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
  padding-top:15px;
  font-size:28px;
  margin-left: 50px;
  font-weight: 700;
  font-family: 'Nunito', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
}
</style>
