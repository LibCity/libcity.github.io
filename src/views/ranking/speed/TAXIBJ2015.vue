<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">TAXIBJ2015</p>
      </div>
    </div>

    <div class="content">
        <div class="metric">
            View
            <a-select default-value="MAE6" style="width: 180px; font-size: 14px; margin-left: 10px" @change="handleChange">
                <a-select-option value="MAE6">
                    MAE @ 6 STEP
                </a-select-option>
                <a-select-option value="MAPE6" disabled>
                    MAPE @ 6 STEP
                </a-select-option>
                <a-select-option value="RMSE6" disabled>
                    RMSE @ 6 STEP
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
                        <th>3 STEP</th>
                        <th>6 STEP</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in speedModelMAE" :key="item.model">
                        <td width="6%">{{item.rank}}</td>
                        <td width="10%"><a :href="item.mlink">{{item.model}}</a></td>
                        <td width="43%"><a :href="item.plink" class="paper">{{item.paper}}</a></td>
                        <td width="5%">{{item.year}}</td>
                        <td width="18%">{{item.step3}}</td>
                        <td width="18%">{{item.step6}}</td>
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
        model: 'AGCRN',
        mlink: '#',
        paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
        plink: 'https://arxiv.org/abs/2007.02842',
        year: '2018',
        step3: '11.92832',
        step6: '12.79609',
    },
    {
        rank: '2',
        model: 'MTGNN',
        mlink: '#',
        paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
        plink: 'https://arxiv.org/abs/2005.11650',
        year: '2020',
        step3: '11.93508',
        step6: '13.06721',
    },
    {
        rank: '3',
        model: 'GWNET',
        mlink: '#',
        paper: 'Graph wavenet for deep spatial-temporal graph modeling',
        plink: 'https://arxiv.org/abs/1906.00121',
        year: '2019',
        step3: '12.25985',
        step6: '13.30650',
    },
    {
        rank: '4',
        model: 'STGCN',
        mlink: '#',
        paper: 'Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting',
        plink: 'https://www.ijcai.org/Proceedings/2018/0505',
        year: '2018',
        step3: '14.55931',
        step6: '15.51115',
    },
    {
        rank: '5',
        model: 'ASTGCN',
        mlink: '#',
        paper: 'Attention based spatial-temporal graph convolutional networks for traffic flow forecasting',
        plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/3881',
        year: '2019',
        step3: '14.39892',
        step6: '16.58867',
    },
    {
        rank: '6',
        model: 'DCRNN',
        mlink: '#',
        paper: 'Diffusion convolutional recurrent neural network: Data-driven traffic forecasting',
        plink: 'https://arxiv.org/abs/1707.01926',
        year: '2018',
        step3: '15.59390',
        step6: '17.42346',
    },
    {
        rank: '7',
        model: 'AE',
        mlink: '#',
        paper: 'Generalized Autoencoder: A Neural Network Framework for Dimensionality Reduction',
        plink: 'https://ieeexplore.ieee.org/document/6910027',
        year: '2014',
        step3: '16.62646',
        step6: '18.44431',
    },
    {
        rank: '8',
        model: 'GRU',
        mlink: '#',
        paper: 'Using LSTM and GRU neural network methods for traffic flow prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/7804912',
        year: '2016',
        step3: '19.22976',
        step6: '21.09705',
    },
    {
        rank: '9',
        model: 'TGCN',
        mlink: '#',
        paper: 'T-gcn: A temporal graph convolutional network for traffic prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/',
        year: '2020',
        step3: '19.27258',
        step6: '24.04792',
    },
    {
        rank: '10',
        model: 'Seq2Seq',
        mlink: '#',
        paper: 'Sequence to Sequence Learning with Neural Networks',
        plink: 'https://papers.nips.cc/paper/2014/hash/a14ac55a4f27472c5d894ec1c3c743d2-Abstract.html',
        year: '2014',
        step3: '18.98018',
        step6: '24.21356',
    },
    {
        rank: '11',
        model: 'RNN',
        mlink: '#',
        paper: 'Using LSTM and GRU neural network methods for traffic flow prediction',
        plink: 'https://ieeexplore.ieee.org/abstract/document/7804912',
        year: '2016',
        step3: '23.19847',
        step6: '35.29917',
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