<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">Quick Start</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          This page will help you quickly know the basic usages of LibCity.
        </p>
      </div>
    </div>

    <div class="content">
      <!-- <p class="title">Quick Start From Source</p>
      <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
      <p>With the source code of LibCity, you can run the provided script for initial usage of our library:</p>
      <div class="code">
        <code data-lang="bash">python run_model.py</code>
      </div>
      <p>This script will run the DeepMove model on the Foursquare-TKY dataset for trajectory next-location prediction task. Furthermore, the script supports the input of command line parameters to adjust the parameter settings of the pipeline.Here are some simple examples for reference.</p> 
      <p>If you want to run the DCRNN model on the METR_LA dataset for traffic state prediction task, just run the script by setting relevant command parameters:</p>
      <div class="code">
        <code data-lang="bash">python run_model.py --task traffic_state_pred --model DCRNN --dataset METR_LA</code>
      </div>
      <p>You will obtain some output like:</p>
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
      <p>As you can be see, the atomic files of original dataset METR_LA will be loaded and divided into training set, validation set and test set by default. We will optimize model parameters on the training set, do parameter selection according to the results on the validation set, and finally report the results on the test set.</p>
      <p>Begin training:</p>
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
      <p>If you want to change the parameters, such as <code style="color: #e83e8c; font-size: 90%">learning_rate</code>, just set the additional command parameters as you need:</p>
      <div class="code">
        <code data-lang="bash">python run_model.py --learning_rate 0.001</code>
      </div>
      <p>All supporting parameters and more details can be found in <a href="https://bigscity-libcity-docs.readthedocs.io/en/latest/get_started/quick_start.html" target="_blank">Document</a>.</p> -->

      <!-- <p class="title">Quick Start From API</p>
      <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider> -->

      <p class="title">Download One Dataset</p>
      <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
      <p>The dataset used in LibCity is stored in a unified data storage format named <a href="https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/atomic_files.html" target="_blank">atomic files</a>.</p>
      <p>In order to directly use the <a href="https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html" target="_blank">raw datasets</a> in LibCity, we have converted all these datasets into the format of atomic files, and provide the <a href="https://github.com/LibCity/Bigscity-LibCity-Datasets" target="_blank">conversion tools</a>.</p>
      <p>You can simply download the datasets we have processed, the data link is <a href="https://pan.baidu.com/s/1qEfcXBO-QwZfiT0G3IYMpQ#list/path=%2F" target="_blank">BaiduDisk with code 1231</a> or <a href="https://drive.google.com/drive/folders/1g5v2Gq1tkOq8XO0HDCZ9nOTtRpB6-gPe?usp=sharing">Google Drive</a>.</p>
      <p>Before run models in LibCity, please make sure you download at least one dataset and put it in directory <code style="color: #e83e8c; font-size: 90%">Bigscity-LibCity/raw_data/dataset_name/*</code>.</p>
      <p>For example, if you download the METR_LA dataset, the directorys structure is as follows:</p>
      <ul>
        <li><code style="color: #e83e8c; font-size: 90%">Bigscity-LibCity/raw_data/METR_LA/METR_LA.geo</code></li>
        <li><code style="color: #e83e8c; font-size: 90%">Bigscity-LibCity/raw_data/METR_LA/METR_LA.rel</code></li>
        <li><code style="color: #e83e8c; font-size: 90%">Bigscity-LibCity/raw_data/METR_LA/METR_LA.dyna</code></li>
        <li><code style="color: #e83e8c; font-size: 90%">Bigscity-LibCity/raw_data/METR_LA/config.json</code></li>
      </ul>
      <br>

      <p class="title">Run Model Pipeline</p>
      <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
      <p>The script <code style="color: #e83e8c; font-size: 90%">run_model.py</code> used for training and evaluating a single model is provided in the root directory of the framework, and a series of command line parameters are provided to allow users to adjust the running parameter configuration.</p>
      <p>When run the <code style="color: #e83e8c; font-size: 90%">run_model.py</code>, you must specify the following three parameters, namely <b>task</b>, <b>dataset</b> and <b>model</b>. For example:</p>
      <div class="code">
        <code data-lang="bash">
          python run_model.py --task traffic_state_pred --model GRU --dataset METR_LA
        </code>
      </div>
      <p>This script will run the GRU model on the METR_LA dataset for traffic state prediction task under the default configuration.</p>
      <p>Furthermore, the script supports the input of the following command line parameters to adjust the parameter settings of the pipeline.</p>
      <p>Supporting parameters:</p>
      <ul>
        <li><code style="color: #e83e8c; font-size: 90%">task</code>: The name of the task to be performed, including <code style="color: #e83e8c; font-size: 90%">traffic_state_pred</code> and <code style="color: #e83e8c; font-size: 90%">traj_loc_pred</code>. Defaults to <code style="color: #e83e8c; font-size: 90%">None</code>.</li>
        <li><code style="color: #e83e8c; font-size: 90%">model</code>: The name of the model to be performed. Defaults to <code style="color: #e83e8c; font-size: 90%">None</code>. (<a href="https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/model.html" target="_href">supporting models</a>)</li>
        <li><code style="color: #e83e8c; font-size: 90%">dataset</code>: The name of the model to be performed. Defaults to <code style="color: #e83e8c; font-size: 90%">None</code>. (<a href="https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html" target="_href">supporting datasets</a>)</li>
        <li><code style="color: #e83e8c; font-size: 90%">config_file</code>: The name of user-defined configuration file. Defaults to <code style="color: #e83e8c; font-size: 90%">None</code>. (<a href="https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/config_settings.html" target="_href">see more</a>)</li>
        <li><code style="color: #e83e8c; font-size: 90%">saved_model</code>：Whether to save the trained model. Defaults to <code style="color: #e83e8c; font-size: 90%">True</code>.</li>
        <li><code style="color: #e83e8c; font-size: 90%">train</code>：If the model has been pre-trained, whether to retrain the model. Defaults to <code style="color: #e83e8c; font-size: 90%">True</code>.</li>
        <li><code style="color: #e83e8c; font-size: 90%">batch_size</code>：The training and evaluation batch size.</li>
        <li><code style="color: #e83e8c; font-size: 90%">train_rate</code>：The proportion of the training set to the total dataset. (The order of division is training set, validation set, test set)</li>
        <li><code style="color: #e83e8c; font-size: 90%">eval_rate</code>：The proportion of the validation set.</li>
        <li><code style="color: #e83e8c; font-size: 90%">learning_rate</code>：Learning_rate. The default learning rate of different models may be different, please refer to the corresponding configuration file for details.</li>
        <li><code style="color: #e83e8c; font-size: 90%">max_epoch</code>：Maximum rounds of training. The default value varies with the model.</li>
        <li><code style="color: #e83e8c; font-size: 90%">gpu</code>：Whether to use GPU. Defaults to <code style="color: #e83e8c; font-size: 90%">True</code>.</li>
        <li><code style="color: #e83e8c; font-size: 90%">gpu_id</code>：The id of the GPU used. Defaults to <code style="color: #e83e8c; font-size: 90%">0</code>.</li>
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