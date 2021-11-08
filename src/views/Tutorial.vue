<template>
    <div class="content">
        <div>
            <br>
            <p class="title">Tutorial</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p> We had a presentation on ACM SIGSPATIAL 2021 Local Track and talked about introduction of traffic prediction, challenge of current research and introduction of LibCity. You can download <a :href="`${path}LibCity-Presentation.pdf`" download="LibCity-Presentation.pdf">LibCity Presentation Slide(English)</a> and <a :href="`${path}LibCity-城市时空预测深度学习开源平台.pdf`" download="LibCity-城市时空预测深度学习开源平台.pdf">LibCity Presentation Slide(Chinese)</a> here.</p>
            <p> We also provided a Chinese tutorial for ACM SIGSPATIAL 2021 Local Track, which was about introduction of LibCity, tasks that LibCity supported and tutorial of LibCity. You can download <a :href="`${path}LibCity-中文Tutorial.pptx`" download="LibCity-中文Tutorial.pptx">LibCity Chinese Tutorial</a> here.</p>
            <p> <a href="https://www.bilibili.com/video/BV1cS4y1d7hf?p=1" target="_blank">LibCity Presentation(P1)</a> and <a href="https://www.bilibili.com/video/BV1cS4y1d7hf?p=2" target="_blank">LibCity Tutorial(P2)</a> has been uploaded to bilibili (in Chinese).</p>
            <iframe src="https://www.bilibili.com/video/BV1cS4y1d7hf?spm_id_from=333.999.0.0" width="1200" height="600" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
            <br>
            <p> Below is the demonstration video of LibCity. </p>
            <p> From this demo, you can see the whole pipeline from cloning code, environment configuration, downloading data, running model, completing training and model evaluation.</p>
        </div>
        <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsline="false" :options="playerOptions"></video-player>
        <br>
        <br>
    </div>
</template>

<script>
export default {
  name: 'Tutorial',
  data () {
    return {
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], // 播放速度
        autoplay: false, // 如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: 'video/mp4', // 这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
          src: require('../assets/video/LibCity_demo.mp4') // url地址
        }],
        poster: require('../assets/video/LibCity_demo.png'), // 你的封面地址
        width: document.documentElement.clientWidth, // 播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      },
      path:process.env.BASE_URL,
    }
  }
}
</script>

<style scoped >
  .video-js .vjs-icon-placeholder {
    width: 80%;
    height: 80%;
    display: block;
  }
  /* .video-player {
    width: 50%;
  } */

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
