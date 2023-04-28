<template>
    <div class="content">
        <div>
            <br>
            <p class="title">Towards Efficient and Comprehensive Urban Spatial-Temporal Prediction: A Unified Library and Performance Benchmark</p>
            <!-- <p><a :href="`${path}LibCity_Journal.pdf`" download="LibCity_Journal.pdf">[Download]</a> <a href="https://arxiv.org/abs/2304.14343" target="_blank">[Official Link]</a> <a href="https://github.com/LibCity" target="_blank">[Code]</a></p> -->
            <p><a href="https://arxiv.org/abs/2304.14343" target="_blank">[Official Link]</a> <a href="https://github.com/LibCity" target="_blank">[Code]</a></p>
            <p>Jingyuan Wang, Jiawei Jiang, Wenjun Jiang, Chengkai Han, Wayne Xin Zhao<br>
            <b><i>arXiv preprint.</i></b></p>
            <p class="second-title">Abstract</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>As deep learning technology advances and more urban spatial-temporal data accumulates, an increasing number of deep learning models are being proposed to solve urban spatial-temporal prediction problems. However, there are limitations in the existing field, including open-source data being in various formats and difficult to use, few papers making their code and data openly available, and open-source models often using different frameworks and platforms, making comparisons challenging. A standardized framework is urgently needed to implement and evaluate these methods. To address these issues, we provide a comprehensive review of urban spatial-temporal prediction and propose a unified storage format for spatial-temporal data called atomic files. We also propose LibCity, an open-source library that offers researchers a credible experimental tool and a convenient development framework. In this library, we have reproduced 65 spatial-temporal prediction models and collected 55 spatial-temporal datasets, allowing researchers to conduct comprehensive experiments conveniently. Using LibCity, we conducted a series of experiments to validate the effectiveness of different models and components, and we summarized promising future technology developments and research directions for spatial-temporal prediction. By enabling fair model comparisons, designing a unified data storage format, and simplifying the process of developing new models, LibCity is poised to make significant contributions to the spatial-temporal prediction field.</p>
            <br>
            <div style="width: 80%; margin: 5px auto; text-align: center">
                <img
                    src="../../assets/img/framework.png"
                    alt="framework"
                    height="400"
                />
            </div>
            <p class="second-title">Cite</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>If you find our work useful for your research or development, please cite our paper.</p>
            <div class="code">
                <code>
                  <p>@article{libcitylong,</p>
                  <p style="text-indent:2em">title={Towards Efficient and Comprehensive Urban Spatial-Temporal Prediction: A Unified Library and Performance Benchmark},</p>
                  <p style="text-indent:2em">author={Jingyuan Wang and Jiawei Jiang and Wenjun Jiang and Chengkai Han and Wayne Xin Zhao},</p>
                  <p style="text-indent:2em">journal={arXiv preprint arXiv:2304.14343},</p>
                  <p style="text-indent:2em">year={2023}</p>
                  <p>}</p>
                </code>
            </div>
            <br>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                path:process.env.BASE_URL,
            };
        },
        components: {
        }
    };
</script>

<style scoped>
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
.title {
    font-size: 32px;
    font-weight: 700;
    font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    margin-bottom: 20px;
    line-height: 36px;
}
.second-title {
    font-size: 28px;
    font-weight: 700;
    font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    margin-bottom: 0;
}
</style>
