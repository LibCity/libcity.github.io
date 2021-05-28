<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">T-Drive20150206</p>
      </div>
    </div>

    <div class="content">
        <div class="metric">
            视角
            <a-select default-value="MAE3" style="width: 180px; font-size: 14px; margin-left: 10px" @change="metricsChange">
                <a-select-option value="MAE3">
                    MAE @ 3 STEP
                </a-select-option>
                <a-select-option value="RMSE3">
                    RMSE @ 3 STEP
                </a-select-option>
            </a-select>
        </div>

        <div class="model-ranking">
            <table>
                <thead style="font-size: 16px">
                    <tr>
                        <th>排名</th>
                        <th>模型</th>
                        <th>论文</th>
                        <th>年份</th>
                        <th>1 STEP<a-button type="link" icon="caret-down" size="small" style="color: white" @click="sortBy1"></a-button></th>
                        <th>2 STEP<a-button type="link" icon="caret-down" size="small" style="color: white" @click="sortBy2"></a-button></th>
                        <th>3 STEP<a-button type="link" icon="caret-down" size="small" style="color: white" @click="sortBy3"></a-button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in rankingData" :key="item.model">
                        <td width="6%">{{item.rank}}</td>
                        <td width="8%"><a :href="item.mlink" target="_blank">{{item.model}}</a></td>
                        <td width="39%"><a :href="item.plink" class="paper" target="_blank">{{item.paper}}</a></td>
                        <td width="5%">{{item.year}}</td>
                        <td width="14%">{{item.step1}}</td>
                        <td width="14%">{{item.step2}}</td>
                        <td width="14%">{{item.step3}}</td>
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

    const T_Drive20150206_origin = [
    {
        rank: 0,
        model: 'MTGNN',
        mlink: '#',
        paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
        plink: 'https://arxiv.org/abs/2005.11650',
        year: '2020',
        step1: 13.74689102,
        step2: 15.27115917,
        step3: 16.77351189,

        mae_step1: 13.74689102,
        mae_step2: 15.27115917,
        mae_step3: 16.77351189,

        rmse_step1: 31.55865288,
        rmse_step2: 35.0679512,
        rmse_step3: 38.00547791,
    },
    {
        rank: 0,
        model: 'AGCRN',
        mlink: '#',
        paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
        plink: 'https://arxiv.org/abs/2007.02842',
        year: '2018',
        step1: 14.17639446,
        step2: 16.22584724,
        step3: 17.62712097,

        mae_step1: 14.17639446,
        mae_step2: 16.22584724,
        mae_step3: 17.62712097,

        rmse_step1: 32.01177979,
        rmse_step2: 37.80277634,
        rmse_step3: 41.55196381,
    },
    {
        rank: 0,
        model: 'GWNET',
        mlink: '#',
        paper: 'Graph Wavenet for Deep Spatial-Temporal Graph Modeling',
        plink: 'https://arxiv.org/abs/1906.00121',
        year: '2019',
        step1: 14.97860622,
        step2: 16.68260574,
        step3: 18.08253479,

        mae_step1: 14.97860622,
        mae_step2: 16.68260574,
        mae_step3: 18.08253479,

        rmse_step1: 35.14050674,
        rmse_step2: 39.26478577,
        rmse_step3: 42.89715958,
    },
    {
        rank: 0,
        model: 'STResNet',
        mlink: '#',
        paper: 'Deep Spatio-Temporal Residual Networks for Citywide Crowd Flows Prediction',
        plink: 'https://arxiv.org/abs/1610.00081',
        year: '2017',
        step1: 16.75712204,
        step2: 17.81740952,
        step3: 18.66376305,

        mae_step1: 16.75712204,
        mae_step2: 17.81740952,
        mae_step3: 18.66376305,

        rmse_step1: 33.97605133,
        rmse_step2: 37.78026962,
        rmse_step3: 40.36789322,
    },
    {
        rank: 0,
        model: 'STGCN',
        mlink: '#',
        paper: 'Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting',
        plink: 'https://www.ijcai.org/Proceedings/2018/0505',
        year: '2018',
        step1: 16.05446434,
        step2: 17.7893219,
        step3: 18.80679131,

        mae_step1: 16.05446434,
        mae_step2: 17.7893219,
        mae_step3: 18.80679131,

        rmse_step1: 36.23188019,
        rmse_step2: 41.0978241,
        rmse_step3: 43.96533966,
    },
    {
        rank: 0,
        model: 'ACFM',
        mlink: '#',
        paper: 'Attentive Crowd Flow Machines',
        plink: 'https://dl.acm.org/doi/10.1145/3240508.3240681',
        year: '2018',
        step1: 16.85341835,
        step2: 18.28788376,
        step3: 19.23842621,

        mae_step1: 16.85341835,
        mae_step2: 18.28788376,
        mae_step3: 19.23842621,

        rmse_step1: 33.65074158,
        rmse_step2: 38.01238251,
        rmse_step3: 40.74593353,
    },
    {
        rank: 0,
        model: 'STG2Seq',
        mlink: '#',
        paper: 'STG2Seq: Spatial-temporal Graph to Sequence Model for Multi-step Passenger Demand Forecasting',
        plink: 'https://arxiv.org/abs/1905.10069',
        year: '2019',
        step1: 20.3590374,
        step2: 23.62875175,
        step3: 26.91706467,

        mae_step1: 20.3590374,
        mae_step2: 23.62875175,
        mae_step3: 26.91706467,

        rmse_step1: 41.7979393,
        rmse_step2: 54.63908386,
        rmse_step3: 65.13134766,
    },
    {
        rank: 0,
        model: 'DCRNN',
        mlink: '#',
        paper: 'Diffusion convolutional recurrent neural network: Data-driven traffic forecasting',
        plink: 'https://arxiv.org/abs/1707.01926',
        year: '2018',
        step1: 17.45099068,
        step2: 21.89573669,
        step3: 24.30697441,

        mae_step1: 17.45099068,
        mae_step2: 21.89573669,
        mae_step3: 24.30697441,

        rmse_step1: 37.01754379,
        rmse_step2: 46.28843307,
        rmse_step3: 50.93449783,
    },
    {
        rank: 0,
        model: 'TGCN',
        mlink: '#',
        paper: 'T-gcn: A temporal graph convolutional network for traffic prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/',
        year: '2020',
        step1: 21.09132004,
        step2: 24.21822166,
        step3: 26.93297005,

        mae_step1: 21.09132004,
        mae_step2: 24.21822166,
        mae_step3: 26.93297005,

        rmse_step1: 42.27409363,
        rmse_step2: 50.06852341,
        rmse_step3: 55.01656342,
    },
    {
        rank: 0,
        model: 'ASTGCN',
        mlink: '#',
        paper: 'Attention based spatial-temporal graph convolutional networks for traffic flow forecasting',
        plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/3881',
        year: '2019',
        step1: 26.08333206,
        step2: 20.69397163,
        step3: 29.63371468,

        mae_step1: 26.08333206,
        mae_step2: 20.69397163,
        mae_step3: 29.63371468,

        rmse_step1: 56.4733696,
        rmse_step2: 44.39962769,
        rmse_step3: 66.05281067,
    },
    {
        rank: 0,
        model: 'Seq2Seq',
        mlink: '#',
        paper: 'Sequence to Sequence Learning with Neural Networks',
        plink: 'https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html',
        year: '2014',
        step1: 32.11812973,
        step2: 34.5651741,
        step3: 38.60456467,

        mae_step1: 32.11812973,
        mae_step2: 34.5651741,
        mae_step3: 38.60456467,

        rmse_step1: 63.86069489,
        rmse_step2: 69.91119385,
        rmse_step3: 78.48886871,
    },
    {
        rank: 0,
        model: 'GRU',
        mlink: '#',
        paper: 'Using LSTM and GRU neural network methods for traffic flow prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/7804912',
        year: '2016',
        step1: 35.39633179,
        step2: 42.33786774,
        step3: 49.56669235,

        mae_step1: 35.39633179,
        mae_step2: 42.33786774,
        mae_step3: 49.56669235,

        rmse_step1: 74.23458099,
        rmse_step2: 88.16832733,
        rmse_step3: 102.8905106,
    },
    {
        rank: 0,
        model: 'AE',
        mlink: '#',
        paper: 'Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction',
        plink: 'https://ieeexplore.ieee.org/document/6910027',
        year: '2014',
        step1: 71.19487,
        step2: 71.55797577,
        step3: 71.82874298,

        mae_step1: 71.19487,
        mae_step2: 71.55797577,
        mae_step3: 71.82874298,

        rmse_step1: 136.1842346,
        rmse_step2: 136.7357178,
        rmse_step3: 136.9564209,
    },
    ]

    export default {
        data() {
            return {
                T_Drive20150206_origin,
                rankingData: [],
                metrics: "MAE3"
            };
        },
        mounted() {
            this.rankingData = T_Drive20150206_origin;
            this.metricsChange("MAE3");
        },
        methods: {
            sortBy1() {
                this.rankingData.sort(function(a, b) {
                    return a.step1 - b.step1
                });
                let rank = 0;
                this.rankingData.forEach((item) => {
                    rank += 1;
                    item.rank = rank;
                })
            },
            sortBy2() {
                this.rankingData.sort(function(a, b) {
                    return a.step2 - b.step2
                });
                let rank = 0;
                this.rankingData.forEach((item) => {
                    rank += 1;
                    item.rank = rank;
                })
            },
            sortBy3() {
                this.rankingData.sort(function(a, b) {
                    return a.step3 - b.step3
                });
                let rank = 0;
                this.rankingData.forEach((item) => {
                    rank += 1;
                    item.rank = rank;
                })
            },
            metricsChange(value) {
                if (value == "MAE3") {
                    this.rankingData.forEach((item) => {
                        item.step1 = item.mae_step1.toFixed(5);
                        item.step2 = item.mae_step2.toFixed(5);
                        item.step3 = item.mae_step3.toFixed(5);
                    })
                } else if (value == "RMSE3") {
                    this.rankingData.forEach((item) => {
                        item.step1 = item.rmse_step1.toFixed(5);
                        item.step2 = item.rmse_step2.toFixed(5);
                        item.step3 = item.rmse_step3.toFixed(5);
                    })
                }
                this.sortBy3();
            },
        },
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

table {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: 'tnum';
    display: table;
    width: 100%;
    text-align: center;
    border-collapse: collapse;
    border-spacing: 0;
    border: 0.1px solid #1890ff;
}
thead {
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
th {
    display: table-cell;
    vertical-align: inherit;
    overflow-wrap: break-word;
    padding: 16px 16px;
    background: #97b9f7;
    border: 0.1px solid #1890ff;
    color: white;
    font-weight: 700;
    font-family: Nunito, 'Microsoft YaHei', Arial, Helvetica, sans-serif;
}
td {
    display: table-cell;
    vertical-align: inherit;
    padding: 16px 16px;
    overflow-wrap: break-word;
    background: white;
    color: black;
    border: 0.1px solid #1890ff;
    font-size: 15px;
    font-family: Nunito, 'Microsoft YaHei', Arial, Helvetica, sans-serif;
}
.paper {
    color: black;
}
.paper:hover {
    color:rgb(27, 140, 233);
}
</style>