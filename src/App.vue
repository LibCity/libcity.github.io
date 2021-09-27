<template>
  <a-layout id="components-layout-demo-fixed">
    <a-layout-header
      class="header"
      :style="{
        height: '80px',
        position: 'fixed',
        zIndex: 1,
        width: '100%',
      }"
    >
      <a-menu
        theme="dark"
        mode="horizontal"
        v-if="lang"
        :style="{
          width: '1200px',
          margin: 'auto',
          lineHeight: '80px',
        }"
      >
        <a-menu-item key="1" @click="menuItemClick('Home')">
          <img class="logo" src="./assets/img/logo.png" />
        </a-menu-item>

        <a-menu-item
          key="2"
          style="width: 135px; font-size: 20px; textalign: center"
        >
          <a-dropdown>
            <span class="ant-dropdown-link">
              Get Started
              <a-icon type="down" />
            </span>
            <a-menu slot="overlay" style="width: 130px">
              <a-menu-item
                @click="menuItemClick('InstallLibCity')"
                style="font-size: 16px; line-height: 24px"
              >
                <a href="javascript:;">Install LibCity</a>
              </a-menu-item>
              <a-menu-item
                @click="menuItemClick('QuickStart')"
                style="font-size: 16px; line-height: 24px"
              >
                <a href="javascript:;">Quick Start</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-menu-item>

        <a-menu-item
          key="3"
          style="width: 55px; font-size: 20px; textalign: center"
          @click="menuItemClick('Task')"
        >
          Task
        </a-menu-item>

        <a-menu-item
          key="4"
          style="width: 80px; font-size: 20px; textalign: center"
        >
          <a-dropdown>
            <span class="ant-dropdown-link">
              Toolkit
              <a-icon type="down" />
            </span>
            <a-menu slot="overlay" style="width: 100px">
              <a-menu-item
                @click="menuItemClick('Data')"
                style="font-size: 16px; line-height: 24px"
              >
                <a href="javascript:;">Data</a>
              </a-menu-item>
              <a-menu-item
                @click="menuItemClick('Model')"
                style="font-size: 16px; line-height: 24px"
              >
                <a href="javascript:;">Model</a>
              </a-menu-item>
              <a-menu-item
                @click="menuItemClick('Evaluation')"
                style="font-size: 16px; line-height: 24px"
              >
                <a href="javascript:;">Evaluation</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-menu-item>

        <a-menu-item
          key="5"
          style="
            width: 110px;
            font-size: 20px;
            textalign: center;
            margin-left: 10px;
          "
        >
          <a
            href="https://bigscity-libcity-docs.readthedocs.io/en/latest/"
            target="_blank"
            >Document</a
          >
        </a-menu-item>

        <!-- <a-menu-item
          key="6"
          style="width: 70px; font-size: 20px; textalign: center"
          @click="menuItemClick('Paper')"
        >
          Paper
        </a-menu-item> -->

        <a-menu-item
          key="7"
          style="width: 90px; font-size: 20px; textalign: center"
          @click="menuItemClick('Ranking')"
        >
          Ranking
        </a-menu-item>

        <a-menu-item
          key="8"
          style="width: 75px; font-size: 20px; textalign: center"
          @click="menuItemClick('Demo')"
        >
          Demo
        </a-menu-item>

        <a-menu-item
          key="9"
          style="width: 75px; font-size: 20px; textalign: center"
          @click="menuItemClick('About')"
        >
          About
        </a-menu-item>

        <!-- <a-menu-item
          key="8"
          style="width: 80px; font-size: 20px; textalign: center"
          @click="menuItemClick('Chart')"
        >
          Visual
        </a-menu-item> -->

        <a-menu-item
          key="10"
          style="width: 95px; font-size: 20px; textalign: center"
        >
          <a href="https://github.com/LibCity" target="_blank">GitHub</a>
        </a-menu-item>

        <!-- <a-menu-item
          key="10"
          style="width: 120px; font-size: 20px; textalign: center"
          @click="changeLang"
        >
          中文版
        </a-menu-item> -->
      </a-menu>

      <a-menu
        theme="dark"
        mode="horizontal"
        v-if="!lang"
        :style="{
          width: '1200px',
          margin: 'auto',
          lineHeight: '80px',
        }"
      >
        <a-menu-item key="1" @click="menuItemClick('HomeCN')">
          <img class="logo" src="./assets/img/logo.png" />
        </a-menu-item>

        <a-menu-item
          key="2"
          style="width: 125px; font-size: 20px; textalign: center"
        >
          <a-dropdown>
            <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
              使用入门
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay" style="width: 130px">
              <a-menu-item
                @click="menuItemClick('InstallLibCityCN')"
                style="font-size: 16px; line-height: 24px"
              >
                <a href="javascript:;">安装LibCity</a>
              </a-menu-item>
              <a-menu-item
                @click="menuItemClick('QuickStartCN')"
                style="font-size: 16px; line-height: 24px"
              >
                <a href="javascript:;">快速上手</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-menu-item>

        <a-menu-item
          key="3"
          style="width: 70px; font-size: 20px; textalign: center"
          @click="menuItemClick('TaskCN')"
        >
          任务
        </a-menu-item>

        <a-menu-item
          key="4"
          style="width: 95px; font-size: 20px; textalign: center"
        >
          <a-dropdown>
            <a class="ant-dropdown-link" @click="(e) => e.preventDefault()">
              工具包
              <a-icon type="down" />
            </a>
            <a-menu slot="overlay" style="width: 80px">
              <a-menu-item
                @click="menuItemClick('DataCN')"
                style="font-size: 16px; line-height: 24px"
              >
                <a href="javascript:;">数据</a>
              </a-menu-item>
              <a-menu-item
                @click="menuItemClick('ModelCN')"
                style="font-size: 16px; line-height: 24px"
              >
                <a href="javascript:;">模型</a>
              </a-menu-item>
              <a-menu-item
                @click="menuItemClick('EvaluationCN')"
                style="font-size: 16px; line-height: 24px"
              >
                <a href="javascript:;">测评</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-menu-item>

        <a-menu-item
          key="5"
          style="
            width: 75px;
            font-size: 20px;
            textalign: center;
            margin-left: 10px;
          "
        >
          <a
            href="https://bigscity-libcity-docs.readthedocs.io/en/latest/"
            target="_blank"
            >文档</a
          >
        </a-menu-item>
        <!-- 
        <a-menu-item
          key="6"
          style="width: 90px; font-size: 20px; textalign: center"
          @click="menuItemClick('PaperCN')"
        >
          论文库
        </a-menu-item> -->

        <a-menu-item
          key="7"
          style="width: 85px; font-size: 20px; textalign: center"
          @click="menuItemClick('RankingCN')"
        >
          排行榜
        </a-menu-item>

        <a-menu-item
          key="8"
          style="width: 80px; font-size: 20px; textalign: center"
          @click="menuItemClick('AboutCN')"
        >
          关于
        </a-menu-item>

        <!-- <a-menu-item
          key="8"
          style="width: 80px; font-size: 20px; textalign: center"
          @click="menuItemClick('Chart')"
        >
          可视化
        </a-menu-item> -->

        <a-menu-item
          key="9"
          style="
            width: 95px;
            font-size: 20px;
            textalign: center;
            margin-left: 100px;
          "
        >
          <a href="https://github.com/LibCity" target="_blank">Github</a>
        </a-menu-item>
        <a-menu-item
          key="10"
          style="width: 120px; font-size: 20px; textalign: center"
          @click="changeLang"
        >
          English
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout-content>
      <div
        :style="{
          marginTop: '80px',
          backgroundColor: 'transparent',
          minHeight: '680px',
          height: 'auto',
        }"
      >
        <router-view />
      </div>
    </a-layout-content>

    <a-layout-footer v-if="lang" :style="{ backgroundColor: '#ddd' }">
      <div style="width: 80%; margin: auto; min-width: 1000px">
        <div
          style="
            display: inline-block;
            border: red solid 0px;
            width: 160px;
            height: 160px;
            vertical-align: top;
          "
        >
          <a href="https://clustrmaps.com/site/1biw6" title="Visit tracker"
            ><img
              style="width: 200px; height: 127px"
              src="//clustrmaps.com/map_v2.png?cl=ffffff&w=a&t=tt&d=lIAqix0OUQ3-odCYrKKkfjqRbakJACtJCPHfUkqRc48"
          /></a>
        </div>
        <div id = "counter"></div>
        <div style="display: block; float: right; width: 150px; height: 160px">
          <h3 style="color: rgb(27, 140, 233)">Useful Links</h3>
          <dl>
            <dt>
              <a-button class="footer-btn" type="link"
                ><a style="font-size: 16px" href="https://www.bigcity.ai/"
                  >BIGSCity</a
                ></a-button
              >
            </dt>
          </dl>
        </div>
        <div
          style="
            display: block;
            float: right;
            width: 150px;
            height: 160px;
            vertical-align: top;
          "
        >
          <h3 style="color: rgb(27, 140, 233)">Resources</h3>
          <dl>
            <dt>
              <a-button class="footer-btn" type="link"
                ><a
                  style="font-size: 16px"
                  href="https://bigscity-libcity-docs.readthedocs.io/en/latest/"
                  target="_blank"
                  >Document</a
                ></a-button
              >
            </dt>
            <dt>
              <a-button class="footer-btn" type="link"
                ><a
                  style="font-size: 16px"
                  href="https://github.com/LibCity"
                  target="_blank"
                  >GitHub</a
                ></a-button
              >
            </dt>
            <dt>
              <a-button
                class="footer-btn"
                type="link"
                style="font-size: 16px"
                href="https://github.com/LibCity/Bigscity-LibCity-Paper"
                target="_blank"
                >Paper Library</a-button
              >
            </dt>
            <dt>
              <a-button
                class="footer-btn"
                type="link"
                style="font-size: 16px"
                @click="toAbout"
                >About Us</a-button
              >
            </dt>
          </dl>
        </div>
        <div
          style="
            text-align: center;
            font-size: 16px;
            color: black;
            margin-top: 20px;
          "
        >
          Copyright © 2021 LibCity All rights served.
        </div>
      </div>
    </a-layout-footer>

    <a-layout-footer v-if="!lang" :style="{ backgroundColor: '#ddd' }">
      <div style="width: 80%; margin: auto; min-width: 1000px">
        <div
          style="
            display: inline-block;
            border: red solid 0px;
            width: 160px;
            height: 160px;
            vertical-align: top;
          "
        ></div>
        <div style="display: block; float: right; width: 150px; height: 160px">
          <h3 style="color: rgb(27, 140, 233)">友情链接</h3>
          <dl>
            <dt>
              <a-button class="footer-btn" type="link"
                ><a style="font-size: 16px" href="https://www.bigcity.ai/"
                  >BIGSCity</a
                ></a-button
              >
            </dt>
          </dl>
        </div>
        <div
          style="
            display: block;
            float: right;
            width: 150px;
            height: 160px;
            vertical-align: top;
          "
        >
          <h3 style="color: rgb(27, 140, 233)">资源</h3>
          <dl>
            <dt>
              <a-button class="footer-btn" type="link"
                ><a
                  style="font-size: 16px"
                  href="https://bigscity-libcity-docs.readthedocs.io/en/latest/"
                  target="_blank"
                  >文档</a
                ></a-button
              >
            </dt>
            <dt>
              <a-button class="footer-btn" type="link"
                ><a
                  style="font-size: 16px"
                  href="https://github.com/LibCity"
                  target="_blank"
                  >Github</a
                ></a-button
              >
            </dt>
            <dt>
              <a-button
                class="footer-btn"
                type="link"
                style="font-size: 16px"
                href="https://github.com/LibCity/Bigscity-LibCity-Paper"
                target="_blank"
                >论文库</a-button
              >
            </dt>
            <dt>
              <a-button
                class="footer-btn"
                type="link"
                style="font-size: 16px"
                @click="toAbout"
                >关于我们</a-button
              >
            </dt>
          </dl>
        </div>

        <div
          style="
            text-align: center;
            font-size: 16px;
            color: black;
            margin-top: 20px;
          "
        >
          Copyright © 2021 LibCity All rights served.
        </div>
      </div>
    </a-layout-footer>
  </a-layout>
</template>

<style>
#components-layout-demo-fixed .logo {
  width: 150px;
  height: 50px;
  /* background: rgba(255, 255, 255, 0.2); */
  margin: 0px 24px 15px 0;
  float: left;
}
.ant-menu.ant-menu-dark .ant-menu-item-selected,
.ant-menu-submenu-popup.ant-menu-dark .ant-menu-item-selected {
  background-color: rgba(255, 255, 255, 0) !important;
}

.ant-menu-dark .ant-menu-item-selected {
  color: rgba(255, 255, 255, 0.65) !important;
}

.ant-menu-item .ant-menu-item-active {
  color: rgba(255, 255, 255, 0.65) !important;
}

.footer-btn {
  margin-top: -5px;
  color: black !important;
}
</style>
<script type="text/javascript">
var sc_project=12634230; 
var sc_invisible=1; 
var sc_security="821701bd"; 
</script>

<script>

let script = document.createElement('script');
script.type = "text/javascript";
script.src = "https://www.statcounter.com/counter/counter.js";
console.log(script)
document.getElementsByTagName('head')[0].appendChild(script);
script.onload = function() {
  console.log('js加载成功')
}
script.onerror = function() {
  console.log('js加载失败')
}

export default {
  data() {
    return {
      lang: true,
      isActive: true,
    };
  },
  methods: {
    changeLang() {
      this.lang = !this.lang;
      let curName = this.$route.name;
      if (!this.lang) {
        this.$router.push({
          name: curName + "CN",
        });
      } else {
        this.$router.push({
          name: curName.substring(0, curName.length - 2),
        });
      }
    },
    menuItemClick(link) {
      this.$router.push({
        name: link,
      });
    },
    // toPaper() {
    //   this.$router.push({
    //     name: "Paper",
    //   })
    // },
    toAbout() {
      this.$router.push({
        name: "About",
      });
    },
  },
};
</script>
