<template>
    <div class="content">
        <div>
            <br>
            <p class="title">Tutorial</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <li>We had a presentation on ACM SIGSPATIAL 2021 Main Track to introduce LibCity. Here are the <a href="https://www.bilibili.com/video/BV19q4y1g7Rh/" target="_blank">Presentation Video(English)</a> and the <a :href="`${path}LibCity-Presentation.pdf`" download="LibCity-Presentation.pdf">Presentation Slide(English)</a>.</li>
            <li>We also had a presentation on ACM SIGSPATIAL 2021 Local Track and talked about introduction of traffic prediction, challenge of current research,  introduction of LibCity, and the open source status of LibCity. You can download <a :href="`${path}LibCity-城市时空预测深度学习开源平台.pdf`" download="LibCity-城市时空预测深度学习开源平台.pdf">LibCity Presentation Slide(Chinese)</a> here.</li>
            <li>We also provided a Chinese tutorial of LibCity for ACM SIGSPATIAL 2021 Local Track, which was about introduction of LibCity, tasks that LibCity supported and getting started tutorial with video display of LibCity. You can download <a :href="`${path}LibCity-中文Tutorial.pptx`" download="LibCity-中文Tutorial.pptx">LibCity Chinese Tutorial</a> here.</li>
            <li>In order to uniformly represent different types of traffic data, LibCity defines five kinds of atomic files,that is, the five smallest informationunits in traffic data. Most of the used traffic datasets can be formatted with the above five kinds of atomic files. You can download <a :href="`${path}A Unified Storage Format of Traffic Data Atomic Files in LibCity.pdf`" download="A Unified Storage Format of Traffic Data Atomic Files in LibCity.pdf">A Unified Storage Format of Traffic Data Atomic Files in LibCity</a> here for details.</li>
            <li><a href="https://www.bilibili.com/video/BV1cS4y1d7hf" target="_blank">LibCity Presentation(P1)</a> and <a href="https://www.bilibili.com/video/BV1ab4y187Dr" target="_blank">LibCity Tutorial(P2)</a> has been uploaded to bilibili (in Chinese).</li>
            <br>
        </div>
        <iframe src="https://player.bilibili.com/player.html?aid=721510946" id="iframe1" class="iframe" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" sandbox="allow-forms allow-scripts allow-same-origin allow-popups"></iframe>
        <!-- <div style="width:100%;height:0;padding:0;padding-bottom:calc(9/16*100%)">
          <iframe src="https://player.bilibili.com/player.html?aid=721510946" class="iframe" width="100%" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" sandbox="allow-forms allow-scripts allow-same-origin allow-popups"></iframe>
        </div> -->
        <p></p>
        <iframe src="https://player.bilibili.com/player.html?aid=634029725" id="iframe2" class="iframe" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true" sandbox="allow-forms allow-scripts allow-same-origin allow-popups"></iframe>
        <div>
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
  },
  mounted () {
    /**
     * iframe-宽高自适应显示   
     */
    const Iframe1 = document.getElementById('iframe1');
    const Iframe2 = document.getElementById('iframe2');
    const deviceWidth = document.documentElement.clientWidth;
    const deviceHeight1 = document.documentElement.clientHeight;
    const deviceHeight2 = document.documentElement.clientHeight;
    // oIframe.style.width = (Number(deviceWidth)-420) + 'px'; //数字是页面布局宽度差值
    Iframe1.style.height = (Number(deviceHeight1)-160) + 'px'; //数字是页面布局高度差
    Iframe2.style.height = (Number(deviceHeight2)-160) + 'px'; //数字是页面布局高度差
  },
}
</script>

<style scoped >
.video-js .vjs-icon-placeholder {
  width: 80%;
  height: 80%;
  display: block;
}
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

.iframe {
  width: 100%;
  /* position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
}
</style>
