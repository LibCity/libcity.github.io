<template>
  <table>
      <thead style="font-size: 16px">
          <tr>
              <th>DATASET</th>
              <th>#GEO</th>
              <th>#REL</th>
              <th>FEATURES</th>
              <th>PLACE</th>
              <th>DURATION</th>
              <th>INTERVAL</th>
              <th>LINK</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item in content" :key="item.dataset">
              <td width="14%"><a :href="item.plink" target="_blank">{{item.dataset}}</a></td>
              <td width="4%">{{item.geo}}</td>
              <td width="4%">{{item.rel}}</td>
              <td width="8%">{{item.feature}}</td>
              <td width="17%">{{item.place}}</td>
              <td width="20%">{{item.duration}}</td>
              <td width="10%">{{item.interval}}</td>
              <td width="23%"><a-button type="primary" shape="round"><a :href="item.source" target="_blank">Source</a></a-button><a-button type="primary" shape="round" style="margin-left: 5px"><a :href="item.slink" target="_blank">Script</a></a-button></td>
          </tr>
      </tbody>
  </table>
</template>

<script>

export default {
  props: {
      content: {
          type: Array,
          required: true
      }
  },
  data() {
    return {
    };
  },
};
</script>

<style>
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
</style>