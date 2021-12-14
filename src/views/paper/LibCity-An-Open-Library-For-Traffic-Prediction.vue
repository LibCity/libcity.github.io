<template>
    <div class="content">
        <div>
            <br>
            <p class="title">LibCity: An Open Library for Traffic Prediction</p>
            <p><a :href="`${path}LibCity_An_Open_Library_for_Traffic_Prediction.pdf`" download="LibCity_An_Open_Library_for_Traffic_Prediction.pdf">[Download]</a> <a href="https://dl.acm.org/doi/10.1145/3474717.3483923" target="_blank">[Official Link]</a> <a href="https://github.com/LibCity" target="_blank">[Code]</a></p>
            <p>Jingyuan Wang, Jiawei Jiang, Wenjun Jiang, Chao Li, Wayne Xin Zhao<br>
            <b><i>In Proceedings of the 29th International Conference on Advances in Geographic Information Systems (SIGSPATIAL'21).</i></b></p>
            <p class="second-title">Abstract</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>With the increase of traffic prediction models, there has become an urgent need to develop a standardized framework to implement and evaluate these methods. This paper presents LibCity, a unified, comprehensive, and extensible library for traffic prediction, which provides researchers with a credible experimental tool and a convenient development framework. In this library, we reproduce 42 traffic prediction models and collect 29 spatial-temporal datasets, which allows researchers to conduct comprehensive experiments in a convenient way. To accelerate the development of new models, we design unified model interfaces based on unified data formats, which effectively encapsulate the details of the implementation. To verify the effectiveness of our implementations, we also report the reproducibility comparison results of LibCity, and set up a performance leaderboard for the four kinds of traffic prediction tasks. Our library will contribute to the standardization and reproducibility in the field of traffic prediction. The open source link of LibCity is https://github.com/LibCity/Bigscity-LibCity.</p>
            <br>
            <div style="width: 80%; margin: 5px auto; text-align: center">
                <img
                    src="../../assets/img/toolkit.png"
                    alt="toolkit"
                    height="400"
                />
            </div>
            <p class="second-title">Cite</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>If you find our work useful for your research or development, please cite our paper.</p>
            <div class="code">
                <code>
                  <p>@inproceedings{10.1145/3474717.3483923,</p>
                  <p style="text-indent:2em">author = {Wang, Jingyuan and Jiang, Jiawei and Jiang, Wenjun and Li, Chao and Zhao, Wayne Xin},</p>
                  <p style="text-indent:2em">title = {LibCity: An Open Library for Traffic Prediction},</p>
                  <p style="text-indent:2em">year = {2021},</p>
                  <p style="text-indent:2em">isbn = {9781450386647},</p>
                  <p style="text-indent:2em">publisher = {Association for Computing Machinery},</p>
                  <p style="text-indent:2em">address = {New York, NY, USA},</p>
                  <p style="text-indent:2em">url = {https://doi.org/10.1145/3474717.3483923},</p>
                  <p style="text-indent:2em">doi = {10.1145/3474717.3483923},</p>
                  <p style="text-indent:2em">booktitle = {Proceedings of the 29th International Conference on Advances in Geographic Information Systems},</p>
                  <p style="text-indent:2em">pages = {145–148},</p>
                  <p style="text-indent:2em">numpages = {4},</p>
                  <p style="text-indent:2em">keywords = {Reproducibility, Traffic Prediction, Spatial-temporal System},</p>
                  <p style="text-indent:2em">location = {Beijing, China},</p>
                  <p style="text-indent:2em">series = {SIGSPATIAL '21}</p>
                  <p>}</p>
                </code>
            </div>
            <div class="code">
                <code>
                    <p>Jingyuan Wang, Jiawei Jiang, Wenjun Jiang, Chao Li, and Wayne Xin Zhao. 2021. LibCity: An Open Library for Traffic Prediction. In <i>Proceedings of the 29th International Conference on Advances in Geographic Information Systems</i> (<i>SIGSPATIAL '21</i>). Association for Computing Machinery, New York, NY, USA, 145–148. DOI:https://doi.org/10.1145/3474717.3483923</p>
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
