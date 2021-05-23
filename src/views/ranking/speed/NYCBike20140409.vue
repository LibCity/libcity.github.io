<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">NYCBike20140409</p>
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

    const speedModelMAE = [
    {
        rank: '1',
        model: 'MTGNN',
        mlink: '#',
        paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
        plink: 'https://arxiv.org/abs/2005.11650',
        year: '2020',
        step1: '3.93266',
        step2: '4.29087',
        step3: '4.53717',
    },
    {
        rank: '2',
        model: 'AE',
        mlink: '#',
        paper: 'Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction',
        plink: 'https://ieeexplore.ieee.org/document/6910027',
        year: '2014',
        step1: '4.16698',
        step2: '4.41759',
        step3: '4.65334',
    },
    {
        rank: '3',
        model: 'AGCRN',
        mlink: '#',
        paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
        plink: 'https://arxiv.org/abs/2007.02842',
        year: '2018',
        step1: '4.08255',
        step2: '4.46801',
        step3: '4.67164',
    },
    {
        rank: '4',
        model: 'GWNET',
        mlink: '#',
        paper: 'Graph wavenet for deep spatial-temporal graph modeling',
        plink: 'https://arxiv.org/abs/1906.00121',
        year: '2019',
        step1: '4.21714',
        step2: '4.50028',
        step3: '4.67739',
    },
    {
        rank: '5',
        model: 'DCRNN',
        mlink: '#',
        paper: 'Diffusion convolutional recurrent neural network: Data-driven traffic forecasting',
        plink: 'https://arxiv.org/abs/1707.01926',
        year: '2018',
        step1: '4.05529',
        step2: '4.45957',
        step3: '4.72479',
    },
    {
        rank: '6',
        model: 'STGCN',
        mlink: '#',
        paper: 'Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting',
        plink: 'https://www.ijcai.org/Proceedings/2018/0505',
        year: '2018',
        step1: '4.22441',
        step2: '4.55838',
        step3: '4.75718',
    },
    {
        rank: '7',
        model: 'STResNet',
        mlink: '#',
        paper: 'Deep Spatio-Temporal Residual Networks for Citywide Crowd Flows Prediction',
        plink: 'https://arxiv.org/abs/1610.00081',
        year: '2017',
        step1: '4.38356',
        step2: '4.61966',
        step3: '4.79375',
    },
    {
        rank: '8',
        model: 'ACFM',
        mlink: '#',
        paper: 'Attentive Crowd Flow Machines',
        plink: 'https://dl.acm.org/doi/10.1145/3240508.3240681',
        year: '2018',
        step1: '4.49984',
        step2: '4.76775',
        step3: '4.96433',
    },
    {
        rank: '9',
        model: 'Seq2Seq',
        mlink: '#',
        paper: 'Sequence to Sequence Learning with Neural Networks',
        plink: 'https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html',
        year: '2014',
        step1: '4.58896',
        step2: '4.74719',
        step3: '5.06707',
    },
    {
        rank: '10',
        model: 'STG2Seq',
        mlink: '#',
        paper: 'STG2Seq: Spatial-temporal Graph to Sequence Model for Multi-step Passenger Demand Forecasting',
        plink: 'https://arxiv.org/abs/1905.10069',
        year: '2019',
        step1: '4.56277',
        step2: '4.90694',
        step3: '5.40231',
    },
    {
        rank: '11',
        model: 'ASTGCN',
        mlink: '#',
        paper: 'Attention based spatial-temporal graph convolutional networks for traffic flow forecasting',
        plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/3881',
        year: '2019',
        step1: '5.91787',
        step2: '5.66473',
        step3: '6.17103',
    },
    {
        rank: '12',
        model: 'TGCN',
        mlink: '#',
        paper: 'T-gcn: A temporal graph convolutional network for traffic prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/',
        year: '2020',
        step1: '5.44773',
        step2: '5.91789',
        step3: '6.31941',
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