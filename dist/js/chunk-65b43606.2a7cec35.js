(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65b43606"],{"4ae7":function(t,a,e){},"4e0a":function(t,a,e){},a337:function(t,a,e){"use strict";e("4ae7")},b5f9:function(t,a,e){"use strict";e("4e0a")},cd95:function(t,a,e){"use strict";e.r(a);var r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t._m(0),e("div",{staticClass:"content"},[e("div",{staticClass:"task-ranking"},[e("p",{staticClass:"task-name"},[t._v("交通速度预测")]),e("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),e("rank-table-cn",{attrs:{rankdata:t.speed}}),e("br"),e("br"),e("p",{staticClass:"task-name"},[t._v("轨迹位置预测")]),e("a-divider",{staticStyle:{margin:"10px 0","background-image":"linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6)"}}),e("rank-table-cn",{attrs:{rankdata:t.location}}),e("br"),e("br")],1)])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header"},[e("div",{staticStyle:{"padding-top":"20px",color:"white"}},[e("p",{staticStyle:{margin:"20px 0 30px 130px","font-size":"60px"}},[t._v("排行榜")]),e("p",{staticStyle:{margin:"0px 0 20px 130px","font-size":"30px"}},[t._v(" LibTraffic在不同的数据集上测试了现有模型，"),e("br"),t._v(" 并展示了这些模型在每个数据集上的性能和排名。 ")])])])}],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("table",[t._m(0),e("tbody",t._l(t.rankdata,(function(a){return e("tr",{key:a.dataset},[e("td",{attrs:{width:"15%"}},[e("a",{staticClass:"dataset",attrs:{href:a.datasetlink}},[t._v(t._s(a.dataset))])]),e("td",{attrs:{width:"15%"}},[e("a-icon",{staticStyle:{color:"gold","font-size":"20px"},attrs:{type:"crown"}}),e("a",{staticClass:"model",attrs:{href:a.mlink}},[t._v(t._s(a.best))])],1),e("td",{attrs:{width:"55%"}},[e("a",{staticClass:"paper",attrs:{href:a.plink}},[t._v(t._s(a.paper))])]),e("td",{attrs:{width:"15%"}},[e("a-button",{attrs:{type:"primary",shape:"round"},on:{click:function(e){return t.toDatasetRankingCN(a.dlink)}}},[t._v("See All")])],1)])})),0)])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticStyle:{"font-size":"16px"}},[e("tr",[e("th",[t._v("数据集")]),e("th",[t._v("最佳方法")]),e("th",[t._v("论文")]),e("th",[t._v("模型比较")])])])}],o={name:"table",props:{rankdata:{type:Array,required:!0}},data:function(){return{}},methods:{toDatasetRankingCN:function(t){this.$router.push({name:t+"CN"})}}},l=o,c=(e("b5f9"),e("2877")),p=Object(c["a"])(l,n,s,!1,null,null,null),d=p.exports,f=[{dataset:"METR-LA",best:"MTGNN",paper:"Spatio-Temporal Graph Structure Learning for Traffic Forecasting",datasetlink:"https://aptx1231.github.io/Bigscity-TrafficDL-Docs/user_guide/data/raw_data.html#metr-la",mlink:"#",plink:"https://arxiv.org/abs/2005.11650",dlink:"METR-LA"},{dataset:"PEMS-BAY",best:"MTGNN",paper:"Spatio-Temporal Graph Structure Learning for Traffic Forecasting",datasetlink:"https://aptx1231.github.io/Bigscity-TrafficDL-Docs/user_guide/data/raw_data.html#metr-la",mlink:"#",plink:"#",dlink:"#"},{dataset:"PEMSD7(M)",best:"STGCN",paper:"Spatio-temporal graph convolutional networks: A deep learning framework for traffic forecasting",mlink:"#",plink:"#",dlink:"#"},{dataset:"Loop Seattle",best:"TGC-LSTM",paper:"Traffic Graph Convolutional Recurrent Neural Network: A Deep Learning Framework for Network-Scale Traffic Learning and Forecasting",mlink:"#",plink:"#",dlink:"#"}],u=[{dataset:"foursqaure-tky",best:"DeepMove",paper:"DeepMove: Predicting Human Mobility with Attentional Recurrent Networks",datasetlink:"https://aptx1231.github.io/Bigscity-TrafficDL-Docs/user_guide/data/raw_data.html#foursquare",mlink:"#",plink:"https://dl.acm.org/doi/10.1145/3178876.3186058",dlink:"foursqaure-tky"},{dataset:"Gowalla",best:"DeepMove",paper:"DeepMove: Predicting Human Mobility with Attentional Recurrent Networks",datasetlink:"https://aptx1231.github.io/Bigscity-TrafficDL-Docs/user_guide/data/raw_data.html#gowalla",mlink:"#",plink:"https://dl.acm.org/doi/10.1145/3178876.3186058",dlink:"Gowalla"}],k={data:function(){return{speed:f,location:u}},components:{rankTableCn:d}},g=k,h=(e("a337"),Object(c["a"])(g,r,i,!1,null,"d525fdd8",null));a["default"]=h.exports}}]);
//# sourceMappingURL=chunk-65b43606.2a7cec35.js.map