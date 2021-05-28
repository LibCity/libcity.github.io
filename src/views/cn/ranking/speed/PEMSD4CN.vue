<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">PEMSD4</p>
      </div>
    </div>

    <div class="content">
        <div class="metric">
            视角
            <a-select default-value="MAE12" style="width: 180px; font-size: 14px; margin-left: 10px" @change="metricsChange">
                <a-select-option value="MAE12">
                    MAE @ 12 STEP
                </a-select-option>
                <a-select-option value="MAPE12">
                    MAPE @ 12 STEP
                </a-select-option>
                <a-select-option value="RMSE12">
                    RMSE @ 12 STEP
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
                        <th>3 STEP<a-button type="link" icon="caret-down" size="small" style="color: white" @click="sortBy3"></a-button></th>
                        <th>6 STEP<a-button type="link" icon="caret-down" size="small" style="color: white" @click="sortBy6"></a-button></th>
                        <th>9 STEP<a-button type="link" icon="caret-down" size="small" style="color: white" @click="sortBy9"></a-button></th>
                        <th>12 STEP<a-button type="link" icon="caret-down" size="small" style="color: white" @click="sortBy12"></a-button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in rankingData" :key="item.model">
                        <td width="6%">{{item.rank}}</td>
                        <td width="8%"><a :href="item.mlink" target="_blank">{{item.model}}</a></td>
                        <td width="33%"><a :href="item.plink" class="paper" target="_blank">{{item.paper}}</a></td>
                        <td width="5%">{{item.year}}</td>
                        <td width="12%">{{item.step3}}</td>
                        <td width="12%">{{item.step6}}</td>
                        <td width="12%">{{item.step9}}</td>
                        <td width="12%">{{item.step12}}</td>
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
    const PEMSD4_origin = [
    {
        rank: 0,
        model: 'AGCRN',
        mlink: '#',
        paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
        plink: 'https://arxiv.org/abs/2007.02842',
        year: '2018',
        step3: 18.13214493,
        step6: 18.83440208,
        step9: 19.37658882,
        step12: 19.8513279,

        m_mae_step1: 17.33021545,
        m_mae_step2: 17.69010925,
        m_mae_step3: 18.13214493,
        m_mae_step4: 18.45129776,
        m_mae_step5: 18.66386223,
        m_mae_step6: 18.83440208,
        m_mae_step7: 19.0275898,
        m_mae_step8: 19.18982887,
        m_mae_step9: 19.37658882,
        m_mae_step10: 19.48678207,
        m_mae_step11: 19.58895493,
        m_mae_step12: 19.8513279,

        m_mape_step1: 0.120005764,
        m_mape_step2: 0.124083482,
        m_mape_step3: 0.124331698,
        m_mape_step4: 0.126283616,
        m_mape_step5: 0.128932282,
        m_mape_step6: 0.130416676,
        m_mape_step7: 0.133375481,
        m_mape_step8: 0.130897403,
        m_mape_step9: 0.132015496,
        m_mape_step10: 0.132766649,
        m_mape_step11: 0.136325017,
        m_mape_step12: 0.138814598,

        m_rmse_step1: 27.8255024,
        m_rmse_step2: 28.50949669,
        m_rmse_step3: 29.22101402,
        m_rmse_step4: 29.7563324,
        m_rmse_step5: 30.15103531,
        m_rmse_step6: 30.46415901,
        m_rmse_step7: 30.75718498,
        m_rmse_step8: 31.02570724,
        m_rmse_step9: 31.31048965,
        m_rmse_step10: 31.47938156,
        m_rmse_step11: 31.61815453,
        m_rmse_step12: 31.96512222,
    },
    {
        rank: 0,
        model: 'GWNET',
        mlink: '#',
        paper: 'Graph Wavenet for Deep Spatial-Temporal Graph Modeling',
        plink: 'https://arxiv.org/abs/1906.00121',
        year: '2019',
        step3: 17.69171333,
        step6: 18.57398224,
        step9: 19.24658775,
        step12: 19.95561981,

        m_mae_step1: 16.68083572,
        m_mae_step2: 17.24005127,
        m_mae_step3: 17.69171333,
        m_mae_step4: 18.02022934,
        m_mae_step5: 18.3321991,
        m_mae_step6: 18.57398224,
        m_mae_step7: 18.84265327,
        m_mae_step8: 19.03032112,
        m_mae_step9: 19.24658775,
        m_mae_step10: 19.41090393,
        m_mae_step11: 19.63994408,
        m_mae_step12: 19.95561981,

        m_mape_step1: 0.115056708,
        m_mape_step2: 0.120912112,
        m_mape_step3: 0.124528021,
        m_mape_step4: 0.127104715,
        m_mape_step5: 0.130451962,
        m_mape_step6: 0.131395996,
        m_mape_step7: 0.136550561,
        m_mape_step8: 0.138363883,
        m_mape_step9: 0.138682634,
        m_mape_step10: 0.142858192,
        m_mape_step11: 0.146644503,
        m_mape_step12: 0.149356604,

        m_rmse_step1: 26.82121849,
        m_rmse_step2: 27.77704048,
        m_rmse_step3: 28.51576805,
        m_rmse_step4: 29.05041695,
        m_rmse_step5: 29.52474976,
        m_rmse_step6: 29.88767052,
        m_rmse_step7: 30.26185036,
        m_rmse_step8: 30.56037903,
        m_rmse_step9: 30.89493752,
        m_rmse_step10: 31.13656235,
        m_rmse_step11: 31.44080353,
        m_rmse_step12: 31.84797287,
    },
    {
        rank: 0,
        model: 'MTGNN',
        mlink: '#',
        paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
        plink: 'https://arxiv.org/abs/2005.11650',
        year: '2020',
        step3: 17.92925644,
        step6: 18.76000214,
        step9: 19.34854126,
        step12: 20.13532066,

        m_mae_step1: 16.86936378,
        m_mae_step2: 17.43473625,
        m_mae_step3: 17.92925644,
        m_mae_step4: 18.27142906,
        m_mae_step5: 18.56240463,
        m_mae_step6: 18.76000214,
        m_mae_step7: 18.98330688,
        m_mae_step8: 19.13337898,
        m_mae_step9: 19.34854126,
        m_mae_step10: 19.52424812,
        m_mae_step11: 19.77838898,
        m_mae_step12: 20.13532066,

        m_mape_step1: 0.121269576,
        m_mape_step2: 0.128447086,
        m_mape_step3: 0.132846653,
        m_mape_step4: 0.135746777,
        m_mape_step5: 0.140180692,
        m_mape_step6: 0.139984563,
        m_mape_step7: 0.140294299,
        m_mape_step8: 0.138541937,
        m_mape_step9: 0.140236661,
        m_mape_step10: 0.143957898,
        m_mape_step11: 0.146365315,
        m_mape_step12: 0.149634778,

        m_rmse_step1: 27.02910995,
        m_rmse_step2: 28.0355072,
        m_rmse_step3: 28.83726311,
        m_rmse_step4: 29.42318535,
        m_rmse_step5: 29.92780304,
        m_rmse_step6: 30.29636192,
        m_rmse_step7: 30.68790627,
        m_rmse_step8: 30.98227692,
        m_rmse_step9: 31.33397293,
        m_rmse_step10: 31.6278038,
        m_rmse_step11: 32.01231003,
        m_rmse_step12: 32.50979996,
    },
    {
        rank: 0,
        model: 'GMAN',
        mlink: '#',
        paper: 'GMAN: A Graph Multi-Attention Network for Traffic Prediction',
        plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/5477',
        year: '2020',
        step3: 18.79036522,
        step6: 19.5382843,
        step9: 20.18934059,
        step12: 20.86548042,

        m_mae_step1: 18.14476204,
        m_mae_step2: 18.46215057,
        m_mae_step3: 18.79036522,
        m_mae_step4: 19.04904747,
        m_mae_step5: 19.30683327,
        m_mae_step6: 19.5382843,
        m_mae_step7: 19.76365471,
        m_mae_step8: 19.97429848,
        m_mae_step9: 20.18934059,
        m_mae_step10: 20.38635063,
        m_mae_step11: 20.59617615,
        m_mae_step12: 20.86548042,

        m_mape_step1: 0.156229556,
        m_mape_step2: 0.156379163,
        m_mape_step3: 0.157214552,
        m_mape_step4: 0.157859176,
        m_mape_step5: 0.158970103,
        m_mape_step6: 0.15991345,
        m_mape_step7: 0.161116868,
        m_mape_step8: 0.162231565,
        m_mape_step9: 0.163395703,
        m_mape_step10: 0.164696336,
        m_mape_step11: 0.166873127,
        m_mape_step12: 0.16967611,

        m_rmse_step1: 28.22407341,
        m_rmse_step2: 28.95193672,
        m_rmse_step3: 29.54891014,
        m_rmse_step4: 30.01150322,
        m_rmse_step5: 30.43736649,
        m_rmse_step6: 30.80505753,
        m_rmse_step7: 31.14635849,
        m_rmse_step8: 31.45730972,
        m_rmse_step9: 31.76529312,
        m_rmse_step10: 32.02981949,
        m_rmse_step11: 32.27859116,
        m_rmse_step12: 32.57504272,
    },  
    {
        rank: 0,
        model: 'STGCN',
        mlink: '#',
        paper: 'Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting',
        plink: 'https://www.ijcai.org/Proceedings/2018/0505',
        year: '2018',
        step3: 19.14878273,
        step6: 20.13257027,
        step9: 20.83048058,
        step12: 21.56703377,

        m_mae_step1: 18.28448677,
        m_mae_step2: 18.66172409,
        m_mae_step3: 19.14878273,
        m_mae_step4: 19.55504417,
        m_mae_step5: 19.87770462,
        m_mae_step6: 20.13257027,
        m_mae_step7: 20.39870644,
        m_mae_step8: 20.60780525,
        m_mae_step9: 20.83048058,
        m_mae_step10: 21.00528526,
        m_mae_step11: 21.26156235,
        m_mae_step12: 21.56703377,

        m_mape_step1: 0.128490552,
        m_mape_step2: 0.130834162,
        m_mape_step3: 0.132500425,
        m_mape_step4: 0.135498613,
        m_mape_step5: 0.138001949,
        m_mape_step6: 0.139600009,
        m_mape_step7: 0.141772956,
        m_mape_step8: 0.142827436,
        m_mape_step9: 0.144004181,
        m_mape_step10: 0.146342248,
        m_mape_step11: 0.148236945,
        m_mape_step12: 0.149902821,

        m_rmse_step1: 28.80267334,
        m_rmse_step2: 29.49590302,
        m_rmse_step3: 30.30145836,
        m_rmse_step4: 30.96511078,
        m_rmse_step5: 31.48421097,
        m_rmse_step6: 31.88554573,
        m_rmse_step7: 32.30651474,
        m_rmse_step8: 32.67902756,
        m_rmse_step9: 33.05597687,
        m_rmse_step10: 33.36885452,
        m_rmse_step11: 33.75259399,
        m_rmse_step12: 34.19981003,
    },
    {
        rank: 0,
        model: 'GRU',
        mlink: '#',
        paper: 'Using LSTM and GRU neural network methods for traffic flow prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/7804912',
        year: '2016',
        step3: 22.44114494,
        step6: 22.50614166,
        step9: 22.57063484,
        step12: 22.58326721,

        m_mae_step1: 22.44579506,
        m_mae_step2: 22.39253807,
        m_mae_step3: 22.44114494,
        m_mae_step4: 22.45549011,
        m_mae_step5: 22.50279617,
        m_mae_step6: 22.50614166,
        m_mae_step7: 22.53225708,
        m_mae_step8: 22.5136795,
        m_mae_step9: 22.57063484,
        m_mae_step10: 22.54055786,
        m_mae_step11: 22.56582832,
        m_mae_step12: 22.58326721,

        m_mape_step1: 0.155973345,
        m_mape_step2: 0.156436592,
        m_mape_step3: 0.154788107,
        m_mape_step4: 0.155320153,
        m_mape_step5: 0.156654179,
        m_mape_step6: 0.15583083,
        m_mape_step7: 0.156922102,
        m_mape_step8: 0.15640299,
        m_mape_step9: 0.156020641,
        m_mape_step10: 0.15692988,
        m_mape_step11: 0.156894684,
        m_mape_step12: 0.156621262,

        m_rmse_step1: 36.24655914,
        m_rmse_step2: 36.19909668,
        m_rmse_step3: 36.28647995,
        m_rmse_step4: 36.30383301,
        m_rmse_step5: 36.35886383,
        m_rmse_step6: 36.3421669,
        m_rmse_step7: 36.36685181,
        m_rmse_step8: 36.36206818,
        m_rmse_step9: 36.41519165,
        m_rmse_step10: 36.38871765,
        m_rmse_step11: 36.42230988,
        m_rmse_step12: 36.44651794,
    },
    {
        rank: 0,
        model: 'Seq2Seq',
        mlink: '#',
        paper: 'Sequence to Sequence Learning with Neural Networks',
        plink: 'https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html',
        year: '2014',
        step3: 22.68513107,
        step6: 22.58107567,
        step9: 22.76202965,
        step12: 23.16314697,

        m_mae_step1: 23.45360184,
        m_mae_step2: 22.80749702,
        m_mae_step3: 22.68513107,
        m_mae_step4: 22.64833641,
        m_mae_step5: 22.60204887,
        m_mae_step6: 22.58107567,
        m_mae_step7: 22.60843086,
        m_mae_step8: 22.65979576,
        m_mae_step9: 22.76202965,
        m_mae_step10: 22.8129406,
        m_mae_step11: 22.93517113,
        m_mae_step12: 23.16314697,

        m_mape_step1: 0.167850196,
        m_mape_step2: 0.162515327,
        m_mape_step3: 0.158874691,
        m_mape_step4: 0.158723563,
        m_mape_step5: 0.15910247,
        m_mape_step6: 0.157974735,
        m_mape_step7: 0.158954293,
        m_mape_step8: 0.159006029,
        m_mape_step9: 0.158919603,
        m_mape_step10: 0.160525784,
        m_mape_step11: 0.161008462,
        m_mape_step12: 0.162274614,

        m_rmse_step1: 37.34012985,
        m_rmse_step2: 36.5529213,
        m_rmse_step3: 36.47481918,
        m_rmse_step4: 36.42922211,
        m_rmse_step5: 36.3940506,
        m_rmse_step6: 36.34751129,
        m_rmse_step7: 36.37290955,
        m_rmse_step8: 36.43894577,
        m_rmse_step9: 36.55399704,
        m_rmse_step10: 36.6235733,
        m_rmse_step11: 36.75838852,
        m_rmse_step12: 36.98764038,
    },
    {
        rank: 0,
        model: 'DCRNN',
        mlink: '#',
        paper: 'Diffusion convolutional recurrent neural network: Data-driven traffic forecasting',
        plink: 'https://arxiv.org/abs/1707.01926',
        year: '2018',
        step3: 19.58139992,
        step6: 21.46720505,
        step9: 23.15176964,
        step12: 24.86355019,

        m_mae_step1: 17.3463192,
        m_mae_step2: 18.60222435,
        m_mae_step3: 19.58139992,
        m_mae_step4: 20.30277443,
        m_mae_step5: 20.92204666,
        m_mae_step6: 21.46720505,
        m_mae_step7: 22.07959747,
        m_mae_step8: 22.63065147,
        m_mae_step9: 23.15176964,
        m_mae_step10: 23.61881256,
        m_mae_step11: 24.17141724,
        m_mae_step12: 24.86355019,

        m_mape_step1: 0.117901936,
        m_mape_step2: 0.127164766,
        m_mape_step3: 0.133024514,
        m_mape_step4: 0.138425872,
        m_mape_step5: 0.143135771,
        m_mape_step6: 0.147428036,
        m_mape_step7: 0.15227598,
        m_mape_step8: 0.155982807,
        m_mape_step9: 0.159489155,
        m_mape_step10: 0.164919451,
        m_mape_step11: 0.169735759,
        m_mape_step12: 0.175291166,

        m_rmse_step1: 27.74375153,
        m_rmse_step2: 29.63212013,
        m_rmse_step3: 31.12513351,
        m_rmse_step4: 32.27579117,
        m_rmse_step5: 33.24058914,
        m_rmse_step6: 34.06721115,
        m_rmse_step7: 34.98116302,
        m_rmse_step8: 35.83502579,
        m_rmse_step9: 36.66460037,
        m_rmse_step10: 37.39686203,
        m_rmse_step11: 38.22037888,
        m_rmse_step12: 39.2277298,
    },
    {
        rank: 0,
        model: 'STG2Seq',
        mlink: '#',
        paper: 'STG2Seq: Spatial-temporal Graph to Sequence Model for Multi-step Passenger Demand Forecasting',
        plink: 'https://arxiv.org/abs/1905.10069',
        year: '2019',
        step3: 23.00639915,
        step6: 23.25136566,
        step9: 23.74375916,
        step12: 24.93501854,

        m_mae_step1: 22.47727776,
        m_mae_step2: 22.66980743,
        m_mae_step3: 23.00639915,
        m_mae_step4: 23.14175224,
        m_mae_step5: 23.21399689,
        m_mae_step6: 23.25136566,
        m_mae_step7: 23.3703022,
        m_mae_step8: 23.4903717,
        m_mae_step9: 23.74375916,
        m_mae_step10: 23.95979881,
        m_mae_step11: 24.36792755,
        m_mae_step12: 24.93501854,

        m_mape_step1: 0.16689837,
        m_mape_step2: 0.168054342,
        m_mape_step3: 0.167966858,
        m_mape_step4: 0.168680683,
        m_mape_step5: 0.169954225,
        m_mape_step6: 0.170316681,
        m_mape_step7: 0.171890184,
        m_mape_step8: 0.172466636,
        m_mape_step9: 0.173771247,
        m_mape_step10: 0.176603809,
        m_mape_step11: 0.178763613,
        m_mape_step12: 0.182453915,

        m_rmse_step1: 35.27014542,
        m_rmse_step2: 35.5243187,
        m_rmse_step3: 35.97275925,
        m_rmse_step4: 36.13708496,
        m_rmse_step5: 36.21439743,
        m_rmse_step6: 36.22684097,
        m_rmse_step7: 36.38244247,
        m_rmse_step8: 36.53738785,
        m_rmse_step9: 36.8220787,
        m_rmse_step10: 37.10419846,
        m_rmse_step11: 37.61572647,
        m_rmse_step12: 38.32955933,
    },
    {
        rank: 0,
        model: 'AE',
        mlink: '#',
        paper: 'Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction',
        plink: 'https://ieeexplore.ieee.org/document/6910027',
        year: '2014',
        step3: 23.95921898,
        step6: 24.02409172,
        step9: 24.40145111,
        step12: 25.02537155,

        m_mae_step1: 24.04533577,
        m_mae_step2: 23.97258377,
        m_mae_step3: 23.95921898,
        m_mae_step4: 23.97326851,
        m_mae_step5: 23.9879818,
        m_mae_step6: 24.02409172,
        m_mae_step7: 24.11643982,
        m_mae_step8: 24.22975159,
        m_mae_step9: 24.40145111,
        m_mae_step10: 24.54927444,
        m_mae_step11: 24.77957344,
        m_mae_step12: 25.02537155,

        m_mape_step1: 0.173342362,
        m_mape_step2: 0.172945678,
        m_mape_step3: 0.170560002,
        m_mape_step4: 0.171024472,
        m_mape_step5: 0.172016427,
        m_mape_step6: 0.171184018,
        m_mape_step7: 0.172362775,
        m_mape_step8: 0.172829583,
        m_mape_step9: 0.172659218,
        m_mape_step10: 0.175666153,
        m_mape_step11: 0.17652221,
        m_mape_step12: 0.178405985,

        m_rmse_step1: 37.98984909,
        m_rmse_step2: 37.90061951,
        m_rmse_step3: 37.94193649,
        m_rmse_step4: 37.92198563,
        m_rmse_step5: 37.97809982,
        m_rmse_step6: 37.99041748,
        m_rmse_step7: 38.0852356,
        m_rmse_step8: 38.26182938,
        m_rmse_step9: 38.44576645,
        m_rmse_step10: 38.64412308,
        m_rmse_step11: 38.96001434,
        m_rmse_step12: 39.28878021,
    },
    {
        rank: 0,
        model: 'ASTGCN',
        mlink: '#',
        paper: 'Attention based spatial-temporal graph convolutional networks for traffic flow forecasting',
        plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/3881',
        year: '2019',
        step3: 20.53002548,
        step6: 22.97081757,
        step9: 24.98191833,
        step12: 27.49543762,

        m_mae_step1: 18.25144958,
        m_mae_step2: 19.46883583,
        m_mae_step3: 20.53002548,
        m_mae_step4: 21.42785072,
        m_mae_step5: 22.24686241,
        m_mae_step6: 22.97081757,
        m_mae_step7: 23.57532692,
        m_mae_step8: 24.38040543,
        m_mae_step9: 24.98191833,
        m_mae_step10: 25.71430016,
        m_mae_step11: 26.51119041,
        m_mae_step12: 27.49543762,

        m_mape_step1: 0.144984052,
        m_mape_step2: 0.160464212,
        m_mape_step3: 0.171081901,
        m_mape_step4: 0.184234276,
        m_mape_step5: 0.192773134,
        m_mape_step6: 0.199301466,
        m_mape_step7: 0.195816293,
        m_mape_step8: 0.207521468,
        m_mape_step9: 0.210599512,
        m_mape_step10: 0.220240071,
        m_mape_step11: 0.228023261,
        m_mape_step12: 0.240777194,

        m_rmse_step1: 28.60561371,
        m_rmse_step2: 30.30279732,
        m_rmse_step3: 31.75519371,
        m_rmse_step4: 32.92389297,
        m_rmse_step5: 33.98656082,
        m_rmse_step6: 35.03298569,
        m_rmse_step7: 36.0525856,
        m_rmse_step8: 37.19416809,
        m_rmse_step9: 38.16992569,
        m_rmse_step10: 39.24134064,
        m_rmse_step11: 40.45304108,
        m_rmse_step12: 41.77623749,
    },
    {
        rank: 0,
        model: 'TGCN',
        mlink: '#',
        paper: 'T-gcn: A temporal graph convolutional network for traffic prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/',
        year: '2020',
        step3: 21.67768097,
        step6: 23.96235466,
        step9: 26.33970642,
        step12: 29.06182671,

        m_mae_step1: 19.79592133,
        m_mae_step2: 20.77040291,
        m_mae_step3: 21.67768097,
        m_mae_step4: 22.47772217,
        m_mae_step5: 23.22974014,
        m_mae_step6: 23.96235466,
        m_mae_step7: 24.79392624,
        m_mae_step8: 25.56436729,
        m_mae_step9: 26.33970642,
        m_mae_step10: 27.12193489,
        m_mae_step11: 28.0203476,
        m_mae_step12: 29.06182671,

        m_mape_step1: 0.139981851,
        m_mape_step2: 0.146924525,
        m_mape_step3: 0.151620671,
        m_mape_step4: 0.156749845,
        m_mape_step5: 0.163110599,
        m_mape_step6: 0.16973649,
        m_mape_step7: 0.178322732,
        m_mape_step8: 0.185051948,
        m_mape_step9: 0.191600636,
        m_mape_step10: 0.199797019,
        m_mape_step11: 0.207052782,
        m_mape_step12: 0.21745339,

        m_rmse_step1: 32.00106812,
        m_rmse_step2: 33.3950882,
        m_rmse_step3: 34.63500214,
        m_rmse_step4: 35.7376709,
        m_rmse_step5: 36.75622177,
        m_rmse_step6: 37.77741241,
        m_rmse_step7: 38.89757538,
        m_rmse_step8: 39.96870422,
        m_rmse_step9: 41.04476166,
        m_rmse_step10: 42.133358,
        m_rmse_step11: 43.35245895,
        m_rmse_step12: 44.79376602,
    },
    ]

    export default {
        data() {
            return {
                PEMSD4_origin,
                rankingData: [],
                metrics: "MAE12"
            };
        },
        components: {
        },
        mounted() {
            this.rankingData = PEMSD4_origin;
            this.metricsChange("MAE12");
        },
        methods: {
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
            sortBy9() {
                this.rankingData.sort(function(a, b) {
                    return a.step9 - b.step9
                });
                let rank = 0;
                this.rankingData.forEach((item) => {
                    rank += 1;
                    item.rank = rank;
                })
            },
            sortBy12() {
                this.rankingData.sort(function(a, b) {
                    return a.step12 - b.step12
                });
                let rank = 0;
                this.rankingData.forEach((item) => {
                    rank += 1;
                    item.rank = rank;
                })
            },
            metricsChange(value) {
                if (value == "MAE12") {
                    this.rankingData.forEach((item) => {
                        item.step3 = item.m_mae_step3.toFixed(5);
                        item.step6 = item.m_mae_step6.toFixed(5);
                        item.step9 = item.m_mae_step9.toFixed(5);
                        item.step12 = item.m_mae_step12.toFixed(5);
                    })
                } else if (value == "MAPE12") {
                    this.rankingData.forEach((item) => {
                        item.step3 = item.m_mape_step3.toFixed(5);
                        item.step6 = item.m_mape_step6.toFixed(5);
                        item.step9 = item.m_mape_step9.toFixed(5);
                        item.step12 = item.m_mape_step12.toFixed(5);
                    })
                } else if (value == "RMSE12") {
                    this.rankingData.forEach((item) => {
                        item.step3 = item.m_rmse_step3.toFixed(5);
                        item.step6 = item.m_rmse_step6.toFixed(5);
                        item.step9 = item.m_rmse_step9.toFixed(5);
                        item.step12 = item.m_rmse_step12.toFixed(5);
                    })
                }
                this.sortBy12();
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