<template>
  <div style="padding: 20px;">
    <a-row :gutter="[48, 16]">
      <!-- <a-col :span="8">
        <div class="pcard">
            <a-card title="Task" :bordered="true" style="border-radius: 5px">
                <p style="margin-bottom: 0px; height: 120px">LibCity has implemented a set of standard tracks for each supported spatio-temporal data mining task to improve performance comparability of different models.</p>
                <a-button style="padding-left: 180px; margin-top: 5px; font-size: 15px;" type="link" @click="toTask">See More >></a-button>
            </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="pcard">
            <a-card title="Paper" :bordered="true" style="border-radius: 5px">
                <p style="margin-bottom: 0px; height: 120px">LibCity offers more than 200 research papers on spatio-temporal data mining from top conferences or journals and supports conditional filtering and searching.</p>
                <a-button style="padding-left: 180px; margin-top: 5px; font-size: 15px;" type="link" @click="toPaper">See More >></a-button>
            </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="pcard">
            <a-card title="Ranking" :bordered="true" style="border-radius: 5px">
                <p style="margin-bottom: 0px; height: 120px">LibCity tests existing models on different datasets and shows performances and rankings of these models for each dataset.</p>
                <a-button style="padding-left: 180px; margin-top: 5px; font-size: 15px;" type="link" @click="toRanking">See More >></a-button>
            </a-card>
        </div>
      </a-col>
      frb替换以上内容 -->
      <a-col :span="8">
        <div class="pcard">
            <a-card title="Paper" :bordered="true" style="border-radius: 5px">
                <p style="margin-bottom: 0px; height: 120px">LibCity offers more than 300 research papers on spatio-temporal data mining from top conferences or journals.</p>
                <a-button style="padding-left: 180px; margin-top: 5px; font-size: 15px;" type="link"><a href="https://github.com/LibCity/Bigscity-LibCity-Paper" target="_blank">See More >></a></a-button>
            </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="pcard">
            <a-card title="Ranking" :bordered="true" style="border-radius: 5px">
                <p style="margin-bottom: 0px; height: 120px">LibCity tests existing models on different datasets and shows performances and rankings of these models for each dataset.</p>
                <a-button style="padding-left: 180px; margin-top: 5px; font-size: 15px;" type="link" @click="toRanking">See More >></a-button>
            </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="pcard">
            <a-card title="Demo" :bordered="true" style="border-radius: 5px">
                <p style="margin-bottom: 0px; height: 120px">This website provides a demonstration video for researchers to know the basic usage of LibCity quickly.</p>
                <a-button style="padding-left: 180px; margin-top: 5px; font-size: 15px;" type="link" @click="toDemo">See More >></a-button>
            </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
    name: 'platCard',
    data() {
        return {};
    },
    methods: {
    toTask() {
        this.$router.push({
            name: "Task",
        });
    },
    toPaper() {
        this.$router.push({
            name: "Paper",
        });
    },
    toRanking() {
        this.$router.push({
            name: "Ranking",
        });
    },
    toChart() {
        this.$router.push({
            name: "Chart",
        });
    },
    toDemo() {
        this.$router.push({
            name: "Demo",
        });
    }
  }
}
</script>

<style>
.pcard {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
.pcard:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}
.pcard .ant-card-head {
    border-bottom: 0 !important;
    min-height: 32px !important;
    height: 48px;
}
.pcard .ant-card-head-title {
    font-size: 20px;
    white-space: pre-wrap !important;
    text-align: left;
}
.pcard .ant-card-body {
  font-size: 16px;
  height: 180px;
  padding: 8px 24px 8px 24px;
}
</style>