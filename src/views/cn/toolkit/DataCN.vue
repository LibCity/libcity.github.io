<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">数据</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          LibTraffic提供了40余个时空数据集，<br>并引入了统一的数据结构来格式化数据和算法的输入。
        </p>
      </div>
    </div>

    <div class="content">
      <div>
        <p class="title">数据流</p>
        <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
        <p style="text-indent: 2em">出于可扩展性，灵活性和可复用性的考虑，数据模块实现了一条优雅的数据流，可以将原始数据转换成统一的模型输入。整体的数据流如下所示：</p>
        <div style="margin: 10px auto 10px auto; text-align: center">
          <img src="../../../assets/img/data_flow-CN.png" alt="Data Flow" height="120"/>
        </div>
        
        <ul>
          <li><span style="font-weight: 700">原始数据</span>：未经处理的开源交通数据集。</li>
          <li><span style="font-weight: 700">原子文件</span>：各类交通预测任务的基础输入元素。</li>
          <li><span style="font-weight: 700">Dataset类</span>：为各类交通预测任务制定的Dataset类，负责读取原子文件。LibTraffic还提供一系列的数据预处理功能。详见<a href="#">文档</a>。</li>
          <li><span style="font-weight: 700">DataLoader类</span>：主要依托于<code style="color: #e83e8c; font-size: 90%">PyTorch</code>原生的<code style="color: #e83e8c; font-size: 90%">torch.utils.data.DataLoader</code>的DataLoader类，负责将数据以内部数据表示结构<code style="color: #e83e8c; font-size: 90%">Batch</code>类的形式返回给模型使用。 <span style="font-weight: 700">Batch</span>是基于<code style="color: #e83e8c; font-size: 90%">python.dict</code>实现的抽象数据结构，其构成key-value的结构。<code style="color: #e83e8c; font-size: 90%">Key</code>对应于模型输入的特征名。<code style="color: #e83e8c; font-size: 90%">Value</code>对应于张量（由<code style="color: #e83e8c; font-size: 90%">torch.Tensor</code>实现），其包含一个<code style="color: #e83e8c; font-size: 90%">batch</code>或<code style="color: #e83e8c; font-size: 90%">mini-batch</code>的数据。详见<a href="#">文档</a>。</li>
        </ul>
        <br>

        <p class="title">原子文件</p>
        <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
        <p style="text-indent: 2em">LibTraffic引入并实现6种原子文件类型，用来格式化各种时空数据集。它们可以描述不同时空数据挖掘任务大部分的输入数据。这些原子文件可通过后缀名进行区分：</p>
        <table style="width: 900px">
          <thead style="font-size: 16px"><tr>
            <th width="15%">后缀</th>
            <th width="50%">含义</th>
            <th width="35%">例子</th>
          </tr></thead>
          <tbody>
            <tr>
              <td>.geo</td>
              <td>存储地理实体属性信息</td>
              <td>geo_id, type, coordinates</td>
            </tr>
            <tr>
              <td>.usr</td>
              <td>存储交通使用者信息</td>
              <td>usr_id, gender, birth_date</td>
            </tr>
            <tr>
              <td>.rel</td>
              <td>存储实体间的关系信息，如路网</td>
              <td>rel_id, origin_id, destination_id</td>
            </tr>
            <tr>
              <td>.dyna</td>
              <td>实体动态随时间变化的信息</td>
              <td>dyna_id, type, entity_id, location_id</td>
            </tr>
            <tr>
              <td>.ext</td>
              <td>存储外部信息，如天气、温度等</td>
              <td>ext_id, time, properties</td>
            </tr>
          </tbody>
        </table>
        <br>
        <p style="text-indent: 2em">原子文件的本质是基于特征的数据表格，分别对应于模型输入的不同部分。这些原子文件组成了不同时空数据挖掘任务的输入。详见<a href="https://aptx1231.github.io/Bigscity-TrafficDL-Docs/user_guide/data/atmoic_files.html">文档</a>。</p>
        <p style="text-indent: 2em">下面给出一个格式化的METR-LA数据集的例子。</p>
        <br>

        <p class="title">数据集列表</p>
        <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
        <p style="text-indent: 2em">为了帮助用户将原始输入转换为原子文件格式，我们收集了40余个时空数据集, 并且开源了将这些数据集转换为原子文件的脚本。同时，我们也将部分已经处理好的原子文件打包上传至<a href="#">Google Drive</a>和<a href="#">百度网盘</a>（提取码： ）。</p>
        <a-divider style="font-size: 24px">轨迹数据集</a-divider>
        <data-table-cn :content="location"></data-table-cn>
        <br>
        <!-- <p><a id="AustinRide" href="#">AustinRide</a>: The AustinRide dataset contains Austin ride trajectories spans from August 1, 2016 to April 13, 2017, including over 1.4 million trips.</p>
        <p><a id="NYC-Bus" href="#">NYC-Bus</a>: The NYC-Bus dataset contains MTA bus time historical data.</p>
        <p><a id="Porto" href="#">Porto</a>: The Porto dataset describes trajectories performed by all the 442 taxis running in the city of Porto, in Portugal.</p>
        <p><a id="BikeCHI" href="#">BikeCHI</a>: The BikeCHI dataset shows the development of bike-sharing in Chicago from 2013 to 2018.</p>
        <p><a id="NYC-Bike" href="#">NYC-Bike</a>: The NYC-Bike dataset contains bike trajectories collected from NYC CitiBike system.</p>
        <p><a id="Foursquare: Global-scale Check-in Dataset" href="#">Foursquare: Global-scale Check-in Dataset</a>: This dataset includes long-term (about 18 months from April 2012 to September 2013) global-scale check-in data collected from Foursquare.</p>
        <p><a id="Foursquare: User Profile Dataset" href="#">Foursquare: User Profile Dataset</a>: This dataset includes some user profile data for privacy study (i. e., gender, friends, followers). The corresponding user check-in data can be found in the global-scale check-in dataset.</p>
        <p><a id="Foursquare: Global-scale Check-in Dataset with User Social Networks" href="#">Foursquare: Global-scale Check-in Dataset with User Social Networks</a>: This dataset includes long-term (about 22 months from Apr. 2012 to Jan. 2014) global-scale check-in data collected from Foursquare, and also two snapshots of user social networks before and after the check-in data collection period.</p>
        <p><a id="Foursquare: NYC Restaurant Rich Dataset" href="#">Foursquare: NYC Restaurant Rich Dataset</a>: This dataset includes check-in, tip and tag data of restaurant venues in NYC.</p>
        <p><a id="BikeDC" href="#">BikeDC</a>: The BikeDC dataset describes the bike trails of the Washington Bicycle System, which includes 472 stops.</p>
        <p><a id="Gowalla" href="#">Gowalla</a>: Gowalla is a location-based social networking website where users share their locations by checking-in,containing information of users, users’ check-in time, users’ latitude, longitude,users’ location id.</p>
        <p><a id="NYC-Taxi" href="#">NYC-Taxi</a>: The NYC-Taxi dataset contains trajectories of different types of taxi collected by GPS for New York City from 2009 to 2020.</p>
        <p><a id="Brightkite" href="#">Brightkite</a>: Brightkite is a location-based social networking website where users share their locations by checking-in,containing information of users, users’ check-in time, users’ latitude, longitude,users’ location id.</p>
        <p><a id="T-Drive" href="#">T-Drive</a>: The T-Drive trajectory dataset sample containing the weekly trajectories of 10,357 Beijing taxis is about 15 million points, and the total distance of trajectories reaches 9 million kilometers.</p>
        <p><a id="GeoLife-GPS" href="#">GeoLife-GPS</a>: The GPS track dataset was collected by 182 users from April 2007 to August 2012 and contains 17,621 tracks with a total distance of 1,292,951 km and a total duration of 50,176 hours. 91.5% of the tracks are recorded at high density, for example every 1 to 5 seconds or every 5 to 10 meters per point.</p>
        <p><a id="I-80" href="#">I-80</a>: The I-80 dataset is 45 minutes long, and the vehicle trajectory data provides the precise location of each vehicle in the study area every tenth of a second.</p> 
        <br> -->
        <a-divider style="font-size: 24px">交通速度数据集</a-divider>
        <data-table-cn :content="speed"></data-table-cn>
        <br>
        <!-- <p><a id="PeMSD4-Speed" href="#">PeMSD4</a>: The PeMSD4 dataset describes the the speed flow occupancy information of California freeway and contains 3848 sensors on 29 roads.</p>
        <p><a id="Q-Traffic" href="#">Q-Traffic</a>: The Q-Traffic dataset contains three sub-datasets: query sub-dataset, traffic speed sub-dataset and road network sub-dataset.</p>
        <p><a id="PEMS-BAY" href="#">PEMS-BAY</a>: The PeMS-BAY dataset contains 6 months of statistics on traffic speed, including 325 sensors.</p>
        <p><a id="PeMSD8-Speed" href="#">PeMSD8</a>: The PeMSD8 dataset describes the speed occupancy of California freeways with data from 1979 sensors on 8 roads.</p>
        <p><a id="HK" href="#">HK</a>: The HK dataset contains average traffic speed of major roads in Hong Kong.</p>
        <p><a id="NYC Speed data" href="#">NYC Speed data</a>: The NYC Speed data contains speed data for New York City, including speed, travel time, status, etc.</p>
        <p><a id="Loop Seattle" href="#">Loop Seattke</a>: The Loop Seattle dataset is collected by the inductive loop detectors deployed on freeways (I-5, I-405, I-90, and SR-520) in Seattle area and contains traffic state data from 323 sensor stations.</p>
        <p><a id="SZ-Taxi" href="#">SZ-Tazi</a>: The SZ-Taxi dataset contains the taxi trajectory of Shenzhen, including roads adjacency matrix and road traffic speed information.</p>
        <p><a id="PeMSD7(M)" href="#">PeMSD7(M)</a>: The PeMSD7(M) dataset describes highway speed information at 228 stations in the 7th District of California.</p>
        <p><a id="METR-LA" href="#">METR-LA</a>: The METR-LA dataset collected in the highway by loop detectors, contains traffic speed data from 207 sensors.</p> 
        <br> -->
        <a-divider style="font-size: 24px">交通流量数据集</a-divider>
        <data-table-cn :content="flow"></data-table-cn>
        <br>
        <!-- <p><a id="PeMSD3" href="#">PeMSD3</a>: The PeMSD3 dataset includes 358 sensors and flow information.</p>
        <p><a id="PeMSD4-Flow" href="#">PeMSD4</a>: The PeMSD4 dataset describes the the speed flow occupancy information of California freeway and contains 3848 sensors on 29 roads.</p>
        <p><a id="PeMSD7" href="#">PeMSD7</a>: The PeMSD7 dataset contains traffic flow information from 883 sensor stations.</p>
        <p><a id="PeMSD8-Flow" href="#">PeMSD8</a>: The PeMSD8 dataset describes the speed occupancy of California freeways with data from 1979 sensors on 8 roads.</p>
        <p><a id="TaxiBJ" href="#">TaxiBJ</a>: The TaxiBJ dataset contains the taxicab GPS data, including crowd flow, meteorology and holiday information.</p>
        <p><a id="ENG-HW" href="#">ENG-HW</a>: The ENG-HW dataset includes information on intercity road traffic between three UK cities recorded by the government from 2006 to 2014.</p> 
        <br> -->
      </div>
    </div>
  </div>
</template>

<script>
    import dataTableCn from "./dataTableCN.vue"

    const location = [
    {
      dataset: 'AustinRide',
      place: '美国奥斯汀',
      duration: '2016年6月4日 ~ 2017年4月13日',
      source: 'https://data.world/ride-austin/ride-austin-june-6-april-13',
      plink: '#AustinRide'
    },
    {
      dataset: 'NYC-Bus',
      place: '美国纽约',
      duration: '2014年8月1日 ~ 2014年10月31日',
      source: 'http://web.mta.info/developers/MTA-Bus-Time-historical-data.html',
      plink: '#NYC-Bus'
    },
    {
      dataset: 'Porto',
      place: '葡萄牙波尔图',
      duration: '2013年7月1日 ~ 2014年6月30日',
      source: 'https://archive.ics.uci.edu/ml/datasets/Taxi+Service+Trajectory+-+Prediction+Challenge%2C+ECML+PKDD+2015',
      plink: '#Porto'
    },
    {
      dataset: 'BikeCHI',
      place: '美国芝加哥',
      duration: '2013年6月27日 ~ 2018年',
      source: 'https://www.divvybikes.com/system-data',
      plink: '#BikeCHI'
    },
    {
      dataset: 'NYC-Bike',
      place: '美国纽约',
      duration: '2013年6月至今',
      source: 'https://www.citibikenyc.com/system-data',
      plink: '#NYC-Bike'
    },
    {
      dataset: 'Foursquare: Global-scale Check-in Dataset',
      place: '415座城市',
      duration: '2012年4月 ~ 2013年9月',
      source: 'https://sites.google.com/site/yangdingqi/home/foursquare-dataset',
      plink: '#Foursquare: Global-scale Check-in Dataset'
    },
    {
      dataset: 'Foursquare: User Profile Dataset',
      place: '美国纽约；日本东京',
      duration: '2012年4月 ~ 2013年9月',
      source: 'https://sites.google.com/site/yangdingqi/home/foursquare-dataset',
      plink: '#Foursquare: User Profile Dataset'
    },
    {
      dataset: 'Foursquare: Global-scale Check-in Dataset with User Social Networks',
      place: '415座城市',
      duration: '2012年4月 ~ 2013年9月',
      source: 'https://sites.google.com/site/yangdingqi/home/foursquare-dataset',
      plink: '#Foursquare: Global-scale Check-in Dataset with User Social Networks'
    },
    {
      dataset: 'Foursquare: NYC Restaurant Rich Dataset',
      place: '美国纽约',
      duration: '2011年10月24日 ~ 2012年2月20日',
      source: 'https://sites.google.com/site/yangdingqi/home/foursquare-dataset',
      plink: '#Foursquare: NYC Restaurant Rich Dataset'
    },
    {
      dataset: 'BikeDC',
      place: '美国华盛顿',
      duration: '2010年9月20日至今',
      source: 'https://www.capitalbikeshare.com/system-data',
      plink: '#BikeDC'
    },
    {
      dataset: 'Gowalla',
      place: '-',
      duration: '2009年2月 ~ 2010年10月',
      source: 'https://snap.stanford.edu/data/loc-gowalla.html',
      plink: '#Gowalla'
    },
    {
      dataset: 'NYC-Taxi',
      place: '美国纽约',
      duration: '2009年至今',
      source: 'https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page',
      plink: '#NYC-Taxi'
    },
    {
      dataset: 'Brightkite',
      place: '-',
      duration: '2008年4月 ~ 2010年10月',
      source: 'http://snap.stanford.edu/data/loc-brightkite.html',
      plink: '#Brightkite'
    },
    {
      dataset: 'T-Drive',
      place: '中国北京',
      duration: '2008年2月2日 ~ 2008年2月8日',
      source: 'https://www.microsoft.com/en-us/research/publication/t-drive-trajectory-data-sample/',
      plink: '#T-Drive'
    },
    {
      dataset: 'GeoLife-GPS',
      place: '中国北京（主要）',
      duration: '2007年8月 ~ 2012年8月',
      source: 'https://www.microsoft.com/en-us/research/publication/geolife-gps-trajectory-dataset-user-guide/',
      plink: '#GeoLife-GPS'
    },
    {
      dataset: 'I-80',
      place: '美国旧金山湾区',
      duration: '2005年4月13日',
      source: 'https://www.fhwa.dot.gov/publications/research/operations/06137/index.cfm',
      plink: '#I-80'
    },
    ]

    const speed = [
    {
      dataset: 'Rotterdam',
      place: '荷兰鹿特丹',
      duration: '2018年中的135天',
      source: 'https://github.com/RomainLITUD/DGCN_traffic_forecasting',
      plink: '#'
    },
    {
      dataset: 'PeMSD4',
      place: '美国旧金山湾区',
      duration: '2018年1月1日 ~ 2018年2月28日',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS04',
      plink: '#PeMSD4-Speed'
    },
    {
      dataset: 'Q-Traffic',
      place: '中国北京',
      duration: '2017年4月1日 ~ 2017年5月31日',
      source: 'https://github.com/JingqingZ/BaiduTraffic',
      plink: '#Q-Traffic'
    },
    {
      dataset: 'PEMS-BAY',
      place: '美国旧金山湾区',
      duration: '2017年1月1日 ~ 2017年6月30日',
      source: 'https://github.com/liyaguang/DCRNN',
      plink: '#PEMS-BAY'
    },
    {
      dataset: 'PEMSD8',
      place: '美国圣贝纳迪诺地区',
      duration: '2016年7月1日 ~ 2016年8月31日',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS08',
      plink: '#PEMSD8-Speed'
    },
    {
      dataset: 'HK',
      place: '中国香港',
      duration: '2015年12月28日至今',
      source: 'https://data.gov.hk/en-data/dataset/hk-td-sm_1-traffic-speed-map',
      plink: '#HK'
    },
    {
      dataset: 'NYC Speed data',
      place: '美国纽约',
      duration: '2015年4月1日至今',
      source: 'http://data.beta.nyc/dataset/nyc-real-time-traffic-speed-data-feed-archived',
      plink: '#NYC Speed data'
    },
    {
      dataset: 'Loop Seattle',
      place: '美国大西雅图地区',
      duration: '2015年',
      source: 'https://github.com/zhiyongc/Seattle-Loop-Data',
      plink: '#Loop Seattle'
    },
    {
      dataset: 'SZ-Taxi',
      place: '中国深圳',
      duration: '2015年1月1日 ~ 2015年1月31日',
      source: 'https://github.com/lehaifeng/T-GCN/tree/master/data',
      plink: '#SZ-Taxi'
    },
    {
      dataset: 'PEMSD7(M)',
      place: '美国加利福尼亚州第七国会选区',
      duration: '2012年5月和6月的周工作日',
      source: 'https://github.com/Davidham3/STGCN/tree/master/datasets',
      plink: '#PEMSD7(M)'
    },
    {
      dataset: 'METR-LA',
      place: '美国洛杉矶县',
      duration: '2012年3月1日 ~ 2012年6月27日',
      source: 'https://github.com/liyaguang/DCRNN',
      plink: '#METR-LA',
    },
    {
      dataset: 'PEMS',
      place: '美国加利福尼亚州',
      duration: '2001年至今',
      source: 'http://pems.dot.ca.gov',
      plink: '#PEMS'
    },
    ]

    const flow = [
    {
      dataset: 'HZMetro',
      place: '中国杭州',
      duration: '2019年1月1日 ~ 2019年1月25日',
      source: 'https://github.com/ivechan/PVCGN',
      plink: '#'
    },
    {
      dataset: 'PeMSD3',
      place: '美国加利福尼亚州第三国会选区',
      duration: '2018年9月1日 ~ 2018年11月30日',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: '#PeMS03'
    },
    {
      dataset: 'M_dense',
      place: '西班牙马德里',
      duration: '2018年1月1日 ~ 2019年12月31日',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: '#PeMS03'
    },
    {
      dataset: 'PeMSD4',
      place: '美国旧金山湾区',
      duration: '2018年1月1日 ~ 2018年2月28日',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS04',
      plink: '#PeMSD4-Flow'
    },
    {
      dataset: 'SHMetro',
      place: '中国上海',
      duration: '2016年7月1日 ~ 2016年9月30日',
      source: 'https://github.com/ivechan/PVCGN',
      plink: '#'
    },
    {
      dataset: 'PEMSD7',
      place: '美国加利福尼亚州第七国会选区',
      duration: '2016年7月1日 ~ 2016年8月31日',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: '#PEMSD7'
    },
    {
      dataset: 'PEMSD8',
      place: '美国圣贝纳迪诺地区',
      duration: '2016年7月1日 ~ 2016年8月31日',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS08',
      plink: '#PEMSD8-Flow'
    },
    {
      dataset: 'Beijing subway',
      place: '中国北京',
      duration: '2016年2月29日 ~ 2016年4月3日',
      source: 'https://github.com/JinleiZhangBJTU/ResNet-LSTM-GCN',
      plink: '#'
    },
    {
      dataset: 'TaxiBJ',
      place: '中国北京',
      duration: '2013年7月1日 ~ 2013年10月30日；2014年3月1日 ~ 2014年6月30日；2015年3月1日 ~ 2015年6月30日；2015年11月1日 ~ 2016年4月10日',
      source: 'https://github.com/TolicWang/DeepST/issues/3',
      plink: '#TaxiBJ'
    },
    {
      dataset: 'ENG-HW',
      place: '英国',
      duration: '2006年 ~ 2014年',
      source: 'http://tris.highwaysengland.co.uk/detail/trafficflowdata',
      plink: '#ENG-HW'
    },
    ]

    export default {
        data() {
            return {
              location,
              speed,
              flow
            };
        },
        components: {
          dataTableCn
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

:target {
    padding-top: 100px;
    margin-top: -100px;
}

</style>