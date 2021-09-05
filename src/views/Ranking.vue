<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">Ranking</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          LibCity tests existing models on different datasets <br>
          and shows performances and rankings of these models for each dataset.
        </p>
      </div>
    </div>

    <div class="content">
      <div class="task-ranking">
        <p class="task-name">Traffic State Prediction</p>
        <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
        <rank-table :rankdata="speed"></rank-table>
        <br>
        <br>

        <!-- <p class="task-name">Trajectory Next-Location Prediction</p>
        <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
        <rank-table :rankdata="location"></rank-table>
        <br>
        <br> -->
      </div>
    </div>
  </div>
</template>

<script>
import rankTable from "./ranking/rankingTable"

const speed = [
  {
    dataset: 'METR-LA',
    best: 'MTGNN',
    paper: '[KDD2020]Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
    datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#metr-la',
    mlink: '#',
    plink: 'https://arxiv.org/abs/2005.11650',
    dlink: 'METR-LA'
  },
  {
    dataset: 'PEMS-BAY',
    best: 'GWNET',
    paper: '[IJCAI2019]Graph Wavenet for Deep Spatial-Temporal Graph Modeling',
    datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pems-bay',
    mlink: '#',
    plink: 'https://arxiv.org/abs/1906.00121',
    dlink: 'PEMS-BAY'
  },
  {
    dataset: 'PEMSD4',
    best: 'GWNET',
    paper: '[IJCAI2019]Graph Wavenet for Deep Spatial-Temporal Graph Modeling',
    datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd4',
    mlink: '#',
    plink: 'https://arxiv.org/abs/1906.00121',
    dlink: 'PEMSD4'
  },
  {
    dataset: 'PEMSD8',
    best: 'GWNET',
    paper: '[IJCAI2019]Graph Wavenet for Deep Spatial-Temporal Graph Modeling',
    datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd8',
    mlink: '#',
    plink: 'https://arxiv.org/abs/1906.00121',
    dlink: 'PEMSD8'
  },
  {
    dataset: 'T-Drive20150206',
    best: 'MTGNN',
    paper: '[KDD2020]Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
    datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#t-drive20150206',
    mlink: '#',
    plink: 'https://arxiv.org/abs/2005.11650',
    dlink: 'T-Drive20150206'
  },
  {
    dataset: 'TAXIBJ2015',
    best: 'AGCRN',
    paper: '[NeurIPS2020]Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
    datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#taxibj',
    mlink: '#',
    plink: 'https://arxiv.org/abs/2007.02842',
    dlink: 'TAXIBJ2015'
  },
  {
    dataset: 'NYCTAXI202001-202003-3600',
    best: 'DCRNN',
    paper: '[ICLR2018]Diffusion Convolutional Recurrent Neural Network: Data-Driven Traffic Forecasting',
    datasetlink: '#',
    mlink: '#',
    plink: 'https://arxiv.org/abs/1707.01926',
    dlink: 'NYCTAXI202001-202003-3600'
  },
  // {
  //     dataset: 'TAXIBJ',
  //     best: 'MTGNN',
  //     paper: 'Spatio-Temporal Graph Structure Learning for Traffic Forecasting',
  //     datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#taxibj',
  //     mlink: '#',
  //     plink: 'https://arxiv.org/abs/2005.11650',
  //     dlink: 'TAXIBJ'
  // },
  {
    dataset: 'NYCBike20140409',
    best: 'MTGNN',
    paper: '[KDD2020]Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
    datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nycbike20140409',
    mlink: '#',
    plink: 'https://arxiv.org/abs/2005.11650',
    dlink: 'NYCBike20140409'
  },
]

const location = [
  {
    dataset: 'foursqaure-tky',
    best: 'DeepMove',
    paper: '[WWW2018]DeepMove: Predicting Human Mobility with Attentional Recurrent Networks',
    datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#foursquare',
    mlink: '#',
    plink: 'https://dl.acm.org/doi/10.1145/3178876.3186058',
    dlink: 'foursqaure-tky'
  },
  {
    dataset: 'Gowalla',
    best: 'DeepMove',
    paper: '[WWW2018]DeepMove: Predicting Human Mobility with Attentional Recurrent Networks',
    datasetlink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#gowalla',
    mlink: '#',
    plink: 'https://dl.acm.org/doi/10.1145/3178876.3186058',
    dlink: 'Gowalla'
  },
]

export default {
  data() {
    return {
      speed,
      location
    };
  },
  components: {
    rankTable
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
  min-height: 300px;
  background: rgb(27, 140, 233)
    linear-gradient(to right, rgb(27, 140, 233), rgb(11, 247, 188));
  /* border: blue solid 1px; */
}
.content {
  width: 80%;
  height: auto;
  margin: 50px auto 0 auto;
  /* border: blue solid 3px; */
}
.task-name {
  font-size: 32px;
  font-weight: 700;
  font-family: "Open Sans", "Microsoft YaHei", Arial, Helvetica, sans-serif;
  margin-bottom: 0;
}
</style>