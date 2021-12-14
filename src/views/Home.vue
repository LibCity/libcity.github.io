<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px; color: white;">
        <p style="width:200px;margin: 30px 0 20px 150px; font-size: 64px">LibCity</p>
        <p style="width:1000px;margin: 0px 0 20px 150px; font-size: 32px">
          A unified, comprehensive and extensible library for traffic prediction.
        </p>
        <div class="btn-list">
          <a-button
            class="btn"
            type="primary"
            shape="round"
            @click="toInstallToolkit()"
          >Install</a-button>
          <a-button
            class="btn"
            id="long_btn"
            type="primary"
            shape="round"
            @click="toQuickStart()"
          >Quick Start</a-button>
          <a-button
            class="btn"
            type="primary"
            shape="round"
            @click="toPaper()"
          >Paper</a-button>
          <a-button
            class="btn"
            id="btn"
            type="primary"
            shape="round"
            @click="toTutorial()"
          >Tutorial</a-button>
        </div>
      </div>
    </div>
    <div class="main">
      <div style="min-height: 340px">
        <feat-card class="feature"></feat-card>
      </div>
      <div class="video">
        <div class="video-header">
          <span class="block-title">VIDEO</span>
        </div>
        <a-button-group class="lang-btn-group">
          <a-button id="english-btn" class="lang-btn" type="primary" disabled @click="changeVideoLang()">
            English Version
          </a-button>
          <a-button id="chinese-btn" class="lang-btn" type="primary" @click="changeVideoLang()">
            Chinese Version
          </a-button>
        </a-button-group>
        <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsline="false" :options="playerOptions"></video-player>
        <div class="video-notes">* These statistics are updated to November 2021.</div>
      </div>
      <!-- <div class="latestnews">
        <div class="news-header"><span class="news-block-title">LATEST NEWS</span>
          <a-button
            class="seemore-btn"
            value="large"
            style="background-color: white;"
            @click="toNews"
          >
            See all News
            <a-icon
              type="right"
              style="color: red;"
            />
          </a-button>
        </div>
        <new-card class="news"></new-card>
      </div> -->
      <div class="toolkit">
        <div class="news-header">
          <span class="block-title">FRAMEWORK</span>
        </div>
        <div style="width: 80%; margin: 10px auto 20px auto; text-align: center">
          <img
            src="../assets/img/toolkit.png"
            alt="toolkit"
            height="550"
          />
        </div>
      </div>
      <div class="platform">
        <div class="news-header">
          <span class="block-title">PLATFORM</span>
        </div>
        <div>
          <plat-card class="feature"></plat-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import featCard from './home/featureCard.vue';
import platCard from './home/platformCard.vue';
import newCard from './home/newsCard.vue';

export default {
  data() {
    return {
      videoLang: 'English',
      videoSrc: '../assets/video/LibCity_English.mp4',
      focus: 0,
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
          src: require('../assets/video/LibCity_English.mp4') // url地址
        }],
        poster: require('../assets/video/LibCity_English.png'), // 你的封面地址
        width: document.documentElement.clientWidth, // 播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', // 允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      },
    };
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
  components: {
    featCard,
    newCard,
    platCard
  },
  methods: {
    changeVideoLang() {
      if (this.videoLang == "English") {
        this.videoLang = 'Chinese';
        this.playerOptions['sources'][0]['src'] = require('../assets/video/LibCity_Chinese.mp4');
        const chineseBtn = document.getElementById('chinese-btn');
        chineseBtn.disabled = true;
        chineseBtn.style.background = '#1890ff';
        chineseBtn.style.color = 'white';
        const englishBtn = document.getElementById('english-btn');
        englishBtn.disabled = false;
        englishBtn.style.background = 'whitesmoke';
        englishBtn.style.color = 'black';
      } else if (this.videoLang == "Chinese") {
        this.videoLang = 'English';
        this.playerOptions['sources'][0]['src'] = require('../assets/video/LibCity_English.mp4');
        const englishBtn = document.getElementById('english-btn');
        englishBtn.disabled = true;
        englishBtn.style.background = '#1890ff';
        englishBtn.style.color = 'white';
        const chineseBtn = document.getElementById('chinese-btn');
        chineseBtn.disabled = false;
        chineseBtn.style.background = 'whitesmoke';
        chineseBtn.style.color = 'black';
      }
    },
    toTutorial() {
      this.$router.push({
        name: "Tutorial",
      });
    },
    toNews() {
      this.$router.push({
        name: "News",
      });
    },
    toInstallToolkit() {
      this.$router.push({
        name: "InstallLibCity",
      });
    },
    toQuickStart() {
      this.$router.push({
        name: "QuickStart",
      });
    },
    toPaperList() {
      this.$router.push({
        name: "PaperList",
      });
    },
    toPaper() {
      this.$router.push({
        name: "Paper",
      });
    }
  }
};
</script>

<style scoped>
.video-js .vjs-icon-placeholder {
  width: 80%;
  height: 80%;
  display: block;
}
.video {
  width: 80%;
  height: auto;
  margin: 20px auto 20px auto;
  text-align: center;
  /* border: blue solid 3px; */
}
.container {
  margin: auto;
  width: 100%;
  min-height: 1000px;
  background-color: white;
}
.header {
  min-width: 900px;
  width: 100%;
  height: 360px;
  background: rgb(27, 140, 233)
    linear-gradient(to right, rgb(27, 140, 233), rgb(11, 247, 188));
  /* border: blue solid 1px; */
}
.btn-list {
  margin: 20px 20px 0px 130px;
}
.btn {
  width: 120px;
  height: 60px;
  margin: 20px;
  background-color: transparent;
  border-color: white;
  font-size: 20px;
  font-weight: 700;
  font-family: "Microsoft YaHei", Arial, Helvetica, sans-serif;
}
.btn:hover {
  background-color: white;
  color: rgb(103, 179, 241);
}
#long_btn {
  width: 160px;
}
#long_long_btn {
  width: 200px;
}
.main {
  width: 100%;
  min-height: 900px;
  margin: auto;
  /* border: rgb(99, 97, 99) solid 1px; */
}
.feature {
  min-width: 1050px;
  width: 80%;
  margin: 20px auto 20px auto;
}
.latestnews {
  min-width: 700px;
  width: 100%;
  height: 500px;
  background-color: whitesmoke;
  padding-top: 20px;
  padding-bottom: 20px;
}
.news-header {
  min-width: 1000px;
  width: 80%;
  margin: auto;
}
.video-header {
  min-width: 1000px;
  width: 100%;
  margin: auto;
  text-align: left;
}
.video-notes {
  text-align:left;
  font-size: 16px;
  height: 24px;
  line-height: 24px;
}
.news {
  min-width: 1000px;
  width: 80%;
  margin: 20px auto 20px auto;
}
.toolkit {
  height: 660px;
  background-color: white;
  padding-top: 20px;
  padding-bottom: 20px;
}
.platform {
  height: 400px;
  background-color: whitesmoke;
  padding-top: 20px;
  padding-bottom: 20px;
}
.block-title {
  /* border: red solid 1px; */
  margin: auto;
  font-size: 32px;
  width: 250px;
  line-height: 48px;
  height: 48px;
  font-weight: 700;
}
.news-block-title {
  width: 250px;
  font-size: 32px;
  display: inline-block;
  line-height: 48px;
  height: 48px;
  font-weight: 700;
}
.seemore-btn {
  display: block;
  float: right;
  width: 160px;
  height: 48px;
  line-height: 48px;
  font-size: 18px;
  border: 0;
}
.lang-btn-group {
  margin: 20px auto;
  float: center;
  width: 500px;
  height: 50px;
}
.lang-btn {
  font-size: 24px;
  width: 250px;
  height: 50px;
}
#english-btn 
{
  background: #1890ff;
  color: white;
  border: none;
}
#chinese-btn {
  background: whitesmoke;
  color: black;
  border: none;
}
</style>
