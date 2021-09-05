<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">Task</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          LibCity has implemented a set of standard tracks for each supported <br>
          spatio-temporal data mining task to improve comparability of models.
        </p>
      </div>
    </div>

    <div class="content">
      <p class="title">Standard Track</p>
      <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
      <p>LibCity has implemented a set of standard tracks for each task. On the standard track, the original data set, standard data module (Data module), and standard evaluation module (Evaluator module) provided by LibCity are used to constrain different models to use the same data input and evaluation indicators to improve the comparability of evaluation results.</p>
      <p>The standard data input format and evaluation input format for different tasks are explained below:</p>
      <br>
      <p class="sectitle">Traffic State Prediction</p>
      <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
      <p>Specifically, Traffic state prediction contains 3 task: Traffic Flow Prediction, Traffic Speed Prediction and On-Demand Service Prediction. According to the different spatial structure of traffic data, traffic state data can generally be represented by tensors in the following formats:</p>
      <ul>
        <li>A three-dimensional tensor shaped like <code style="color: #e83e8c; font-size: 90%">(N,T,F)</code>, <code style="color: #e83e8c; font-size: 90%">T</code> is the length of time, <code style="color: #e83e8c; font-size: 90%">F</code> is the feature dimension, and <code style="color: #e83e8c; font-size: 90%">N</code> is the number of sensors.</li>
        <li>A four-dimensional tensor shaped like <code style="color: #e83e8c; font-size: 90%">(T,F,I,J)</code>, <code style="color: #e83e8c; font-size: 90%">T</code> is the length of time, <code style="color: #e83e8c; font-size: 90%">F</code> is the feature dimension, and <code style="color: #e83e8c; font-size: 90%">I,J</code> represents the row and column index of the grid data.</li>
        <li>A four-dimensional tensor shaped like <code style="color: #e83e8c; font-size: 90%">(T,F,S,T)</code>, <code style="color: #e83e8c; font-size: 90%">T</code> is the length of time, <code style="color: #e83e8c; font-size: 90%">F</code> is the feature dimension, and <code style="color: #e83e8c; font-size: 90%">S,T</code> represents the id of the origin and destination of the <code style="color: #e83e8c; font-size: 90%">od</code> data.</li>
        <li>A six-dimensional tensor shaped like <code style="color: #e83e8c; font-size: 90%">(T,F,SI,SJ,TI,TJ)</code>, <code style="color: #e83e8c; font-size: 90%">T</code> is the length of time, <code style="color: #e83e8c; font-size: 90%">F</code> is the feature dimension, <code style="color: #e83e8c; font-size: 90%">(SI,SJ,TI,TJ)</code> represents the row and column index of the origin and destination of the <code style="color: #e83e8c; font-size: 90%">grid-od</code> data.</li>
      </ul>
      <p>The standard data input format is a dictionary-like <code style="color: #e83e8c; font-size: 90%">Batch</code> object instance. The key names of this object are as follows:</p>
      <ul>
        <li><code style="color: #e83e8c; font-size: 90%">X</code>: The multi-dimensional tensor input by the model, <code style="color: #e83e8c; font-size: 90%">shape = (batch_size, T_in, space_dim, feature_dim)</code>, each dimension represents the total number of samples in the batch, the width of the input time window, the spatial dimension, and the data feature dimension. In particular, the spatial dimension can be <code style="color: #e83e8c; font-size: 90%">N</code> or <code style="color: #e83e8c; font-size: 90%">I,J</code> or <code style="color: #e83e8c; font-size: 90%">S,T</code> or <code style="color: #e83e8c; font-size: 90%">SI, SJ, TI, TJ</code> as mentioned above.</li>
        <li><code style="color: #e83e8c; font-size: 90%">y</code>: The multi-dimensional tensor that the model expects to output, <code style="color: #e83e8c; font-size: 90%">shape = (batch_size, T_out, space_dim, feature_dim)</code>, each dimension represents the total number of samples in the batch, the width of the output time window, the spatial dimension, and the data feature dimension. Among them, the spatial dimension can be <code style="color: #e83e8c; font-size: 90%">N</code> or <code style="color: #e83e8c; font-size: 90%">I,J</code> or <code style="color: #e83e8c; font-size: 90%">S,T</code> or <code style="color: #e83e8c; font-size: 90%">SI, SJ, TI, TJ</code>  as mentioned above.</li>
        <li><code style="color: #e83e8c; font-size: 90%">X_ext</code>: Optional external data, <code style="color: #e83e8c; font-size: 90%">shape = (batch_size, T_in, ext_dim)</code>, each dimension represents the total number of samples in the batch, the width of the input time window, and the feature dimension of the external data. <strong>In particular, some models may directly incorporate <code style="color: #e83e8c; font-size: 90%">X_ext</code> into <code style="color: #e83e8c; font-size: 90%">X</code> as the input of the model.</strong></li>
        <li><code style="color: #e83e8c; font-size: 90%">y_ext</code>: Optional external data, <code style="color: #e83e8c; font-size: 90%">shape = (batch_size, T_out, ext_dim)</code>, each dimension represents the total number of samples in the batch, the width of the output time window, and the feature dimension of the external data.</li>
      </ul>
      <p>The standard evaluation input format is a dictionary object, and the dictionary has the following key names:</p>
      <ul>
        <li><code style="color: #e83e8c; font-size: 90%">y_true</code>: The ground-truth value, the format is the same as the <code style="color: #e83e8c; font-size: 90%">y</code> in the input.</li>
        <li><code style="color: #e83e8c; font-size: 90%">y_pred</code>: The prediction value, the format is the same as the <code style="color: #e83e8c; font-size: 90%">y</code> in the input.</li>
      </ul>
      <br>
      <p class="sectitle">Trajectory Next-Location Prediction</p>
      <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
      <p>The standard data input format is a dictionary-like <code style="color: #e83e8c; font-size: 90%">Batch</code> object instance. The key names of this object are as follows:</p>
      <ul>
        <li><code style="color: #e83e8c; font-size: 90%">history_loc</code>: Historical trajectory location information, <code style="color: #e83e8c; font-size: 90%">shape = (batch_size, history_len)</code>, <code style="color: #e83e8c; font-size: 90%">history_len</code> is the length of the historical trajectory.</li>
        <li><code style="color: #e83e8c; font-size: 90%">history_tim</code>: Historical trajectory time information, <code style="color: #e83e8c; font-size: 90%">shape = (batch_size, history_len)</code>.</li>
        <li><code style="color: #e83e8c; font-size: 90%">current_loc</code>: Current trajectory location information, <code style="color: #e83e8c; font-size: 90%">shape = (batch_size, current_len)</code>, <code style="color: #e83e8c; font-size: 90%">current_len</code> is the length of the current trajectory.</li>
        <li><code style="color: #e83e8c; font-size: 90%">current_tim</code>: Current trajectory time information, <code style="color: #e83e8c; font-size: 90%">shape = (batch_size, current_len)</code>.</li>
        <li><code style="color: #e83e8c; font-size: 90%">uid</code>: The ID of the user for each trajectory, <code style="color: #e83e8c; font-size: 90%">shape = (batch_size)</code>.</li>
        <li><code style="color: #e83e8c; font-size: 90%">target</code>: Expected next hop location, <code style="color: #e83e8c; font-size: 90%">shape = (batch_size)</code>.</li>
      </ul>
      <p>The standard evaluation input format is a dictionary object, and the dictionary has the following key names:</p>
      <ul>
        <li><code style="color: #e83e8c; font-size: 90%">uid</code>: The id of the user for each trajectory, <code style="color: #e83e8c; font-size: 90%">shape = (batch_size)</code>.</li>
        <li><code style="color: #e83e8c; font-size: 90%">loc_true</code>: Expected next hop location, <code style="color: #e83e8c; font-size: 90%">shape = (batch_size)</code>.</li>
        <li><code style="color: #e83e8c; font-size: 90%">loc_pred</code>: Model prediction output, <code style="color: #e83e8c; font-size: 90%">shape = (batch_size, output_dim)</code>.</li>
      </ul>
      <br>
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
  min-height: 300px;
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

.sectitle {
  font-size: 24px;
  font-weight: 700;
  font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
  margin-bottom: 0;
}

.code {
    color: #f8f8f2;
    background-color: #272822;
    tab-size: 4;
    overflow: auto;
    width: 100%;
    padding: 10px 20px;
    margin: 0px 0px 16px 0px;
    text-align: left;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    line-height: 1.5;
}

</style>