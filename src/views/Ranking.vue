<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">Ranking</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          This platform provides several downstream tasks and <br>
          maintains state-of-the-art results and benchmarks on these tasks. <br>
        </p>
      </div>
    </div>

    <div class="content">
        <div class="task-ranking">
            <p class="task-name">Traffic Speed Prediction</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <rank-table :speed="speed"></rank-table>
        </div>
    </div>
  </div>
</template>

<script>
    import rankTable from "./ranking/rankingTable"

    const speed = [
    {
        dataset: 'METR-LA',
        best: 'SLCNN',
        paper: 'Spatio-Temporal Graph Structure Learning for Traffic Forecasting',
        mlink: '#',
        plink: '#',
        dlink: 'METR-LA'
    },
    {
        dataset: 'PeMS-M',
        best: 'ST-UNet',
        paper: 'ST-UNet: A Spatio-Temporal U-Network for Graph-structured Time Series Modeling',
        mlink: '#',
        plink: '#',
        dlink: '#'
    },
    {
        dataset: 'PEMS-BAY',
        best: 'Graph Wave-Net',
        paper: 'Graph WaveNet for Deep Spatial-Temporal Graph Modeling',
        mlink: '#',
        plink: '#',
        dlink: '#'
    },
    {
        dataset: 'PeMS04',
        best: 'AGCRN',
        paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
        mlink: '#',
        plink: '#',
        dlink: '#'
    },]

    export default {
        data() {
            return {
                speed
            };
        },
        components: {
            rankTable
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
    height: 500px;
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