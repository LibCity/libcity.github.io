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
            <p>If you encounter a bug or have any suggestion, please contact us by <a href="https://github.com/LibCity/Bigscity-LibCity/issues" target="_blank">raising an issue</a>.</p>
            <br>
            
            <!-- <p class="title">Contributing</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p></p>
            <br> -->

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
.title {
    font-size: 32px;
    font-weight: 700;
    font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    margin-bottom: 0;
}

</style>