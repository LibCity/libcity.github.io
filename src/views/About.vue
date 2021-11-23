<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">About</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          Your advice and contributions are very important to us.
        </p>
      </div>
    </div>

    <div class="content">
        <div>
            <!-- <p class="title">Our Mission</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>The mission of toolkit is to </p>
            <br> -->

            <p class="title">Contact Us</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>The LibCity is mainly developed and maintained by Beihang Interest Group on SmartCity (<a href="https://www.bigcity.ai/" target="_blank">BIGSCITY</a>). The core developers of this library are <a href="https://github.com/aptx1231" target="_blank">@aptx1231</a> and <a href="https://github.com/WenMellors" target="_blank">@WenMellors</a>.</p>
            <p>Several co-developers have also participated in the reproduction of the model, the list of contributions of which is presented in the <a href="https://github.com/LibCity/Bigscity-LibCity/blob/master/contribution_list.md" target="_blank">reproduction contribution list</a>.</p>
            <p>If you encounter a bug or have any suggestion, please contact us by <a href="https://github.com/LibCity/Bigscity-LibCity/issues" target="_blank">raising an issue (Recommended)</a> or sending an email to bigscity@126.com.</p>
            <br>
            
            <!-- <p class="title">Contributing</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p></p>
            <br> -->

            <p class="title">Cite</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>If you find LibCity useful for your research or development, please cite our <a href="https://dl.acm.org/doi/10.1145/3474717.3483923" target="_blank">paper</a>.</p>
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

                    <!-- <p>@proceedings{libcity,</p>
                    <p style="text-indent:2em">editor={Jingyuan Wang and Jiawei Jiang and Wenjun Jiang and Chao Li and Wayne Xin Zhao},</p>
                    <p style="text-indent:2em">title={LibCity: An Open Library for Traffic Prediction},</p>
                    <p style="text-indent:2em">booktitle={ {SIGSPATIAL}'21: 29th International Conference on Advances in Geographic Information Systems, Beijing, China, November 2-5, 2021 },</p>
                    <p style="text-indent:2em">publisher={ {ACM} },</p>
                    <p style="text-indent:2em">year={2021}</p>
                    <p>}</p> -->
                </code>
            </div>
            <div class="code">
                <code>
                    <p>Jingyuan Wang, Jiawei Jiang, Wenjun Jiang, Chao Li, and Wayne Xin Zhao. 2021. LibCity: An Open Library for Traffic Prediction. In <i>Proceedings of the 29th International Conference on Advances in Geographic Information Systems</i> (<i>SIGSPATIAL '21</i>). Association for Computing Machinery, New York, NY, USA, 145–148. DOI:https://doi.org/10.1145/3474717.3483923</p>
                </code>
            </div>
            <br>

            <p class="title">License</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p>LibCity uses <a href="https://github.com/LibCity/Bigscity-LibCity/blob/master/LICENSE.txt" target="_blank">Apache License 2.0</a>.</p>
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
    margin-bottom: 0;
}

</style>
