<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">Data</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          LibCity provides 29 spatio-temporal datasets and introduces unified <br> 
          data structures to format representations of datas and the input of algorithms.
        </p>
      </div>
    </div>

    <div class="content">
      <div>
        <p class="title">Data Flow</p>
        <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
        <p>In consideration of extensibiliy, flexibility and reusability, the data module designs an elegant data flow that transforms raw data into the unified input of model module. The overall data flow can be described as follows:</p>
        <div style="margin: 10px auto 10px auto; text-align: center">
          <img src="../../assets/img/data_flow.png" alt="Data Flow" height="120"/>
        </div>
        
        <ul>
          <li><span style="font-weight: 700">Raw Data</span>: Unprocessed open source traffic datasets.</li>
          <li><span style="font-weight: 700">Atomic Files</span>: Basic components for characterizing the input of various traffic prediction tasks.</li>
          <li><span style="font-weight: 700">Dataset</span>: Dataset objects for various traffic prediction tasks, which is responsible for reading atomic files. LibCity also provides a series of functions for data preprocessing. Detailed in <a href="https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/data_flow.html" target="_blank">Document</a>.</li>
          <li><span style="font-weight: 700">DataLoader</span>: Mainly based on the <code style="color: #e83e8c; font-size: 90%">torch.utils.data.DataLoader</code> in the library of <code style="color: #e83e8c; font-size: 90%">PyTorch</code>. Responsible for feeding data into models by an internal data structure <code style="color: #e83e8c; font-size: 90%">Batch</code>. <span style="font-weight: 700">Batch</span> is implemented as a abstract data type based on <code style="color: #e83e8c; font-size: 90%">python.dict</code>, which is a key-value indexed data structure. <code style="color: #e83e8c; font-size: 90%">Key</code> corresponds to the feature name of the model input. <code style="color: #e83e8c; font-size: 90%">Value</code> corresponds to the tensor (implemented by <code style="color: #e83e8c; font-size: 90%">torch.Tensor</code>) and the value entry for a specific key stores all the corresponding tensor data in a <code style="color: #e83e8c; font-size: 90%">batch</code> or <code style="color: #e83e8c; font-size: 90%">mini-batch</code>. Detailed in <a href="https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/data_flow.html" target="_blank">Document</a>.</li>
        </ul>
        <br>

        <p class="title">Atomic Files</p>
        <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
        <p>LibCity introduces and implements 6 atomic file types for formating various spatio-temporal datasets, which are able to characterize most forms of the input data required by different spatio-temporal data mining tasks. These atomic files can be identified by their filenames:</p>
        <table style="width: 1000px">
          <thead style="font-size: 16px"><tr>
            <th width="12%">FILENAME</th>
            <th width="58%">CONTENT</th>
            <th width="30%">EXAMPLE FORMAT</th>
          </tr></thead>
          <tbody>
            <tr>
              <td>xxx.geo</td>
              <td>Store geographic entity attribute information.</td>
              <td>geo_id, type, coordinates</td>
            </tr>
            <tr>
              <td>xxx.usr</td>
              <td>Store traffic user information.</td>
              <td>usr_id, gender, birth_date</td>
            </tr>
            <tr>
              <td>xxx.rel</td>
              <td>Store the relationship information between entities, such as road networks.	</td>
              <td>rel_id, origin_id, destination_id</td>
            </tr>
            <tr>
              <td>xxx.dyna</td>
              <td>Store traffic condition information.</td>
              <td>dyna_id, type, entity_id, location_id</td>
            </tr>
            <tr>
              <td>xxx.ext</td>
              <td>Store external information, such as weather, temperature, etc.</td>
              <td>ext_id, time, properties</td>
            </tr>
            <tr>
              <td>config.json</td>
              <td>Used to supplement the description of the above table information.</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
        <br>
        <p>The essence of the atomic files is feature-based data frames corresponding to different parts of the task input. And atomic files are combined to support the input of different spatio-temporal data mining tasks. Detailed in <a href="https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/atomic_files.html" target="_blank">Document</a>.</p>
        <!-- frb 暂时隐藏下列内容 -->
        <!-- <p>Here is an example of formatted METR-LA dataset below.</p> -->
        <br>

        <p class="title">Dataset List</p>
        <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
        <p>We have already collected 29 spatio-temporal datasets. In order to help users transform the raw data into atomic files, we have released the scripts of formatting these datasets into atomic files for reference. Besides, we have uploaded the processed atomic files in network disks <a href="https://pan.baidu.com/s/1qEfcXBO-QwZfiT0G3IYMpQ#list/path=%2F" target="_blank">BaiduDisk with code 1231</a> or <a href="https://drive.google.com/drive/folders/1g5v2Gq1tkOq8XO0HDCZ9nOTtRpB6-gPe?usp=sharing">Google Drive</a>.</p>
        <a-divider style="font-size: 24px">Traffic Condition Dataset</a-divider>
        <condition-data-table :content="condition"></condition-data-table>
        <br>
        <a-divider style="font-size: 24px">Vehicle Trajectory Dataset</a-divider>
        <vehicle-data-table :content="vehicle"></vehicle-data-table>
        <br>
        <a-divider style="font-size: 24px">People Flow Trajectory Dataset</a-divider>
        <people-data-table :content="people"></people-data-table>
        <br>
        <!-- <a-divider style="font-size: 24px">Trajectory Dataset</a-divider>
        <data-table :content="location"></data-table>
        <br>
        <a-divider style="font-size: 24px">Traffic Speed Dataset</a-divider>
        <data-table :content="speed"></data-table>
        <br>
        <a-divider style="font-size: 24px">Traffic Flow Dataset</a-divider>
        <data-table :content="flow"></data-table>
        <br> -->
      </div>
    </div>
  </div>
</template>

<script>
    import conditionDataTable from "./conditionDataTable.vue"
    import peopleDataTable from "./peopleDataTable.vue"
    import vehicleDataTable from "./vehicleDataTable.vue"

    const condition = [
    {
      dataset: 'METR-LA',
      geo: '207',
      rel: '11753',
      feature: 'speed',
      place: 'Los Angeles County, USA',
      duration: 'Mar. 1, 2012 ~ Jun. 27, 2012',
      interval: '5min',
      source: 'https://github.com/liyaguang/DCRNN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#metr-la',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/metr_la.py'
    },
    {
      dataset: 'Los-loop',
      geo: '207',
      rel: '42849',
      feature: 'speed',
      place: 'Los Angeles County, USA',
      duration: 'Mar. 1, 2012 ~ Jun. 27, 2012',
      interval: '5min',
      source: 'https://github.com/lehaifeng/T-GCN/tree/master/data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#los-loop',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/los-loop.py'
    },
    {
      dataset: 'SZ-Taxi',
      geo: '156',
      rel: '24336',
      feature: 'speed',
      place: 'Shenzhen, China',
      duration: 'Jan. 1, 2015 ~ Jan. 31, 2015',
      interval: '15min',
      source: 'https://github.com/lehaifeng/T-GCN/tree/master/data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#sz-taxi',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/sz-taxi.py'
    },
    {
      dataset: 'Loop Seattle',
      geo: '323',
      rel: '104329',
      feature: 'speed',
      place: 'Greater Seattle Area, USA',
      duration: 'over the entirely of 2015',
      interval: '5min',
      source: 'https://github.com/zhiyongc/Seattle-Loop-Data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#loop-seattle',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/loop_seattle.py'
    },
    {
      dataset: 'Q-Traffic',
      geo: '45148',
      rel: '63422',
      feature: 'speed',
      place: 'Beijing, China',
      duration: 'Apr. 1, 2017 ~ May 31, 2017',
      interval: '15min',
      source: 'https://github.com/JingqingZ/BaiduTraffic',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#q-traffic',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/q-traffic.py'
    },
    {
      dataset: 'PeMSD3',
      geo: '358',
      rel: '547',
      feature: 'flow',
      place: 'District 3 of California, USA',
      duration: 'Sept. 1, 2018 ~ Nov. 30, 2018',
      interval: '5min',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd3',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd3.py'
    },
    {
      dataset: 'PeMSD4',
      geo: '307',
      rel: '340',
      feature: 'flow, speed, occupancy',
      place: 'San Francisco Bay Area, USA',
      duration: 'Jan. 1, 2018 ~ Feb. 28, 2018',
      interval: '5min',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS04',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd4',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd4.py'
    },
    {
      dataset: 'PEMSD7',
      geo: '883',
      rel: '866',
      feature: 'flow',
      place: 'District 7 of California, USA',
      duration: 'Jul. 1, 2016 ~ Aug. 31, 2016',
      interval: '5min',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd7',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd7.py'
    },
    {
      dataset: 'PEMSD8',
      geo: '170',
      rel: '277',
      feature: 'flow, speed, occupancy',
      place: 'San Bernardino Area, USA',
      duration: 'Jul. 1, 2016 ~ Aug. 31, 2016',
      interval: '5min',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS08',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd8',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd8.py'
    },
    {
      dataset: 'PEMSD7(M)',
      geo: '228',
      rel: '51984',
      feature: 'speed',
      place: 'District 7 of California, USA',
      duration: 'the weekdays of May and June of 2012',
      interval: '5min',
      source: 'https://github.com/Davidham3/STGCN/tree/master/datasets',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd7-m',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd7(m).py'
    },
    {
      dataset: 'PEMS-BAY',
      geo: '325',
      rel: '8358',
      feature: 'speed',
      place: 'San Francisco Bay Area, USA',
      duration: 'Jan. 1, 2017 ~ Jun. 30, 2017',
      interval: '5min',
      source: 'https://github.com/liyaguang/DCRNN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pems-bay',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pems_bay.py'
    },
    {
      dataset: 'Beijing subway',
      geo: '276',
      rel: '76176',
      feature: 'people flow',
      place: 'Beijing, China',
      duration: 'Feb. 29, 2016 ~ Apr. 3, 2016',
      interval: '10min, 15min, 30min',
      source: 'https://github.com/JinleiZhangBJTU/ResNet-LSTM-GCN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#beijing-subway',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/beijing%20subway.py'
    },
    {
      dataset: 'M_dense',
      geo: '30',
      rel: '-',
      feature: 'car flow',
      place: 'Madrid, Spain',
      duration: 'Jan. 1, 2018 ~ Dec. 21, 2019',
      interval: '60min',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#m-dense',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/m_dense.py'
    },
    {
      dataset: 'Rotterdam',
      geo: '208',
      rel: '-',
      feature: 'speed',
      place: 'Rotterdam, Holland',
      duration: '135 days of 2018',
      interval: '2min',
      source: 'https://github.com/RomainLITUD/DGCN_traffic_forecasting',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#rotterdam',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/rotterdam.py'
    },
    {
      dataset: 'SHMetro',
      geo: '288',
      rel: '82944',
      feature: 'people flow',
      place: 'Shanghai, China',
      duration: 'Jul. 1, 2016 ~ Sept. 30, 2016',
      interval: '15min',
      source: 'https://github.com/ivechan/PVCGN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#shmetro',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/sh_metro.py'
    },
    {
      dataset: 'HZMetro',
      geo: '80',
      rel: '6400',
      feature: 'people flow',
      place: 'Hangzhou, China',
      duration: 'Jan. 1, 2019 ~ Jan. 25, 2019',
      interval: '15min',
      source: 'https://github.com/ivechan/PVCGN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#hzmetro',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/hz_metro.py'
    },
    ]

    const people = [
    {
      dataset: 'Foursquare',
      place: '415 cities',
      duration: 'Apr. 2012 ~ Sept. 2013',
      source: 'https://sites.google.com/site/yangdingqi/home/foursquare-dataset',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#foursquare-global-scale-check-in-dataset',
      slink: '#'
    },
    {
      dataset: 'Gowalla',
      place: '-',
      duration: 'Feb. 2009 ~ Oct. 2010',
      source: 'https://snap.stanford.edu/data/loc-gowalla.html',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#gowalla',
      slink: '#'
    },
    {
      dataset: 'Brightkite',
      place: '-',
      duration: 'Apr. 2008 ~ Oct. 2010',
      source: 'http://snap.stanford.edu/data/loc-brightkite.html',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#brightkite',
      slink: '#'
    },
    {
      dataset: 'GeoLife-GPS',
      place: 'Beijing, China (majority)',
      duration: 'Aug. 2007 ~ Aug. 2012',
      source: 'https://www.microsoft.com/en-us/research/publication/geolife-gps-trajectory-dataset-user-guide/',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#geolife-gps',
      slink: '#'
    },
    ]

    const vehicle = [
    {
      dataset: 'NYC-Bus',
      place: 'New York, USA',
      duration: 'Aug. 1, 2014 ~ Oct. 31, 2014',
      vehicle: 'bus',
      source: 'http://web.mta.info/developers/MTA-Bus-Time-historical-data.html',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nyc-bus',
      slink: '#'
    },
    {
      dataset: 'NYC-Taxi',
      place: 'New York, USA',
      duration: '2009 ~ present',
      vehicle: 'taxi',
      source: 'https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nyc-taxi',
      slink: '#'
    },
    {
      dataset: 'NYC-Bike',
      place: 'New York, USA',
      duration: 'Jun. 2013 ~ present',
      vehicle: 'bike',
      source: 'https://www.citibikenyc.com/system-data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nyc-bike',
      slink: '#'
    },
    {
      dataset: 'BikeDC',
      place: 'Washington, USA',
      duration: 'Sept. 20, 2010 ~ Oct. 2020',
      vehicle: 'bike',
      source: 'https://www.capitalbikeshare.com/system-data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#bikedc',
      slink: '#'
    },
    {
      dataset: 'BikeCHI',
      place: 'Chicago, USA',
      duration: 'Jun. 27, 2013 ~ 2018',
      vehicle: 'bike',
      source: 'https://www.divvybikes.com/system-data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#bikechi',
      slink: '#'
    },
    {
      dataset: 'AustinRide',
      place: 'Austin, USA',
      duration: 'Jun. 4, 2016 ~ Apr. 13, 2017',
      vehicle: 'bike',
      source: 'https://data.world/ride-austin/ride-austin-june-6-april-13',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#austinride',
      slink: '#'
    },
    {
      dataset: 'I-80',
      place: 'San Francisco Bay, USA',
      duration: 'Apr. 13, 2005',
      vehicle: '-',
      source: 'https://www.fhwa.dot.gov/publications/research/operations/06137/index.cfm',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#i-80',
      slink: '#'
    },
    {
      dataset: 'T-Drive',
      place: 'Beijing, China',
      duration: 'Feb. 2, 2008 ~ Feb. 8, 2008',
      vehicle: 'taxi',
      source: 'https://www.microsoft.com/en-us/research/publication/t-drive-trajectory-data-sample/',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#t-drive',
      slink: '#'
    },
    {
      dataset: 'Porto',
      place: 'Porto, Portugal',
      duration: 'Jul. 1, 2013 ~ Jun. 30, 2014',
      vehicle: 'taxi',
      source: 'https://archive.ics.uci.edu/ml/datasets/Taxi+Service+Trajectory+-+Prediction+Challenge%2C+ECML+PKDD+2015',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#porto',
      slink: '#'
    },
    ]


    const location = [
    {
      dataset: 'AustinRide',
      place: 'Austin, USA',
      duration: 'Jun. 4, 2016 ~ Apr. 13, 2017',
      source: 'https://data.world/ride-austin/ride-austin-june-6-april-13',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#austinride'
    },
    {
      dataset: 'NYC-Bus',
      place: 'New York, USA',
      duration: 'Aug. 1, 2014 ~ Oct. 31, 2014',
      source: 'http://web.mta.info/developers/MTA-Bus-Time-historical-data.html',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nyc-bus'
    },
    {
      dataset: 'Porto',
      place: 'Porto, Portugal',
      duration: 'Jul. 1, 2013 ~ Jun. 30, 2014',
      source: 'https://archive.ics.uci.edu/ml/datasets/Taxi+Service+Trajectory+-+Prediction+Challenge%2C+ECML+PKDD+2015',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#porto'
    },
    {
      dataset: 'BikeCHI',
      place: 'Chicago, USA',
      duration: 'Jun. 27, 2013 ~ 2018',
      source: 'https://www.divvybikes.com/system-data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#bikechi'
    },
    {
      dataset: 'NYC-Bike',
      place: 'New York, USA',
      duration: 'Jun. 2013 ~ present',
      source: 'https://www.citibikenyc.com/system-data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nyc-bike'
    },
    {
      dataset: 'Foursquare',
      place: '415 cities',
      duration: 'Apr. 2012 ~ Sept. 2013',
      source: 'https://sites.google.com/site/yangdingqi/home/foursquare-dataset',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#foursquare-global-scale-check-in-dataset'
    },
    {
      dataset: 'BikeDC',
      place: 'Washington, USA',
      duration: 'Sept. 20, 2010 ~ Oct. 2020',
      source: 'https://www.capitalbikeshare.com/system-data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#bikedc'
    },
    {
      dataset: 'Gowalla',
      place: '-',
      duration: 'Feb. 2009 ~ Oct. 2010',
      source: 'https://snap.stanford.edu/data/loc-gowalla.html',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#gowalla'
    },
    {
      dataset: 'NYC-Taxi',
      place: 'New York, USA',
      duration: '2009 ~ present',
      source: 'https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nyc-taxi'
    },
    {
      dataset: 'Brightkite',
      place: '-',
      duration: 'Apr. 2008 ~ Oct. 2010',
      source: 'http://snap.stanford.edu/data/loc-brightkite.html',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#brightkite'
    },
    {
      dataset: 'T-Drive',
      place: 'Beijing, China',
      duration: 'Feb. 2, 2008 ~ Feb. 8, 2008',
      source: 'https://www.microsoft.com/en-us/research/publication/t-drive-trajectory-data-sample/',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#t-drive'
    },
    {
      dataset: 'GeoLife-GPS',
      place: 'Beijing, China (majority)',
      duration: 'Aug. 2007 ~ Aug. 2012',
      source: 'https://www.microsoft.com/en-us/research/publication/geolife-gps-trajectory-dataset-user-guide/',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#geolife-gps'
    },
    {
      dataset: 'I-80',
      place: 'San Francisco Bay, USA',
      duration: 'Apr. 13, 2005',
      source: 'https://www.fhwa.dot.gov/publications/research/operations/06137/index.cfm',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#i-80'
    },
    ]

    const speed = [
    {
      dataset: 'Rotterdam',
      place: 'Rotterdam, Holland',
      duration: '135 days of 2018',
      source: 'https://github.com/RomainLITUD/DGCN_traffic_forecasting',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#rotterdam'
    },
    {
      dataset: 'PeMSD4',
      place: 'San Francisco Bay Area, USA',
      duration: 'Jan. 1, 2018 ~ Feb. 28, 2018',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS04',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd4'
    },
    {
      dataset: 'Q-Traffic',
      place: 'Beijing, China',
      duration: 'Apr. 1, 2017 ~ May 31, 2017',
      source: 'https://github.com/JingqingZ/BaiduTraffic',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#q-traffic'
    },
    {
      dataset: 'PEMS-BAY',
      place: 'San Francisco Bay Area, USA',
      duration: 'Jan. 1, 2017 ~ Jun. 30, 2017',
      source: 'https://github.com/liyaguang/DCRNN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pems-bay'
    },
    {
      dataset: 'PEMSD8',
      place: 'San Bernardino Area, USA',
      duration: 'Jul. 1, 2016 ~ Aug. 31, 2016',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS08',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd8'
    },
    {
      dataset: 'HK',
      place: 'Hong Kong, China',
      duration: 'Dec. 28, 2015 ~ present',
      source: 'https://data.gov.hk/en-data/dataset/hk-td-sm_1-traffic-speed-map',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#hk'
    },
    {
      dataset: 'NYC Speed data',
      place: 'New York, USA',
      duration: 'Apr. 1, 2015 ~ present',
      source: 'http://data.beta.nyc/dataset/nyc-real-time-traffic-speed-data-feed-archived',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nyc-speed-data'
    },
    {
      dataset: 'Loop Seattle',
      place: 'Greater Seattle Area, USA',
      duration: 'over the entirely of 2015',
      source: 'https://github.com/zhiyongc/Seattle-Loop-Data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#loop-seattle'
    },
    {
      dataset: 'SZ-Taxi',
      place: 'Shenzhen, China',
      duration: 'Jan. 1, 2015 ~ Jan. 31, 2015',
      source: 'https://github.com/lehaifeng/T-GCN/tree/master/data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#sz-taxi'
    },
    {
      dataset: 'PEMSD7(M)',
      place: 'District 7 of California, USA',
      duration: 'the weekdays of May and June of 2012',
      source: 'https://github.com/Davidham3/STGCN/tree/master/datasets',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd7-m'
    },
    {
      dataset: 'METR-LA',
      place: 'Los Angeles County, USA',
      duration: 'Mar. 1, 2012 ~ Jun. 27, 2012',
      source: 'https://github.com/liyaguang/DCRNN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#metr-la',
    },
    {
      dataset: 'PEMS',
      place: 'California, USA',
      duration: '2001 ~ present',
      source: 'http://pems.dot.ca.gov',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pems'
    },
    ]

    const flow = [
    {
      dataset: 'HZMetro',
      place: 'Hangzhou, China',
      duration: 'Jan. 1, 2019 ~ Jan. 25, 2019',
      source: 'https://github.com/ivechan/PVCGN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#hzmetro'
    },
    {
      dataset: 'PeMSD3',
      place: 'District 3 of California, USA',
      duration: 'Sept. 1, 2018 ~ Nov. 30, 2018',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd3'
    },
    {
      dataset: 'M_dense',
      place: 'Madrid, Spain',
      duration: 'Jan. 1, 2018 ~ Dec. 21, 2019',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#m-dense'
    },
    {
      dataset: 'PeMSD4',
      place: 'San Francisco Bay Area, USA',
      duration: 'Jan. 1, 2018 ~ Feb. 28, 2018',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS04',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd4'
    },
    {
      dataset: 'SHMetro',
      place: 'Shanghai, China',
      duration: 'Jul. 1, 2016 ~ Sept. 30, 2016',
      source: 'https://github.com/ivechan/PVCGN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#shmetro'
    },
    {
      dataset: 'PEMSD7',
      place: 'District 7 of California, USA',
      duration: 'Jul. 1, 2016 ~ Aug. 31, 2016',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd7'
    },
    {
      dataset: 'PEMSD8',
      place: 'San Bernardino Area, USA',
      duration: 'Jul. 1, 2016 ~ Aug. 31, 2016',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS08',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd8'
    },
    {
      dataset: 'Beijing subway',
      place: 'Beijing, China',
      duration: 'Feb. 29, 2016 ~ Apr. 3, 2016',
      source: 'https://github.com/JinleiZhangBJTU/ResNet-LSTM-GCN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#beijing-subway'
    },
    {
      dataset: 'TaxiBJ',
      place: 'Beijing, China',
      duration: 'Jul. 1, 2013 ~ Oct. 30, 2013; Mar. 1, 2014 ~ Jun. 30, 2014; Mar. 1, 2015 ~ Jun. 30, 2015; Nov. 1, 2015 ~ Apr. 10, 2016',
      source: 'https://github.com/TolicWang/DeepST/issues/3',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#taxibj'
    },
    {
      dataset: 'ENG-HW',
      place: 'Great Britain',
      duration: '2006 ~ 2014',
      source: 'http://tris.highwaysengland.co.uk/detail/trafficflowdata',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#eng-hw'
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
          conditionDataTable,
          peopleDataTable,
          vehicleDataTable
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