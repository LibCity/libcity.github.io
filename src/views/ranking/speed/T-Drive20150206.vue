<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">T-Drive20150206</p>
      </div>
    </div>

    <div class="content">
        <div class="metric">
            View
            <a-select default-value="MAE3" style="width: 180px; font-size: 14px; margin-left: 10px" @change="handleChange">
                <a-select-option value="MAE3">
                    MAE @ 3 STEP
                </a-select-option>
                <a-select-option value="MAPE3" disabled>
                    MAPE @ 3 STEP
                </a-select-option>
                <a-select-option value="RMSE3" disabled>
                    RMSE @ 3 STEP
                </a-select-option>
            </a-select>
        </div>
        <div class="model-ranking">
            <table>
                <thead>
                    <tr>
                        <th>RANK</th>
                        <th>MODEL</th>
                        <th>PAPER</th>
                        <th>YEAR</th>
                        <th>1 STEP</th>
                        <th>2 STEP</th>
                        <th>3 STEP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in speedModelMAE" :key="item.model">
                        <td width="6%">{{item.rank}}</td>
                        <td width="10%"><a :href="item.mlink">{{item.model}}</a></td>
                        <td width="43%"><a :href="item.plink" class="paper">{{item.paper}}</a></td>
                        <td width="5%">{{item.year}}</td>
                        <td width="12%">{{item.step1}}</td>
                        <td width="12%">{{item.step2}}</td>
                        <td width="12%">{{item.step3}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br>
        <br>
    </div>
  </div>
</template>

<script>
    // import speedMetric from './speedMetricChoose'
    // import speedRankTable from "./speedRankingTable"

    const speedModelMAE = [
    {
        rank: '1',
        model: 'MTGNN',
        mlink: '#',
        paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
        plink: 'https://arxiv.org/abs/2005.11650',
        year: '2020',
        step1: '14.80143',
        step2: '16.15115',
        step3: '17.55242',
    },
    {
        rank: '2',
        model: 'AGCRN',
        mlink: '#',
        paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
        plink: 'https://arxiv.org/abs/2007.02842',
        year: '2018',
        step1: '15.18828',
        step2: '17.14202',
        step3: '18.36808',
    },
    {
        rank: '3',
        model: 'GWNET',
        mlink: '#',
        paper: 'Graph wavenet for deep spatial-temporal graph modeling',
        plink: 'https://arxiv.org/abs/1906.00121',
        year: '2019',
        step1: '16.02537',
        step2: '17.51976',
        step3: '18.82202',
    },
    {
        rank: '4',
        model: 'STResNet',
        mlink: '#',
        paper: 'Deep Spatio-Temporal Residual Networks for Citywide Crowd Flows Prediction',
        plink: 'https://arxiv.org/abs/1610.00081',
        year: '2017',
        step1: '18.14588',
        step2: '18.97773',
        step3: '19.61276',
    },
    {
        rank: '5',
        model: 'STGCN',
        mlink: '#',
        paper: 'Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting',
        plink: 'https://www.ijcai.org/Proceedings/2018/0505',
        year: '2018',
        step1: '17.11550',
        step2: '18.93000',
        step3: '19.76688',
    },
    {
        rank: '6',
        model: 'ACFM',
        mlink: '#',
        paper: 'Attentive Crowd Flow Machines',
        plink: 'https://dl.acm.org/doi/10.1145/3240508.3240681',
        year: '2018',
        step1: '17.93284',
        step2: '19.19952',
        step3: '19.95700',
    },
    {
        rank: '7',
        model: 'STG2Seq',
        mlink: '#',
        paper: 'STG2Seq: Spatial-temporal Graph to Sequence Model for Multi-step Passenger Demand Forecasting',
        plink: 'https://arxiv.org/abs/1905.10069',
        year: '2019',
        step3: '18.42712',
        step6: '20.09098',
        step9: '22.70759',
    },
    {
        rank: '8',
        model: 'DCRNN',
        mlink: '#',
        paper: 'Diffusion convolutional recurrent neural network: Data-driven traffic forecasting',
        plink: 'https://arxiv.org/abs/1707.01926',
        year: '2018',
        step1: '18.88013',
        step2: '23.49460',
        step3: '25.88768',
    },
    {
        rank: '9',
        model: 'TGCN',
        mlink: '#',
        paper: 'T-gcn: A temporal graph convolutional network for traffic prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/',
        year: '2020',
        step1: '22.53672',
        step2: '25.64672',
        step3: '28.25393',
    },
    {
        rank: '10',
        model: 'ASTGCN',
        mlink: '#',
        paper: 'Attention based spatial-temporal graph convolutional networks for traffic flow forecasting',
        plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/3881',
        year: '2019',
        step1: '27.99815',
        step2: '21.70508',
        step3: '31.23402',
    },
    {
        rank: '11',
        model: 'Seq2Seq',
        mlink: '#',
        paper: 'Sequence to Sequence Learning with Neural Networks',
        plink: 'https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html',
        year: '2014',
        step1: '34.10604',
        step2: '36.90227',
        step3: '41.03199',
    },
    {
        rank: '12',
        model: 'GRU',
        mlink: '#',
        paper: 'Using LSTM and GRU neural network methods for traffic flow prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/7804912',
        year: '2016',
        step1: '35.18716',
        step2: '41.98126',
        step3: '49.13516',
    },
    {
        rank: '13',
        model: 'AE',
        mlink: '#',
        paper: 'Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction',
        plink: 'https://ieeexplore.ieee.org/document/6910027',
        year: '2014',
        step1: '72.46588',
        step2: '72.83984',
        step3: '73.14152',
    },
    ]

    export default {
        data() {
            return {
                speedModelMAE
            };
        },
        methods: {
            handleChange(value) {
                console.log(`selected ${value}`);
            },
        },
        components: {
            // speedRankTable,
            // speedMetric
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
.metric {
    font-size: 16px;
    font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    margin-bottom: 16px;
}
</style>