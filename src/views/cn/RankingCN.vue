<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">排行榜</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          LibTraffic在不同的数据集上测试了现有模型，<br>
          并展示了这些模型在每个数据集上的性能和排名。
        </p>
      </div>
    </div>

    <div class="content">
        <div class="task-ranking">
            <p class="task-name">交通速度预测</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <rank-table-cn :rankdata="speed"></rank-table-cn>
            <br>
            <br>

            <p class="task-name">轨迹位置预测</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <rank-table-cn :rankdata="location"></rank-table-cn>
            <br>
            <br>
        </div>
    </div>
  </div>
</template>

<script>
    import rankTableCn from "./ranking/rankingTableCN"

    const speed = [
    {
        dataset: 'METR-LA',
        best: 'MTGNN',
        paper: 'Spatio-Temporal Graph Structure Learning for Traffic Forecasting',
        datasetlink: 'https://aptx1231.github.io/Bigscity-TrafficDL-Docs/user_guide/data/raw_data.html#metr-la',
        mlink: '#',
        plink: 'https://arxiv.org/abs/2005.11650',
        dlink: 'METR-LA'
    },
    {
        dataset: 'PEMS-BAY',
        best: 'MTGNN',
        paper: 'Spatio-Temporal Graph Structure Learning for Traffic Forecasting',
        datasetlink: 'https://aptx1231.github.io/Bigscity-TrafficDL-Docs/user_guide/data/raw_data.html#metr-la',
        mlink: '#',
        plink: '#',
        dlink: '#'
    },
    {
        dataset: 'PEMSD7(M)',
        best: 'STGCN',
        paper: 'Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting',
        mlink: '#',
        plink: '#',
        dlink: '#'
    },
    {
        dataset: 'Loop Seattle',
        best: 'TGC-LSTM',
        paper: 'Traffic Graph Convolutional Recurrent Neural Network: A Deep Learning Framework for Network-Scale Traffic Learning and Forecasting',
        mlink: '#',
        plink: '#',
        dlink: '#'
    },
    ]

    const location = [
    {
        dataset: 'foursqaure-tky',
        best: 'DeepMove',
        paper: 'DeepMove: Predicting Human Mobility with Attentional Recurrent Networks',
        datasetlink: 'https://aptx1231.github.io/Bigscity-TrafficDL-Docs/user_guide/data/raw_data.html#foursquare',
        mlink: '#',
        plink: 'https://dl.acm.org/doi/10.1145/3178876.3186058',
        dlink: 'foursqaure-tky'
    },
    {
        dataset: 'Gowalla',
        best: 'DeepMove',
        paper: 'DeepMove: Predicting Human Mobility with Attentional Recurrent Networks',
        datasetlink: 'https://aptx1231.github.io/Bigscity-TrafficDL-Docs/user_guide/data/raw_data.html#gowalla',
        mlink: '#',
        plink: 'https://dl.acm.org/doi/10.1145/3178876.3186058',
        dlink: 'Gowalla'
    },
    ]

    export default {
        data() {
            return {
                speed,
                location
            };
        },
        components: {
            rankTableCn
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
  min-height: 300px;
  background:  rgb(27, 140, 233) linear-gradient(to right,  rgb(27, 140, 233), rgb(11, 247, 188));
  /* border: blue solid 1px; */
}
.content {
    width: 80%;
    height: auto;
    margin: 50px auto 0 auto;
    /* border: blue solid 3px; */
}
.task-name {
    font-size: 32px;
    font-weight: 700;
    font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    margin-bottom: 0;
}
</style>