<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">任务</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          LibCity为每个支持的时空数据挖掘任务<br>
          实现了一套标准赛道，提高不同模型的性能可比性。
        </p>
      </div>
    </div>

    <div class="content">
      <p class="title">标准赛道</p>
      <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
      <p style="text-indent: 2em">LibCity为每个任务实现了一套标准赛道。标准赛道上，使用项目提供的原始数据集、标准数据模块（Data 模块）、标准测评模块（Evaluator 模块），从而约束不同模型使用相同的数据输入与测评指标，以提高测评结果的可比性。</p>
      <p style="text-indent: 2em">下面对不同任务的标准数据输入格式与测评输入格式进行说明：</p>
      <br>
      <p class="sectitle">交通状态预测</p>
      <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
      <p style="text-indent: 2em">具体而言，交通状态预测包含3类任务：交通速度预测、交通流量预测和交通需求量预测。根据交通数据的不同空间结构，交通状态数据一般可以用如下几种格式的张量进行表示：</p>
      <ul>
        <li><code style="color: #e83e8c; font-size: 90%">(N,T,F)</code>的三维张量，<code style="color: #e83e8c; font-size: 90%">T</code>是时间长度，<code style="color: #e83e8c; font-size: 90%">F</code>是特征维度，<code style="color: #e83e8c; font-size: 90%">N</code>是传感器的个数。</li>
        <li><code style="color: #e83e8c; font-size: 90%">(T,F,I,J)</code>的四维张量，<code style="color: #e83e8c; font-size: 90%">T</code>是时间长度，<code style="color: #e83e8c; font-size: 90%">F</code>是特征维度，<code style="color: #e83e8c; font-size: 90%">I,J</code>表示网格数据的行列索引。</li>
        <li><code style="color: #e83e8c; font-size: 90%">(T,F,S,T)</code>的四维张量，<code style="color: #e83e8c; font-size: 90%">T</code>是时间长度，<code style="color: #e83e8c; font-size: 90%">F</code>是特征维度，<code style="color: #e83e8c; font-size: 90%">S,T</code>表示<code style="color: #e83e8c; font-size: 90%">od</code>数据的起点和终点的编号。</li>
        <li><code style="color: #e83e8c; font-size: 90%">(T,F,SI,SJ,TI,TJ)</code>的六维张量，<code style="color: #e83e8c; font-size: 90%">T</code>是时间长度，<code style="color: #e83e8c; font-size: 90%">F</code>是特征维度，<code style="color: #e83e8c; font-size: 90%">(SI,SJ,TI,TJ)</code>表示网格结构的<code style="color: #e83e8c; font-size: 90%">grid-od</code>数据的起点和终点的行列索引。</li>
      </ul>
      <p style="text-indent: 2em">标准模型输入格式为类字典的<code style="color: #e83e8c; font-size: 90%">Batch</code>对象实例，该对象所具有的键名如下：</p>
      <ul>
        <li><code style="color: #e83e8c; font-size: 90%">X</code>：模型输入的多维张量，<code style="color: #e83e8c; font-size: 90%">shape = (batch_size, T_in, space_dim, feature_dim)</code>，分别表示 batch 中的样本总数，输入时间窗的宽度，空间上的维度，数据特征维数。其中，空间上的维度可以是上文中的<code style="color: #e83e8c; font-size: 90%">N</code>或<code style="color: #e83e8c; font-size: 90%">I,J</code>或<code style="color: #e83e8c; font-size: 90%">S,T</code>或<code style="color: #e83e8c; font-size: 90%">SI, SJ, TI, TJ</code>。</li>
        <li><code style="color: #e83e8c; font-size: 90%">y</code>：模型期望输出的多维张量，<code style="color: #e83e8c; font-size: 90%">shape = (batch_size, T_out, space_dim, feature_dim)</code>，分别表示 batch 中的样本总数，输出时间窗的宽度，空间上的维度，数据特征维数。其中，空间上的维度可以是上文中的<code style="color: #e83e8c; font-size: 90%">N</code>或<code style="color: #e83e8c; font-size: 90%">I,J</code>或<code style="color: #e83e8c; font-size: 90%">S,T</code>或<code style="color: #e83e8c; font-size: 90%">SI, SJ, TI, TJ</code>。</li>
        <li><code style="color: #e83e8c; font-size: 90%">X_ext</code>：可选的外部数据，<code style="color: #e83e8c; font-size: 90%">shape = (batch_size, T_in, ext_dim)</code>，分别表示 batch 中的样本总数，输入时间窗的宽度，空间上的维度，外部数据特征维数。<strong>部分模型可能直接将<code style="color: #e83e8c; font-size: 90%">X_ext</code>融合到<code style="color: #e83e8c; font-size: 90%">X</code>中作为模型的输入。</strong></li>
        <li><code style="color: #e83e8c; font-size: 90%">y_ext</code>：可选的外部数据，<code style="color: #e83e8c; font-size: 90%">shape = (batch_size, T_out, ext_dim)</code>，分别表示 batch 中的样本总数，输出时间窗的宽度，空间上的维度，外部数据特征维数。</li>
      </ul>
      <p>标准测评模块的输入格式为字典对象，该对象所具有的键名如下：</p>
      <ul>
        <li><code style="color: #e83e8c; font-size: 90%">y_true</code>：真实值，格式同输入中的<code style="color: #e83e8c; font-size: 90%">y</code>。</li>
        <li><code style="color: #e83e8c; font-size: 90%">y_pred</code>：预测值，格式同输入中的<code style="color: #e83e8c; font-size: 90%">y</code>。</li>
      </ul>
      <br>
      <p class="sectitle">轨迹位置预测</p>
      <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
      <p style="text-indent: 2em">标准数据输入格式为类字典的<code style="color: #e83e8c; font-size: 90%">Batch</code>对象实例，该对象所具有的键名如下：</p>
      <ul>
        <li><code style="color: #e83e8c; font-size: 90%">history_loc</code>：历史轨迹位置信息，<code style="color: #e83e8c; font-size: 90%">shape = (batch_size, history_len)</code>，<code style="color: #e83e8c; font-size: 90%">history_len</code>为历史轨迹的长度。</li>
        <li><code style="color: #e83e8c; font-size: 90%">history_tim</code>：历史轨迹时间信息，<code style="color: #e83e8c; font-size: 90%">shape = (batch_size, history_len)</code>。</li>
        <li><code style="color: #e83e8c; font-size: 90%">current_loc</code>：当前轨迹位置信息，<code style="color: #e83e8c; font-size: 90%">shape = (batch_size, current_len)</code>，<code style="color: #e83e8c; font-size: 90%">current_len</code>为当前轨迹的长度。</li>
        <li><code style="color: #e83e8c; font-size: 90%">current_tim</code>：当前轨迹时间信息，<code style="color: #e83e8c; font-size: 90%">shape = (batch_size, current_len)</code>。</li>
        <li><code style="color: #e83e8c; font-size: 90%">uid</code>：每条轨迹所属交通使用者的ID，<code style="color: #e83e8c; font-size: 90%">shape = (batch_size)</code>。</li>
        <li><code style="color: #e83e8c; font-size: 90%">target</code>：期望的下一跳位置，<code style="color: #e83e8c; font-size: 90%">shape = (batch_size)</code>。</li>
      </ul>
      <p style="text-indent: 2em">标准测评输入格式为字典对象，该字典具有的键名如下：</p>
      <ul>
        <li><code style="color: #e83e8c; font-size: 90%">uid</code>：每条输出所属的交通使用者ID，<code style="color: #e83e8c; font-size: 90%">shape = (batch_size)</code>。</li>
        <li><code style="color: #e83e8c; font-size: 90%">loc_true</code>：期望下一跳位置信息，<code style="color: #e83e8c; font-size: 90%">shape = (batch_size)</code>。</li>
        <li><code style="color: #e83e8c; font-size: 90%">loc_pred</code>：模型预测输出，<code style="color: #e83e8c; font-size: 90%">shape = (batch_size, output_dim)</code>。</li>
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