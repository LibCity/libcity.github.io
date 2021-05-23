<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">PEMS-BAY</p>
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
        step3: '1.31723',
        step6: '1.63467',
        step9: '1.80247',
        step12: '1.91442'
    },
    {
        rank: '2',
        model: 'MTGNN',
        mlink: '#',
        paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
        plink: 'https://arxiv.org/abs/2005.11650',
        year: '2020',
        step3: '1.33071',
        step6: '1.65685',
        step9: '1.83084',
        step12: '1.95405'
    },
    {
        rank: '3',
        model: 'DCRNN',
        mlink: '#',
        paper: 'Diffusion convolutional recurrent neural network: Data-driven traffic forecasting',
        plink: 'https://arxiv.org/abs/1707.01926',
        year: '2018',
        step3: '1.31392',
        step6: '1.65200',
        step9: '1.84141',
        step12: '1.96604'
    },
    {
        rank: '4',
        model: 'AGCRN',
        mlink: '#',
        paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
        plink: 'https://arxiv.org/abs/2007.02842',
        year: '2018',
        step3: '1.36754',
        step6: '1.68644',
        step9: '1.84479',
        step12: '1.96646'
    },
    {
        rank: '5',
        model: 'STGCN',
        mlink: '#',
        paper: 'Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting',
        plink: 'https://www.ijcai.org/Proceedings/2018/0505',
        year: '2018',
        step3: '1.45041',
        step6: '1.76790',
        step9: '1.94057',
        step12: '2.05656'
    },
    {
        rank: '6',
        model: 'GMAN',
        mlink: '#',
        paper: 'GMAN: A Graph Multi-Attention Network for Traffic Prediction',
        plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/5477',
        year: '2020',
        step3: '1.52145',
        step6: '1.82818',
        step9: '1.99825',
        step12: '2.11469'
    },
    {
        rank: '7',
        model: 'ASTGCN',
        mlink: '#',
        paper: 'Attention based spatial-temporal graph convolutional networks for traffic flow forecasting',
        plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/3881',
        year: '2019',
        step3: '1.49655',
        step6: '1.95426',
        step9: '2.25334',
        step12: '2.52225'
    },
    {
        rank: '8',
        model: 'GRU',
        mlink: '#',
        paper: 'Using LSTM and GRU neural network methods for traffic flow prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/7804912',
        year: '2016',
        step3: '2.49063',
        step6: '2.50849',
        step9: '2.53539',
        step12: '2.57500'
    },
    {
        rank: '9',
        model: 'Seq2Seq',
        mlink: '#',
        paper: 'Sequence to Sequence Learning with Neural Networks',
        plink: 'https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html',
        year: '2014',
        step3: '2.44251',
        step6: '2.44632',
        step9: '2.49265',
        step12: '2.58051'
    },
    {
        rank: '10',
        model: 'AE',
        mlink: '#',
        paper: 'Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction',
        plink: 'https://ieeexplore.ieee.org/document/6910027',
        year: '2014',
        step3: '2.56996',
        step6: '2.57286',
        step9: '2.62658',
        step12: '2.72369'
    },
    {
        rank: '11',
        model: 'STG2Seq',
        mlink: '#',
        paper: 'STG2Seq: Spatial-temporal Graph to Sequence Model for Multi-step Passenger Demand Forecasting',
        plink: 'https://arxiv.org/abs/1905.10069',
        year: '2019',
        step3: '2.19201',
        step6: '2.42411',
        step9: '2.60433',
        step12: '2.76812'
    },
    {
        rank: '12',
        model: 'TGCN',
        mlink: '#',
        paper: 'T-gcn: A temporal graph convolutional network for traffic prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/',
        year: '2020',
        step3: '2.63264',
        step6: '2.73944',
        step9: '2.90616',
        step12: '3.10340'
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