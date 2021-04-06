<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">Data</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          LibTraffic provides more than 40 spatio-temporal datasets and introduces unified <br> 
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
          <li><span style="font-weight: 700">Dataset</span>: Dataset objects for various traffic prediction tasks, which is responsible for reading atomic files. ... also provides a series of functions for data preprocessing. Detailed in <a href="#">Document</a>.</li>
          <li><span style="font-weight: 700">DataLoader</span>: Mainly based on the <code style="color: #e83e8c; font-size: 90%">torch.utils.data.DataLoader</code> in the library of <code style="color: #e83e8c; font-size: 90%">PyTorch</code>. Responsible for feeding data into models by an internal data structure <code style="color: #e83e8c; font-size: 90%">Batch</code>. <span style="font-weight: 700">Batch</span> is implemented as a abstract data type based on <code style="color: #e83e8c; font-size: 90%">python.dict</code>, which is a key-value indexed data structure. <code style="color: #e83e8c; font-size: 90%">Key</code> corresponds to the feature name of the model input. <code style="color: #e83e8c; font-size: 90%">Value</code> corresponds to the tensor (implemented by <code style="color: #e83e8c; font-size: 90%">torch.Tensor</code>) and the value entry for a specific key stores all the corresponding tensor data in a <code style="color: #e83e8c; font-size: 90%">batch</code> or <code style="color: #e83e8c; font-size: 90%">mini-batch</code>. Detailed in <a href="#">Document</a>.</li>
        </ul>
        <br>

        <p class="title">Atomic Files</p>
        <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
        <p>LibTraffic introduces and implements 5 atomic file types for formating various spatio-temporal datasets, which are able to characterize most forms of the input data required by different spatio-temporal data mining tasks. These atomic files can be identified by their suffixes:</p>
        <table style="width: 900px">
          <thead style="font-size: 16px"><tr>
            <th width="15%">SUFFIX</th>
            <th width="50%">CONTENT</th>
            <th width="35%">EXAMPLE FORMAT</th>
          </tr></thead>
          <tbody>
            <tr>
              <td>.geo</td>
              <td>Geographical entity feature</td>
              <td>geo_id, type, coordinates</td>
            </tr>
            <tr>
              <td>.usr</td>
              <td>User entity feature</td>
              <td>usr_id, gender, birth_date</td>
            </tr>
            <tr>
              <td>.rel</td>
              <td>Relational information of entities, such as road network</td>
              <td>rel_id, origin_id, destination_id</td>
            </tr>
            <tr>
              <td>.dyna</td>
              <td>Dynamic time-varient information of entities</td>
              <td>dyna_id, type, entity_id, location_id</td>
            </tr>
            <tr>
              <td>.ext</td>
              <td>External features, such as weather and temperature</td>
              <td>ext_id, time, properties</td>
            </tr>
          </tbody>
        </table>
        <br>
        <p>The essence of the atomic files is feature-based data frames corresponding to different parts of the task input. And atomic files are combined to support the input of different spatio-temporal data mining tasks. Detailed in <a href="https://aptx1231.github.io/Bigscity-TrafficDL-Docs/user_guide/data/atmoic_files.html">Document</a>.</p>
        <p>Here is an example of formatted METR-LA dataset below.</p>
        <br>

        <p class="title">Dataset List</p>
        <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
        <p>In order to transform the raw data file into our atomic files, we have collected more than 40 datasets, and released the scripts for formatting these datasets into atomic files. Meanwhile, we have uploaded the processed atomic files in network disks with the links <a href="#">Google Drive</a> and <a href="#">Baidu NetDisk</a> (Password: ).</p>
        <a-divider style="font-size: 24px">Trajectory Dataset</a-divider>
        <data-table :content="location"></data-table>
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
        <a-divider style="font-size: 24px">Traffic Speed Dataset</a-divider>
        <data-table :content="speed"></data-table>
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
        <a-divider style="font-size: 24px">Traffic Flow Dataset</a-divider>
        <data-table :content="flow"></data-table>
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
    import dataTable from "./dataTable.vue"

    const location = [
    {
      dataset: 'AustinRide',
      place: 'Austin, USA',
      duration: 'Jun. 4, 2016 ~ Apr. 13, 2017',
      source: 'https://data.world/ride-austin/ride-austin-june-6-april-13',
      plink: '#AustinRide'
    },
    {
      dataset: 'NYC-Bus',
      place: 'New York, USA',
      duration: 'Aug. 1, 2014 ~ Oct. 31, 2014',
      source: 'http://web.mta.info/developers/MTA-Bus-Time-historical-data.html',
      plink: '#NYC-Bus'
    },
    {
      dataset: 'Porto',
      place: 'Porto, Portugal',
      duration: 'Jul. 1, 2013 ~ Jun. 30, 2014',
      source: 'https://archive.ics.uci.edu/ml/datasets/Taxi+Service+Trajectory+-+Prediction+Challenge%2C+ECML+PKDD+2015',
      plink: '#Porto'
    },
    {
      dataset: 'BikeCHI',
      place: 'Chicago, USA',
      duration: 'Jun. 27, 2013 ~ 2018',
      source: 'https://www.divvybikes.com/system-data',
      plink: '#BikeCHI'
    },
    {
      dataset: 'NYC-Bike',
      place: 'New York, USA',
      duration: 'Jun. 2013 ~ present',
      source: 'https://www.citibikenyc.com/system-data',
      plink: '#NYC-Bike'
    },
    {
      dataset: 'Foursquare: Global-scale Check-in Dataset',
      place: '415 cities',
      duration: 'Apr. 2012 ~ Sept. 2013',
      source: 'https://sites.google.com/site/yangdingqi/home/foursquare-dataset',
      plink: '#Foursquare: Global-scale Check-in Dataset'
    },
    {
      dataset: 'Foursquare: User Profile Dataset',
      place: 'New York, USA; Tokyo, Japan',
      duration: 'Apr. 2012 ~ Sept. 2013',
      source: 'https://sites.google.com/site/yangdingqi/home/foursquare-dataset',
      plink: '#Foursquare: User Profile Dataset'
    },
    {
      dataset: 'Foursquare: Global-scale Check-in Dataset with User Social Networks',
      place: '415 cities',
      duration: 'Apr. 2012 ~ Sept. 2013',
      source: 'https://sites.google.com/site/yangdingqi/home/foursquare-dataset',
      plink: '#Foursquare: Global-scale Check-in Dataset with User Social Networks'
    },
    {
      dataset: 'Foursquare: NYC Restaurant Rich Dataset',
      place: 'New York, USA',
      duration: 'Oct. 24, 2011 ~ Feb. 20, 2012',
      source: 'https://sites.google.com/site/yangdingqi/home/foursquare-dataset',
      plink: '#Foursquare: NYC Restaurant Rich Dataset'
    },
    {
      dataset: 'BikeDC',
      place: 'Washington, USA',
      duration: 'Sept. 20, 2010 ~ Oct. 2020',
      source: 'https://www.capitalbikeshare.com/system-data',
      plink: '#BikeDC'
    },
    {
      dataset: 'Gowalla',
      place: '-',
      duration: 'Feb. 2009 ~ Oct. 2010',
      source: 'https://snap.stanford.edu/data/loc-gowalla.html',
      plink: '#Gowalla'
    },
    {
      dataset: 'NYC-Taxi',
      place: 'New York, USA',
      duration: '2009 ~ present',
      source: 'https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page',
      plink: '#NYC-Taxi'
    },
    {
      dataset: 'Brightkite',
      place: '-',
      duration: 'Apr. 2008 ~ Oct. 2010',
      source: 'http://snap.stanford.edu/data/loc-brightkite.html',
      plink: '#Brightkite'
    },
    {
      dataset: 'T-Drive',
      place: 'Beijing, China',
      duration: 'Feb. 2, 2008 ~ Feb. 8, 2008',
      source: 'https://www.microsoft.com/en-us/research/publication/t-drive-trajectory-data-sample/',
      plink: '#T-Drive'
    },
    {
      dataset: 'GeoLife-GPS',
      place: 'Beijing, China (majority)',
      duration: 'Aug. 2007 ~ Aug. 2012',
      source: 'https://www.microsoft.com/en-us/research/publication/geolife-gps-trajectory-dataset-user-guide/',
      plink: '#GeoLife-GPS'
    },
    {
      dataset: 'I-80',
      place: 'San Francisco Bay, USA',
      duration: 'Apr. 13, 2005',
      source: 'https://www.fhwa.dot.gov/publications/research/operations/06137/index.cfm',
      plink: '#I-80'
    },
    ]

    const speed = [
    {
      dataset: 'Rotterdam',
      place: 'Rotterdam, Holland',
      duration: '135 days of 2018',
      source: 'https://github.com/RomainLITUD/DGCN_traffic_forecasting',
      plink: '#'
    },
    {
      dataset: 'PeMSD4',
      place: 'San Francisco Bay Area, USA',
      duration: 'Jan. 1, 2018 ~ Feb. 28, 2018',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS04',
      plink: '#PeMSD4-Speed'
    },
    {
      dataset: 'Q-Traffic',
      place: 'Beijing, China',
      duration: 'Apr. 1, 2017 ~ May 31, 2017',
      source: 'https://github.com/JingqingZ/BaiduTraffic',
      plink: '#Q-Traffic'
    },
    {
      dataset: 'PEMS-BAY',
      place: 'San Francisco Bay Area, USA',
      duration: 'Jan. 1, 2017 ~ Jun. 30, 2017',
      source: 'https://github.com/liyaguang/DCRNN',
      plink: '#PEMS-BAY'
    },
    {
      dataset: 'PEMSD8',
      place: 'San Bernardino Area, USA',
      duration: 'Jul. 1, 2016 ~ Aug. 31, 2016',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS08',
      plink: '#PEMSD8-Speed'
    },
    {
      dataset: 'HK',
      place: 'Hong Kong, China',
      duration: 'Dec. 28, 2015 ~ present',
      source: 'https://data.gov.hk/en-data/dataset/hk-td-sm_1-traffic-speed-map',
      plink: '#HK'
    },
    {
      dataset: 'NYC Speed data',
      place: 'New York, USA',
      duration: 'Apr. 1, 2015 ~ present',
      source: 'http://data.beta.nyc/dataset/nyc-real-time-traffic-speed-data-feed-archived',
      plink: '#NYC Speed data'
    },
    {
      dataset: 'Loop Seattle',
      place: 'Greater Seattle Area, USA',
      duration: 'over the entirely of 2015',
      source: 'https://github.com/zhiyongc/Seattle-Loop-Data',
      plink: '#Loop Seattle'
    },
    {
      dataset: 'SZ-Taxi',
      place: 'Shenzhen, China',
      duration: 'Jan. 1, 2015 ~ Jan. 31, 2015',
      source: 'https://github.com/lehaifeng/T-GCN/tree/master/data',
      plink: '#SZ-Taxi'
    },
    {
      dataset: 'PEMSD7(M)',
      place: 'District 7 of California, USA',
      duration: 'the weekdays of May and June of 2012',
      source: 'https://github.com/Davidham3/STGCN/tree/master/datasets',
      plink: '#PEMSD7(M)'
    },
    {
      dataset: 'METR-LA',
      place: 'Los Angeles County, USA',
      duration: 'Mar. 1, 2012 ~ Jun. 27, 2012',
      source: 'https://github.com/liyaguang/DCRNN',
      plink: '#METR-LA',
    },
    {
      dataset: 'PEMS',
      place: 'California, USA',
      duration: '2001 ~ present',
      source: 'http://pems.dot.ca.gov',
      plink: '#PEMS'
    },
    ]

    const flow = [
    {
      dataset: 'HZMetro',
      place: 'Hangzhou, China',
      duration: 'Jan. 1, 2019 ~ Jan. 25, 2019',
      source: 'https://github.com/ivechan/PVCGN',
      plink: '#'
    },
    {
      dataset: 'PeMSD3',
      place: 'District 3 of California, USA',
      duration: 'Sept. 1, 2018 ~ Nov. 30, 2018',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: '#PeMS03'
    },
    {
      dataset: 'M_dense',
      place: 'Madrid, Spain',
      duration: 'Jan. 1, 2018 ~ Dec. 21, 2019',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: '#PeMS03'
    },
    {
      dataset: 'PeMSD4',
      place: 'San Francisco Bay Area, USA',
      duration: 'Jan. 1, 2018 ~ Feb. 28, 2018',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS04',
      plink: '#PeMSD4-Flow'
    },
    {
      dataset: 'SHMetro',
      place: 'Shanghai, China',
      duration: 'Jul. 1, 2016 ~ Sept. 30, 2016',
      source: 'https://github.com/ivechan/PVCGN',
      plink: '#'
    },
    {
      dataset: 'PEMSD7',
      place: 'District 7 of California, USA',
      duration: 'Jul. 1, 2016 ~ Aug. 31, 2016',
      source: 'https://github.com/Davidham3/STSGCN',
      plink: '#PEMSD7'
    },
    {
      dataset: 'PEMSD8',
      place: 'San Bernardino Area, USA',
      duration: 'Jul. 1, 2016 ~ Aug. 31, 2016',
      source: 'https://github.com/Davidham3/ASTGCN/tree/master/data/PEMS08',
      plink: '#PEMSD8-Flow'
    },
    {
      dataset: 'Beijing subway',
      place: 'Beijing, China',
      duration: 'Feb. 29, 2016 ~ Apr. 3, 2016',
      source: 'https://github.com/JinleiZhangBJTU/ResNet-LSTM-GCN',
      plink: '#'
    },
    {
      dataset: 'TaxiBJ',
      place: 'Beijing, China',
      duration: 'Jul. 1, 2013 ~ Oct. 30, 2013; Mar. 1, 2014 ~ Jun. 30, 2014; Mar. 1, 2015 ~ Jun. 30, 2015; Nov. 1, 2015 ~ Apr. 10, 2016',
      source: 'https://github.com/TolicWang/DeepST/issues/3',
      plink: '#TaxiBJ'
    },
    {
      dataset: 'ENG-HW',
      place: 'Great Britain',
      duration: '2006 ~ 2014',
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
          dataTable
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