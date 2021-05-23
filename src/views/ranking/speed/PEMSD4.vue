<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">PEMSD4</p>
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
        model: 'AGCRN',
        mlink: '#',
        paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
        plink: 'https://arxiv.org/abs/2007.02842',
        year: '2018',
        step3: '18.13214',
        step6: '18.83440',
        step9: '19.37659',
        step12: '19.85133'
    },
    {
        rank: '2',
        model: 'GWNET',
        mlink: '#',
        paper: 'Graph wavenet for deep spatial-temporal graph modeling',
        plink: 'https://arxiv.org/abs/1906.00121',
        year: '2019',
        step3: '17.69171',
        step6: '18.57398',
        step9: '19.24659',
        step12: '19.95562'
    },
    {
        rank: '3',
        model: 'MTGNN',
        mlink: '#',
        paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
        plink: 'https://arxiv.org/abs/2005.11650',
        year: '2020',
        step3: '17.92926',
        step6: '18.76000',
        step9: '19.34854',
        step12: '20.13532'
    },
    {
        rank: '4',
        model: 'GMAN',
        mlink: '#',
        paper: 'GMAN: A Graph Multi-Attention Network for Traffic Prediction',
        plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/5477',
        year: '2020',
        step3: '18.79037',
        step6: '19.53828',
        step9: '20.18934',
        step12: '20.86548'
    },  
    {
        rank: '5',
        model: 'STGCN',
        mlink: '#',
        paper: 'Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting',
        plink: 'https://www.ijcai.org/Proceedings/2018/0505',
        year: '2018',
        step3: '19.14878',
        step6: '20.13257',
        step9: '20.83048',
        step12: '21.56703'
    },
    {
        rank: '6',
        model: 'GRU',
        mlink: '#',
        paper: 'Using LSTM and GRU neural network methods for traffic flow prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/7804912',
        year: '2016',
        step3: '22.44114',
        step6: '22.50614',
        step9: '22.57063',
        step12: '22.58327'
    },
    {
        rank: '7',
        model: 'Seq2Seq',
        mlink: '#',
        paper: 'Sequence to Sequence Learning with Neural Networks',
        plink: 'https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html',
        year: '2014',
        step3: '22.68513',
        step6: '22.58108',
        step9: '22.76203',
        step12: '23.16315'
    },
    {
        rank: '8',
        model: 'DCRNN',
        mlink: '#',
        paper: 'Diffusion convolutional recurrent neural network: Data-driven traffic forecasting',
        plink: 'https://arxiv.org/abs/1707.01926',
        year: '2018',
        step3: '19.58140',
        step6: '21.46721',
        step9: '23.15177',
        step12: '24.86355'
    },
    {
        rank: '9',
        model: 'STG2Seq',
        mlink: '#',
        paper: 'STG2Seq: Spatial-temporal Graph to Sequence Model for Multi-step Passenger Demand Forecasting',
        plink: 'https://arxiv.org/abs/1905.10069',
        year: '2019',
        step3: '23.00640',
        step6: '23.25137',
        step9: '23.74376',
        step12: '24.93502'
    },
    {
        rank: '10',
        model: 'AE',
        mlink: '#',
        paper: 'Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction',
        plink: 'https://ieeexplore.ieee.org/document/6910027',
        year: '2014',
        step3: '23.95922',
        step6: '24.02409',
        step9: '24.40145',
        step12: '25.02537'
    },
    {
        rank: '11',
        model: 'ASTGCN',
        mlink: '#',
        paper: 'Attention based spatial-temporal graph convolutional networks for traffic flow forecasting',
        plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/3881',
        year: '2019',
        step3: '20.53003',
        step6: '22.97082',
        step9: '24.98192',
        step12: '27.49544'
    },
    {
        rank: '12',
        model: 'TGCN',
        mlink: '#',
        paper: 'T-gcn: A temporal graph convolutional network for traffic prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/',
        year: '2020',
        step3: '21.67769',
        step6: '23.96235',
        step9: '26.33971',
        step12: '29.06183'
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