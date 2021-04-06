<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">论文库</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          论文库提供了超过100篇来自顶级期刊或会议的时空数据挖掘领域的研究论文。
        </p>
      </div>
    </div>

    <div class="content">
        <div class="sidebar-filter">
            <cate-cn></cate-cn>
        </div>
        <div class="paper-result">
            <div class="search-box">
                <search-in-cn style="display: inline-block; float: left;"></search-in-cn>
            </div>
            <div class="paper-box">
                <paper-item-cn class="paper" v-model="isOpen[0]" :default-height="defaultHeight">
                    <h2 class="title">{{titleText}}</h2>
                    <div class="author"><strong>作者: </strong>{{authorText}}</div>
                    <div class="tag"><strong>标签: </strong>{{tagText}}</div>
                    <div class="abstract"><strong>摘要: </strong>{{abstractText}}</div>
                    <a-button type="primary" icon="file" style="width: 120px; font-size: 20px; font-weight: 700; margin-top: 10px;">
                        <a :href="paperLink" target="_blank" style="text-decoration:none; color:white">论文</a>
                    </a-button>
                </paper-item-cn>

                <paper-item-cn class="paper" v-model="isOpen[1]" :default-height="defaultHeight">
                    <h2 class="title">{{titleText}}</h2>
                    <div class="author"><strong>作者: </strong>{{authorText}}</div>
                    <div class="tag"><strong>标签: </strong>{{tagText}}</div>
                    <div class="abstract"><strong>摘要: </strong>{{abstractText}}</div>
                    <a-button type="primary" icon="file" style="width: 120px; font-size: 20px; font-weight: 700; margin-top: 10px;">
                        <a :href="paperLink" target="_blank" style="text-decoration:none; color:white">论文</a>
                    </a-button>
                </paper-item-cn>

                <paper-item-cn class="paper" v-model="isOpen[2]" :default-height="defaultHeight">
                    <h2 class="title">{{titleText}}</h2>
                    <div class="author"><strong>Author: </strong>{{authorText}}</div>
                    <div class="tag"><strong>Tag: </strong>{{tagText}}</div>
                    <div class="abstract"><strong>Abstract: </strong>{{abstractText}}</div>
                    <a-button type="primary" icon="file" style="width: 120px; font-size: 20px; font-weight: 700; margin-top: 10px;">
                        <a :href="paperLink" target="_blank" style="text-decoration:none; color:white"> Paper</a>
                    </a-button>
                </paper-item-cn>

                <paper-item-cn class="paper" v-model="isOpen[3]" :default-height="defaultHeight">
                    <h2 class="title">{{titleText}}</h2>
                    <div class="author"><strong>Author: </strong>{{authorText}}</div>
                    <div class="tag"><strong>Tag: </strong>{{tagText}}</div>
                    <div class="abstract"><strong>Abstract: </strong>{{abstractText}}</div>
                    <a-button type="primary" icon="file" style="width: 120px; font-size: 20px; font-weight: 700; margin-top: 10px;">
                        <a :href="paperLink" target="_blank" style="text-decoration:none; color:white"> Paper</a>
                    </a-button>
                </paper-item-cn>

                <paper-item-cn class="paper" v-model="isOpen[4]" :default-height="defaultHeight">
                    <h2 class="title">{{titleText}}</h2>
                    <div class="author"><strong>Author: </strong>{{authorText}}</div>
                    <div class="tag"><strong>Tag: </strong>{{tagText}}</div>
                    <div class="abstract"><strong>Abstract: </strong>{{abstractText}}</div>
                    <a-button type="primary" icon="file" style="width: 120px; font-size: 20px; font-weight: 700; margin-top: 10px;">
                        <a :href="paperLink" target="_blank" style="text-decoration:none; color:white"> Paper</a>
                    </a-button>
                </paper-item-cn>

                <paper-item-cn class="paper" v-model="isOpen[5]" :default-height="defaultHeight">
                    <h2 class="title">{{titleText}}</h2>
                    <div class="author"><strong>Author: </strong>{{authorText}}</div>
                    <div class="tag"><strong>Tag: </strong>{{tagText}}</div>
                    <div class="abstract"><strong>Abstract: </strong>{{abstractText}}</div>
                    <a-button type="primary" icon="file" style="width: 120px; font-size: 20px; font-weight: 700; margin-top: 10px;">
                        <a :href="paperLink" target="_blank" style="text-decoration:none; color:white"> Paper</a>
                    </a-button>
                </paper-item-cn>

                <paper-item-cn class="paper" v-model="isOpen[6]" :default-height="defaultHeight">
                    <h2 class="title">{{titleText}}</h2>
                    <div class="author"><strong>Author: </strong>{{authorText}}</div>
                    <div class="tag"><strong>Tag: </strong>{{tagText}}</div>
                    <div class="abstract"><strong>Abstract: </strong>{{abstractText}}</div>
                    <a-button type="primary" icon="file" style="width: 120px; font-size: 20px; font-weight: 700; margin-top: 10px;">
                        <a :href="paperLink" target="_blank" style="text-decoration:none; color:white"> Paper</a>
                    </a-button>
                </paper-item-cn>

                <paper-item-cn class="paper" v-model="isOpen[7]" :default-height="defaultHeight">
                    <h2 class="title">{{titleText}}</h2>
                    <div class="author"><strong>Author: </strong>{{authorText}}</div>
                    <div class="tag"><strong>Tag: </strong>{{tagText}}</div>
                    <div class="abstract"><strong>Abstract: </strong>{{abstractText}}</div>
                    <a-button type="primary" icon="file" style="width: 120px; font-size: 20px; font-weight: 700; margin-top: 10px;">
                        <a :href="paperLink" target="_blank" style="text-decoration:none; color:white"> Paper</a>
                    </a-button>
                </paper-item-cn>

                <paper-item-cn class="paper" v-model="isOpen[8]" :default-height="defaultHeight">
                    <h2 class="title">{{titleText}}</h2>
                    <div class="author"><strong>Author: </strong>{{authorText}}</div>
                    <div class="tag"><strong>Tag: </strong>{{tagText}}</div>
                    <div class="abstract"><strong>Abstract: </strong>{{abstractText}}</div>
                    <a-button type="primary" icon="file" style="width: 120px; font-size: 20px; font-weight: 700; margin-top: 10px;">
                        <a :href="paperLink" target="_blank" style="text-decoration:none; color:white"> Paper</a>
                    </a-button>
                </paper-item-cn>

                <paper-item-cn class="paper" v-model="isOpen[9]" :default-height="defaultHeight">
                    <h2 class="title">{{titleText}}</h2>
                    <div class="author"><strong>Author: </strong>{{authorText}}</div>
                    <div class="tag"><strong>Tag: </strong>{{tagText}}</div>
                    <div class="abstract"><strong>Abstract: </strong>{{abstractText}}</div>
                    <a-button type="primary" icon="file" style="width: 120px; font-size: 20px; font-weight: 700; margin-top: 10px;">
                        <a :href="paperLink" target="_blank" style="text-decoration:none; color:white"> Paper</a>
                    </a-button>
                </paper-item-cn>
            </div>
            <div style="padding-left: 150px; padding-bottom: 50px;">
                <pagination-cn></pagination-cn> 
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import CateCn from "./paper/categoryCollapseCN.vue";
import searchInCn from "./paper/searchInputCN.vue";
import paperItemCn from "./paper/paperItemCollapseCN.vue";
import paginationCn from "./paper/paperPaginationCN.vue";

export default {
  data() {
    return {
      focus: 0,
      isOpen: [false, false, false, false, false, false, false, false, false, false],
      defaultHeight: 210,
      titleText: "A Force-directed Approach to Seeking Route Recommendation in Ride-on-demand Service Using Multi-source Urban Data",
      authorText: "S. Guo, C. Chen, J. Wang, Y. Ding, Y. Liu, X. Ke, Z. Yu, and D. Zhang",
      tagText: "2020, IEEE TMC, Route Planning",
      abstractText: "The rapidly-growing business of ride-on-demand (RoD) service such as Uber, Lyft and Didi proves the effectiveness of theirnew service model – using mobile apps and dynamic pricing to coordinate between drivers, passengers and the service provider, tomanipulate the supply and demand, and to improve service responsiveness as well as quality. Despite its success, dynamic pricingcreates a new problem for drivers: how to seek for passengers to maximize revenue under dynamic prices. Seeking routerecommendation has already been studied extensively in traditional taxi service, but most studies do not consider the effects of taxisand passengers on the seeking taxi simultaneously. Further, in RoD service it is necessary to consider more factors such as dynamicprices, the status of other transportation services, etc. In this paper, we employ a force-directed approach to model, by analogy, therelationship between vacant cars and passengers as that between positive and negative charges in electrostatic field. We extractfeatures from multi-source urban data to describe dynamic prices, the status of RoD, taxi and public transportation services, andincorporate them into our model. The model is then used in route recommendation in every intersection so that a driver in a vacantRoD car knows which road segment to take next. We conduct extensive experiments based on our multi-source urban data, includingRoD service operational data, taxi GPS trajectory data and public transportation distribution data, and results not only show that ourapproach outperforms existing baselines, but also justify the need to incorporate multi-source urban data and dynamic prices.",
      paperLink: "https://ieeexplore.ieee.org/abstract/document/9238459"
    };
  },
  components: {
      CateCn,
      searchInCn,
      paperItemCn,
      paginationCn
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
  /* background-color: rgb(103, 179, 241); */
  /* border: blue solid 1px; */
}
.content {
    width: 100%;
    height: auto;
    /* border: blue solid 3px; */
}
.sidebar-filter {
    width:32%;
    height: auto;
    padding: 100px 40px 50px 130px;
    float:left;
    /* border: green solid 1px; */
}
.paper-result {
    width: 68%;
    height: auto;
    float: right;
    /* border: red solid 1px; */
}
.search-box {
    width: 100%;
    height: 80px;
    padding: 32px 150px 16px 20px; 
    /* border: pink solid 1px; */
}
.paper-box {
    width: 100%;
    height: auto;
    padding: 20px 150px 50px 20px;
    /* border: purple solid 2px; */
}
.paper {
    border-radius: 5px;
    border:rgba(0, 0, 0, 0.2) solid 1px;
    margin-bottom: 20px;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.1);
}
.paper:hover {
    border: rgba(0, 0, 0, 0.3) solid 1px;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
}
.title {
    font-weight: 700;
    font-family: 'Nunito', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
}
.author, .tag, .abstract {
    font-size: 16px;
    font-family: 'Nunito', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
}
</style>
