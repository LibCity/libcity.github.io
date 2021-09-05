<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">快速上手</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          该页面会帮助你快速了解LibCity的基本使用.
        </p>
      </div>
    </div>

    <div class="content">
      <p class="title">从源文件快速上手</p>
      <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
      <p style="text-indent: 2em">如果你从GitHub下载了LibCity的源码，你可以使用提供的脚本进行简单的使用：</p>
      <div class="code">
        <code data-lang="bash">python run_model.py</code>
      </div>
      <p style="text-indent: 2em">这个例子将会在Foursquare-TKY这个数据集上使用DeepMove模型执行轨迹位置预测任务。并且，该脚本还支持通过命令行来设置参数。下面将给出几个例子作为参考。</p>
      <p style="text-indent: 2em">如果您想在METR_LA这个数据集上使用DCRNN模型执行交通状态预测任务，只需通过设定相关参数运行脚本：</p>
      <div class="code">
        <code data-lang="bash">python run_model.py --task traffic_state_pred --model DCRNN --dataset METR_LA</code>
      </div>
      <p style="text-indent: 2em">您会得到一些类似下面的输出：</p>
      <div class="code" style="font-size: 16px">
        <code data-lang="bash">
          - INFO - Log directory: ./libcity/log<br>
          - INFO - Begin pipeline, task=traffic_state_pred, model_name=DCRNN, dataset_name=METR_LA<br>
          - INFO - Loaded file METR_LA.geo, num_nodes=207<br>
          - INFO - Loaded file METR_LA.rel, shape=(207, 207)<br>
          - INFO - Start Calculate the weight by Gauss kernel!<br>
          - INFO - Loading ./libcity/cache/dataset_cache/point_based_METR_LA_12_12_0.7_0.1_standard_64_True_False_True.npz<br>
          - INFO - train	x: (23974, 12, 207, 2)y: (23974, 12, 207, 2)<br>
          - INFO - eval	x: (3425, 12, 207, 2)y: (3425, 12, 207, 2)<br>
          - INFO - test	x: (6850, 12, 207, 2)y: (6850, 12, 207, 2)<br>
          - INFO - StandardScaler mean: 54.40592829587626, std: 19.493739270573098<br>
        </code>
      </div>
      <p style="text-indent: 2em">正如您所见，原始数据集METR_LA的原子文件会被加载并被分成训练集、验证集和测试集三个部分。我们在训练集上进行参数更新，选择在验证集上效果最佳的模型参数，最后报告其在测试集上的结果。</p>
      <p style="text-indent: 2em">开始训练：</p>
      <div class="code" style="font-size: 16px">
        <code data-lang="bash">
          - INFO - Start training ...<br>
          - INFO - num_batches:375<br>
          - INFO - Total trainable parameters 372353<br>
          - INFO - epoch complete!<br>
          - INFO - evaluating now!<br>
          - INFO - Epoch [0/100] (375) train_mae: 3.3774, val_mae: 4.3733, lr: 0.010000, 403.5s<br>
          - INFO - Saved model at 0<br>
          - INFO - Val loss decrease from inf to 4.3733, saving to ./libcity/cache/model_cache/DCRNN_METR_LA_epoch0.tar<br>
          ...<br>
          - INFO - epoch complete!<br>
          - INFO - evaluating now!<br>
          - INFO - Epoch [99/100] (37500) train_mae: 2.8075, val_mae: 2.8501, lr: 0.000001, 401.7s<br>
          - INFO - Loaded model at 66<br>
          - INFO - Saved model at ./libcity/cache/model_cache/DCRNN_METR_LA.m<br>
          - INFO - Start evaluating ...<br>
          - INFO - Evaluate result is ...<br>
        </code>
      </div>
      <br>
      <p>如果您想修改参数，例如<code style="color: #e83e8c; font-size: 90%">learning_rate</code>，只需根据您的需求增加额外的参数，例如：</p>
      <div class="code">
        <code data-lang="bash">python run_model.py --learning_rate 0.001</code>
      </div>
      <p>所有支持的参数和更多的细节可见<a target="_blank" href="https://bigscity-libcity-docs.readthedocs.io/en/latest/get_started/quick_start.html">文档</a>。</p>
      <br>
      <!-- frb 隐藏下面内容 -->
      <!-- <p class="title">从API快速上手</p> -->
      <!-- <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider> -->
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
  min-height: 250px;
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