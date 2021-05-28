<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">TAXIBJ2015</p>
      </div>
    </div>

    <div class="content">
        <div class="metric">
            视角
            <a-select default-value="MAE6" style="width: 180px; font-size: 14px; margin-left: 10px" @change="metricsChange">
                <a-select-option value="MAE6">
                    MAE @ 6 STEP
                </a-select-option>
                <a-select-option value="RMSE6">
                    RMSE @ 6 STEP
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
                        <th>2 STEP<a-button type="link" icon="caret-down" size="small" style="color: white" @click="sortBy2"></a-button></th>
                        <th>4 STEP<a-button type="link" icon="caret-down" size="small" style="color: white" @click="sortBy4"></a-button></th>
                        <th>6 STEP<a-button type="link" icon="caret-down" size="small" style="color: white" @click="sortBy6"></a-button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in rankingData" :key="item.model">
                        <td width="6%">{{item.rank}}</td>
                        <td width="8%"><a :href="item.mlink" target="_blank">{{item.model}}</a></td>
                        <td width="39%"><a :href="item.plink" class="paper" target="_blank">{{item.paper}}</a></td>
                        <td width="5%">{{item.year}}</td>
                        <td width="14%">{{item.step2}}</td>
                        <td width="14%">{{item.step4}}</td>
                        <td width="14%">{{item.step6}}</td>
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

    const TAXIBJ2015_origin = [
    {
        rank: 0,
        model: 'AGCRN',
        mlink: '#',
        paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
        plink: 'https://arxiv.org/abs/2007.02842',
        year: '2018',
        step1: 10.31791687,
        step2: 11.04009724,
        step3: 11.45348644,
        step4: 11.77591896,
        step5: 11.98143196,
        step6: 12.32980347,

        mae_step1: 10.31791687,
        mae_step2: 11.04009724,
        mae_step3: 11.45348644,
        mae_step4: 11.77591896,
        mae_step5: 11.98143196,
        mae_step6: 12.32980347,

        rmse_step1: 17.2892971,
        rmse_step2: 19.08665276,
        rmse_step3: 19.86128044,
        rmse_step4: 20.3403492,
        rmse_step5: 20.66931534,
        rmse_step6: 21.30228424,
    },
    {
        rank: 0,
        model: 'MTGNN',
        mlink: '#',
        paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
        plink: 'https://arxiv.org/abs/2005.11650',
        year: '2020',
        step1: 10.22533131,
        step2: 11.00156784,
        step3: 11.46180439,
        step4: 11.773592,
        step5: 12.06179619,
        step6: 12.53880787,

        mae_step1: 10.22533131,
        mae_step2: 11.00156784,
        mae_step3: 11.46180439,
        mae_step4: 11.773592,
        mae_step5: 12.06179619,
        mae_step6: 12.53880787,

        rmse_step1: 17.0489006,
        rmse_step2: 19.12144089,
        rmse_step3: 19.95853615,
        rmse_step4: 20.40186501,
        rmse_step5: 20.84480095,
        rmse_step6: 21.65192413,
    },
    {
        rank: 0,
        model: 'GWNET',
        mlink: '#',
        paper: 'Graph Wavenet for Deep Spatial-Temporal Graph Modeling',
        plink: 'https://arxiv.org/abs/1906.00121',
        year: '2019',
        step1: 10.91045952,
        step2: 11.45554352,
        step3: 11.82102966,
        step4: 12.10324287,
        step5: 12.38107681,
        step6: 12.75936413,

        mae_step1: 10.91045952,
        mae_step2: 11.45554352,
        mae_step3: 11.82102966,
        mae_step4: 12.10324287,
        mae_step5: 12.38107681,
        mae_step6: 12.75936413,

        rmse_step1: 18.43127441,
        rmse_step2: 19.77342606,
        rmse_step3: 20.44666862,
        rmse_step4: 20.88972282,
        rmse_step5: 21.37499428,
        rmse_step6: 22.011446,
    },
    {
        rank: 0,
        model: 'STGCN',
        mlink: '#',
        paper: 'Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting',
        plink: 'https://www.ijcai.org/Proceedings/2018/0505',
        year: '2018',
        step1: 12.36303997,
        step2: 13.41536427,
        step3: 14.00164127,
        step4: 14.28826618,
        step5: 14.55849838,
        step6: 14.90094376,

        mae_step1: 12.36303997,
        mae_step2: 13.41536427,
        mae_step3: 14.00164127,
        mae_step4: 14.28826618,
        mae_step5: 14.55849838,
        mae_step6: 14.90094376,

        rmse_step1: 20.35777855,
        rmse_step2: 22.95068169,
        rmse_step3: 24.05297661,
        rmse_step4: 24.71541977,
        rmse_step5: 25.22282982,
        rmse_step6: 25.80957031,
    },
    {
        rank: 0,
        model: 'ASTGCN',
        mlink: '#',
        paper: 'Attention based spatial-temporal graph convolutional networks for traffic flow forecasting',
        plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/3881',
        year: '2019',
        step1: 12.02357006,
        step2: 13.64296532,
        step3: 13.85167503,
        step4: 13.54530048,
        step5: 13.9444828,
        step6: 16.00203514,

        mae_step1: 12.02357006,
        mae_step2: 13.64296532,
        mae_step3: 13.85167503,
        mae_step4: 13.54530048,
        mae_step5: 13.9444828,
        mae_step6: 16.00203514,

        rmse_step1: 19.80144882,
        rmse_step2: 23.2273159,
        rmse_step3: 23.5927906,
        rmse_step4: 23.01723289,
        rmse_step5: 23.68496895,
        rmse_step6: 27.12472534,
    },
    {
        rank: 0,
        model: 'DCRNN',
        mlink: '#',
        paper: 'Diffusion convolutional recurrent neural network: Data-driven traffic forecasting',
        plink: 'https://arxiv.org/abs/1707.01926',
        year: '2018',
        step1: 11.62005424,
        step2: 13.7311039,
        step3: 14.99166107,
        step4: 15.76095009,
        step5: 16.28811646,
        step6: 16.74895477,

        mae_step1: 11.62005424,
        mae_step2: 13.7311039,
        mae_step3: 14.99166107,
        mae_step4: 15.76095009,
        mae_step5: 16.28811646,
        mae_step6: 16.74895477,

        rmse_step1: 19.3288269,
        rmse_step2: 23.59714127,
        rmse_step3: 25.78530502,
        rmse_step4: 27.0803299,
        rmse_step5: 27.95166779,
        rmse_step6: 28.69671822,
    },
    {
        rank: 0,
        model: 'AE',
        mlink: '#',
        paper: 'Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction',
        plink: 'https://ieeexplore.ieee.org/document/6910027',
        year: '2014',
        step1: 15.46676064,
        step2: 15.64417553,
        step3: 15.99023438,
        step4: 16.37779236,
        step5: 16.90474319,
        step6: 17.72981071,

        mae_step1: 15.46676064,
        mae_step2: 15.64417553,
        mae_step3: 15.99023438,
        mae_step4: 16.37779236,
        mae_step5: 16.90474319,
        mae_step6: 17.72981071,

        rmse_step1: 26.7457962,
        rmse_step2: 27.50640297,
        rmse_step3: 28.24768448,
        rmse_step4: 29.0508213,
        rmse_step5: 30.07820702,
        rmse_step6: 31.72239113,
    },
    {
        rank: 0,
        model: 'GRU',
        mlink: '#',
        paper: 'Using LSTM and GRU neural network methods for traffic flow prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/7804912',
        year: '2016',
        step1: 18.71100426,
        step2: 19.66709137,
        step3: 19.7865696,
        step4: 20.353302,
        step5: 20.89527893,
        step6: 21.5634861,

        mae_step1: 18.71100426,
        mae_step2: 19.66709137,
        mae_step3: 19.7865696,
        mae_step4: 20.353302,
        mae_step5: 20.89527893,
        mae_step6: 21.5634861,

        rmse_step1: 51.90108871,
        rmse_step2: 53.32480621,
        rmse_step3: 53.63449478,
        rmse_step4: 54.37876129,
        rmse_step5: 55.05590057,
        rmse_step6: 56.05802917,
    },
    {
        rank: 0,
        model: 'TGCN',
        mlink: '#',
        paper: 'T-gcn: A temporal graph convolutional network for traffic prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/',
        year: '2020',
        step1: 14.52015209,
        step2: 16.7724781,
        step3: 18.6176033,
        step4: 20.10474777,
        step5: 21.49899292,
        step6: 23.23112679,

        mae_step1: 14.52015209,
        mae_step2: 16.7724781,
        mae_step3: 18.6176033,
        mae_step4: 20.10474777,
        mae_step5: 21.49899292,
        mae_step6: 23.23112679,

        rmse_step1: 23.31774902,
        rmse_step2: 28.1753006,
        rmse_step3: 31.51919556,
        rmse_step4: 33.84580994,
        rmse_step5: 35.9057045,
        rmse_step6: 38.63568115,
    },
    {
        rank: 0,
        model: 'Seq2Seq',
        mlink: '#',
        paper: 'Sequence to Sequence Learning with Neural Networks',
        plink: 'https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html',
        year: '2014',
        step1: 20.2789669,
        step2: 18.9578495,
        step3: 18.39977837,
        step4: 18.63230705,
        step5: 20.32543373,
        step6: 23.38954353,

        mae_step1: 20.2789669,
        mae_step2: 18.9578495,
        mae_step3: 18.39977837,
        mae_step4: 18.63230705,
        mae_step5: 20.32543373,
        mae_step6: 23.38954353,

        rmse_step1: 40.31185532,
        rmse_step2: 33.73885727,
        rmse_step3: 32.91973877,
        rmse_step4: 34.02927399,
        rmse_step5: 37.65150452,
        rmse_step6: 43.24779129,
    },
    {
        rank: 0,
        model: 'RNN',
        mlink: '#',
        paper: 'Using LSTM and GRU neural network methods for traffic flow prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/7804912',
        year: '2016',
        step1: 17.44994545,
        step2: 19.47091103,
        step3: 22.6415329,
        step4: 26.25135994,
        step5: 30.11628151,
        step6: 34.17687225,

        mae_step1: 17.44994545,
        mae_step2: 19.47091103,
        mae_step3: 22.6415329,
        mae_step4: 26.25135994,
        mae_step5: 30.11628151,
        mae_step6: 34.17687225,

        rmse_step1: 32.14590454,
        rmse_step2: 36.12245941,
        rmse_step3: 42.23437119,
        rmse_step4: 48.62110519,
        rmse_step5: 55.44234085,
        rmse_step6: 62.55359268,
    },
    ]

    export default {
        data() {
            return {
                TAXIBJ2015_origin,
                rankingData: [],
                metrics: "MAE6"
            };
        },
        mounted() {
            this.rankingData = TAXIBJ2015_origin;
            this.metricsChange("MAE6");
        },
        methods: {
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
            sortBy4() {
                this.rankingData.sort(function(a, b) {
                    return a.step4 - b.step4
                });
                let rank = 0;
                this.rankingData.forEach((item) => {
                    rank += 1;
                    item.rank = rank;
                })
            },
            sortBy6() {
                this.rankingData.sort(function(a, b) {
                    return a.step6 - b.step6
                });
                let rank = 0;
                this.rankingData.forEach((item) => {
                    rank += 1;
                    item.rank = rank;
                })
            },
            metricsChange(value) {
                if (value == "MAE6") {
                    this.rankingData.forEach((item) => {
                        item.step2 = item.mae_step2.toFixed(5);
                        item.step4 = item.mae_step4.toFixed(5);
                        item.step6 = item.mae_step6.toFixed(5);
                    })
                } else if (value == "RMSE6") {
                    this.rankingData.forEach((item) => {
                        item.step2 = item.rmse_step2.toFixed(5);
                        item.step4 = item.rmse_step4.toFixed(5);
                        item.step6 = item.rmse_step6.toFixed(5);
                    })
                }
                this.sortBy6();
            },
        },
        components: {
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