<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">PEMSD8</p>
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
    const PEMSD8_origin = [
    {
        rank: 0,
        model: 'GWNET',
        mlink: '#',
        paper: 'Graph Wavenet for Deep Spatial-Temporal Graph Modeling',
        plink: 'https://arxiv.org/abs/1906.00121',
        year: '2019',
        step3: 13.48623466,
        step6: 14.34870148,
        step9: 15.03883648,
        step12: 15.67200279,

        m_mae_step1: 12.53749275,
        m_mae_step2: 13.07019806,
        m_mae_step3: 13.48623466,
        m_mae_step4: 13.77601433,
        m_mae_step5: 14.05943775,
        m_mae_step6: 14.34870148,
        m_mae_step7: 14.58812046,
        m_mae_step8: 14.83917713,
        m_mae_step9: 15.03883648,
        m_mae_step10: 15.20854473,
        m_mae_step11: 15.42450428,
        m_mae_step12: 15.67200279,

        m_mape_step1: 0.082080759,
        m_mape_step2: 0.089334764,
        m_mape_step3: 0.091529071,
        m_mape_step4: 0.089910984,
        m_mape_step5: 0.092758693,
        m_mape_step6: 0.092950851,
        m_mape_step7: 0.097919762,
        m_mape_step8: 0.102665931,
        m_mape_step9: 0.106559612,
        m_mape_step10: 0.109253339,
        m_mape_step11: 0.108538181,
        m_mape_step12: 0.108277217,

        m_rmse_step1: 19.67490196,
        m_rmse_step2: 20.79640961,
        m_rmse_step3: 21.61495399,
        m_rmse_step4: 22.27540779,
        m_rmse_step5: 22.84103394,
        m_rmse_step6: 23.37506294,
        m_rmse_step7: 23.87844276,
        m_rmse_step8: 24.36216927,
        m_rmse_step9: 24.7726078,
        m_rmse_step10: 25.11833191,
        m_rmse_step11: 25.52103806,
        m_rmse_step12: 25.85500526,
    },
    {
        rank: 0,
        model: 'AGCRN',
        mlink: '#',
        paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
        plink: 'https://arxiv.org/abs/2007.02842',
        year: '2018',
        step3: 14.14557552,
        step6: 14.96215248,
        step9: 15.67538929,
        step12: 16.42727852,

        m_mae_step1: 13.20868492,
        m_mae_step2: 13.67123413,
        m_mae_step3: 14.14557552,
        m_mae_step4: 14.43775558,
        m_mae_step5: 14.74346256,
        m_mae_step6: 14.96215248,
        m_mae_step7: 15.21167946,
        m_mae_step8: 15.48317051,
        m_mae_step9: 15.67538929,
        m_mae_step10: 15.85785866,
        m_mae_step11: 16.02665138,
        m_mae_step12: 16.42727852,

        m_mape_step1: 0.088976979,
        m_mape_step2: 0.090652086,
        m_mape_step3: 0.09098731,
        m_mape_step4: 0.092406563,
        m_mape_step5: 0.094567053,
        m_mape_step6: 0.097322911,
        m_mape_step7: 0.098101176,
        m_mape_step8: 0.099518359,
        m_mape_step9: 0.102086164,
        m_mape_step10: 0.104775421,
        m_mape_step11: 0.107543699,
        m_mape_step12: 0.120726474,

        m_rmse_step1: 20.45301056,
        m_rmse_step2: 21.36338615,
        m_rmse_step3: 22.24124336,
        m_rmse_step4: 22.92445755,
        m_rmse_step5: 23.55497551,
        m_rmse_step6: 24.05486679,
        m_rmse_step7: 24.57805634,
        m_rmse_step8: 25.07662582,
        m_rmse_step9: 25.44469643,
        m_rmse_step10: 25.81347275,
        m_rmse_step11: 26.12263298,
        m_rmse_step12: 26.55674362,
    },
    {
        rank: 0,
        model: 'MTGNN',
        mlink: '#',
        paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
        plink: 'https://arxiv.org/abs/2005.11650',
        year: '2020',
        step3: 14.00144291,
        step6: 14.88252544,
        step9: 15.7070446,
        step12: 16.58281517,

        m_mae_step1: 13.03839684,
        m_mae_step2: 13.60142422,
        m_mae_step3: 14.00144291,
        m_mae_step4: 14.32002544,
        m_mae_step5: 14.62461472,
        m_mae_step6: 14.88252544,
        m_mae_step7: 15.1909008,
        m_mae_step8: 15.48165035,
        m_mae_step9: 15.7070446,
        m_mae_step10: 15.93898869,
        m_mae_step11: 16.20598221,
        m_mae_step12: 16.58281517,

        m_mape_step1: 0.099910796,
        m_mape_step2: 0.103332624,
        m_mape_step3: 0.096842289,
        m_mape_step4: 0.097304262,
        m_mape_step5: 0.101511084,
        m_mape_step6: 0.100514688,
        m_mape_step7: 0.108008429,
        m_mape_step8: 0.110258266,
        m_mape_step9: 0.10896492,
        m_mape_step10: 0.110941887,
        m_mape_step11: 0.113775045,
        m_mape_step12: 0.115932487,

        m_rmse_step1: 20.03616524,
        m_rmse_step2: 21.15953636,
        m_rmse_step3: 21.96808434,
        m_rmse_step4: 22.62692833,
        m_rmse_step5: 23.16221428,
        m_rmse_step6: 23.62415695,
        m_rmse_step7: 24.06383324,
        m_rmse_step8: 24.49258614,
        m_rmse_step9: 24.87306213,
        m_rmse_step10: 25.23279762,
        m_rmse_step11: 25.60403442,
        m_rmse_step12: 26.12766266,
    },
    {
        rank: 0,
        model: 'STGCN',
        mlink: '#',
        paper: 'Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting',
        plink: 'https://www.ijcai.org/Proceedings/2018/0505',
        year: '2018',
        step3: 15.16600895,
        step6: 16.18848419,
        step9: 16.97072411,
        step12: 17.81894302,

        m_mae_step1: 14.45167542,
        m_mae_step2: 14.77228165,
        m_mae_step3: 15.16600895,
        m_mae_step4: 15.54353046,
        m_mae_step5: 15.87468815,
        m_mae_step6: 16.18848419,
        m_mae_step7: 16.47445679,
        m_mae_step8: 16.72957993,
        m_mae_step9: 16.97072411,
        m_mae_step10: 17.19652176,
        m_mae_step11: 17.47880745,
        m_mae_step12: 17.81894302,

        m_mape_step1: 0.0964415,
        m_mape_step2: 0.098057255,
        m_mape_step3: 0.099797502,
        m_mape_step4: 0.102048643,
        m_mape_step5: 0.104142234,
        m_mape_step6: 0.106219813,
        m_mape_step7: 0.10793753,
        m_mape_step8: 0.109360136,
        m_mape_step9: 0.110859215,
        m_mape_step10: 0.112185284,
        m_mape_step11: 0.113784023,
        m_mape_step12: 0.115627922,

        m_rmse_step1: 22.1775856,
        m_rmse_step2: 22.8305912,
        m_rmse_step3: 23.61512756,
        m_rmse_step4: 24.32275772,
        m_rmse_step5: 24.90527344,
        m_rmse_step6: 25.40136147,
        m_rmse_step7: 25.82810783,
        m_rmse_step8: 26.21662712,
        m_rmse_step9: 26.55627823,
        m_rmse_step10: 26.89939308,
        m_rmse_step11: 27.31884766,
        m_rmse_step12: 27.81797791,
    },
    {
        rank: 0,
        model: 'GMAN',
        mlink: '#',
        paper: 'GMAN: A Graph Multi-Attention Network for Traffic Prediction',
        plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/5477',
        year: '2020',
        step3: 15.15781116,
        step6: 15.92420006,
        step9: 16.72486305,
        step12: 17.83690262,

        m_mae_step1: 14.68619919,
        m_mae_step2: 14.92042828,
        m_mae_step3: 15.15781116,
        m_mae_step4: 15.40248489,
        m_mae_step5: 15.65803337,
        m_mae_step6: 15.92420006,
        m_mae_step7: 16.19533539,
        m_mae_step8: 16.46033669,
        m_mae_step9: 16.72486305,
        m_mae_step10: 17.01190567,
        m_mae_step11: 17.36710358,
        m_mae_step12: 17.83690262,

        m_mape_step1: 0.122251615,
        m_mape_step2: 0.122883648,
        m_mape_step3: 0.124052338,
        m_mape_step4: 0.125527769,
        m_mape_step5: 0.127441883,
        m_mape_step6: 0.129324183,
        m_mape_step7: 0.131311163,
        m_mape_step8: 0.133398131,
        m_mape_step9: 0.135851189,
        m_mape_step10: 0.138594419,
        m_mape_step11: 0.14166081,
        m_mape_step12: 0.145518526,

        m_rmse_step1: 21.75924683,
        m_rmse_step2: 22.41736031,
        m_rmse_step3: 23.02073288,
        m_rmse_step4: 23.56772423,
        m_rmse_step5: 24.0747509,
        m_rmse_step6: 24.55338287,
        m_rmse_step7: 24.99449348,
        m_rmse_step8: 25.37409401,
        m_rmse_step9: 25.73827934,
        m_rmse_step10: 26.12198639,
        m_rmse_step11: 26.57036781,
        m_rmse_step12: 27.1413765,
    },
    {
        rank: 0,
        model: 'DCRNN',
        mlink: '#',
        paper: 'Diffusion convolutional recurrent neural network: Data-driven traffic forecasting',
        plink: 'https://arxiv.org/abs/1707.01926',
        year: '2018',
        step3: 15.13929272,
        step6: 16.61906052,
        step9: 17.96046066,
        step12: 19.34530067,

        m_mae_step1: 13.36002541,
        m_mae_step2: 14.41307449,
        m_mae_step3: 15.13929272,
        m_mae_step4: 15.66640759,
        m_mae_step5: 16.14269829,
        m_mae_step6: 16.61906052,
        m_mae_step7: 17.11083984,
        m_mae_step8: 17.56220627,
        m_mae_step9: 17.96046066,
        m_mae_step10: 18.32613373,
        m_mae_step11: 18.76915359,
        m_mae_step12: 19.34530067,

        m_mape_step1: 0.087967277,
        m_mape_step2: 0.093728557,
        m_mape_step3: 0.097720534,
        m_mape_step4: 0.101081781,
        m_mape_step5: 0.104012728,
        m_mape_step6: 0.107188858,
        m_mape_step7: 0.110237852,
        m_mape_step8: 0.113067836,
        m_mape_step9: 0.115700759,
        m_mape_step10: 0.118071176,
        m_mape_step11: 0.120837197,
        m_mape_step12: 0.124618635,

        m_rmse_step1: 20.51872635,
        m_rmse_step2: 22.25147438,
        m_rmse_step3: 23.476408,
        m_rmse_step4: 24.38829803,
        m_rmse_step5: 25.20113754,
        m_rmse_step6: 25.98244095,
        m_rmse_step7: 26.74665451,
        m_rmse_step8: 27.44219971,
        m_rmse_step9: 28.0090313,
        m_rmse_step10: 28.57259178,
        m_rmse_step11: 29.22302437,
        m_rmse_step12: 30.05773544,
    },
    {
        rank: 0,
        model: 'Seq2Seq',
        mlink: '#',
        paper: 'Sequence to Sequence Learning with Neural Networks',
        plink: 'https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html',
        year: '2014',
        step3: 19.1855278,
        step6: 19.32556343,
        step9: 19.61848259,
        step12: 19.89426613,

        m_mae_step1: 19.7941761,
        m_mae_step2: 19.19402122,
        m_mae_step3: 19.1855278,
        m_mae_step4: 19.23379326,
        m_mae_step5: 19.26502609,
        m_mae_step6: 19.32556343,
        m_mae_step7: 19.41815567,
        m_mae_step8: 19.51910973,
        m_mae_step9: 19.61848259,
        m_mae_step10: 19.66957474,
        m_mae_step11: 19.73812675,
        m_mae_step12: 19.89426613,

        m_mape_step1: 0.123289466,
        m_mape_step2: 0.119712688,
        m_mape_step3: 0.119518377,
        m_mape_step4: 0.11974635,
        m_mape_step5: 0.119832873,
        m_mape_step6: 0.120183572,
        m_mape_step7: 0.120855764,
        m_mape_step8: 0.121334597,
        m_mape_step9: 0.122044541,
        m_mape_step10: 0.122403286,
        m_mape_step11: 0.122863837,
        m_mape_step12: 0.123843662,

        m_rmse_step1: 31.63257408,
        m_rmse_step2: 31.12550163,
        m_rmse_step3: 31.22048187,
        m_rmse_step4: 31.3072567,
        m_rmse_step5: 31.37200356,
        m_rmse_step6: 31.44616508,
        m_rmse_step7: 31.55241776,
        m_rmse_step8: 31.67043686,
        m_rmse_step9: 31.772295,
        m_rmse_step10: 31.84652138,
        m_rmse_step11: 31.94548988,
        m_rmse_step12: 32.11654663,
    },
    {
        rank: 0,
        model: 'GRU',
        mlink: '#',
        paper: 'Using LSTM and GRU neural network methods for traffic flow prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/7804912',
        year: '2016',
        step3: 19.99183464,
        step6: 20.12639427,
        step9: 20.27365494,
        step12: 20.46142578,

        m_mae_step1: 19.80697441,
        m_mae_step2: 19.92087364,
        m_mae_step3: 19.99183464,
        m_mae_step4: 20.04624939,
        m_mae_step5: 20.08325577,
        m_mae_step6: 20.12639427,
        m_mae_step7: 20.17852402,
        m_mae_step8: 20.21724892,
        m_mae_step9: 20.27365494,
        m_mae_step10: 20.31934166,
        m_mae_step11: 20.37151337,
        m_mae_step12: 20.46142578,

        m_mape_step1: 0.123033643,
        m_mape_step2: 0.123532511,
        m_mape_step3: 0.123662718,
        m_mape_step4: 0.123994097,
        m_mape_step5: 0.124305405,
        m_mape_step6: 0.124701008,
        m_mape_step7: 0.125298083,
        m_mape_step8: 0.125448316,
        m_mape_step9: 0.125994191,
        m_mape_step10: 0.126326129,
        m_mape_step11: 0.126725629,
        m_mape_step12: 0.127460122,

        m_rmse_step1: 31.9796257,
        m_rmse_step2: 32.1399231,
        m_rmse_step3: 32.27585983,
        m_rmse_step4: 32.37742615,
        m_rmse_step5: 32.47410202,
        m_rmse_step6: 32.56914902,
        m_rmse_step7: 32.66611099,
        m_rmse_step8: 32.75481796,
        m_rmse_step9: 32.85256577,
        m_rmse_step10: 32.94684601,
        m_rmse_step11: 33.0577774,
        m_rmse_step12: 33.19984055,
    },
    {
        rank: 0,
        model: 'STG2Seq',
        mlink: '#',
        paper: 'STG2Seq: Spatial-temporal Graph to Sequence Model for Multi-step Passenger Demand Forecasting',
        plink: 'https://arxiv.org/abs/1905.10069',
        year: '2019',
        step3: 18.21736717,
        step6: 19.47863007,
        step9: 20.43239975,
        step12: 21.44478607,

        m_mae_step1: 16.56548309,
        m_mae_step2: 17.41977501,
        m_mae_step3: 18.21736717,
        m_mae_step4: 18.72706985,
        m_mae_step5: 19.13238335,
        m_mae_step6: 19.47863007,
        m_mae_step7: 19.84966278,
        m_mae_step8: 20.1781292,
        m_mae_step9: 20.43239975,
        m_mae_step10: 20.65717125,
        m_mae_step11: 20.96942329,
        m_mae_step12: 21.44478607,

        m_mape_step1: 0.118098274,
        m_mape_step2: 0.122069001,
        m_mape_step3: 0.125625283,
        m_mape_step4: 0.127666965,
        m_mape_step5: 0.129772976,
        m_mape_step6: 0.132123664,
        m_mape_step7: 0.1344648,
        m_mape_step8: 0.136284664,
        m_mape_step9: 0.137921378,
        m_mape_step10: 0.139047176,
        m_mape_step11: 0.140753508,
        m_mape_step12: 0.143514425,

        m_rmse_step1: 24.85426903,
        m_rmse_step2: 26.09652138,
        m_rmse_step3: 27.33436775,
        m_rmse_step4: 28.15513229,
        m_rmse_step5: 28.78977966,
        m_rmse_step6: 29.28873825,
        m_rmse_step7: 29.81483459,
        m_rmse_step8: 30.23240089,
        m_rmse_step9: 30.61736298,
        m_rmse_step10: 30.96413231,
        m_rmse_step11: 31.46114159,
        m_rmse_step12: 32.13013077,
    },
    {
        rank: 0,
        model: 'ASTGCN',
        mlink: '#',
        paper: 'Attention based spatial-temporal graph convolutional networks for traffic flow forecasting',
        plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/3881',
        year: '2019',
        step3: 16.4331398,
        step6: 18.54688454,
        step9: 20.35686684,
        step12: 22.28370857,

        m_mae_step1: 14.09247971,
        m_mae_step2: 15.38147163,
        m_mae_step3: 16.4331398,
        m_mae_step4: 17.20408058,
        m_mae_step5: 17.89921951,
        m_mae_step6: 18.54688454,
        m_mae_step7: 19.19279861,
        m_mae_step8: 19.76407242,
        m_mae_step9: 20.35686684,
        m_mae_step10: 20.82372856,
        m_mae_step11: 21.47339821,
        m_mae_step12: 22.28370857,

        m_mape_step1: 0.091801606,
        m_mape_step2: 0.100549161,
        m_mape_step3: 0.110475361,
        m_mape_step4: 0.11663577,
        m_mape_step5: 0.122736432,
        m_mape_step6: 0.125512064,
        m_mape_step7: 0.13098067,
        m_mape_step8: 0.135540098,
        m_mape_step9: 0.141649142,
        m_mape_step10: 0.146046743,
        m_mape_step11: 0.151481345,
        m_mape_step12: 0.158505633,

        m_rmse_step1: 21.3055706,
        m_rmse_step2: 23.33659554,
        m_rmse_step3: 24.87803459,
        m_rmse_step4: 26.01373672,
        m_rmse_step5: 26.97096252,
        m_rmse_step6: 27.91902161,
        m_rmse_step7: 28.76808357,
        m_rmse_step8: 29.47221756,
        m_rmse_step9: 30.20567322,
        m_rmse_step10: 30.78676224,
        m_rmse_step11: 31.61362457,
        m_rmse_step12: 32.70587158,
    },
    {
        rank: 0,
        model: 'AE',
        mlink: '#',
        paper: 'Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction',
        plink: 'https://ieeexplore.ieee.org/document/6910027',
        year: '2014',
        step3: 22.26559639,
        step6: 22.20932579,
        step9: 22.33516884,
        step12: 22.86505127,

        m_mae_step1: 22.41355515,
        m_mae_step2: 22.29116249,
        m_mae_step3: 22.26559639,
        m_mae_step4: 22.24703789,
        m_mae_step5: 22.19436836,
        m_mae_step6: 22.20932579,
        m_mae_step7: 22.23945236,
        m_mae_step8: 22.25611687,
        m_mae_step9: 22.33516884,
        m_mae_step10: 22.4339695,
        m_mae_step11: 22.6154995,
        m_mae_step12: 22.86505127,

        m_mape_step1: 0.142660722,
        m_mape_step2: 0.142894104,
        m_mape_step3: 0.142174885,
        m_mape_step4: 0.141859859,
        m_mape_step5: 0.142024338,
        m_mape_step6: 0.143047914,
        m_mape_step7: 0.14340879,
        m_mape_step8: 0.143588737,
        m_mape_step9: 0.144558519,
        m_mape_step10: 0.144771636,
        m_mape_step11: 0.146387741,
        m_mape_step12: 0.147788525,

        m_rmse_step1: 35.69591904,
        m_rmse_step2: 35.58623505,
        m_rmse_step3: 35.56190491,
        m_rmse_step4: 35.56820679,
        m_rmse_step5: 35.53823471,
        m_rmse_step6: 35.55658722,
        m_rmse_step7: 35.58311081,
        m_rmse_step8: 35.63165283,
        m_rmse_step9: 35.69576263,
        m_rmse_step10: 35.82838058,
        m_rmse_step11: 36.00590134,
        m_rmse_step12: 36.26901627,
    },
    {
        rank: 0,
        model: 'TGCN',
        mlink: '#',
        paper: 'T-gcn: A temporal graph convolutional network for traffic prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/',
        year: '2020',
        step3: 17.34808922,
        step6: 19.10945702,
        step9: 21.00698471,
        step12: 23.41667175,

        m_mae_step1: 15.91293812,
        m_mae_step2: 16.61928558,
        m_mae_step3: 17.34808922,
        m_mae_step4: 17.95075417,
        m_mae_step5: 18.51613426,
        m_mae_step6: 19.10945702,
        m_mae_step7: 19.73463249,
        m_mae_step8: 20.38133621,
        m_mae_step9: 21.00698471,
        m_mae_step10: 21.65891266,
        m_mae_step11: 22.45835876,
        m_mae_step12: 23.41667175,

        m_mape_step1: 0.157236159,
        m_mape_step2: 0.15710552,
        m_mape_step3: 0.158395097,
        m_mape_step4: 0.161074892,
        m_mape_step5: 0.164055571,
        m_mape_step6: 0.167457879,
        m_mape_step7: 0.173946664,
        m_mape_step8: 0.181906968,
        m_mape_step9: 0.189952761,
        m_mape_step10: 0.2006488,
        m_mape_step11: 0.211376563,
        m_mape_step12: 0.222743347,

        m_rmse_step1: 23.37343788,
        m_rmse_step2: 24.70959091,
        m_rmse_step3: 25.9335289,
        m_rmse_step4: 26.9682312,
        m_rmse_step5: 27.91535378,
        m_rmse_step6: 28.84576416,
        m_rmse_step7: 29.77428627,
        m_rmse_step8: 30.69328117,
        m_rmse_step9: 31.52424049,
        m_rmse_step10: 32.36058426,
        m_rmse_step11: 33.39934158,
        m_rmse_step12: 34.69421387,
    },
    ]

    export default {
        data() {
            return {
                PEMSD8_origin,
                rankingData: [],
                metrics: "MAE12"
            };
        },
        components: {
        },
        mounted() {
            this.rankingData = PEMSD8_origin;
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