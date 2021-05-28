<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">PEMS-BAY</p>
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
    const PEMS_BAY_origin = [
        {
            rank: 0,
            model: 'GWNET',
            mlink: '#',
            paper: 'Graph Wavenet for Deep Spatial-Temporal Graph Modeling',
            plink: 'https://arxiv.org/abs/1906.00121',
            year: '2019',
            step3: 1.317233086,
            step6: 1.634672761,
            step9: 1.802474618,
            step12: 1.914417505,

            m_mae_step1: 0.857503414,
            m_mae_step2: 1.129513025,
            m_mae_step3: 1.317233086,
            m_mae_step4: 1.45383203,
            m_mae_step5: 1.555249095,
            m_mae_step6: 1.634672761,
            m_mae_step7: 1.700960994,
            m_mae_step8: 1.755648851,
            m_mae_step9: 1.802474618,
            m_mae_step10: 1.843832612,
            m_mae_step11: 1.879278898,
            m_mae_step12: 1.914417505,

            m_mape_step1: 0.016505523,
            m_mape_step2: 0.022771893,
            m_mape_step3: 0.027564418,
            m_mape_step4: 0.031350676,
            m_mape_step5: 0.034270905,
            m_mape_step6: 0.03663848,
            m_mape_step7: 0.03858446,
            m_mape_step8: 0.040278487,
            m_mape_step9: 0.041706078,
            m_mape_step10: 0.042936664,
            m_mape_step11: 0.044025842,
            m_mape_step12: 0.045043543,

            m_rmse_step1: 1.557686806,
            m_rmse_step2: 2.254713058,
            m_rmse_step3: 2.78249383,
            m_rmse_step4: 3.177927256,
            m_rmse_step5: 3.47552228,
            m_rmse_step6: 3.703932285,
            m_rmse_step7: 3.889703751,
            m_rmse_step8: 4.036758423,
            m_rmse_step9: 4.154026985,
            m_rmse_step10: 4.251091957,
            m_rmse_step11: 4.327308178,
            m_rmse_step12: 4.404269218,
        },
        {
            rank: 0,
            model: 'MTGNN',
            mlink: '#',
            paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
            plink: 'https://arxiv.org/abs/2005.11650',
            year: '2020',
            step3: 1.330717564,
            step6: 1.65684998,
            step9: 1.830839753,
            step12: 1.954051137,

            m_mae_step1: 0.868918359,
            m_mae_step2: 1.140851259,
            m_mae_step3: 1.330717564,
            m_mae_step4: 1.469416142,
            m_mae_step5: 1.57374084,
            m_mae_step6: 1.65684998,
            m_mae_step7: 1.725528359,
            m_mae_step8: 1.782338262,
            m_mae_step9: 1.830839753,
            m_mae_step10: 1.87438798,
            m_mae_step11: 1.913544536,
            m_mae_step12: 1.954051137,

            m_mape_step1: 0.01668698,
            m_mape_step2: 0.022997182,
            m_mape_step3: 0.027925584,
            m_mape_step4: 0.031782493,
            m_mape_step5: 0.034853522,
            m_mape_step6: 0.037321355,
            m_mape_step7: 0.03941799,
            m_mape_step8: 0.041145034,
            m_mape_step9: 0.042609747,
            m_mape_step10: 0.043912422,
            m_mape_step11: 0.045049824,
            m_mape_step12: 0.046192467,

            m_rmse_step1: 1.566528082,
            m_rmse_step2: 2.260257483,
            m_rmse_step3: 2.797163725,
            m_rmse_step4: 3.210089922,
            m_rmse_step5: 3.520379782,
            m_rmse_step6: 3.759927511,
            m_rmse_step7: 3.948573112,
            m_rmse_step8: 4.095731258,
            m_rmse_step9: 4.214382172,
            m_rmse_step10: 4.316540241,
            m_rmse_step11: 4.403265476,
            m_rmse_step12: 4.488767147,
        },
        {
            rank: 0,
            model: 'DCRNN',
            mlink: '#',
            paper: 'Diffusion convolutional recurrent neural network: Data-driven traffic forecasting',
            plink: 'https://arxiv.org/abs/1707.01926',
            year: '2018',
            step3: 1.313929796,
            step6: 1.652003407,
            step9: 1.841412902,
            step12: 1.96604085,

            m_mae_step1: 0.848314524,
            m_mae_step2: 1.124167085,
            m_mae_step3: 1.313929796,
            m_mae_step4: 1.455781221,
            m_mae_step5: 1.564353466,
            m_mae_step6: 1.652003407,
            m_mae_step7: 1.725697517,
            m_mae_step8: 1.787886858,
            m_mae_step9: 1.841412902,
            m_mae_step10: 1.887333989,
            m_mae_step11: 1.927678704,
            m_mae_step12: 1.96604085,

            m_mape_step1: 0.016326521,
            m_mape_step2: 0.022630956,
            m_mape_step3: 0.027422428,
            m_mape_step4: 0.031334415,
            m_mape_step5: 0.034503739,
            m_mape_step6: 0.037152618,
            m_mape_step7: 0.039443508,
            m_mape_step8: 0.04138767,
            m_mape_step9: 0.043020427,
            m_mape_step10: 0.044378143,
            m_mape_step11: 0.045528214,
            m_mape_step12: 0.046587929,

            m_rmse_step1: 1.537957907,
            m_rmse_step2: 2.234685183,
            m_rmse_step3: 2.774805546,
            m_rmse_step4: 3.195387363,
            m_rmse_step5: 3.52022028,
            m_rmse_step6: 3.776569843,
            m_rmse_step7: 3.986632824,
            m_rmse_step8: 4.159185886,
            m_rmse_step9: 4.300885677,
            m_rmse_step10: 4.416303635,
            m_rmse_step11: 4.513619423,
            m_rmse_step12: 4.600404739,

        },
        {
            rank: 0,
            model: 'AGCRN',
            mlink: '#',
            paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
            plink: 'https://arxiv.org/abs/2007.02842',
            year: '2018',
            step3: 1.367542028,
            step6: 1.68644464,
            step9: 1.844792604,
            step12: 1.966456294,

            m_mae_step1: 0.943254411,
            m_mae_step2: 1.186352849,
            m_mae_step3: 1.367542028,
            m_mae_step4: 1.504779339,
            m_mae_step5: 1.606099129,
            m_mae_step6: 1.68644464,
            m_mae_step7: 1.74995029,
            m_mae_step8: 1.802184224,
            m_mae_step9: 1.844792604,
            m_mae_step10: 1.882825017,
            m_mae_step11: 1.921007872,
            m_mae_step12: 1.966456294,

            m_mape_step1: 0.0191298,
            m_mape_step2: 0.024724899,
            m_mape_step3: 0.029343201,
            m_mape_step4: 0.03307645,
            m_mape_step5: 0.035824399,
            m_mape_step6: 0.0380367,
            m_mape_step7: 0.039836947,
            m_mape_step8: 0.041422024,
            m_mape_step9: 0.042698178,
            m_mape_step10: 0.043733742,
            m_mape_step11: 0.0447708,
            m_mape_step12: 0.045890179,

            m_rmse_step1: 1.721888065,
            m_rmse_step2: 2.354927063,
            m_rmse_step3: 2.867988348,
            m_rmse_step4: 3.27675724,
            m_rmse_step5: 3.587590933,
            m_rmse_step6: 3.827363014,
            m_rmse_step7: 4.006102085,
            m_rmse_step8: 4.144904613,
            m_rmse_step9: 4.265449524,
            m_rmse_step10: 4.374513626,
            m_rmse_step11: 4.475839615,
            m_rmse_step12: 4.587117672,
        },
        {
            rank: 0,
            model: 'STGCN',
            mlink: '#',
            paper: 'Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting',
            plink: 'https://www.ijcai.org/Proceedings/2018/0505',
            year: '2018',
            step3: 1.450409293,
            step6: 1.767900348,
            step9: 1.940572739,
            step12: 2.056560993,

            m_mae_step1: 1.241303444,
            m_mae_step2: 1.272721767,
            m_mae_step3: 1.450409293,
            m_mae_step4: 1.583973408,
            m_mae_step5: 1.687048912,
            m_mae_step6: 1.767900348,
            m_mae_step7: 1.835595489,
            m_mae_step8: 1.893149614,
            m_mae_step9: 1.940572739,
            m_mae_step10: 1.984394789,
            m_mae_step11: 2.02146101,
            m_mae_step12: 2.056560993,

            m_mape_step1: 0.026208749,
            m_mape_step2: 0.026164116,
            m_mape_step3: 0.030696817,
            m_mape_step4: 0.034198273,
            m_mape_step5: 0.037147429,
            m_mape_step6: 0.039210107,
            m_mape_step7: 0.041710436,
            m_mape_step8: 0.042829249,
            m_mape_step9: 0.04450424,
            m_mape_step10: 0.04560598,
            m_mape_step11: 0.04678899,
            m_mape_step12: 0.047559738,

            m_rmse_step1: 2.13414669,
            m_rmse_step2: 2.383548021,
            m_rmse_step3: 2.871806383,
            m_rmse_step4: 3.241825104,
            m_rmse_step5: 3.525333643,
            m_rmse_step6: 3.742093563,
            m_rmse_step7: 3.906446457,
            m_rmse_step8: 4.043199062,
            m_rmse_step9: 4.139858246,
            m_rmse_step10: 4.22990799,
            m_rmse_step11: 4.291146755,
            m_rmse_step12: 4.355161667,
        },
        {
            rank: 0,
            model: 'GMAN',
            mlink: '#',
            paper: 'GMAN: A Graph Multi-Attention Network for Traffic Prediction',
            plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/5477',
            year: '2020',
            step3: 1.521445155,
            step6: 1.828175068,
            step9: 1.998253703,
            step12: 2.114692688,

            m_mae_step1: 1.125500441,
            m_mae_step2: 1.353003979,
            m_mae_step3: 1.521445155,
            m_mae_step4: 1.648182511,
            m_mae_step5: 1.748183846,
            m_mae_step6: 1.828175068,
            m_mae_step7: 1.893953443,
            m_mae_step8: 1.949676514,
            m_mae_step9: 1.998253703,
            m_mae_step10: 2.040922403,
            m_mae_step11: 2.078896046,
            m_mae_step12: 2.114692688,

            m_mape_step1: 0.022199463,
            m_mape_step2: 0.027716596,
            m_mape_step3: 0.031994887,
            m_mape_step4: 0.035366327,
            m_mape_step5: 0.038103811,
            m_mape_step6: 0.040306974,
            m_mape_step7: 0.042137384,
            m_mape_step8: 0.043649245,
            m_mape_step9: 0.044952124,
            m_mape_step10: 0.046072811,
            m_mape_step11: 0.047064614,
            m_mape_step12: 0.048016075,

            m_rmse_step1: 1.939200044,
            m_rmse_step2: 2.502240419,
            m_rmse_step3: 2.950233459,
            m_rmse_step4: 3.282125711,
            m_rmse_step5: 3.535974264,
            m_rmse_step6: 3.733086109,
            m_rmse_step7: 3.882786036,
            m_rmse_step8: 4.005829811,
            m_rmse_step9: 4.107138157,
            m_rmse_step10: 4.190578461,
            m_rmse_step11: 4.260962486,
            m_rmse_step12: 4.321457863,
        },
        {
            rank: 0,
            model: 'ASTGCN',
            mlink: '#',
            paper: 'Attention based spatial-temporal graph convolutional networks for traffic flow forecasting',
            plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/3881',
            year: '2019',
            step3: 1.496554732,
            step6: 1.954262972,
            step9: 2.253344536,
            step12: 2.522253752,

            m_mae_step1: 0.959167957,
            m_mae_step2: 1.265708447,
            m_mae_step3: 1.496554732,
            m_mae_step4: 1.682306528,
            m_mae_step5: 1.826324224,
            m_mae_step6: 1.954262972,
            m_mae_step7: 2.063279152,
            m_mae_step8: 2.160314798,
            m_mae_step9: 2.253344536,
            m_mae_step10: 2.347047329,
            m_mae_step11: 2.433424234,
            m_mae_step12: 2.522253752,

            m_mape_step1: 0.019549424,
            m_mape_step2: 0.026637457,
            m_mape_step3: 0.032356605,
            m_mape_step4: 0.037207827,
            m_mape_step5: 0.041132949,
            m_mape_step6: 0.044519011,
            m_mape_step7: 0.047384713,
            m_mape_step8: 0.049868591,
            m_mape_step9: 0.052266583,
            m_mape_step10: 0.05448395,
            m_mape_step11: 0.056706849,
            m_mape_step12: 0.058882017,

            m_rmse_step1: 1.75325191,
            m_rmse_step2: 2.465423584,
            m_rmse_step3: 3.023877382,
            m_rmse_step4: 3.462608576,
            m_rmse_step5: 3.80658102,
            m_rmse_step6: 4.090635777,
            m_rmse_step7: 4.327079773,
            m_rmse_step8: 4.528690338,
            m_rmse_step9: 4.708185196,
            m_rmse_step10: 4.871789932,
            m_rmse_step11: 5.027686596,
            m_rmse_step12: 5.171713352,
        },
        {
            rank: 0,
            model: 'GRU',
            mlink: '#',
            paper: 'Using LSTM and GRU neural network methods for traffic flow prediction',
            plink: 'https://ieeexplore.ieee.org/abstract/document/7804912',
            year: '2016',
            step3: 2.490625381,
            step6: 2.508490086,
            step9: 2.535393953,
            step12: 2.57500267,

            m_mae_step1: 2.480051517,
            m_mae_step2: 2.482344627,
            m_mae_step3: 2.490625381,
            m_mae_step4: 2.496524811,
            m_mae_step5: 2.500797272,
            m_mae_step6: 2.508490086,
            m_mae_step7: 2.516708612,
            m_mae_step8: 2.525750875,
            m_mae_step9: 2.535393953,
            m_mae_step10: 2.546352625,
            m_mae_step11: 2.558960199,
            m_mae_step12: 2.57500267,

            m_mape_step1: 0.058738798,
            m_mape_step2: 0.058935836,
            m_mape_step3: 0.059239618,
            m_mape_step4: 0.059515335,
            m_mape_step5: 0.059768926,
            m_mape_step6: 0.060103532,
            m_mape_step7: 0.06045866,
            m_mape_step8: 0.060867239,
            m_mape_step9: 0.061306074,
            m_mape_step10: 0.061785437,
            m_mape_step11: 0.062330086,
            m_mape_step12: 0.06308227,

            m_rmse_step1: 5.133162975,
            m_rmse_step2: 5.169201374,
            m_rmse_step3: 5.204359531,
            m_rmse_step4: 5.2340765,
            m_rmse_step5: 5.25694561,
            m_rmse_step6: 5.287732124,
            m_rmse_step7: 5.318385124,
            m_rmse_step8: 5.350336075,
            m_rmse_step9: 5.383542538,
            m_rmse_step10: 5.419529438,
            m_rmse_step11: 5.458177567,
            m_rmse_step12: 5.509566784,
        },
        {
            rank: 0,
            model: 'Seq2Seq',
            mlink: '#',
            paper: 'Sequence to Sequence Learning with Neural Networks',
            plink: 'https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html',
            year: '2014',
            step3: 2.442513943,
            step6: 2.446320295,
            step9: 2.492647886,
            step12: 2.580511332,

            m_mae_step1: 2.545048952,
            m_mae_step2: 2.457653999,
            m_mae_step3: 2.442513943,
            m_mae_step4: 2.440240383,
            m_mae_step5: 2.441186905,
            m_mae_step6: 2.446320295,
            m_mae_step7: 2.457454681,
            m_mae_step8: 2.472849846,
            m_mae_step9: 2.492647886,
            m_mae_step10: 2.516484976,
            m_mae_step11: 2.545600414,
            m_mae_step12: 2.580511332,

            m_mape_step1: 0.061583076,
            m_mape_step2: 0.058504902,
            m_mape_step3: 0.057939678,
            m_mape_step4: 0.057794452,
            m_mape_step5: 0.05780055,
            m_mape_step6: 0.057948768,
            m_mape_step7: 0.058178008,
            m_mape_step8: 0.058471423,
            m_mape_step9: 0.05886057,
            m_mape_step10: 0.059357226,
            m_mape_step11: 0.059984792,
            m_mape_step12: 0.060759738,

            m_rmse_step1: 5.211314678,
            m_rmse_step2: 5.129349709,
            m_rmse_step3: 5.107882023,
            m_rmse_step4: 5.116268635,
            m_rmse_step5: 5.124783039,
            m_rmse_step6: 5.144079208,
            m_rmse_step7: 5.173463821,
            m_rmse_step8: 5.211371422,
            m_rmse_step9: 5.25851965,
            m_rmse_step10: 5.315991879,
            m_rmse_step11: 5.385982513,
            m_rmse_step12: 5.470291138,
        },
        {
            rank: 0,
            model: 'AE',
            mlink: '#',
            paper: 'Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction',
            plink: 'https://ieeexplore.ieee.org/document/6910027',
            year: '2014',
            step3: 2.569958448,
            step6: 2.572859526,
            step9: 2.626580238,
            step12: 2.723689795,

            m_mae_step1: 2.59362483,
            m_mae_step2: 2.579221249,
            m_mae_step3: 2.569958448,
            m_mae_step4: 2.565395594,
            m_mae_step5: 2.565946579,
            m_mae_step6: 2.572859526,
            m_mae_step7: 2.585615635,
            m_mae_step8: 2.603767157,
            m_mae_step9: 2.626580238,
            m_mae_step10: 2.654663563,
            m_mae_step11: 2.686751127,
            m_mae_step12: 2.723689795,

            m_mape_step1: 0.063843451,
            m_mape_step2: 0.063234784,
            m_mape_step3: 0.062807344,
            m_mape_step4: 0.062561639,
            m_mape_step5: 0.062489022,
            m_mape_step6: 0.062600054,
            m_mape_step7: 0.062902927,
            m_mape_step8: 0.063357234,
            m_mape_step9: 0.063946806,
            m_mape_step10: 0.064680532,
            m_mape_step11: 0.065536693,
            m_mape_step12: 0.066535003,

            m_rmse_step1: 5.370556831,
            m_rmse_step2: 5.330964565,
            m_rmse_step3: 5.30209589,
            m_rmse_step4: 5.285309792,
            m_rmse_step5: 5.279687405,
            m_rmse_step6: 5.288401127,
            m_rmse_step7: 5.310306549,
            m_rmse_step8: 5.345190525,
            m_rmse_step9: 5.391934872,
            m_rmse_step10: 5.45192337,
            m_rmse_step11: 5.523836136,
            m_rmse_step12: 5.608017921,
        },
        {
            rank: 0,
            model: 'STG2Seq',
            mlink: '#',
            paper: 'STG2Seq: Spatial-temporal Graph to Sequence Model for Multi-step Passenger Demand Forecasting',
            plink: 'https://arxiv.org/abs/1905.10069',
            year: '2019',
            step3: 2.192012072,
            step6: 2.424111366,
            step9: 2.604333401,
            step12: 2.768119335,

            m_mae_step1: 1.908781528,
            m_mae_step2: 2.041549683,
            m_mae_step3: 2.192012072,
            m_mae_step4: 2.273479939,
            m_mae_step5: 2.363734484,
            m_mae_step6: 2.424111366,
            m_mae_step7: 2.492698908,
            m_mae_step8: 2.545662642,
            m_mae_step9: 2.604333401,
            m_mae_step10: 2.656032801,
            m_mae_step11: 2.712737799,
            m_mae_step12: 2.768119335,

            m_mape_step1: 0.042424567,
            m_mape_step2: 0.046142429,
            m_mape_step3: 0.050303444,
            m_mape_step4: 0.052709654,
            m_mape_step5: 0.0552302,
            m_mape_step6: 0.056911804,
            m_mape_step7: 0.058803353,
            m_mape_step8: 0.060218289,
            m_mape_step9: 0.061782066,
            m_mape_step10: 0.063095964,
            m_mape_step11: 0.0645357,
            m_mape_step12: 0.065888219,

            m_rmse_step1: 3.572165012,
            m_rmse_step2: 3.870104074,
            m_rmse_step3: 4.230829716,
            m_rmse_step4: 4.448564529,
            m_rmse_step5: 4.674290657,
            m_rmse_step6: 4.826023102,
            m_rmse_step7: 4.995254993,
            m_rmse_step8: 5.124192715,
            m_rmse_step9: 5.265581131,
            m_rmse_step10: 5.386611462,
            m_rmse_step11: 5.520673275,
            m_rmse_step12: 5.650220871,
        },
        {
            rank: 0,
            model: 'TGCN',
            mlink: '#',
            paper: 'T-gcn: A temporal graph convolutional network for traffic prediction',
            plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/',
            year: '2020',
            step3: 2.632635593,
            step6: 2.739435196,
            step9: 2.906158447,
            step12: 3.103404999,

            m_mae_step1: 2.587588787,
            m_mae_step2: 2.60854578,
            m_mae_step3: 2.632635593,
            m_mae_step4: 2.661967993,
            m_mae_step5: 2.696000099,
            m_mae_step6: 2.739435196,
            m_mae_step7: 2.788401604,
            m_mae_step8: 2.843111515,
            m_mae_step9: 2.906158447,
            m_mae_step10: 2.969862461,
            m_mae_step11: 3.03798604,
            m_mae_step12: 3.103404999,

            m_mape_step1: 0.062867194,
            m_mape_step2: 0.063152783,
            m_mape_step3: 0.063606896,
            m_mape_step4: 0.064293422,
            m_mape_step5: 0.065137349,
            m_mape_step6: 0.06620612,
            m_mape_step7: 0.067390382,
            m_mape_step8: 0.068846896,
            m_mape_step9: 0.070369221,
            m_mape_step10: 0.072067507,
            m_mape_step11: 0.073858663,
            m_mape_step12: 0.07576818,

            m_rmse_step1: 5.228998661,
            m_rmse_step2: 5.247745514,
            m_rmse_step3: 5.287768841,
            m_rmse_step4: 5.350580692,
            m_rmse_step5: 5.429993153,
            m_rmse_step6: 5.525117874,
            m_rmse_step7: 5.6279459,
            m_rmse_step8: 5.751735687,
            m_rmse_step9: 5.874735832,
            m_rmse_step10: 6.014170647,
            m_rmse_step11: 6.158379555,
            m_rmse_step12: 6.314451694,
        },
    ]

    export default {
        data() {
            return {
                PEMS_BAY_origin,
                rankingData: [],
                metrics: "MAE12"
            };
        },
        components: {
        },
        mounted() {
            this.rankingData = PEMS_BAY_origin;
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