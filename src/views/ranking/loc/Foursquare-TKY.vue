<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">Foursquare-TKY</p>
      </div>
    </div>

    <div class="content">
        <div class="metric">
            View
            <a-select default-value="Recall" style="width: 180px; font-size: 14px; margin-left: 10px" @change="metricsChange">
                <a-select-option value="Recall">
                    Recall
                </a-select-option>
                <a-select-option value="MRR">
                    MRR
                </a-select-option>
                <a-select-option value="NDCG">
                    NDCG
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
                        <th>{{this.metrics}} @ 5<a-button type="link" icon="caret-down" size="small" style="color: white" @click="sortBy5"></a-button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in rankingData" :key="item.model">
                        <td width="6%">{{item.rank}}</td>
                        <!-- <td width="8%"><a :href="item.mlink" target="_blank">{{item.model}}</a></td> -->
                        <td width="10%">{{item.model}}</td>
                        <td width="64%"><a :href="item.plink" class="paper" target="_blank">{{item.paper}}</a></td>
                        <td width="8%">{{item.year}}</td>
                        <td width="12%">{{item.top5}}</td>
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
    const FoursquareTKY = [
    {
        rank: 0,
        model: 'FPMC',
        mlink: '#',
        paper: 'Factorizing Personalized Markov Chains for Next-Basket Recommendation',
        plink: 'https://dl.acm.org/doi/10.1145/1772690.1772773',
        year: '2010',
        top5: 0.0915,

        m_recall_top5: 0.0915,
        m_mrr_top5: 0.0533,
        m_ndcg_top5: 0.0627,
    },
    {
        rank: 0,
        model: 'RNN',
        mlink: '#',
        paper: '-',
        plink: null,
        year: '-',
        top5: 0.2635,

        m_recall_top5: 0.2635,
        m_mrr_top5: 0.1688,
        m_ndcg_top5: 0.1923,
    },
    {
        rank: 0,
        model: 'ST-RNN',
        mlink: '#',
        paper: 'Predicting the Next Location: A Recurrent Model with Spatial and Temporal Contexts',
        plink: 'https://www.aaai.org/ocs/index.php/AAAI/AAAI16/paper/view/11900',
        year: '2016',
        top5: 0.0022,

        m_recall_top5: 0.0022,
        m_mrr_top5: 0.0016,
        m_ndcg_top5: 0.0017,
    },
    {
        rank: 0,
        model: 'SERM',
        mlink: '#',
        paper: 'SERM: A Recurrent Model for Next Location Prediction in Semantic Trajectories',
        plink: 'https://dl.acm.org/doi/10.1145/3132847.3133056',
        year: '2017',
        top5: 0.3162,

        m_recall_top5: 0.3162,
        m_mrr_top5: 0.2004,
        m_ndcg_top5: 0.2293,
    },
    {
        rank: 0,
        model: 'DeepMove',
        mlink: '#',
        paper: 'DeepMove: Predicting Human Mobility with Attentional Recurrent Networks',
        plink: 'https://dl.acm.org/doi/10.1145/3178876.3186058',
        year: '2018',
        top5: 0.3771,

        m_recall_top5: 0.3771,
        m_mrr_top5: 0.2559,
        m_ndcg_top5: 0.2861,
    },
    {
        rank: 0,
        model: 'HST-LSTM',
        mlink: '#',
        paper: 'HST-LSTM: A Hierarchical Spatial-Temporal Long-Short Term Memory Network for Location Prediction',
        plink: 'https://www.ijcai.org/Proceedings/2018/324',
        year: '2018',
        top5: 0.302,

        m_recall_top5: 0.302,
        m_mrr_top5: 0.2023,
        m_ndcg_top5: 0.2272,
    },
    {
        rank: 0,
        model: 'LSTPM',
        mlink: '#',
        paper: 'Where to Go Next: Modeling Long- and Short-Term User Preferences for Point-of-Interest Recommendation',
        plink: 'https://ojs.aaai.org//index.php/AAAI/article/view/5353',
        year: '2020',
        top5: 0.3778,

        m_recall_top5: 0.3778,
        m_mrr_top5: 0.2578,
        m_ndcg_top5: 0.2877,
    },
    ]

    export default {
        data() {
            return {
                FoursquareTKY,
                rankingData: [],
                metrics: "Recall"
            };
        },
        components: {
        },
        mounted() {
            this.rankingData = FoursquareTKY;
            this.metricsChange("Recall");
        },
        methods: {
            sortBy5() {
                this.rankingData.sort(function(a, b) {
                    return b.top5 - a.top5
                });
                let rank = 0;
                this.rankingData.forEach((item) => {
                    rank += 1;
                    item.rank = rank;
                })
            },
            metricsChange(value) {
                if (value == "Recall") {
                    this.rankingData.forEach((item) => {
                        item.top5 = item.m_recall_top5.toFixed(5);
                    })
                    this.metrics = "Recall";
                } else if (value == "MRR") {
                    this.rankingData.forEach((item) => {
                        item.top5 = item.m_mrr_top5.toFixed(5);
                    })
                    this.metrics = "MRR";
                } else if (value == "NDCG") {
                    this.rankingData.forEach((item) => {
                        item.top5 = item.m_ndcg_top5.toFixed(5);
                    })
                    this.metrics = "MDCG";
                }
                this.sortBy5();
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