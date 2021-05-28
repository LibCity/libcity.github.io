<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">METR-LA</p>
      </div>
    </div>

    <div class="content">
        <div class="metric">
            View
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
                <thead>
                    <tr>
                        <th>RANK</th>
                        <th>MODEL</th>
                        <th>PAPER</th>
                        <th>YEAR</th>
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

    const METR_LA_origin = [
        {
            rank: 0,
            model: 'MTGNN',
            mlink: '#',
            paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
            plink: 'https://arxiv.org/abs/2005.11650',
            year: '2020',
            step3: 2.659704,
            step6: 3.038436,
            step9: 3.279131,
            step12: 3.467195,

            m_mae_step1: 2.231438,
            m_mae_step2: 2.479285,
            m_mae_step3: 2.659704,
            m_mae_step4: 2.803102,
            m_mae_step5: 2.919593,
            m_mae_step6: 3.038436,
            m_mae_step7: 3.120745,
            m_mae_step8: 3.204792,
            m_mae_step9: 3.279131,
            m_mae_step10: 3.342231,
            m_mae_step11: 3.405136,
            m_mae_step12: 3.467195,

            m_mape_step1: 0.054049,
            m_mape_step2: 0.062278,
            m_mape_step3: 0.068652,
            m_mape_step4: 0.073884,
            m_mape_step5: 0.078296,
            m_mape_step6: 0.082662,
            m_mape_step7: 0.086021,
            m_mape_step8: 0.089056,
            m_mape_step9: 0.091896,
            m_mape_step10: 0.094251,
            m_mape_step11: 0.096581,
            m_mape_step12: 0.098959,

            m_rmse_step1: 3.905577,
            m_rmse_step2: 4.617566,
            m_rmse_step3: 5.1141,
            m_rmse_step4: 5.516919,
            m_rmse_step5: 5.840521,
            m_rmse_step6: 6.131934,
            m_rmse_step7: 6.377653,
            m_rmse_step8: 6.598508,
            m_rmse_step9: 6.792513,
            m_rmse_step10: 6.951753,
            m_rmse_step11: 7.084561,
            m_rmse_step12: 7.216567
        },
        {
            rank: 0,
            model: 'STGCN',
            mlink: '#',
            paper: 'Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting',
            plink: 'https://www.ijcai.org/Proceedings/2018/0505',
            year: '2018',
            step3: 2.79312253,
            step6: 3.16742754,
            step9: 3.387797594,
            step12: 3.540053844,

            m_mae_step1: 2.376001835,
            m_mae_step2: 2.607872963,
            m_mae_step3: 2.79312253,
            m_mae_step4: 2.939201832,
            m_mae_step5: 3.054983854,
            m_mae_step6: 3.16742754,
            m_mae_step7: 3.242025614,
            m_mae_step8: 3.318369865,
            m_mae_step9: 3.387797594,
            m_mae_step10: 3.441800356,
            m_mae_step11: 3.49410367,
            m_mae_step12: 3.540053844,
    
            m_mape_step1: 0.058572508,
            m_mape_step2: 0.066515915,
            m_mape_step3: 0.073082395,
            m_mape_step4: 0.078322716,
            m_mape_step5: 0.082748361,
            m_mape_step6: 0.086854525,
            m_mape_step7: 0.089964069,
            m_mape_step8: 0.092953496,
            m_mape_step9: 0.095547549,
            m_mape_step10: 0.09776552,
            m_mape_step11: 0.0998348,
            m_mape_step12: 0.101720192,

            m_rmse_step1: 4.068007469,
            m_rmse_step2: 4.886314392,
            m_rmse_step3: 5.45522213,
            m_rmse_step4: 5.889332771,
            m_rmse_step5: 6.228505611,
            m_rmse_step6: 6.514095783,
            m_rmse_step7: 6.740705013,
            m_rmse_step8: 6.945337296,
            m_rmse_step9: 7.123343468,
            m_rmse_step10: 7.272731304,
            m_rmse_step11: 7.404423714,
            m_rmse_step12: 7.525319099
        },
        {
            rank: 0,
            model: 'AGCRN',
            mlink: '#',
            paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
            plink: 'https://arxiv.org/abs/2007.02842',
            year: '2018',
            step3: '2.83642',
            step6: '3.20918',
            step9: '3.41369',
            step12: '3.57438',

            m_mae_step1: 2.383758,
            m_mae_step2: 2.645373,
            m_mae_step3: 2.836422,
            m_mae_step4: 2.985652,
            m_mae_step5: 3.101156,
            m_mae_step6: 3.209178,
            m_mae_step7: 3.280743,
            m_mae_step8: 3.351473,
            m_mae_step9: 3.413689,
            m_mae_step10: 3.462089,
            m_mae_step11: 3.518892,
            m_mae_step12: 3.574384,

            m_mape_step1: 0.059421,
            m_mape_step2: 0.068142,
            m_mape_step3: 0.075029,
            m_mape_step4: 0.08035,
            m_mape_step5: 0.08464,
            m_mape_step6: 0.088574,
            m_mape_step7: 0.091287,
            m_mape_step8: 0.093814,
            m_mape_step9: 0.09594,
            m_mape_step10: 0.097839,
            m_mape_step11: 0.099365,
            m_mape_step12: 0.101541,

            m_rmse_step1: 4.228353,
            m_rmse_step2: 4.990636,
            m_rmse_step3: 5.507213,
            m_rmse_step4: 5.927253,
            m_rmse_step5: 6.269229,
            m_rmse_step6: 6.53495,
            m_rmse_step7: 6.720445,
            m_rmse_step8: 6.893378,
            m_rmse_step9: 7.049877,
            m_rmse_step10: 7.172032,
            m_rmse_step11: 7.308388,
            m_rmse_step12: 7.424428,
        },
        {
            rank: 0,
            model: 'GWNET',
            mlink: '#',
            paper: 'Graph Wavenet for Deep Spatial-Temporal Graph Modeling',
            plink: 'https://arxiv.org/abs/1906.00121',
            year: '2019',
            step3: 2.80364,
            step6: 3.206028,
            step9: 3.43401,
            step12: 3.586501,

            m_mae_step1: 2.325558,
            m_mae_step2: 2.609335,
            m_mae_step3: 2.80364,
            m_mae_step4: 2.9599,
            m_mae_step5: 3.084779,
            m_mae_step6: 3.206028,
            m_mae_step7: 3.285505,
            m_mae_step8: 3.367512,
            m_mae_step9: 3.43401,
            m_mae_step10: 3.48861,
            m_mae_step11: 3.546927,
            m_mae_step12: 3.586501,

            m_mape_step1: 0.056459,
            m_mape_step2: 0.066598,
            m_mape_step3: 0.074257,
            m_mape_step4: 0.08071,
            m_mape_step5: 0.086026,
            m_mape_step6: 0.0909,
            m_mape_step7: 0.094666,
            m_mape_step8: 0.098574,
            m_mape_step9: 0.101082,
            m_mape_step10: 0.103383,
            m_mape_step11: 0.106222,
            m_mape_step12: 0.107554,

            m_rmse_step1: 4.09463,
            m_rmse_step2: 4.949437,
            m_rmse_step3: 5.490851,
            m_rmse_step4: 5.905853,
            m_rmse_step5: 6.242605,
            m_rmse_step6: 6.530153,
            m_rmse_step7: 6.754984,
            m_rmse_step8: 6.95005,
            m_rmse_step9: 7.106978,
            m_rmse_step10: 7.227374,
            m_rmse_step11: 7.339231,
            m_rmse_step12: 7.42097,
        },
        {
            rank: 0,
            model: 'DCRNN',
            mlink: '#',
            paper: 'Diffusion convolutional recurrent neural network: Data-driven traffic forecasting',
            plink: 'https://arxiv.org/abs/1707.01926',
            year: '2018',
            step3: 2.708904,
            step6: 3.12476,
            step9: 3.388868,
            step12: 3.598647,

            m_mae_step1: 2.233182,
            m_mae_step2: 2.514858,
            m_mae_step3: 2.708904,
            m_mae_step4: 2.867617,
            m_mae_step5: 2.996041,
            m_mae_step6: 3.12476,
            m_mae_step7: 3.214641,
            m_mae_step8: 3.306041,
            m_mae_step9: 3.388868,
            m_mae_step10: 3.459951,
            m_mae_step11: 3.531481,
            m_mae_step12: 3.598647,

            m_mape_step1: 0.053379,
            m_mape_step2: 0.062617,
            m_mape_step3: 0.069608,
            m_mape_step4: 0.075579,
            m_mape_step5: 0.080622,
            m_mape_step6: 0.085369,
            m_mape_step7: 0.089234,
            m_mape_step8: 0.092946,
            m_mape_step9: 0.096338,
            m_mape_step10: 0.099348,
            m_mape_step11: 0.102261,
            m_mape_step12: 0.105056,

            m_rmse_step1: 3.885079,
            m_rmse_step2: 4.694417,
            m_rmse_step3: 5.254325,
            m_rmse_step4: 5.702601,
            m_rmse_step5: 6.063174,
            m_rmse_step6: 6.386195,
            m_rmse_step7: 6.648911,
            m_rmse_step8: 6.887054,
            m_rmse_step9: 7.096212,
            m_rmse_step10: 7.282915,
            m_rmse_step11: 7.456735,
            m_rmse_step12: 7.620445,
        },
        {
            rank: 0,
            model: 'GMAN',
            mlink: '#',
            paper: 'GMAN: A Graph Multi-Attention Network for Traffic Prediction',
            plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/5477',
            year: '2020',
            step3: 2.978763342,
            step6: 3.3314569,
            step9: 3.567911148,
            step12: 3.764382362,

            m_mae_step1: 2.605838776,
            m_mae_step2: 2.820083857,
            m_mae_step3: 2.978763342,
            m_mae_step4: 3.114732504,
            m_mae_step5: 3.229729652,
            m_mae_step6: 3.3314569,
            m_mae_step7: 3.419331551,
            m_mae_step8: 3.496765852,
            m_mae_step9: 3.567911148,
            m_mae_step10: 3.634637594,
            m_mae_step11: 3.699738026,
            m_mae_step12: 3.764382362,

            m_mape_step1: 0.067342557,
            m_mape_step2: 0.074998863,
            m_mape_step3: 0.080787405,
            m_mape_step4: 0.085830055,
            m_mape_step5: 0.090009339,
            m_mape_step6: 0.09367498,
            m_mape_step7: 0.096849285,
            m_mape_step8: 0.099637799,
            m_mape_step9: 0.102123946,
            m_mape_step10: 0.104438722,
            m_mape_step11: 0.10674037,
            m_mape_step12: 0.109014869,

            m_rmse_step1: 4.459854603,
            m_rmse_step2: 5.062326908,
            m_rmse_step3: 5.460591793,
            m_rmse_step4: 5.778544426,
            m_rmse_step5: 6.041573524,
            m_rmse_step6: 6.264275074,
            m_rmse_step7: 6.457974434,
            m_rmse_step8: 6.623810768,
            m_rmse_step9: 6.773949623,
            m_rmse_step10: 6.912739754,
            m_rmse_step11: 7.04447031,
            m_rmse_step12: 7.170487881,
        },
        {
            rank: 0,
            model: 'STG2Seq',
            mlink: '#',
            paper: 'STG2Seq: Spatial-temporal Graph to Sequence Model for Multi-step Passenger Demand Forecasting',
            plink: 'https://arxiv.org/abs/1905.10069',
            year: '2019',
            step3: 3.207009554,
            step6: 3.513832569,
            step9: 3.75211978,
            step12: 3.989217758,

            m_mae_step1: 2.873410225,
            m_mae_step2: 3.057595015,
            m_mae_step3: 3.207009554,
            m_mae_step4: 3.317353964,
            m_mae_step5: 3.428559542,
            m_mae_step6: 3.513832569,
            m_mae_step7: 3.598775148,
            m_mae_step8: 3.676764727,
            m_mae_step9: 3.75211978,
            m_mae_step10: 3.831633329,
            m_mae_step11: 3.908805609,
            m_mae_step12: 3.989217758,

            m_mape_step1: 0.076765589,
            m_mape_step2: 0.084222488,
            m_mape_step3: 0.090530291,
            m_mape_step4: 0.095138408,
            m_mape_step5: 0.099454805,
            m_mape_step6: 0.102760814,
            m_mape_step7: 0.105884999,
            m_mape_step8: 0.108615607,
            m_mape_step9: 0.111189872,
            m_mape_step10: 0.11381913,
            m_mape_step11: 0.116323486,
            m_mape_step12: 0.119050145,

            m_rmse_step1: 5.200129032,
            m_rmse_step2: 5.706233978,
            m_rmse_step3: 6.165689468,
            m_rmse_step4: 6.511514187,
            m_rmse_step5: 6.823247433,
            m_rmse_step6: 7.066045284,
            m_rmse_step7: 7.286650181,
            m_rmse_step8: 7.484865665,
            m_rmse_step9: 7.669331074,
            m_rmse_step10: 7.851381779,
            m_rmse_step11: 8.031019211,
            m_rmse_step12: 8.219035149,
        },
        {
            rank: 0,
            model: 'GRU',
            mlink: '#',
            paper: 'Using LSTM and GRU neural network methods for traffic flow prediction',
            plink: 'https://ieeexplore.ieee.org/abstract/document/7804912',
            year: '2016',
            step3: 3.878579855,
            step6: 3.970649958,
            step9: 4.034152031,
            step12: 4.101053238,

            m_mae_step1: 3.850193739,
            m_mae_step2: 3.851273537,
            m_mae_step3: 3.878579855,
            m_mae_step4: 3.906800985,
            m_mae_step5: 3.931890249,
            m_mae_step6: 3.970649958,
            m_mae_step7: 3.984755278,
            m_mae_step8: 4.010480404,
            m_mae_step9: 4.034152031,
            m_mae_step10: 4.053321838,
            m_mae_step11: 4.078495502,
            m_mae_step12: 4.101053238,

            m_mape_step1: 0.106071219,
            m_mape_step2: 0.107352138,
            m_mape_step3: 0.108841695,
            m_mape_step4: 0.110093407,
            m_mape_step5: 0.111291245,
            m_mape_step6: 0.112729222,
            m_mape_step7: 0.113699824,
            m_mape_step8: 0.114966668,
            m_mape_step9: 0.11614003,
            m_mape_step10: 0.117237188,
            m_mape_step11: 0.118597224,
            m_mape_step12: 0.120193705,

            m_rmse_step1: 7.225396633,
            m_rmse_step2: 7.350177765,
            m_rmse_step3: 7.467576981,
            m_rmse_step4: 7.562798023,
            m_rmse_step5: 7.653656483,
            m_rmse_step6: 7.746285915,
            m_rmse_step7: 7.823867798,
            m_rmse_step8: 7.907803059,
            m_rmse_step9: 7.98797369,
            m_rmse_step10: 8.066348076,
            m_rmse_step11: 8.147593498,
            m_rmse_step12: 8.231281281,
        },
        {
            rank: 0,
            model: 'Seq2Seq',
            mlink: '#',
            paper: 'Sequence to Sequence Learning with Neural Networks',
            plink: 'https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html',
            year: '2014',
            step3: 3.724226475,
            step6: 3.843455315,
            step9: 3.968490362,
            step12: 4.107018471,

            m_mae_step1: 3.819587469,
            m_mae_step2: 3.724068165,
            m_mae_step3: 3.724226475,
            m_mae_step4: 3.752555609,
            m_mae_step5: 3.78818965,
            m_mae_step6: 3.843455315,
            m_mae_step7: 3.876490831,
            m_mae_step8: 3.920360088,
            m_mae_step9: 3.968490362,
            m_mae_step10: 4.010913849,
            m_mae_step11: 4.058806419,
            m_mae_step12: 4.107018471,

            m_mape_step1: 0.103649862,
            m_mape_step2: 0.101111762,
            m_mape_step3: 0.101771593,
            m_mape_step4: 0.10322006,
            m_mape_step5: 0.104992926,
            m_mape_step6: 0.107199162,
            m_mape_step7: 0.10892316,
            m_mape_step8: 0.110896237,
            m_mape_step9: 0.11297448,
            m_mape_step10: 0.114957705,
            m_mape_step11: 0.117068611,
            m_mape_step12: 0.119241968,

            m_rmse_step1: 7.024469852,
            m_rmse_step2: 7.010651588,
            m_rmse_step3: 7.074892044,
            m_rmse_step4: 7.165113449,
            m_rmse_step5: 7.266774178,
            m_rmse_step6: 7.384478092,
            m_rmse_step7: 7.486323833,
            m_rmse_step8: 7.601319313,
            m_rmse_step9: 7.714835644,
            m_rmse_step10: 7.824673653,
            m_rmse_step11: 7.933192253,
            m_rmse_step12: 8.044482231,
        },
        {
            rank: 0,
            model: 'AE',
            mlink: '#',
            paper: 'Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction',
            plink: 'https://ieeexplore.ieee.org/document/6910027',
            year: '2014',
            step3: 4.296033382,
            step6: 4.329978943,
            step9: 4.385020733,
            step12: 4.49087286,

            m_mae_step1: 4.317168713,
            m_mae_step2: 4.303926945,
            m_mae_step3: 4.296033382,
            m_mae_step4: 4.298787594,
            m_mae_step5: 4.304625988,
            m_mae_step6: 4.329978943,
            m_mae_step7: 4.336397648,
            m_mae_step8: 4.36009264,
            m_mae_step9: 4.385020733,
            m_mae_step10: 4.414586544,
            m_mae_step11: 4.450531006,
            m_mae_step12: 4.49087286,

            m_mape_step1: 0.132474214,
            m_mape_step2: 0.13165547,
            m_mape_step3: 0.131113023,
            m_mape_step4: 0.131020755,
            m_mape_step5: 0.131198823,
            m_mape_step6: 0.131778046,
            m_mape_step7: 0.132190943,
            m_mape_step8: 0.132935554,
            m_mape_step9: 0.133905694,
            m_mape_step10: 0.135093436,
            m_mape_step11: 0.136639744,
            m_mape_step12: 0.138492659,

            m_rmse_step1: 8.647931099,
            m_rmse_step2: 8.613793373,
            m_rmse_step3: 8.5912323,
            m_rmse_step4: 8.591352463,
            m_rmse_step5: 8.602626801,
            m_rmse_step6: 8.629518509,
            m_rmse_step7: 8.651073456,
            m_rmse_step8: 8.694066048,
            m_rmse_step9: 8.735411644,
            m_rmse_step10: 8.784210205,
            m_rmse_step11: 8.844249725,
            m_rmse_step12: 8.918504715,
        },
        {
            rank: 0,
            model: 'ASTGCN',
            mlink: '#',
            paper: 'Attention based spatial-temporal graph convolutional networks for traffic flow forecasting',
            plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/3881',
            year: '2019',
            step3: 3.219216585,
            step6: 3.840982914,
            step9: 4.261841297,
            step12: 4.641474724,

            m_mae_step1: 2.61618185,
            m_mae_step2: 2.963646889,
            m_mae_step3: 3.219216585,
            m_mae_step4: 3.453998566,
            m_mae_step5: 3.627777576,
            m_mae_step6: 3.840982914,
            m_mae_step7: 3.97155571,
            m_mae_step8: 4.126669884,
            m_mae_step9: 4.261841297,
            m_mae_step10: 4.381239414,
            m_mae_step11: 4.527229309,
            m_mae_step12: 4.641474724,

            m_mape_step1: 0.064834476,
            m_mape_step2: 0.076637767,
            m_mape_step3: 0.085326545,
            m_mape_step4: 0.09283904,
            m_mape_step5: 0.099343926,
            m_mape_step6: 0.105527394,
            m_mape_step7: 0.110651836,
            m_mape_step8: 0.115420245,
            m_mape_step9: 0.120354041,
            m_mape_step10: 0.124574624,
            m_mape_step11: 0.128994927,
            m_mape_step12: 0.133610293,

            m_rmse_step1: 4.327045441,
            m_rmse_step2: 5.162874222,
            m_rmse_step3: 5.705645561,
            m_rmse_step4: 6.126878262,
            m_rmse_step5: 6.475745201,
            m_rmse_step6: 6.780195236,
            m_rmse_step7: 7.036572456,
            m_rmse_step8: 7.277525902,
            m_rmse_step9: 7.492752075,
            m_rmse_step10: 7.699422836,
            m_rmse_step11: 7.886809349,
            m_rmse_step12: 8.080669403,
        },
        {
            rank: 0,
            model: 'RNN',
            mlink: '#',
            paper: 'Using LSTM and GRU neural network methods for traffic flow prediction',
            plink: 'https://ieeexplore.ieee.org/abstract/document/7804912',
            year: '2016',
            step3: 3.383401632,
            step6: 3.891369343,
            step9: 4.334444046,
            step12: 4.756340027,

            m_mae_step1: 3.086241484,
            m_mae_step2: 3.219494581,
            m_mae_step3: 3.383401632,
            m_mae_step4: 3.549940825,
            m_mae_step5: 3.715070248,
            m_mae_step6: 3.891369343,
            m_mae_step7: 4.03785038,
            m_mae_step8: 4.190167904,
            m_mae_step9: 4.334444046,
            m_mae_step10: 4.475232601,
            m_mae_step11: 4.616316795,
            m_mae_step12: 4.756340027,

            m_mape_step1: 0.078872748,
            m_mape_step2: 0.086111061,
            m_mape_step3: 0.09301582,
            m_mape_step4: 0.099485233,
            m_mape_step5: 0.105716825,
            m_mape_step6: 0.112059802,
            m_mape_step7: 0.117375508,
            m_mape_step8: 0.122642159,
            m_mape_step9: 0.127617583,
            m_mape_step10: 0.132449344,
            m_mape_step11: 0.137280196,
            m_mape_step12: 0.142090142,

            m_rmse_step1: 5.446045876,
            m_rmse_step2: 5.937510014,
            m_rmse_step3: 6.443620682,
            m_rmse_step4: 6.91625452,
            m_rmse_step5: 7.352768898,
            m_rmse_step6: 7.767692566,
            m_rmse_step7: 8.123303413,
            m_rmse_step8: 8.466333389,
            m_rmse_step9: 8.783629417,
            m_rmse_step10: 9.087506294,
            m_rmse_step11: 9.379055977,
            m_rmse_step12: 9.662265778,
        },
        {
            rank: 0,
            model: 'TGCN',
            mlink: '#',
            paper: 'T-gcn: A temporal graph convolutional network for traffic prediction',
            plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/',
            year: '2020',
            step3: 4.152167797,
            step6: 4.318911076,
            step9: 4.532141685,
            step12: 4.806584358,

            m_mae_step1: 4.112214088,
            m_mae_step2: 4.134264469,
            m_mae_step3: 4.152167797,
            m_mae_step4: 4.197789669,
            m_mae_step5: 4.246117592,
            m_mae_step6: 4.318911076,
            m_mae_step7: 4.373990059,
            m_mae_step8: 4.451738834,
            m_mae_step9: 4.532141685,
            m_mae_step10: 4.616886139,
            m_mae_step11: 4.706166744,
            m_mae_step12: 4.806584358,

            m_mape_step1: 0.126902744,
            m_mape_step2: 0.127654418,
            m_mape_step3: 0.128371462,
            m_mape_step4: 0.129968867,
            m_mape_step5: 0.13147597,
            m_mape_step6: 0.133735314,
            m_mape_step7: 0.135732993,
            m_mape_step8: 0.138307169,
            m_mape_step9: 0.141159698,
            m_mape_step10: 0.143973291,
            m_mape_step11: 0.146996051,
            m_mape_step12: 0.150433451,

            m_rmse_step1: 7.728711605,
            m_rmse_step2: 7.775081635,
            m_rmse_step3: 7.827650547,
            m_rmse_step4: 7.926627636,
            m_rmse_step5: 8.021657944,
            m_rmse_step6: 8.152430534,
            m_rmse_step7: 8.27451992,
            m_rmse_step8: 8.419816017,
            m_rmse_step9: 8.579461098,
            m_rmse_step10: 8.73675251,
            m_rmse_step11: 8.90237236,
            m_rmse_step12: 9.084186554,
        },
    ]

    export default {
        data() {
            return {
                METR_LA_origin,
                rankingData: [],
                metrics: "MAE12"
            };
        },
        components: {
        },
        mounted() {
            this.rankingData = METR_LA_origin;
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