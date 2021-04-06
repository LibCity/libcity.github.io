<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">Install Toolkit</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          Toolkit can be installed with pip, with Conda or from source.
        </p>
      </div>
    </div>

    <div class="content">
        <div>
            <p class="title">System requirements</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>Toolkit works with the following operating systems:</p>
            <ul>
                <li>Linux</li>
                <li>Windows 10</li>
                <li>macOS X</li>
            </ul>
            <p>... requires torch version 1.7.0 or later. If you want to use ... with GPU, please ensure that ...</p>
            <br>

            <p class="title">Conda</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>If you use Conda, you can install toolkit with:</p>
            <div class="code">
                <code data-lang="bash">
                    # Best practice, create an environment rather than install in the base env<br>
                    conda create -n toolkit<br>
                    # Activate the environment<br>
                    conda activate toolkit<br>
                    # The actual install command<br>
                    conda install numpy
                </code>
            </div>
            <br>

            <p class="title">Pip</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>If you use pip, you can install toolkit with:</p>
            <div class="code">
                <code data-lang="bash">pip install toolkit</code>
            </div>
            <br>
            
            <p class="title">Source</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>Download the source files from GitHub:</p>
            <div class="code">
                <code data-lang="bash">
                    git clone https://github.com/WenMellors/Bigscity-TrafficDL<br>
                    cd toolkit
                </code>
            </div>
            <p>Run the following command to install:</p>
            <div class="code">
                <code data-lang="bash">
                    pip install ....
                </code>
            </div>
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
  height: 250px;
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