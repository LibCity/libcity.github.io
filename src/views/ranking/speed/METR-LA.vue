<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">METR-LA</p>
      </div>
    </div>

    <div class="content">
        <speed-metric></speed-metric>
        <div class="model-ranking">
            <speed-rank-table :speedModel="speedModelMAE"></speed-rank-table>
        </div>
    </div>
  </div>
</template>

<script>
    import speedMetric from './speedMetricChoose'
    import speedRankTable from "./speedRankingTable"

    const speedModelMAE = [
    {
        rank: '1',
        model: 'SLCNN',
        paper: 'Spatio-Temporal Graph Structure Learning for Traffic Forecasting',
        year: '2020',
        step3: '1',
        step6: '2',
        step9: '3',
        step12: '4'
    }
    ]

    export default {
        data() {
            return {
                speedModelMAE
            };
        },
        components: {
            speedRankTable,
            speedMetric
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
  min-height: 200px;
  background:  rgb(27, 140, 233) linear-gradient(to right,  rgb(27, 140, 233), rgb(11, 247, 188));
  /* border: blue solid 1px; */
}
.content {
    width: 80%;
    height: auto;
    margin: 50px auto 0 auto;
    /* border: blue solid 3px; */
}
</style>