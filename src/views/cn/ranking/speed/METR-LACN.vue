<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">METR-LA</p>
      </div>
    </div>

    <div class="content">
        <speed-metric-cn></speed-metric-cn>
        <div class="model-ranking">
            <speed-rank-table-cn :speedModel="speedModelMAE"></speed-rank-table-cn>
        </div>
        <br>
        <br>
    </div>
  </div>
</template>

<script>
    import speedMetricCn from './speedMetricChooseCN'
    import speedRankTableCn from "./speedRankingTableCN"

    const speedModelMAE = [
    {
        rank: '1',
        model: 'MTGNN',
        mlink: '#',
        paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
        plink: 'https://arxiv.org/abs/2005.11650',
        year: '2020',
        step3: '2.68289',
        step6: '3.05144',
        step9: '3.28401',
        step12: '3.48228'
    },
    {
        rank: '2',
        model: 'STGCN(1st)',
        mlink: '#',
        paper: 'Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting',
        plink: 'https://www.ijcai.org/Proceedings/2018/0505',
        year: '2018',
        step3: '2.78805',
        step6: '3.16814',
        step9: '3.3888',
        step12: '3.54534'
    },
    {
        rank: '3',
        model: 'STGCN(Cheb)',
        mlink: '#',
        paper: 'Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting',
        plink: 'https://www.ijcai.org/Proceedings/2018/0505',
        year: '2018',
        step3: '2.79182',
        step6: '3.16612',
        step9: '3.38895',
        step12: '3.54751'
    },
    {
        rank: '4',
        model: 'Graph Wavenet',
        mlink: '#',
        paper: 'Graph wavenet for deep spatial-temporal graph modeling',
        plink: 'https://arxiv.org/abs/1906.00121',
        year: '2019',
        step3: '2.77641',
        step6: '3.15971',
        step9: '3.38173',
        step12: '3.54817'
    },
    {
        rank: '5',
        model: 'DCRNN',
        mlink: '#',
        paper: 'Diffusion convolutional recurrent neural network: Data-driven traffic forecasting',
        plink: 'https://arxiv.org/abs/1707.01926',
        year: '2018',
        step3: '2.69598',
        step6: '3.10505',
        step9: '3.36347',
        step12: '3.5759'
    },
    {
        rank: '6',
        model: 'AGCRN',
        mlink: '#',
        paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
        plink: 'https://arxiv.org/abs/2007.02842',
        year: '2018',
        step3: '2.84689',
        step6: '3.22558',
        step9: '3.41802',
        step12: '3.58262'
    },
    {
        rank: '7',
        model: 'T-GCN',
        mlink: '#',
        paper: 'T-gcn: A temporal graph convolutional network for traffic prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/',
        year: '2020',
        step3: '3.55038',
        step6: '3.66333',
        step9: '3.8592',
        step12: '4.10375'
    },
    {
        rank: '8',
        model: 'Seq2Seq',
        mlink: '#',
        paper: 'Sequence to Sequence Learning with Neural Networks',
        plink: 'https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html',
        year: '2014',
        step3: '3.71568',
        step6: '4.10736',
        step9: '4.47127',
        step12: '4.80904'
    },
    ]

    export default {
        data() {
            return {
                speedModelMAE
            };
        },
        components: {
            speedRankTableCn,
            speedMetricCn
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