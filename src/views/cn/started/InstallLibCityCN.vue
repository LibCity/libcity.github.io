<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">安装LibCity</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          LibCity可以通过Conda、pip或源文件进行安装.
        </p>
      </div>
    </div>

    <div class="content">
        <div>
            <p class="title">系统要求</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>LibCity可以在以下几种系统上运行：</p>
            <ul>
                <li>Linux</li>
                <li>Windows 10</li>
                <li>macOS X</li>
            </ul>
            <p>LibCity要求torch版本在1.7.0及以上。如果您想在GPU上运行LibCity，请确保您的CUDA版本或CUDAToolkit版本在9.2及以上。这需要您的NVIDIA驱动版本为396.26或以上（Linux系统）或者为397.44或以上（Windows系统）。</p>
            <br>

            <!-- <p class="title">Conda</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>如果您使用Conda，可以通过以下命令安装：</p>
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
            <p>如果您使用pip，可以通过以下命令安装：</p>
            <div class="code">
                <code data-lang="bash">pip install libcity</code>
            </div>
            <br> -->
            
            <p class="title">源文件</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>您可以通过以下指令从GitHub上下载源文件：</p>
            <div class="code">
                <code data-lang="bash">
                    git clone https://github.com/LibCity/Bigscity-LibCity<br>
                    <!-- cd Bigscity-LibCity -->
                </code>
            </div>
            <!-- <p>然后，您可以通过以下命令安装LibCity：</p>
            <div class="code">
                <code data-lang="bash">
                    pip install -e . --verbose
                </code>
            </div> -->
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