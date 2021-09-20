<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">Install LibCity</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          <!-- LibCity can be installed with pip, with Conda or from source. -->
          LibCity can be installed from source.
        </p>
      </div>
    </div>

    <div class="content">
        <div>
            <!-- <p class="title">System requirements</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>LibCity works with the following operating systems:</p>
            <ul>
                <li>Linux</li>
                <li>Windows 10</li>
                <li>macOS X</li>
            </ul>
            <p>LibCity requires torch version 1.7.0 or later. If you want to use LibCity with GPU, please ensure that please ensure that CUDA or CUDAToolkit version is 9.2 or later. This requires NVIDIA driver version >= 396.26 (for Linux) or >= 397.44 (for Windows10).</p>
            <br> -->

            <!-- <p class="title">Conda</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>If you use Conda, you can install LibCity with:</p>
            <div class="code">
                <code data-lang="bash">
                    # Best practice, create an environment rather than install in the base env<br>
                    conda create -n libcity<br>
                    # Activate the environment<br>
                    conda activate libcity<br>
                    # The actual install command<br>
                    conda install libcity
                </code>
            </div>
            <br>

            <p class="title">Pip</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>If you use pip, you can install LibCity with:</p>
            <div class="code">
                <code data-lang="bash">pip install libcity</code>
            </div>
            <br> -->
            
            <p class="title">Source</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <!-- <p>Download the source files from GitHub:</p> -->
            <p>LibCity can only be installed from source code.</p>
            <p>Please execute the following command to get the source code.</p>
            <div class="code">
                <code data-lang="bash">
                    git clone https://github.com/LibCity/Bigscity-LibCity.git<br>
                    cd Bigscity-LibCity
                </code>
            </div>
            <p>After obtaining the source code, you can configure the environment.</p>
            <br>

            <p class="title">Requirements</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>Our code is based on Python version 3.7 and Pytorch version 1.7.1. You can click <a href="https://pytorch.org/get-started/previous-versions/#v171" target="_blank">here</a> to see how to install Pytorch. For example, if your cuda vision is 10.2, you can install Pytorch with the following command.</p>
            <p>Pip:</p>
            <div class="code">
                <code data-lang="bash">
                    pip install torch==1.7.1 torchvision==0.8.2 torchaudio==0.7.2
                </code>
            </div>
            <p>Conda:</p>
            <div class="code">
                <code data-lang="bash">
                    conda install pytorch==1.7.1 torchvision==0.8.2 torchaudio==0.7.2 cudatoolkit=10.2 -c pytorch
                </code>
            </div>
            <p>After installing Pytorch, you can install all the dependencies of LibCity with the following command by pip.</p>
            <div class="code">
                <code data-lang="bash">
                    pip install -r requirements.txt
                </code>
            </div>
            <p>Now, you can use LibCity, more details please refer to the section <a href="https://libcity.github.io/Bigscity-LibCity-Website/#/quick_start">quick start</a>.</p>
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
    margin: 50px auto 0px auto;
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