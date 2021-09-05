<template>
  <div style="background-color: transparent; padding: 20px;">
    <a-row :gutter="[48, 16]">
      <!-- <a-col :span="8">
        <div class="pcard-cn">
            <a-card title="标准赛道"  :bordered="true" style="border-radius: 5px">
                <p style="margin-top:10px; margin-bottom: 0px; height: 105px">LibCity为每个支持的时空数据挖掘任务实现了一套标准流水线（赛道），提高不同模型的性能可比性。</p>
                <a-button style="padding-left: 220px; margin-top: 5px; font-size: 15px;" type="link" @click="toTask">详情 >></a-button>
            </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="pcard-cn">
            <a-card title="论文库"  :bordered="true" style="border-radius: 5px">
                <p style="margin-top:10px; margin-bottom: 0px; height: 105px">LibCity提供了超过100篇来自顶级期刊或会议的时空数据挖掘领域的研究论文，并支持条件筛选和搜索功能。</p>
                <a-button style="padding-left: 220px; margin-top: 5px; font-size: 15px;" type="link" @click="toPaper">详情 >></a-button>
            </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="pcard-cn">
            <a-card title="排行榜"  :bordered="true" style="border-radius: 5px">
                <p style="margin-top:10px; margin-bottom: 0px; height: 105px">LibCity在不同的数据集上测试了现有模型并展示了这些模型在每个数据集上的性能和排名。</p>
                <a-button style="padding-left: 220px; margin-top: 5px; font-size: 15px;" type="link" @click="toRanking">详情 >></a-button>
            </a-card>
        </div>
      </a-col> -->
      <!-- frb 替代以上内容 -->
      <a-col :span="8">
        <div class="pcard-cn">
            <a-card title="论文库"  :bordered="true" style="border-radius: 5px">
                <p style="margin-top:10px; margin-bottom: 0px; height: 105px">LibCity提供了超过200篇来自顶级期刊或会议的时空数据挖掘领域的研究论文，并支持条件筛选和搜索功能。</p>
                <a-button style="padding-left: 220px; margin-top: 5px; font-size: 15px;" type="link" @click="toPaper">详情 >></a-button>
            </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="pcard-cn">
            <a-card title="排行榜"  :bordered="true" style="border-radius: 5px">
                <p style="margin-top:10px; margin-bottom: 0px; height: 105px">LibCity在不同的数据集上测试了现有模型，并展示了这些模型在每个数据集上的性能和排名。</p>
                <a-button style="padding-left: 220px; margin-top: 5px; font-size: 15px;" type="link" @click="toRanking">详情 >></a-button>
            </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="pcard-cn">
            <a-card title="可视化参数配置"  :bordered="true" style="border-radius: 5px">
                <p style="margin-top:10px; margin-bottom: 0px; height: 105px">LibCity支持可视化的参数配置，并以图表形式展示预训练模型的训练过程和预测性能。</p>
                <a-button style="padding-left: 220px; margin-top: 5px; font-size: 15px;" type="link" @click="toChart">详情 >></a-button>
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
    toPaper() {
        this.$router.push({
            name: "TaskCN",
        });
    },
    toPaper() {
        this.$router.push({
            name: "PaperCN",
        });
    },
    toRanking() {
        this.$router.push({
            name: "RankingCN",
        });
    },
    toChart() {
        this.$router.push({
            name: "Chart",
        });
    }
  }
}
</script>

<style>
.pcard-cn {
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
}
.pcard-cn:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
}
.pcard-cn .ant-card-head {
    border-bottom: 0 !important;
    min-height: 32px !important;
    height: 48px;
}
.pcard-cn .ant-card-head-title {
    font-size: 20px;
    white-space: pre-wrap !important;
    text-align: left;
    font-weight: 700;
}
.pcard-cn .ant-card-body {
  font-size: 16px;
  height: 170px;
  padding: 8px 24px 8px 24px;
}
</style>