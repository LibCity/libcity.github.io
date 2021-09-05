<template>
    <div class="container">
        <div class="header">
            <div style="padding-top: 20px;color: white;">
                <p style="margin: 20px 0 30px 130px; font-size: 60px">模型</p>
                <p style="margin: 0px 0 20px 130px; font-size: 30px">
                    LibCity支持4类主流的时空数据挖掘任务，并实现了18个常用的模型。
                </p>
            </div>
        </div>

        <div class="content">
            <div>
                <p class="title">模型列表</p>
                <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
                <p style="text-indent: 2em">截至目前，LibCity支持4类主流的时空数据挖掘任务：交通流量预测、交通速度预测、交通需求量预测和轨迹下一条预测。LibCity已经实现了18个常用的模型。我们在下表中总结了这些模型的信息。</p>

                <!-- <a-divider style="font-size: 24px">交通流量预测</a-divider>
                <model-table-cn :content="flow"></model-table-cn>
                <br>

                <a-divider style="font-size: 24px">交通速度预测</a-divider>
                <model-table-cn :content="speed"></model-table-cn>
                <br>

                <a-divider style="font-size: 24px">交通需求量预测</a-divider>
                <model-table-cn :content="demand"></model-table-cn>
                <br>
                frb隐藏以上内容 -->
                <a-divider style="font-size: 24px">交通状态预测</a-divider>
                <model-table-cn :content="state"></model-table-cn>
                <br>

                <a-divider style="font-size: 24px">轨迹位置预测</a-divider>
                <model-table-cn :content="location"></model-table-cn>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
    import modelTableCn from './modelTableCN.vue'

    // const location = [
    //     {
    //         model: 'STAN',
    //         mlink: '#',
    //         from: 'WWW',
    //         year: '2021',
    //         paper: 'STAN: Spatio-Temporal Attention Network for Next Location Recommendation',
    //         plink: 'https://arxiv.org/pdf/2102.04095v1.pdf'
    //     },
    //     {
    //         model: 'GeoSAN',
    //         mlink: '#',
    //         from: 'SIGKDD',
    //         year: '2020',
    //         paper: 'Geography-Aware Sequential Location Recommendation',
    //         plink: 'https://dl.acm.org/doi/pdf/10.1145/3394486.3403252'
    //     },
    //     {
    //         model: 'LSTPM',
    //         mlink: '#',
    //         from: 'AAAI',
    //         year: '2020',
    //         paper: 'Where to Go Next: Modeling Long- and Short-Term User Preferences for Point-of-Interest Recommendation',
    //         plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/5353'
    //     },
    //     {
    //         model: 'Flashback(RNN)',
    //         mlink: '#',
    //         from: 'IJCAI',
    //         year: '2020',
    //         paper: 'Location Prediction over Sparse User Mobility Traces Using RNNs: Flashback in Hidden States',
    //         plink: 'https://www.ijcai.org/Proceedings/2020/0302.pdf'
    //     },
    //     {
    //         model: 'TEMN',
    //         mlink: '#',
    //         from: 'SIGKDD',
    //         year: '2019',
    //         paper: 'Topic-enhanced memory networks for personalised point-of-interest recommendation',
    //         plink: 'https://dl.acm.org/doi/10.1145/3292500.3330781'
    //     },
    //     {
    //         model: 'ATST-LSTM',
    //         mlink: '#',
    //         from: 'IEEE TSC',
    //         year: '2019',
    //         paper: 'An Attention-based Spatiotemporal LSTM Network for Next POI Recommendation',
    //         plink: 'https://ieeexplore.ieee.org/abstract/document/8723186'
    //     },
    //     {
    //         model: 'DeepMove',
    //         mlink: '#',
    //         from: 'WWW',
    //         year: '2018',
    //         paper: 'DeepMove: Predicting Human Mobility with Attentional Recurrent Networks',
    //         plink: 'https://dl.acm.org/doi/10.1145/3178876.3186058'
    //     },
    //     {
    //         model: 'HST-LSTM',
    //         mlink: '#',
    //         from: 'IJCAI',
    //         year: '2018',
    //         paper: 'HST-LSTM: A Hierarchical Spatial-Temporal Long-Short Term Memory Network for Location Prediction',
    //         plink: 'https://www.ijcai.org/Proceedings/2018/0324.pdf'
    //     },
    //     {
    //         model: 'CAPE',
    //         mlink: '#',
    //         from: 'IJCAI',
    //         year: '2018',
    //         paper: 'Content-Aware Hierarchical Point-of-Interest Embedding Model for Successive POI Recommendation',
    //         plink: 'https://www.ijcai.org/Proceedings/2018/0458.pdf'
    //     },
    //     {
    //         model: 'TMCA',
    //         mlink: '#',
    //         from: 'ICDM',
    //         year: '2018',
    //         paper: 'Next point-of-interest recommendation with temporal and multi-level context attention',
    //         plink: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8594953'
    //     },
    //     {
    //         model: 'CARA',
    //         mlink: '#',
    //         from: 'SIGIR',
    //         year: '2018',
    //         paper: 'A Contextual Attention Recurrent Architecture for Context-Aware Venue Recommendation',
    //         plink: 'http://vigir.missouri.edu/~gdesouza/Research/Conference_CDs/IEEE_SSCI_2016/pdf/SSCI16_paper_377.pdf'
    //     },
    //     {
    //         model: 'Serm',
    //         mlink: '#',
    //         from: 'CIKM',
    //         year: '2017',
    //         paper: 'SERM: A Recurrent Model for Next Location Prediction in Semantic Trajectories',
    //         plink: 'https://dl.acm.org/doi/10.1145/3132847.3133056'
    //     },
    //     {
    //         model: 'ST-RNN',
    //         mlink: '#',
    //         from: 'AAAI',
    //         year: '2016',
    //         paper: 'Predicting the Next Location: A Recurrent Model with Spatial and Temporal Contexts',
    //         plink: 'https://www.aaai.org/ocs/index.php/AAAI/AAAI16/paper/viewPDFInterstitial/11900/11583'
    //     },
    //     {
    //         model: 'STF-RNN',
    //         mlink: '#',
    //         from: 'SSCI',
    //         year: '2016',
    //         paper: 'STF-RNN: Space Time Features-based Recurrent Neural Network for Predicting People Next Location',
    //         plink: 'http://vigir.missouri.edu/~gdesouza/Research/Conference_CDs/IEEE_SSCI_2016/pdf/SSCI16_paper_377.pdf'
    //     },
    //     {
    //         model: 'FPMC',
    //         mlink: '#',
    //         from: 'WWW',
    //         year: '2010',
    //         paper: 'Factorizing Personalized Markov Chains for Next-Basket Recommendation',
    //         plink: 'https://dl.acm.org/doi/10.1145/1772690.1772773'
    //     },
    // ]
    // frb替换以上内容
    const location = [
        {
            model: 'LSTPM',
            mlink: '#',
            from: 'AAAI',
            year: '2020',
            paper: 'Where to Go Next: Modeling Long- and Short-Term User Preferences for Point-of-Interest Recommendation',
            plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/5353'
        },
        {
            model: 'DeepMove',
            mlink: '#',
            from: 'WWW',
            year: '2018',
            paper: 'DeepMove: Predicting Human Mobility with Attentional Recurrent Networks',
            plink: 'https://dl.acm.org/doi/10.1145/3178876.3186058'
        },
        {
            model: 'Serm',
            mlink: '#',
            from: 'CIKM',
            year: '2017',
            paper: 'SERM: A Recurrent Model for Next Location Prediction in Semantic Trajectories',
            plink: 'https://dl.acm.org/doi/10.1145/3132847.3133056'
        },
        {
            model: 'ST-RNN',
            mlink: '#',
            from: 'AAAI',
            year: '2016',
            paper: 'Predicting the Next Location: A Recurrent Model with Spatial and Temporal Contexts',
            plink: 'https://www.aaai.org/ocs/index.php/AAAI/AAAI16/paper/viewPDFInterstitial/11900/11583'
        },
        {
            model: 'FPMC',
            mlink: '#',
            from: 'WWW',
            year: '2010',
            paper: 'Factorizing Personalized Markov Chains for Next-Basket Recommendation',
            plink: 'https://dl.acm.org/doi/10.1145/1772690.1772773'
        },
    ]

    // const speed = [
    //     {
    //         model: 'HGCN',
    //         mlink: '#',
    //         from: 'AAAI',
    //         year: '2021',
    //         paper: 'Hierarchical Graph Convolution Networks for Traffic Forecasting',
    //         plink: 'https://github.com/guokan987/HGCN/blob/main/paper/3399.GuoK.pdf' 
    //     },
    //     {
    //         model: 'FC-GAGA',
    //         mlink: '#',
    //         from: 'AAAI',
    //         year: '2021',
    //         paper: 'FC-GAGA: Fully Connected Gated Graph Architecture for Spatio-Temporal Traffic Forecasting',
    //         plink: 'https://arxiv.org/abs/2007.15531' 
    //     },
    //     {
    //         model: 'GTS',
    //         mlink: '#',
    //         from: 'ICLR',
    //         year: '2021',
    //         paper: 'Discrete Graph Structure Learning for Forecasting Multiple Time Series',
    //         plink: 'https://arxiv.org/pdf/2101.06861' 
    //     },
    //     {
    //         model: 'Curb-GAN',
    //         mlink: '#',
    //         from: 'SIGKDD',
    //         year: '2020',
    //         paper: 'Curb-GAN: Conditional Urban Traffic Estimation through Spatio-Temporal Generative Adversarial Networks',
    //         plink: 'https://dl.acm.org/doi/pdf/10.1145/3394486.3403127' 
    //     },
    //     {
    //         model: 'MTGNN',
    //         mlink: '#',
    //         from: 'SIGKDD',
    //         year: '2020',
    //         paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
    //         plink: 'https://arxiv.org/abs/2005.11650' 
    //     },
    //     {
    //         model: 'MRA-BGCN',
    //         mlink: '#',
    //         from: 'AAAI',
    //         year: '2020',
    //         paper: 'Multi-Range Attentive Bicomponent Graph Convolutional Network for Traffic Forecasting',
    //         plink: 'https://arxiv.org/ftp/arxiv/papers/1911/1911.12093.pdf' 
    //     },
    //     {
    //         model: 'GMAN',
    //         mlink: '#',
    //         from: 'AAAI',
    //         year: '2020',
    //         paper: 'Gman: A graph multi-attention network for traffic prediction',
    //         plink: 'https://www.aaai.org/ojs/index.php/AAAI/article/view/5477' 
    //     },
    //     {
    //         model: 'AF',
    //         mlink: '#',
    //         from: 'ICDE',
    //         year: '2020',
    //         paper: 'Stochastic origin-destination matrix forecasting using dual-stage graph convolutional, recurrent neural networks',
    //         plink: 'https://ieeexplore.ieee.org/abstract/document/9101647' 
    //     },
    //     {
    //         model: 'TGC-LSTM',
    //         mlink: '#',
    //         from: 'TITS',
    //         year: '2020',
    //         paper: 'Traffic Graph Convolutional Recurrent Neural Network: A Deep Learning Framework for Network-Scale Traffic Learning and Forecasting',
    //         plink: 'https://ieeexplore.ieee.org/abstract/document/8917706'
    //     },
    //     {
    //         model: 'T-GCN',
    //         mlink: '#',
    //         from: 'TITS',
    //         year: '2020',
    //         paper: 'T-gcn: A temporal graph convolutional network for traffic prediction',
    //         plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/'
    //     },
    //     {
    //         model: 'TL-DCRNN',
    //         mlink: '#',
    //         from: 'ICPR',
    //         year: '2020',
    //         paper: 'Transfer Learning with Graph Neural Networks for Short-Term Highway Traffic Forecasting',
    //         plink: 'https://arxiv.org/abs/2004.08038'
    //     },
    //     {
    //         model: 'ST-MGAT',
    //         mlink: '#',
    //         from: 'ICTAI',
    //         year: '2020',
    //         paper: 'ST-MGAT: Spatial-Temporal Multi-Head Graph Attention Networks for Traffic Forecasting',
    //         plink: 'https://ieeexplore.ieee.org/abstract/document/9288309'
    //     },
    //     {
    //         model: 'DKFN',
    //         mlink: '#',
    //         from: 'SIGSPATIAL',
    //         year: '2020',
    //         paper: 'Graph Convolutional Networks with Kalman Filtering for Traffic Prediction',
    //         plink: 'https://dl.acm.org/doi/abs/10.1145/3397536.3422257' 
    //     },
    //     {
    //         model: 'DGFN',
    //         mlink: '#',
    //         from: 'ISTC',
    //         year: '2020',
    //         paper: 'Dynamic Graph Filters Networks: A Gray-box Model for Multistep Traffic Forecasting',
    //         plink: 'https://ieeexplore.ieee.org/abstract/document/9294627' 
    //     },
    //     {
    //         model: 'ATDM',
    //         mlink: '#',
    //         from: 'arXiv',
    //         year: '2020',
    //         paper: 'On the Inclusion of Spatial Information for Spatio-Temporal Neural Networks',
    //         plink: 'https://arxiv.org/abs/2007.07559' 
    //     },
    //     {
    //         model: 'GWNET',
    //         mlink: '#',
    //         from: 'IJCAI',
    //         year: '2019',
    //         paper: 'Graph Wavenet for Deep Spatial-Temporal Graph Modeling',
    //         plink: 'https://arxiv.org/abs/1906.00121' 
    //     },
    //     {
    //         model: 'GWNET-V2',
    //         mlink: '#',
    //         from: 'arXiv',
    //         year: '2019',
    //         paper: 'Incrementally Improving Graph WaveNet Performance on Traffic Prediction',
    //         plink: 'https://arxiv.org/abs/1912.07390' 
    //     },
    //     {
    //         model: 'BaiduTraffic',
    //         mlink: '#',
    //         from: 'SIGKDD',
    //         year: '2018',
    //         paper: 'Deep sequence learning with auxiliary information for traffic prediction',
    //         plink: 'https://dl.acm.org/doi/abs/10.1145/3219819.3219895' 
    //     },
    //     {
    //         model: 'STGCN',
    //         mlink: '#',
    //         from: 'IJCAI',
    //         year: '2018',
    //         paper: 'Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting',
    //         plink: 'https://www.ijcai.org/Proceedings/2018/0505' 
    //     },
    //     {
    //         model: 'GaAN',
    //         mlink: '#',
    //         from: 'UAI',
    //         year: '2018',
    //         paper: 'GaAN: Gated Attention Networks for Learning on Large and Spatiotemporal Graphs',
    //         plink: 'https://arxiv.org/abs/1803.07294' 
    //     },
    //     {
    //         model: 'DCRNN',
    //         mlink: '#',
    //         from: 'ICLR',
    //         year: '2018',
    //         paper: 'Diffusion convolutional recurrent neural network: Data-driven traffic forecasting',
    //         plink: 'https://arxiv.org/abs/1707.01926' 
    //     },
    // ]
    // frb替换以上内容
    const speed = [
        {
            model: 'MTGNN',
            mlink: '#',
            from: 'SIGKDD',
            year: '2020',
            paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
            plink: 'https://arxiv.org/abs/2005.11650' 
        },
        {
            model: 'TGC-LSTM',
            mlink: '#',
            from: 'TITS',
            year: '2020',
            paper: 'Traffic Graph Convolutional Recurrent Neural Network: A Deep Learning Framework for Network-Scale Traffic Learning and Forecasting',
            plink: 'https://ieeexplore.ieee.org/abstract/document/8917706'
        },
        {
            model: 'T-GCN',
            mlink: '#',
            from: 'TITS',
            year: '2020',
            paper: 'T-gcn: A temporal graph convolutional network for traffic prediction',
            plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/'
        },
        {
            model: 'GWNET',
            mlink: '#',
            from: 'IJCAI',
            year: '2019',
            paper: 'Graph Wavenet for Deep Spatial-Temporal Graph Modeling',
            plink: 'https://arxiv.org/abs/1906.00121' 
        },
        {
            model: 'STGCN',
            mlink: '#',
            from: 'IJCAI',
            year: '2018',
            paper: 'Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting',
            plink: 'https://www.ijcai.org/Proceedings/2018/0505' 
        },
        {
            model: 'DCRNN',
            mlink: '#',
            from: 'ICLR',
            year: '2018',
            paper: 'Diffusion convolutional recurrent neural network: Data-driven traffic forecasting',
            plink: 'https://arxiv.org/abs/1707.01926' 
        },
        {
            model: 'RNN',
            mlink: '#',
            from: '-',
            year: '-',
            paper: '-',
            plink: '-'
        },
    ]

    // const flow = [
    //     {
    //         model: 'STFGNN',
    //         mlink: '#',
    //         from: 'AAAI',
    //         year: '2021',
    //         paper: 'Spatial-Temporal Fusion Graph Neural Networks for Traffic Flow Forecasting',
    //         plink: 'https://arxiv.org/abs/2012.09641'
    //     },
    //     {
    //         model: 'TrGNN',
    //         mlink: '#',
    //         from: 'AAAI',
    //         year: '2021',
    //         paper: 'Traffic Flow Prediction with Vehicle Trajectories',
    //         plink: 'https://wands.sg/publications/full_list/papers/AAAI_21_1.pdf'
    //     },
    //     {
    //         model: 'ST-GDN',
    //         mlink: '#',
    //         from: 'AAAI',
    //         year: '2021',
    //         paper: 'Traffic Flow Forecasting with Spatial-Temporal Graph Diffusion Network',
    //         plink: 'https://www.aaai.org/AAAI21Papers/AISI-9334.ZhangX.pdf'
    //     },
    //     {
    //         model: 'TGC-LSTM-LSM',
    //         mlink: '#',
    //         from: 'Neurocomputing',
    //         year: '2021',
    //         paper: 'A temporal-aware LSTM enhanced by loss-switch mechanism for traffic flow forecasting',
    //         plink: 'https://www.sciencedirect.com/science/article/pii/S0925231220318130'
    //     },
    //     {
    //         model: 'DSAN',
    //         mlink: '#',
    //         from: 'SIGKDD',
    //         year: '2020',
    //         paper: 'Preserving Dynamic Attention for Long-Term Spatial-Temporal Prediction',
    //         plink: 'https://dl.acm.org/doi/10.1145/3394486.3403046'
    //     },
    //     {
    //         model: 'AGCRN',
    //         mlink: '#',
    //         from: 'NIPS',
    //         year: '2020',
    //         paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
    //         plink: 'https://arxiv.org/abs/2007.02842'
    //     },
    //     {
    //         model: 'STSGCN',
    //         mlink: '#',
    //         from: 'AAAI',
    //         year: '2020',
    //         paper: 'Spatial-Temporal Synchronous Graph Convolutional Networks: A New Framework for Spatial-Temporal Network Data Forecasting',
    //         plink: 'https://www.aaai.org/ojs/index.php/AAAI/article/view/5438'
    //     },
    //     {
    //         model: 'ResLSTM',
    //         mlink: '#',
    //         from: 'TITS',
    //         year: '2020',
    //         paper: 'Deep Learning Architecture for Short-Term Passenger Flow Forecasting in Urban Rail Transit',
    //         plink: 'https://ieeexplore.ieee.org/abstract/document/9136910/'
    //     },
    //     {
    //         model: 'DGCN',
    //         mlink: '#',
    //         from: 'TITS',
    //         year: '2020',
    //         paper: 'Dynamic Graph Convolution Network for Traffic Forecasting Based on Latent Network of Laplace Matrix Estimation',
    //         plink: 'https://ieeexplore.ieee.org/abstract/document/9190068'
    //     },
    //     {
    //         model: 'ToGCN',
    //         mlink: '#',
    //         from: 'TITS',
    //         year: '2020',
    //         paper: 'Topological Graph Convolutional Network-Based Urban Traffic Flow and Density Prediction',
    //         plink: 'https://ieeexplore.ieee.org/abstract/document/9247476'
    //     },
    //     {
    //         model: 'STAG-GCN',
    //         mlink: '#',
    //         from: 'CIKM',
    //         year: '2020',
    //         paper: 'Spatiotemporal Adaptive Gated Graph Convolution Network for Urban Traffic Flow Forecasting',
    //         plink: 'https://dl.acm.org/doi/abs/10.1145/3340531.3411894'
    //     },
    //     {
    //         model: 'ST-CGA',
    //         mlink: '#',
    //         from: 'CIKM',
    //         year: '2020',
    //         paper: 'Spatial-Temporal Convolutional Graph Attention Networks for Citywide Traffic Flow Forecasting',
    //         plink: 'https://dl.acm.org/doi/abs/10.1145/3340531.3411941'
    //     },
    //     {
    //         model: 'Multi-STGCnet',
    //         mlink: '#',
    //         from: 'IJCNN',
    //         year: '2020',
    //         paper: 'Multi-STGCnet: A Graph Convolution Based Spatial-Temporal Framework for Subway Passenger Flow Forecasting',
    //         plink: 'https://ieeexplore.ieee.org/abstract/document/9207049'
    //     },
    //     {
    //         model: 'Conv-GCN',
    //         mlink: '#',
    //         from: 'IET-ITS',
    //         year: '2020',
    //         paper: 'Multi-Graph Convolutional Network for Short-Term Passenger Flow Forecasting in Urban Rail Transit',
    //         plink: 'https://ietresearch.onlinelibrary.wiley.com/doi/pdfdirect/10.1049/iet-its.2019.0873'
    //     },
    //     {
    //         model: 'GNN-flow',
    //         mlink: '#',
    //         from: 'IEEE SMARTCOMP',
    //         year: '2020',
    //         paper: 'Learning Mobility Flows from Urban Features with Spatial Interaction Models and Neural Networks',
    //         plink: 'https://arxiv.org/abs/2004.11924'
    //     },
    //     {
    //         model: 'CRANN',
    //         mlink: '#',
    //         from: 'Applied Soft Computing',
    //         year: '2020',
    //         paper: 'A Spatio-Temporal Spot-Forecasting Framework forUrban Traffic Prediction',
    //         plink: 'https://arxiv.org/abs/2003.13977'
    //     },
    //     {
    //         model: 'Deep_Sedanion_Network',
    //         mlink: '#',
    //         from: 'arXiv',
    //         year: '2020',
    //         paper: 'Traffic flow prediction using Deep Sedenion Networks',
    //         plink: 'https://arxiv.org/abs/2012.03874'
    //     },
    //     {
    //         model: 'ST-MetaNet',
    //         mlink: '#',
    //         from: 'SIGKDD',
    //         year: '2019',
    //         paper: 'Urban traffic prediction from spatio-temporal data using deep meta learning',
    //         plink: 'https://dl.acm.org/doi/abs/10.1145/3292500.3330884'
    //     },
    //     {
    //         model: 'STDN',
    //         mlink: '#',
    //         from: 'AAAI',
    //         year: '2019',
    //         paper: 'Revisiting spatial-temporal similarity: A deep learning framework for traffic prediction',
    //         plink: 'https://www.aaai.org/ojs/index.php/AAAI/article/view/4511'
    //     },
    //     {
    //         model: 'ASTGCN',
    //         mlink: '#',
    //         from: 'AAAI',
    //         year: '2019',
    //         paper: 'Attention based spatial-temporal graph convolutional networks for traffic flow forecasting',
    //         plink: 'https://www.aaai.org/ojs/index.php/AAAI/article/view/3881'
    //     },
    //     {
    //         model: 'Cluster_LSTM',
    //         mlink: '#',
    //         from: 'ICSAI',
    //         year: '2019',
    //         paper: 'Foreseeing Congestion using LSTM on Urban Traffic Flow Clusters',
    //         plink: 'https://ieeexplore.ieee.org/abstract/document/9010150/'
    //     },
    //     {
    //         model: 'ACFM',
    //         mlink: '#',
    //         from: 'ACM MM',
    //         year: '2018',
    //         paper: 'ACFM: A Dynamic Spatial-Temporal Network for Traffic Prediction',
    //         plink: 'https://dl.acm.org/doi/10.1145/3240508.3240681'
    //     },
    //     {
    //         model: 'ST-ResNet',
    //         mlink: '#',
    //         from: 'AAAI',
    //         year: '2017',
    //         paper: 'Deep Spatio-Temporal Residual Networks for Citywide Crowd Flows Prediction',
    //         plink: 'https://arxiv.org/abs/1610.00081'
    //     },
    //     {
    //         model: 'STNN',
    //         mlink: '#',
    //         from: 'ICDM',
    //         year: '2017',
    //         paper: 'Spatio-Temporal Neural Networks for Space-Time Series Forecasting and Relations Discovery',
    //         plink: 'https://ieeexplore.ieee.org/document/8215543'
    //     },
    // ]
    // frb隐藏以上内容
    const flow = [
        {
            model: 'AGCRN',
            mlink: '#',
            from: 'NIPS',
            year: '2020',
            paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
            plink: 'https://arxiv.org/abs/2007.02842'
        },
        {
            model: 'Multi-STGCnet',
            mlink: '#',
            from: 'IJCNN',
            year: '2020',
            paper: 'Multi-STGCnet: A Graph Convolution Based Spatial-Temporal Framework for Subway Passenger Flow Forecasting',
            plink: 'https://ieeexplore.ieee.org/abstract/document/9207049'
        },
        {
            model: 'ASTGCN',
            mlink: '#',
            from: 'AAAI',
            year: '2019',
            paper: 'Attention based spatial-temporal graph convolutional networks for traffic flow forecasting',
            plink: 'https://www.aaai.org/ojs/index.php/AAAI/article/view/3881'
        },
    ]

    const demand = [
        {
            model: 'CCRNN',
            mlink: '#',
            from: 'AAAI',
            year: '2021',
            paper: 'Coupled Layer-wise Graph Convolution for Transportation Demand Prediction',
            plink: 'https://arxiv.org/abs/2012.08080'
        },
        {
            model: 'ST-ED-RMGC',
            mlink: '#',
            from: 'Emerging Technologies',
            year: '2021',
            paper: 'Predicting origin-destination ride-sourcing demand with a spatio-temporal encoder-decoder residual multi-graph convolutional network',
            plink: 'https://www.sciencedirect.com/science/article/pii/S0968090X20307580'
        },
        {
            model: 'STG2Seq',
            mlink: '#',
            from: 'IJCAI',
            year: '2019',
            paper: 'Stg2seq: Spatial-temporal graph to sequence model for multi-step passenger demand forecasting',
            plink: 'https://arxiv.org/abs/1905.10069'
        },
        {
            model: 'DMVST-Net',
            mlink: '#',
            from: 'AAAI',
            year: '2018',
            paper: 'Deep Multi-View Spatial-Temporal Network for Taxi Demand Prediction',
            plink: 'https://arxiv.org/abs/1802.08714'
        },
        {
            model: 'GraphLSTM',
            mlink: '#',
            from: 'TITS',
            year: '2018',
            paper: 'Grids versus graphs: Partitioning space for improved taxi demand-supply forecasts',
            plink: 'https://ieeexplore.ieee.org/abstract/document/9099450/'
        },
        {
            model: 'DPFE',
            mlink: '#',
            from: 'Emerging Technologies',
            year: '2018',
            paper: 'Estimating multi-year 24/7 origin-destination demand using high-granular multi-source traffic data',
            plink: 'https://www.sciencedirect.com/science/article/pii/S0968090X18302948'
        },
    ]

    const state = [
        {
            model: 'AGCRN',
            mlink: '#',
            from: 'NIPS',
            year: '2020',
            paper: 'Adaptive Graph Convolutional Recurrent Network for Traffic Forecasting',
            plink: 'https://arxiv.org/abs/2007.02842'
        },
        {
            model: 'MSTGCN',
            mlink: '#',
            from: 'AAAI',
            year: '2019',
            paper: 'Attention based spatial-temporal graph convolutional networks for traffic flow forecasting',
            plink: 'https://www.aaai.org/ojs/index.php/AAAI/article/view/3881'
        },
        {
            model: 'ASTGCN',
            mlink: '#',
            from: 'AAAI',
            year: '2019',
            paper: 'Attention based spatial-temporal graph convolutional networks for traffic flow forecasting',
            plink: 'https://www.aaai.org/ojs/index.php/AAAI/article/view/3881'
        },
        {
            model: 'MTGNN',
            mlink: '#',
            from: 'SIGKDD',
            year: '2020',
            paper: 'Connecting the Dots: Multivariate Time Series Forecasting with Graph Neural Networks',
            plink: 'https://arxiv.org/abs/2005.11650' 
        },
        {
            model: 'TGC-LSTM',
            mlink: '#',
            from: 'TITS',
            year: '2020',
            paper: 'Traffic Graph Convolutional Recurrent Neural Network: A Deep Learning Framework for Network-Scale Traffic Learning and Forecasting',
            plink: 'https://ieeexplore.ieee.org/abstract/document/8917706'
        },
        {
            model: 'T-GCN',
            mlink: '#',
            from: 'TITS',
            year: '2020',
            paper: 'T-gcn: A temporal graph convolutional network for traffic prediction',
            plink: 'https://ieeexplore.ieee.org/abstract/document/8809901/'
        },
        {
            model: 'GWNET',
            mlink: '#',
            from: 'IJCAI',
            year: '2019',
            paper: 'Graph Wavenet for Deep Spatial-Temporal Graph Modeling',
            plink: 'https://arxiv.org/abs/1906.00121' 
        },
        {
            model: 'STGCN',
            mlink: '#',
            from: 'IJCAI',
            year: '2018',
            paper: 'Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting',
            plink: 'https://www.ijcai.org/Proceedings/2018/0505' 
        },
        {
            model: 'DCRNN',
            mlink: '#',
            from: 'ICLR',
            year: '2018',
            paper: 'Diffusion convolutional recurrent neural network: Data-driven traffic forecasting',
            plink: 'https://arxiv.org/abs/1707.01926' 
        },
        {
            model: 'ACFM',
            mlink: '#',
            from: 'ACM MM',
            year: '2018',
            paper: 'Attentive Crowd Flow Machines',
            plink: 'https://dl.acm.org/doi/10.1145/3240508.3240681' 
        },
        {
            model: 'ST-ResNet',
            mlink: '#',
            from: 'AAAI',
            year: '2017',
            paper: 'Deep Spatio-Temporal Residual Networks for Citywide Crowd Flows Prediction',
            plink: 'https://arxiv.org/abs/1610.00081' 
        },
        {
            model: 'RNN',
            mlink: '#',
            from: 'YAC',
            year: '2016',
            paper: 'Using LSTM and GRU neural network methods for traffic flow prediction',
            plink: 'https://ieeexplore.ieee.org/abstract/document/7804912' 
        },
    ]
    

    export default {
        data() {
            return {
                location,
                speed,
                flow,
                demand,
                // frb添加一下内容
                state
            };
        },
        components: {
            modelTableCn
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
  min-height: 250px;
  background:  rgb(27, 140, 233) linear-gradient(to right,  rgb(27, 140, 233), rgb(11, 247, 188));
  /* border: blue solid 1px; */
}
.content {
    width: 80%;
    height: auto;
    margin: 50px auto 0 auto;
    font-size: 20px;
    line-height: 36px;
    color: black;
    font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    /* border: blue solid 3px; */
}
.title {
    font-size: 32px;
    font-weight: 700;
    font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    margin-bottom: 0;
}
</style>