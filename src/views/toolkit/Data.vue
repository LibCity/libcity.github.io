<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">Data</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          LibCity provides 35 spatio-temporal datasets and introduces unified <br> 
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
          <li><span style="font-weight: 700">Raw Data</span>: Original open source dataset. For each supported original data set, we provide scripts to convert it into <a href="https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/atomic_files.html" target="_blank">atomic files</a>.</li>
          <li><span style="font-weight: 700">Atomic Files</span>: Basic input elements for different traffic prediction tasks. You can download <a :href="`${path}A Unified Storage Format of Traffic Data Atomic Files in LibCity.pdf`" download="A Unified Storage Format of Traffic Data Atomic Files in LibCity.pdf">A Unified Storage Format of Traffic Data Atomic Files in LibCity</a> here for details.</li>
          <li><span style="font-weight: 700">Dataset</span>: Different <code style="color: #e83e8c; font-size: 90%">Dataset</code> classes are developed for each type of traffic prediction task, which are responsible for reading atomic files and performing some data preprocessing operations. See <a href="https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/dataset_class.html" target="_blank">here</a> for details.</li>
          <li><span style="font-weight: 700">DataLoader</span>: The <code style="color: #e83e8c; font-size: 90%">Dataloader</code> class responsible for loading data, using the native <code style="color: #e83e8c; font-size: 90%">torch.utils.data.DataLoader</code> of <code style="color: #e83e8c; font-size: 90%">PyTorch</code>, it is responsible for returning the data to the model in the form of the internal data representation structure <a href="https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/batch.html" target="_blank">Batch</a> class.</li>
        </ul>
        <br>

        <p class="title">Atomic Files</p>
        <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
        <p>LibCity introduces and implements 6 atomic file types for formating various spatio-temporal datasets, which are able to characterize most forms of the input data required by different spatio-temporal data mining tasks. These atomic files can be identified by their filenames:</p>
        <table style="width: 1200px">
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
              <td>rel_id, type, origin_id, destination_id</td>
            </tr>
            <tr>
              <td>xxx.dyna</td>
              <td>Store traffic condition information.</td>
              <td>dyna_id, type, time, entity_id, location_id</td>
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
        <br>

        <p class="title">Dataset List</p>
        <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
        <p>We have already collected 35 spatio-temporal datasets. In order to directly use the datasets we collected in LibCity, we have converted all datasets into the format of atomic files, and provide the conversion tools in <a href="https://github.com/LibCity/Bigscity-LibCity-Datasets" target="_blank">this repository</a>. Besides, we have uploaded the processed atomic files in network disks <a href="https://pan.baidu.com/s/1qEfcXBO-QwZfiT0G3IYMpQ#list/path=%2F" target="_blank">BaiduDisk with code 1231</a> or <a href="https://drive.google.com/drive/folders/1g5v2Gq1tkOq8XO0HDCZ9nOTtRpB6-gPe?usp=sharing" target="_blank">Google Drive</a>.</p>
        <a-divider style="font-size: 24px">Traffic State Dataset</a-divider>
        <condition-data-table :content="condition"></condition-data-table>
        <br>
        <a-divider style="font-size: 24px">Vehicle Trajectory Dataset</a-divider>
        <vehicle-data-table :content="vehicle"></vehicle-data-table>
        <br>
        <a-divider style="font-size: 24px">POI Check-in Dataset</a-divider>
        <people-data-table :content="people"></people-data-table>
        <br>
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
      dataset: 'METR_LA',
      geo: '207',
      rel: '11,753',
      dyna: '7,094,304',
      feature: 'speed',
      place: 'Los Angeles, USA',
      duration: 'Mar. 1, 2012 - Jun. 27, 2012',
      interval: '5min',
      source: 'https://github.com/liyaguang/DCRNN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#metr-la',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/metr_la.py'
    },
    {
      dataset: 'LOS_LOOP',
      geo: '207',
      rel: '42,849',
      dyna: '7,094,304',
      feature: 'speed',
      place: 'Los Angeles, USA',
      duration: 'Mar. 1, 2012 - Jun. 27, 2012',
      interval: '5min',
      source: 'https://github.com/lehaifeng/T-GCN/tree/master/data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#los-loop',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/los_loop.py'
    },
    {
      dataset: 'SZ_TAXI',
      geo: '156',
      rel: '24,336',
      dyna: '464,256',
      feature: 'speed',
      place: 'Shenzhen, China',
      duration: 'Jan. 1, 2015 - Jan. 31, 2015',
      interval: '15min',
      source: 'https://github.com/lehaifeng/T-GCN/tree/master/data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#sz-taxi',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/sz_taxi.py'
    },
    {
      dataset: 'LOOP_SEATTLE',
      geo: '323',
      rel: '104,329',
      dyna: '33,953,760',
      feature: 'speed',
      place: 'Greater Seattle Area, USA',
      duration: 'over the entirely of 2015',
      interval: '5min',
      source: 'https://github.com/zhiyongc/Seattle-Loop-Data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#loop-seattle',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/loop_seattle.py'
    },
    {
      dataset: 'Q_TRAFFIC',
      geo: '45,148',
      rel: '63,422',
      dyna: '264,386,688',
      feature: 'speed',
      place: 'Beijing, China',
      duration: 'Apr. 1, 2017 - May 31, 2017',
      interval: '15min',
      source: 'https://github.com/JingqingZ/BaiduTraffic',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#q-traffic',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/q_traffic.py'
    },
    {
      dataset: 'PEMSD3',
      geo: '358',
      rel: '547',
      dyna: '9,382,464',
      feature: 'flow',
      place: 'California, USA',
      duration: 'Sept. 1, 2018 - Nov. 30, 2018',
      interval: '5min',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd3',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd3.py'
    },
    {
      dataset: 'PEMSD4',
      geo: '307',
      rel: '340',
      dyna: '	5,216,544',
      feature: 'flow, speed, occupancy',
      place: 'San Francisco Bay Area, USA',
      duration: 'Jan. 1, 2018 - Feb. 28, 2018',
      interval: '5min',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS04',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd4',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd4.py'
    },
    {
      dataset: 'PEMSD7',
      geo: '883',
      rel: '866',
      dyna: '24,921,792',
      feature: 'flow',
      place: 'California, USA',
      duration: 'Jul. 1, 2016 - Aug. 31, 2016',
      interval: '5min',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd7',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd7.py'
    },
    {
      dataset: 'PEMSD8',
      geo: '170',
      rel: '277',
      dyna: '3,035,520',
      feature: 'flow, speed, occupancy',
      place: 'San Bernardino Area, USA',
      duration: 'Jul. 1, 2016 - Aug. 31, 2016',
      interval: '5min',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS08',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd8',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd8.py'
    },
    {
      dataset: 'PEMSD7(M)',
      geo: '228',
      rel: '51,984',
      dyna: '2,889,216',
      feature: 'speed',
      place: 'California, USA',
      duration: 'weekdays of May and June, 2012',
      interval: '5min',
      source: 'https://github.com/Davidham3/STGCN/tree/master/datasets',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pemsd7-m',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pemsd7(m).py'
    },
    {
      dataset: 'PEMS_BAY',
      geo: '325',
      rel: '8,358',
      dyna: '16,937,700',
      feature: 'speed',
      place: 'San Francisco Bay Area, USA',
      duration: 'Jan. 1, 2017 - Jun. 30, 2017',
      interval: '5min',
      source: 'https://github.com/liyaguang/DCRNN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#pems-bay',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/pems_bay.py'
    },
    {
      dataset: 'BEIJING_SUBWAY',
      geo: '276',
      rel: '76,176',
      dyna: '248,400',
      feature: 'people flow',
      place: 'Beijing, China',
      duration: 'Feb. 29, 2016 - Apr. 3, 2016',
      interval: '30min',
      source: 'https://github.com/JinleiZhangBJTU/ResNet-LSTM-GCN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#beijing-subway',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/beijing_subway.py'
    },
    {
      dataset: 'M_DENSE',
      geo: '30',
      rel: '-',
      dyna: '525,600',
      feature: 'car flow',
      place: 'Madrid, Spain',
      duration: 'Jan. 1, 2018 - Dec. 21, 2019',
      interval: '60min',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#m-dense',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/m_dense.py'
    },
    {
      dataset: 'ROTTERDAM',
      geo: '208',
      rel: '-',
      dyna: '4,813,536',
      feature: 'speed',
      place: 'Rotterdam, Holland',
      duration: '135 days of 2018',
      interval: '2min',
      source: 'https://github.com/RomainLITUD/DGCN_traffic_forecasting',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#rotterdam',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/rotterdam.py'
    },
    {
      dataset: 'SHMETRO',
      geo: '288',
      rel: '82,944',
      dyna: '1,934,208',
      feature: 'people flow',
      place: 'Shanghai, China',
      duration: 'Jul. 1, 2016 - Sept. 30, 2016',
      interval: '15min',
      source: 'https://github.com/ivechan/PVCGN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#shmetro',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/sh_metro.py'
    },
    {
      dataset: 'HZMETRO',
      geo: '80',
      rel: '6400',
      dyna: '146,000',
      feature: 'people flow',
      place: 'Hangzhou, China',
      duration: 'Jan. 1, 2019 - Jan. 25, 2019',
      interval: '15min',
      source: 'https://github.com/ivechan/PVCGN',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#hzmetro',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/hz_metro.py'
    },
    {
      dataset: 'TAXIBJ',
      geo: '32*32',
      rel: '-',
      dyna: '5,652,480',
      feature: 'people flow',
      place: 'Beijing, China',
      duration: 'Mar. 1, 2015 - Jun. 30, 2015',
      interval: '30min',
      source: 'https://github.com/TolicWang/DeepST/issues/3',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#taxibj',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/taxibj.py',
    },
    {
      dataset: 'NYCTAXI_DYNA',
      geo: '263',
      rel: '69,169',
      dyna: '574,392',
      feature: 'flow (irregular area)',
      place: 'New York, USA',
      duration: 'Jan. 1, 2020 - Mar. 30, 2020',
      interval: '60min',
      source: 'https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nyctaxi-dyna',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/nyctaxi_dyna.py'
    },
    {
      dataset: 'NYCTAXI_OD',
      geo: '263',
      rel: '69,169',
      dyna: '150,995,927',
      feature: 'OD flow (irregular area)',
      place: 'New York, USA',
      duration: 'Apr. 1, 2020 - Jun. 30, 2020',
      interval: '60min',
      source: 'https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nyctaxi-od',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/nyctaxi_od.py'
    },
    {
      dataset: 'NYCTAXI_GRID',
      geo: '10*20',
      rel: '-',
      dyna: '	432,000',
      feature: 'flow (grid-base)',
      place: 'New York, USA',
      duration: 'Jan. 1, 2014 - Mar. 31, 2014',
      interval: '60min',
      source: 'https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nyctaxi-grid',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/nyctaxi_grid.py'
    },
    ]

    const people = [
    {
      dataset: 'Foursquare_TKY',
      geo: '94,890',
      rel: '-',
      usr: '11,589',
      dyna: '1,112,156',
      place: 'Tokyo, Japan',
      duration: 'Apr. 3, 2012 - Sep. 16, 2013',
      interval: '-',
      source: 'https://sites.google.com/site/yangdingqi/home/foursquare-dataset',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#foursquare',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/foursquare.py'
    },
    {
      dataset: 'Foursquare_NYC',
      geo: '64,735',
      rel: '-',
      usr: '17,175',
      dyna: '568,444',
      place: 'New York, USA',
      duration: 'Apr. 3, 2012 - Sep. 16, 2013',
      interval: '-',
      source: 'https://sites.google.com/site/yangdingqi/home/foursquare-dataset',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#foursquare',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/foursquare.py'
    },
    {
      dataset: 'Gowalla',
      geo: '1,280,969',
      rel: '913,660',
      usr: '107,092',
      dyna: '6,442,892',
      place: 'Global',
      duration: 'Feb. 4, 2009 - Oct. 23, 2010',
      interval: '-',
      source: 'https://snap.stanford.edu/data/loc-gowalla.html',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#gowalla',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/gowalla.py'
    },
    {
      dataset: 'Brightkite',
      geo: '772,966',
      rel: '394,334',
      usr: '51,406',
      dyna: '4,747,287',
      place: 'Global',
      duration: 'Mar. 21, 2008 - Oct. 18, 2010',
      interval: '-',
      source: 'http://snap.stanford.edu/data/loc-brightkite.html',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#brightkite',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/brightkite.py'
    },
    {
      dataset: 'Instagram',
      geo: '13,187',
      rel: '-',
      usr: '78,233',
      dyna: '2,205,794',
      place: 'New York, USA',
      duration: 'Jun. 15, 2011 - Nov. 8, 2016',
      interval: '-',
      source: 'https://dmis.korea.ac.kr/cape',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#instagram',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/instagram.py'
    },
    ]

    const vehicle = [
    {
      dataset: 'T_DRIVE',
      geo: '32*32',
      rel: '1,048,576',
      dyna: '3,686,400',
      vehicle: 'taxi',
      place: 'Beijing, China',
      duration: 'Feb. 1, 2015 - Jun. 30, 2015',
      interval: '60min',
      source: 'https://www.microsoft.com/en-us/research/publication/t-drive-trajectory-data-sample/',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#t-drive',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/t_drive_small.py'
    },
    {
      dataset: 'PORTO',
      geo: '20*10',
      rel: '-',
      dyna: '441,600',
      vehicle: 'taxi',
      place: 'Porto, Portugal',
      duration: 'Jul. 1, 2013 - Sept. 30, 2013',
      interval: '60min',
      source: 'https://archive.ics.uci.edu/ml/datasets/Taxi+Service+Trajectory+-+Prediction+Challenge%2C+ECML+PKDD+2015',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#porto',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/porto.py'
    },
    {
      dataset: 'NYCBIKE',
      geo: '10*20',
      rel: '-',
      dyna: '441,600',
      vehicle: 'bike',
      place: 'New York, USA',
      duration: 'Jul. 1, 2020 - Sept. 30, 2020',
      interval: '60min',
      source: 'https://www.citibikenyc.com/system-data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#nyc-bike',
      slink: '#'
    },
    {
      dataset: 'AUSTINRIDE',
      geo: '16*8',
      rel: '-',
      dyna: '282,624',
      vehicle: 'bike',
      place: 'Austin, USA',
      duration: 'Jul. 1, 2016 - Sept. 30, 2016',
      interval: '60min',
      source: 'https://data.world/ride-austin/ride-austin-june-6-april-13',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#austinride',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/austinride.py'
    },
    {
      dataset: 'BIKEDC',
      geo: '16*8',
      rel: '-',
      dyna: '282,624',
      vehicle: 'bike',
      place: 'Washington, USA',
      duration: 'Jul. 1, 2020 - Sept. 30, 2020',
      interval: '60min',
      source: 'https://www.capitalbikeshare.com/system-data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#bikedc',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/bikedc.py'
    },
    {
      dataset: 'BIKECHI',
      geo: '15*18',
      rel: '-',
      dyna: '670,680',
      vehicle: 'bike',
      place: 'Chicago, USA',
      duration: 'Jul. 1, 2020 - Sept. 30, 2020',
      interval: '60min',
      source: 'https://www.divvybikes.com/system-data',
      plink: 'https://bigscity-libcity-docs.readthedocs.io/en/latest/user_guide/data/raw_data.html#bikechi',
      slink: 'https://github.com/LibCity/Bigscity-LibCity-Datasets/blob/master/bikechi.py'
    },
    ]

    export default {
        data() {
            return {
              condition,
              people,
              vehicle,
              path:process.env.BASE_URL,
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