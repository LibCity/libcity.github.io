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
                <thead>
                    <tr>
                        <th>RANK</th>
                        <th>MODEL</th>
                        <th>PAPER</th>
                        <th>YEAR</th>
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

    const NYCBike20140409_origin = [
    {
        rank: 0,
        model: 'MTGNN',
        mlink: '#',
        paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
        plink: 'https://arxiv.org/abs/2005.11650',
        year: '2020',
        step1: 2.143260479,
        step2: 2.33476758,
        step3: 2.464412689,

        mae_step1: 2.143260479,
        mae_step2: 2.33476758,
        mae_step3: 2.464412689,

        rmse_step1: 4.542957306,
        rmse_step2: 5.211518288,
        rmse_step3: 5.602479458,
    },
    {
        rank: 0,
        model: 'AE',
        mlink: '#',
        paper: 'Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction',
        plink: 'https://ieeexplore.ieee.org/document/6910027',
        year: '2014',
        step1: 5.878780842,
        step2: 6.115393639,
        step3: 6.232180119,

        mae_step1: 5.878780842,
        mae_step2: 6.115393639,
        mae_step3: 6.232180119,

        rmse_step1: 8.191333771,
        rmse_step2: 8.632707596,
        rmse_step3: 8.908828735,
    },
    {
        rank: 0,
        model: 'AGCRN',
        mlink: '#',
        paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
        plink: 'https://arxiv.org/abs/2007.02842',
        year: '2018',
        step1: 2.247055292,
        step2: 2.46105361,
        step3: 2.576159954,

        mae_step1: 2.247055292,
        mae_step2: 2.46105361,
        mae_step3: 2.576159954,

        rmse_step1: 4.83513546,
        rmse_step2: 5.48606205,
        rmse_step3: 5.808804989,
    },
    {
        rank: 0,
        model: 'GWNET',
        mlink: '#',
        paper: 'Graph Wavenet for Deep Spatial-Temporal Graph Modeling',
        plink: 'https://arxiv.org/abs/1906.00121',
        year: '2019',
        step1: 2.31951189,
        step2: 2.483286619,
        step3: 2.609655619,

        mae_step1: 2.31951189,
        mae_step2: 2.483286619,
        mae_step3: 2.609655619,

        rmse_step1: 4.968844414,
        rmse_step2: 5.463748932,
        rmse_step3: 5.69130373,
    },
    {
        rank: 0,
        model: 'DCRNN',
        mlink: '#',
        paper: 'Diffusion convolutional recurrent neural network: Data-driven traffic forecasting',
        plink: 'https://arxiv.org/abs/1707.01926',
        year: '2018',
        step1: 2.218071461,
        step2: 2.431840897,
        step3: 2.571331024,

        mae_step1: 2.218071461,
        mae_step2: 2.431840897,
        mae_step3: 2.571331024,

        rmse_step1: 4.747207642,
        rmse_step2: 5.564044476,
        rmse_step3: 5.946798801,
    },
    {
        rank: 0,
        model: 'STGCN',
        mlink: '#',
        paper: 'Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting',
        plink: 'https://www.ijcai.org/Proceedings/2018/0505',
        year: '2018',
        step1: 2.318903208,
        step2: 2.494077921,
        step3: 2.593971252,

        mae_step1: 2.318903208,
        mae_step2: 2.494077921,
        mae_step3: 2.593971252,

        rmse_step1: 5.284862995,
        rmse_step2: 5.865840435,
        rmse_step3: 6.140215874,
    },
    {
        rank: 0,
        model: 'STResNet',
        mlink: '#',
        paper: 'Deep Spatio-Temporal Residual Networks for Citywide Crowd Flows Prediction',
        plink: 'https://arxiv.org/abs/1610.00081',
        year: '2017',
        step1: 2.438241482,
        step2: 2.562749386,
        step3: 2.651359797,

        mae_step1: 2.438241482,
        mae_step2: 2.562749386,
        mae_step3: 2.651359797,

        rmse_step1: 5.141583443,
        rmse_step2: 5.5783391,
        rmse_step3: 5.84324789,
    },
    {
        rank: 0,
        model: 'ACFM',
        mlink: '#',
        paper: 'Attentive Crowd Flow Machines',
        plink: 'https://dl.acm.org/doi/10.1145/3240508.3240681',
        year: '2018',
        step1: 2.713757277,
        step2: 2.86116457,
        step3: 2.966455936,

        mae_step1: 2.713757277,
        mae_step2: 2.86116457,
        mae_step3: 2.966455936,

        rmse_step1: 5.243505478,
        rmse_step2: 5.677444458,
        rmse_step3: 5.954552174,
    },
    {
        rank: 0,
        model: 'Seq2Seq',
        mlink: '#',
        paper: 'Sequence to Sequence Learning with Neural Networks',
        plink: 'https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html',
        year: '2014',
        step1: 2.503537655,
        step2: 2.579678774,
        step3: 2.744087696,

        mae_step1: 2.503537655,
        mae_step2: 2.579678774,
        mae_step3: 2.744087696,

        rmse_step1: 5.462153912,
        rmse_step2: 5.850692272,
        rmse_step3: 6.408093452,
    },
    {
        rank: 0,
        model: 'STG2Seq',
        mlink: '#',
        paper: 'STG2Seq: Spatial-temporal Graph to Sequence Model for Multi-step Passenger Demand Forecasting',
        plink: 'https://arxiv.org/abs/1905.10069',
        year: '2019',
        step1: 2.541454792,
        step2: 2.709347248,
        step3: 2.966525555,

        mae_step1: 2.541454792,
        mae_step2: 2.709347248,
        mae_step3: 2.966525555,

        rmse_step1: 5.286739349,
        rmse_step2: 5.987214565,
        rmse_step3: 6.638397217,
    },
    {
        rank: 0,
        model: 'ASTGCN',
        mlink: '#',
        paper: 'Attention based spatial-temporal graph convolutional networks for traffic flow forecasting',
        plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/3881',
        year: '2019',
        step1: 3.250409603,
        step2: 3.110226393,
        step3: 3.376706362,

        mae_step1: 3.250409603,
        mae_step2: 3.110226393,
        mae_step3: 3.376706362,

        rmse_step1: 7.681100368,
        rmse_step2: 7.22376442,
        rmse_step3: 7.944788456,
    },
    {
        rank: 0,
        model: 'TGCN',
        mlink: '#',
        paper: 'T-gcn: A temporal graph convolutional network for traffic prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/',
        year: '2020',
        step1: 3.099831343,
        step2: 3.339026928,
        step3: 3.564884663,

        mae_step1: 3.099831343,
        mae_step2: 3.339026928,
        mae_step3: 3.564884663,

        rmse_step1: 6.727505684,
        rmse_step2: 7.477781296,
        rmse_step3: 7.925302505,
    },
    ]

    export default {
        data() {
            return {
                NYCBike20140409_origin,
                rankingData: [],
                metrics: "MAE3"
            };
        },
        mounted() {
            this.rankingData = NYCBike20140409_origin;
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