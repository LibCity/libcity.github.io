<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">PEMSD8</p>
      </div>
    </div>

    <div class="content">
        <speed-metric></speed-metric>
        <div class="model-ranking">
            <speed-rank-table :speedModel="speedModelMAE"></speed-rank-table>
        </div>
        <br>
        <br>
    </div>
  </div>
</template>

<script>
    import speedMetric from './speedMetricChoose'
    import speedRankTable from "./speedRankingTable"

    const speedModelMAE = [
    {
        rank: '1',
        model: 'GWNET',
        mlink: '#',
        paper: 'Graph wavenet for deep spatial-temporal graph modeling',
        plink: 'https://arxiv.org/abs/1906.00121',
        year: '2019',
        step3: '13.48623',
        step6: '14.34870',
        step9: '15.03884',
        step12: '15.67200'
    },
    {
        rank: '2',
        model: 'AGCRN',
        mlink: '#',
        paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
        plink: 'https://arxiv.org/abs/2007.02842',
        year: '2018',
        step3: '14.14558',
        step6: '14.96215',
        step9: '15.67539',
        step12: '16.42728'
    },
    {
        rank: '3',
        model: 'MTGNN',
        mlink: '#',
        paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
        plink: 'https://arxiv.org/abs/2005.11650',
        year: '2020',
        step3: '14.00144',
        step6: '14.88253',
        step9: '15.70704',
        step12: '16.58282'
    },
    {
        rank: '4',
        model: 'STGCN',
        mlink: '#',
        paper: 'Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting',
        plink: 'https://www.ijcai.org/Proceedings/2018/0505',
        year: '2018',
        step3: '15.16601',
        step6: '16.18848',
        step9: '16.97072',
        step12: '17.81894'
    },
    {
        rank: '5',
        model: 'GMAN',
        mlink: '#',
        paper: 'GMAN: A Graph Multi-Attention Network for Traffic Prediction',
        plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/5477',
        year: '2020',
        step3: '15.15781',
        step6: '15.92420',
        step9: '16.72486',
        step12: '17.83690'
    },
    {
        rank: '6',
        model: 'DCRNN',
        mlink: '#',
        paper: 'Diffusion convolutional recurrent neural network: Data-driven traffic forecasting',
        plink: 'https://arxiv.org/abs/1707.01926',
        year: '2018',
        step3: '15.13929',
        step6: '16.61906',
        step9: '17.96046',
        step12: '19.34530'
    },
    {
        rank: '7',
        model: 'Seq2Seq',
        mlink: '#',
        paper: 'Sequence to Sequence Learning with Neural Networks',
        plink: 'https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html',
        year: '2014',
        step3: '19.18553',
        step6: '19.32556',
        step9: '19.61848',
        step12: '19.89427'
    },
    {
        rank: '8',
        model: 'GRU',
        mlink: '#',
        paper: 'Using LSTM and GRU neural network methods for traffic flow prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/7804912',
        year: '2016',
        step3: '19.99183',
        step6: '20.12640',
        step9: '20.27365',
        step12: '20.46143'
    },
    {
        rank: '9',
        model: 'STG2Seq',
        mlink: '#',
        paper: 'STG2Seq: Spatial-temporal Graph to Sequence Model for Multi-step Passenger Demand Forecasting',
        plink: 'https://arxiv.org/abs/1905.10069',
        year: '2019',
        step3: '18.21737',
        step6: '19.47863',
        step9: '20.43240',
        step12: '21.44479'
    },
    {
        rank: '10',
        model: 'ASTGCN',
        mlink: '#',
        paper: 'Attention based spatial-temporal graph convolutional networks for traffic flow forecasting',
        plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/3881',
        year: '2019',
        step3: '16.43314',
        step6: '18.54688',
        step9: '20.35687',
        step12: '22.28371'
    },
    {
        rank: '11',
        model: 'AE',
        mlink: '#',
        paper: 'Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction',
        plink: 'https://ieeexplore.ieee.org/document/6910027',
        year: '2014',
        step3: '22.26560',
        step6: '22.20933',
        step9: '22.33517',
        step12: '22.86505'
    },
    {
        rank: '12',
        model: 'TGCN',
        mlink: '#',
        paper: 'T-gcn: A temporal graph convolutional network for traffic prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/',
        year: '2020',
        step3: '17.34809',
        step6: '19.10946',
        step9: '21.00698',
        step12: '23.41667'
    },
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