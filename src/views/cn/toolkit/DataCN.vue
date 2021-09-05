<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">数据</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          LibCity提供了29个时空数据集，<br>并引入了统一的数据结构来格式化数据和算法的输入。
        </p>
      </div>
    </div>

    <div class="content">
      <div>
        <p class="title">数据流</p>
        <p style="text-indent: 2em">出于可扩展性，灵活性和可复用性的考虑，数据模块实现了一条优雅的数据流，可以将原始数据转换成统一的模型输入。整体的数据流如下所示：</p>
        <div style="margin: 10px auto 10px auto; text-align: center">
          <img src="../../../assets/img/data_flow-CN.png" alt="Data Flow" height="120"/>
        </div>
        
        <ul>
          <li><span style="font-weight: 700">原始数据</span>：未经处理的开源交通数据集。</li>
          <li><span style="font-weight: 700">原子文件</span>：各类交通预测任务的基础输入元素。</li>
          <li><span style="font-weight: 700">Dataset类</span>：为各类交通预测任务制定的Dataset类，负责读取原子文件。LibCity还提供一系列的数据预处理功能。详见<a href="https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/data_flow.html" target="_blank">文档</a>。</li>
          <li><span style="font-weight: 700">DataLoader类</span>：主要依托于<code style="color: #e83e8c; font-size: 90%">PyTorch</code>原生的<code style="color: #e83e8c; font-size: 90%">torch.utils.data.DataLoader</code>的DataLoader类，负责将数据以内部数据表示结构<code style="color: #e83e8c; font-size: 90%">Batch</code>类的形式返回给模型使用。 <span style="font-weight: 700">Batch</span>是基于<code style="color: #e83e8c; font-size: 90%">python.dict</code>实现的抽象数据结构，其构成key-value的结构。<code style="color: #e83e8c; font-size: 90%">Key</code>对应于模型输入的特征名。<code style="color: #e83e8c; font-size: 90%">Value</code>对应于张量（由<code style="color: #e83e8c; font-size: 90%">torch.Tensor</code>实现），其包含一个<code style="color: #e83e8c; font-size: 90%">batch</code>或<code style="color: #e83e8c; font-size: 90%">mini-batch</code>的数据。详见<a href="https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/data_flow.html" target="_blank">文档</a>。</li>
        </ul>
        <br>

        <p class="title">原子文件</p>
        <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
        <p style="text-indent: 2em">LibCity引入并实现6种原子文件类型，用来格式化各种时空数据集。它们可以描述不同时空数据挖掘任务大部分的输入数据。这些原子文件可通过文件名进行区分：</p>
        <table style="width: 900px">
          <thead style="font-size: 16px"><tr>
            <th width="15%">文件名</th>
            <th width="50%">含义</th>
            <th width="35%">例子</th>
          </tr></thead>
          <tbody>
            <tr>
              <td>xxx.geo</td>
              <td>存储地理实体属性信息</td>
              <td>geo_id, type, coordinates</td>
            </tr>
            <tr>
              <td>xxx.usr</td>
              <td>存储交通使用者信息</td>
              <td>usr_id, gender, birth_date</td>
            </tr>
            <tr>
              <td>xxx.rel</td>
              <td>存储实体间的关系信息，如路网</td>
              <td>rel_id, origin_id, destination_id</td>
            </tr>
            <tr>
              <td>xxx.dyna</td>
              <td>存储交通状态信息</td>
              <td>dyna_id, type, entity_id, location_id</td>
            </tr>
            <tr>
              <td>xxx.ext</td>
              <td>存储外部信息，如天气、温度等</td>
              <td>ext_id, time, properties</td>
            </tr>
            <tr>
              <td>config.json</td>
              <td>用于补充描述各表信息</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <br>
        <p style="text-indent: 2em">原子文件的本质是基于特征的数据表格，分别对应于模型输入的不同部分，这些原子文件组成了不同时空数据挖掘任务的输入。详见<a href="https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/atomic_files.html"  target="_blank">文档</a>。</p>
        <!-- frb 暂时隐藏该部分 -->
        <!-- <p style="text-indent: 2em">下面给出一个格式化的METR-LA数据集的例子。</p> -->
        <br>

        <p class="title">数据集列表</p>
        <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
        <p style="text-indent: 2em">我们已经收集了29个时空数据集。为了帮助用户将原始数据转换为原子文件，我们发布了将这些数据集转换为原子文件的脚本，供用户参考。此外，我们也将已经处理好的原子文件打包上传至<a href="https://bhpan.buaa.edu.cn:443/link/20D4B9501565142A624E4F662AB14A1E" target="_blank">北航云盘</a>。</p>
        <a-divider style="font-size: 24px">交通状况数据集</a-divider>
        <condition-data-table-cn :content="condition"></condition-data-table-cn>
        <br>
        <a-divider style="font-size: 24px">车辆轨迹数据集</a-divider>
        <vehicle-data-table-cn :content="vehicle"></vehicle-data-table-cn>
        <br>
        <a-divider style="font-size: 24px">人流轨迹数据集</a-divider>
        <people-data-table-cn :content="people"></people-data-table-cn>
        <br>
        <!-- <a-divider style="font-size: 24px">轨迹数据集</a-divider>
        <data-table-cn :content="location"></data-table-cn>
        <br>
        <a-divider style="font-size: 24px">交通速度数据集</a-divider>
        <data-table-cn :content="speed"></data-table-cn>
        <br>
        <a-divider style="font-size: 24px">交通流量数据集</a-divider>
        <data-table-cn :content="flow"></data-table-cn>
        <br> -->
      </div>
    </div>
  </div>
</template>

<script>
    // import dataTableCn from "./dataTableCN.vue"
    import conditionDataTableCn from "./conditionDataTableCN.vue"
    import peopleDataTableCn from "./peopleDataTableCN.vue"
    import vehicleDataTableCn from "./vehicleDataTableCN.vue"

    const cn_doc_link = 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#';

    const condition = [
    {
      dataset: 'METR-LA',
      geo: '207',
      rel: '11753',
      feature: '速度',
      place: '美国洛杉矶',
      duration: '2012年3月1日 ~ 2012年6月27日',
      interval: '5分钟',
      source: 'https://github.com/liyaguang/DCRNN',
      plink: cn_doc_link + 'metr-la',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/metr_la.py'
    },
    {
      dataset: 'Los-loop',
      geo: '207',
      rel: '42849',
      feature: '速度',
      place: '美国洛杉矶',
      duration: '2012年3月1日 ~ 2012年6月27日',
      interval: '5分钟',
      source: 'https://github.com/lehaifeng/T-GCN/tree/master/data',
      plink: cn_doc_link + 'los-loop',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/los-loop.py'
    },
    {
      dataset: 'SZ-Taxi',
      geo: '156',
      rel: '24336',
      feature: '速度',
      place: '中国深圳',
      duration: '2015年1月1日 ~ 2015年1月31日',
      interval: '15分钟',
      source: 'https://github.com/lehaifeng/T-GCN/tree/master/data',
      plink: cn_doc_link + 'sz-taxi',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/sz-taxi.py'
    },
    {
      dataset: 'Loop Seattle',
      geo: '323',
      rel: '104329',
      feature: '速度',
      place: '美国西雅图',
      duration: '2015年',
      interval: '5分钟',
      source: 'https://github.com/zhiyongc/Seattle-Loop-Data',
      plink: cn_doc_link + 'loop-seattle',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/loop_seattle.py'
    },
    {
      dataset: 'Q-Traffic',
      geo: '45148',
      rel: '63422',
      feature: '速度',
      place: '中国北京',
      duration: '2017年4月1日 ~ 2017年5月31日',
      interval: '15分钟',
      source: 'https://github.com/JingqingZ/BaiduTraffic',
      plink: cn_doc_link + 'q-traffic',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/q-traffic.py'
    },
    {
      dataset: 'PeMSD3',
      geo: '358',
      rel: '547',
      feature: '流量',
      place: '美国加利福尼亚州第3区',
      duration: '2018年9月1日 ~ 2018年11月30日',
      interval: '5分钟',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: cn_doc_link + 'pemsd3',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd3.py'
    },
    {
      dataset: 'PeMSD4',
      geo: '307',
      rel: '340',
      feature: '流量，速度，占有率',
      place: '美国旧金山湾区',
      duration: '2018年1月1日 ~ 2018年2月28日',
      interval: '5分钟',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS04',
      plink: cn_doc_link + 'pemsd4',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd4.py'
    },
    {
      dataset: 'PEMSD7',
      geo: '883',
      rel: '866',
      feature: '流量',
      place: '美国加利福尼亚州第7区',
      duration: '2016年7月1日 ~ 2016年8月31日',
      interval: '5分钟',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: cn_doc_link + 'pemsd7',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd7.py'
    },
    {
      dataset: 'PEMSD8',
      geo: '170',
      rel: '277',
      feature: '流量，速度，占有率',
      place: '美国圣贝纳迪诺地区',
      duration: '2016年7月1日 ~ 2016年8月31日',
      interval: '5分钟',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS08',
      plink: cn_doc_link + 'pemsd8',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd8.py'
    },
    {
      dataset: 'PEMSD7(M)',
      geo: '228',
      rel: '51984',
      feature: '速度',
      place: '美国加利福尼亚州第7区',
      duration: '2012年5月和6月的工作日',
      interval: '5分钟',
      source: 'https://github.com/Davidham3/STGCN/tree/master/datasets',
      plink: cn_doc_link + 'pemsd7-m',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd7(m).py'
    },
    {
      dataset: 'PEMS-BAY',
      geo: '325',
      rel: '8358',
      feature: '速度',
      place: '美国旧金山湾区',
      duration: '2017年1月1日 ~ 2017年6月30日',
      interval: '5分钟',
      source: 'https://github.com/liyaguang/DCRNN',
      plink: cn_doc_link + 'pems-bay',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pems_bay.py'
    },
    {
      dataset: 'Beijing subway',
      geo: '276',
      rel: '76176',
      feature: '人流量',
      place: '中国北京',
      duration: '2016年2月29日 ~ 2016年4月3日',
      interval: '10分钟，15分钟，30分钟',
      source: 'https://github.com/JinleiZhangBJTU/ResNet-LSTM-GCN',
      plink: cn_doc_link + 'beijing-subway',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/beijing%20subway.py'
    },
    {
      dataset: 'M_dense',
      geo: '30',
      rel: '-',
      feature: '车流量',
      place: '西班牙马德里',
      duration: '2018年1月1日 ~ 2019年12月31日',
      interval: '60分钟',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: cn_doc_link + 'm-dense',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/m_dense.py'
    },
    {
      dataset: 'Rotterdam',
      geo: '208',
      rel: '-',
      feature: '速度',
      place: '荷兰鹿特丹',
      duration: '2018年中的135天',
      interval: '2分钟',
      source: 'https://github.com/RomainLITUD/DGCN_traffic_forecasting',
      plink: cn_doc_link + 'rotterdam',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/rotterdam.py'
    },
    {
      dataset: 'SHMetro',
      geo: '288',
      rel: '82944',
      feature: '人流量',
      place: '中国上海',
      duration: '2016年7月1日 ~ 2016年9月30日',
      interval: '15分钟',
      source: 'https://github.com/ivechan/PVCGN',
      plink: cn_doc_link + 'shmetro',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/sh_metro.py'
    },
    {
      dataset: 'HZMetro',
      geo: '80',
      rel: '6400',
      feature: '人流量',
      place: '中国杭州',
      duration: '2019年1月1日 ~ 2019年1月25日',
      interval: '15分钟',
      source: 'https://github.com/ivechan/PVCGN',
      plink: cn_doc_link + 'hzmetro',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/hz_metro.py'
    },
    ]

    const people = [
    {
      dataset: 'Foursquare',
      place: '415座城市',
      duration: '2012年4月 ~ 2013年9月',
      source: 'https://sites.google.com/site/yangdingqi/home/foursquare-dataset',
      plink: cn_doc_link + 'foursquare-global-scale-check-in-dataset',
      slink: '#'
    },
    {
      dataset: 'Gowalla',
      place: '-',
      duration: '2009年2月 ~ 2010年10月',
      source: 'https://snap.stanford.edu/data/loc-gowalla.html',
      plink: cn_doc_link + 'gowalla',
      slink: '#'
    },
    {
      dataset: 'Brightkite',
      place: '-',
      duration: '2008年4月 ~ 2010年10月',
      source: 'http://snap.stanford.edu/data/loc-brightkite.html',
      plink: cn_doc_link + 'brightkite',
      slink: '#'
    },
    {
      dataset: 'GeoLife-GPS',
      place: '中国北京（主要）',
      duration: '2007年8月 ~ 2012年8月',
      source: 'https://www.microsoft.com/en-us/research/publication/geolife-gps-trajectory-dataset-user-guide/',
      plink: cn_doc_link + 'geolife-gps',
      slink: '#'
    },
    ]

    const vehicle = [
    {
      dataset: 'NYC-Bus',
      place: '美国纽约',
      duration: '2014年8月1日 ~ 2014年10月31日',
      vehicle: '公交车',
      source: 'http://web.mta.info/developers/MTA-Bus-Time-historical-data.html',
      plink: cn_doc_link + 'nyc-bus',
      slink: '#'
    },
    {
      dataset: 'NYC-Taxi',
      place: '美国纽约',
      duration: '2009年至今',
      vehicle: '出租车',
      source: 'https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page',
      plink: cn_doc_link + 'nyc-taxi',
      slink: '#'
    },
    {
      dataset: 'NYC-Bike',
      place: '美国纽约',
      duration: '2013年6月至今',
      vehicle: '自行车',
      source: 'https://www.citibikenyc.com/system-data',
      plink: cn_doc_link + 'nyc-bike',
      slink: '#'
    },
    {
      dataset: 'BikeDC',
      place: '美国华盛顿',
      duration: '2010年9月20日至今',
      vehicle: '自行车',
      source: 'https://www.capitalbikeshare.com/system-data',
      plink: cn_doc_link + 'bikedc',
      slink: '#'
    },
    {
      dataset: 'BikeCHI',
      place: '美国芝加哥',
      duration: '2013年6月27日 ~ 2018年',
      vehicle: '自行车',
      source: 'https://www.divvybikes.com/system-data',
      plink: cn_doc_link + 'bikechi',
      slink: '#'
    },
    {
      dataset: 'AustinRide',
      place: '美国奥斯汀',
      duration: '2016年6月4日 ~ 2017年4月13日',
      vehicle: '自行车',
      source: 'https://data.world/ride-austin/ride-austin-june-6-april-13',
      plink: cn_doc_link + 'austinride',
      slink: '#'
    },
    {
      dataset: 'I-80',
      place: '美国旧金山湾区',
      duration: '2005年4月13日',
      vehicle: '-',
      source: 'https://www.fhwa.dot.gov/publications/research/operations/06137/index.cfm',
      plink: cn_doc_link + 'i-80',
      slink: '#'
    },
    {
      dataset: 'T-Drive',
      place: '中国北京',
      duration: '2008年2月2日 ~ 2008年2月8日',
      vehicle: '自行车',
      source: 'https://www.microsoft.com/en-us/research/publication/t-drive-trajectory-data-sample/',
      plink: cn_doc_link + 't-drive',
      slink: '#'
    },
    {
      dataset: 'Porto',
      place: '葡萄牙波尔图',
      duration: '2013年7月1日 ~ 2014年6月30日',
      vehicle: '自行车',
      source: 'https://archive.ics.uci.edu/ml/datasets/Taxi+Service+Trajectory+-+Prediction+Challenge%2C+ECML+PKDD+2015',
      plink: cn_doc_link + 'porto',
      slink: '#'
    },
    ]

    const location = [
    {
      dataset: 'AustinRide',
      place: '美国奥斯汀',
      duration: '2016年6月4日 ~ 2017年4月13日',
      source: 'https://data.world/ride-austin/ride-austin-june-6-april-13',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#austinride'
    },
    {
      dataset: 'NYC-Bus',
      place: '美国纽约',
      duration: '2014年8月1日 ~ 2014年10月31日',
      source: 'http://web.mta.info/developers/MTA-Bus-Time-historical-data.html',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#nyc-bus'
    },
    {
      dataset: 'Porto',
      place: '葡萄牙波尔图',
      duration: '2013年7月1日 ~ 2014年6月30日',
      source: 'https://archive.ics.uci.edu/ml/datasets/Taxi+Service+Trajectory+-+Prediction+Challenge%2C+ECML+PKDD+2015',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#porto'
    },
    {
      dataset: 'BikeCHI',
      place: '美国芝加哥',
      duration: '2013年6月27日 ~ 2018年',
      source: 'https://www.divvybikes.com/system-data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#bikechi'
    },
    {
      dataset: 'NYC-Bike',
      place: '美国纽约',
      duration: '2013年6月至今',
      source: 'https://www.citibikenyc.com/system-data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#nyc-bike'
    },
    {
      dataset: 'Foursquare',
      place: '415座城市',
      duration: '2012年4月 ~ 2013年9月',
      source: 'https://sites.google.com/site/yangdingqi/home/foursquare-dataset',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#foursquare-global-scale-check-in-dataset'
    },
    {
      dataset: 'BikeDC',
      place: '美国华盛顿',
      duration: '2010年9月20日至今',
      source: 'https://www.capitalbikeshare.com/system-data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#bikedc'
    },
    {
      dataset: 'Gowalla',
      place: '-',
      duration: '2009年2月 ~ 2010年10月',
      source: 'https://snap.stanford.edu/data/loc-gowalla.html',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#gowalla'
    },
    {
      dataset: 'NYC-Taxi',
      place: '美国纽约',
      duration: '2009年至今',
      source: 'https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#nyc-taxi'
    },
    {
      dataset: 'Brightkite',
      place: '-',
      duration: '2008年4月 ~ 2010年10月',
      source: 'http://snap.stanford.edu/data/loc-brightkite.html',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#brightkite'
    },
    {
      dataset: 'T-Drive',
      place: '中国北京',
      duration: '2008年2月2日 ~ 2008年2月8日',
      source: 'https://www.microsoft.com/en-us/research/publication/t-drive-trajectory-data-sample/',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#t-drive'
    },
    {
      dataset: 'GeoLife-GPS',
      place: '中国北京（主要）',
      duration: '2007年8月 ~ 2012年8月',
      source: 'https://www.microsoft.com/en-us/research/publication/geolife-gps-trajectory-dataset-user-guide/',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#geolife-gps'
    },
    {
      dataset: 'I-80',
      place: '美国旧金山湾区',
      duration: '2005年4月13日',
      source: 'https://www.fhwa.dot.gov/publications/research/operations/06137/index.cfm',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#i-80'
    },
    ]

    const speed = [
    {
      dataset: 'Rotterdam',
      place: '荷兰鹿特丹',
      duration: '2018年中的135天',
      source: 'https://github.com/RomainLITUD/DGCN_traffic_forecasting',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#rotterdam'
    },
    {
      dataset: 'PeMSD4',
      place: '美国旧金山湾区',
      duration: '2018年1月1日 ~ 2018年2月28日',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS04',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#pemsd4'
    },
    {
      dataset: 'Q-Traffic',
      place: '中国北京',
      duration: '2017年4月1日 ~ 2017年5月31日',
      source: 'https://github.com/JingqingZ/BaiduTraffic',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#q-traffic'
    },
    {
      dataset: 'PEMS-BAY',
      place: '美国旧金山湾区',
      duration: '2017年1月1日 ~ 2017年6月30日',
      source: 'https://github.com/liyaguang/DCRNN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#pems-bay'
    },
    {
      dataset: 'PEMSD8',
      place: '美国圣贝纳迪诺地区',
      duration: '2016年7月1日 ~ 2016年8月31日',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS08',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#pemsd8'
    },
    {
      dataset: 'HK',
      place: '中国香港',
      duration: '2015年12月28日至今',
      source: 'https://data.gov.hk/en-data/dataset/hk-td-sm_1-traffic-speed-map',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#hk'
    },
    {
      dataset: 'NYC Speed data',
      place: '美国纽约',
      duration: '2015年4月1日至今',
      source: 'http://data.beta.nyc/dataset/nyc-real-time-traffic-speed-data-feed-archived',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#nyc-speed-data'
    },
    {
      dataset: 'Loop Seattle',
      place: '美国大西雅图地区',
      duration: '2015年',
      source: 'https://github.com/zhiyongc/Seattle-Loop-Data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#loop-seattle'
    },
    {
      dataset: 'SZ-Taxi',
      place: '中国深圳',
      duration: '2015年1月1日 ~ 2015年1月31日',
      source: 'https://github.com/lehaifeng/T-GCN/tree/master/data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#sz-taxi'
    },
    {
      dataset: 'PEMSD7(M)',
      place: '美国加利福尼亚州第七国会选区',
      duration: '2012年5月和6月的周工作日',
      source: 'https://github.com/Davidham3/STGCN/tree/master/datasets',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#pemsd7-m'
    },
    {
      dataset: 'METR-LA',
      place: '美国洛杉矶县',
      duration: '2012年3月1日 ~ 2012年6月27日',
      source: 'https://github.com/liyaguang/DCRNN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#metr-la',
    },
    {
      dataset: 'PEMS',
      place: '美国加利福尼亚州',
      duration: '2001年至今',
      source: 'http://pems.dot.ca.gov',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#pems'
    },
    ]

    const flow = [
    {
      dataset: 'HZMetro',
      place: '中国杭州',
      duration: '2019年1月1日 ~ 2019年1月25日',
      source: 'https://github.com/ivechan/PVCGN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#hzmetro'
    },
    {
      dataset: 'PeMSD3',
      place: '美国加利福尼亚州第三国会选区',
      duration: '2018年9月1日 ~ 2018年11月30日',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#pemsd3'
    },
    {
      dataset: 'M_dense',
      place: '西班牙马德里',
      duration: '2018年1月1日 ~ 2019年12月31日',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#m-dense'
    },
    {
      dataset: 'PeMSD4',
      place: '美国旧金山湾区',
      duration: '2018年1月1日 ~ 2018年2月28日',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS04',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#pemsd4'
    },
    {
      dataset: 'SHMetro',
      place: '中国上海',
      duration: '2016年7月1日 ~ 2016年9月30日',
      source: 'https://github.com/ivechan/PVCGN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#shmetro'
    },
    {
      dataset: 'PEMSD7',
      place: '美国加利福尼亚州第七国会选区',
      duration: '2016年7月1日 ~ 2016年8月31日',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#pemsd7'
    },
    {
      dataset: 'PEMSD8',
      place: '美国圣贝纳迪诺地区',
      duration: '2016年7月1日 ~ 2016年8月31日',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS08',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#pemsd8'
    },
    {
      dataset: 'Beijing subway',
      place: '中国北京',
      duration: '2016年2月29日 ~ 2016年4月3日',
      source: 'https://github.com/JinleiZhangBJTU/ResNet-LSTM-GCN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#beijing-subway'
    },
    {
      dataset: 'TaxiBJ',
      place: '中国北京',
      duration: '2013年7月1日 ~ 2013年10月30日；2014年3月1日 ~ 2014年6月30日；2015年3月1日 ~ 2015年6月30日；2015年11月1日 ~ 2016年4月10日',
      source: 'https://github.com/TolicWang/DeepST/issues/3',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#taxibj'
    },
    {
      dataset: 'ENG-HW',
      place: '英国',
      duration: '2006年 ~ 2014年',
      source: 'http://tris.highwaysengland.co.uk/detail/trafficflowdata',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/zh_CN/latest/user_guide/data/raw_data.html#eng-hw'
    },
    ]

    export default {
        data() {
            return {
              // location,
              // speed,
              // flow,
              condition,
              people,
              vehicle
            };
        },
        components: {
          // dataTableCn
          conditionDataTableCn,
          peopleDataTableCn,
          vehicleDataTableCn
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