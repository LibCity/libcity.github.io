<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">NYCTAXI202001-202003-3600</p>
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

    const NYCTAXI202001_202003_3600_origin = [
    {
        rank: 0,
        model: 'MTGNN',
        mlink: '#',
        paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
        plink: 'https://arxiv.org/abs/2005.11650',
        year: '2020',
        step1: 2.97795105,
        step2: 4.498221397,
        step3: 7.113864422,

        mae_step1: 2.97795105,
        mae_step2: 4.498221397,
        mae_step3: 7.113864422,

        rmse_step1: 6.362107754,
        rmse_step2: 11.234025,
        rmse_step3: 19.34690285,
    },
    {
        rank: 0,
        model: 'AGCRN',
        mlink: '#',
        paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
        plink: 'https://arxiv.org/abs/2007.02842',
        year: '2018',
        step1: 6.885128021,
        step2: 14.5592432,
        step3: 21.120924,

        mae_step1: 6.885128021,
        mae_step2: 14.5592432,
        mae_step3: 21.120924,

        rmse_step1: 19.50969887,
        rmse_step2: 39.97726059,
        rmse_step3: 56.64055634,
    },
    {
        rank: 0,
        model: 'GWNET',
        mlink: '#',
        paper: 'Graph Wavenet for Deep Spatial-Temporal Graph Modeling',
        plink: 'https://arxiv.org/abs/1906.00121',
        year: '2019',
        step1: 3.685130119,
        step2: 5.517363071,
        step3: 9.096437454,

        mae_step1: 3.685130119,
        mae_step2: 5.517363071,
        mae_step3: 9.096437454,

        rmse_step1: 8.026956558,
        rmse_step2: 13.64701271,
        rmse_step3: 23.66659927,
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
        step1: 16.1629467,
        step2: 11.91386414,
        step3: 16.67391777,

        mae_step1: 16.1629467,
        mae_step2: 11.91386414,
        mae_step3: 16.67391777,

        rmse_step1: 19.19724083,
        rmse_step2: 21.94227791,
        rmse_step3: 32.58158875,
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
        step1: 9.595252991,
        step2: 10.60828114,
        step3: 13.57616138,

        mae_step1: 9.595252991,
        mae_step2: 10.60828114,
        mae_step3: 13.57616138,

        rmse_step1: 20.69132423,
        rmse_step2: 24.00630379,
        rmse_step3: 29.79283714,
    },
    {
        rank: 0,
        model: 'DCRNN',
        mlink: '#',
        paper: 'Diffusion convolutional recurrent neural network: Data-driven traffic forecasting',
        plink: 'https://arxiv.org/abs/1707.01926',
        year: '2018',
        step1: 2.878038645,
        step2: 3.925697088,
        step3: 6.638483524,

        mae_step1: 2.878038645,
        mae_step2: 3.925697088,
        mae_step3: 6.638483524,

        rmse_step1: 5.76847744,
        rmse_step2: 9.489728928,
        rmse_step3: 15.67878532,
    },
    {
        rank: 0,
        model: 'TGCN',
        mlink: '#',
        paper: 'T-gcn: A temporal graph convolutional network for traffic prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/',
        year: '2020',
        step1: 6.133511543,
        step2: 7.171625137,
        step3: 7.956742287,

        mae_step1: 6.133511543,
        mae_step2: 7.171625137,
        mae_step3: 7.956742287,

        rmse_step1: 7.703296661,
        rmse_step2: 9.743109703,
        rmse_step3: 11.26121902,
    },
    {
        rank: 0,
        model: 'ASTGCN',
        mlink: '#',
        paper: 'Attention based spatial-temporal graph convolutional networks for traffic flow forecasting',
        plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/3881',
        year: '2019',
        step1: 11.81639576,
        step2: 15.21803665,
        step3: 17.17325974,

        mae_step1: 11.81639576,
        mae_step2: 15.21803665,
        mae_step3: 17.17325974,

        rmse_step1: 26.76950645,
        rmse_step2: 33.11341095,
        rmse_step3: 36.50323868,
    },
    {
        rank: 0,
        model: 'Seq2Seq',
        mlink: '#',
        paper: 'Sequence to Sequence Learning with Neural Networks',
        plink: 'https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html',
        year: '2014',
        step1: 11.13691711,
        step2: 18.00109863,
        step3: 29.50685692,

        mae_step1: 11.13691711,
        mae_step2: 18.00109863,
        mae_step3: 29.50685692,

        rmse_step1: 22.58035088,
        rmse_step2: 45.00935364,
        rmse_step3: 77.82554626,
    },
    {
        rank: 0,
        model: 'GRU',
        mlink: '#',
        paper: 'Using LSTM and GRU neural network methods for traffic flow prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/7804912',
        year: '2016',
        step1: 14.14526367,
        step2: 23.37396812,
        step3: 32.55189133,

        mae_step1: 14.14526367,
        mae_step2: 23.37396812,
        mae_step3: 32.55189133,

        rmse_step1: 25.41130829,
        rmse_step2: 54.48503494,
        rmse_step3: 83.59237671,
    },
    {
        rank: 0,
        model: 'AE',
        mlink: '#',
        paper: 'Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction',
        plink: 'https://ieeexplore.ieee.org/document/6910027',
        year: '2014',
        step1: 13.49022293,
        step2: 17.34116936,
        step3: 22.23318863,

        mae_step1: 13.49022293,
        mae_step2: 17.34116936,
        mae_step3: 22.23318863,

        rmse_step1: 36.06302643,
        rmse_step2: 46.85356903,
        rmse_step3: 59.37118912,
    },
    {
        rank: 0,
        model: 'RNN',
        mlink: '#',
        paper: 'Using LSTM and GRU neural network methods for traffic flow prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/7804912',
        year: '2016',
        step1: 4.058375359,
        step2: 7.059231758,
        step3: 15.10044098,

        mae_step1: 4.058375359,
        mae_step2: 7.059231758,
        mae_step3: 15.10044098,

        rmse_step1: 10.21222115,
        rmse_step2: 18.15133476,
        rmse_step3: 40.17128754,
    },
    {
        rank: 0,
        model: 'LSTM',
        mlink: '#',
        paper: 'Using LSTM and GRU neural network methods for traffic flow prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/7804912',
        year: '2016',
        step1: 8.312452316,
        step2: 19.64738083,
        step3: 32.51584244,

        mae_step1: 8.312452316,
        mae_step2: 19.64738083,
        mae_step3: 32.51584244,

        rmse_step1: 20.61006737,
        rmse_step2: 50.67777252,
        rmse_step3: 83.24523163,
    },
    ]

    export default {
        data() {
            return {
                NYCTAXI202001_202003_3600_origin,
                rankingData: [],
                metrics: "MAE3"
            };
        },
        mounted() {
            this.rankingData = NYCTAXI202001_202003_3600_origin;
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