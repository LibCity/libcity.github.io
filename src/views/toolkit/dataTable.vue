<template>
  <table>
      <thead style="font-size: 16px">
          <tr>
              <th>DATASET</th>
              <th>PLACE</th>
              <th>DURATION</th>
              <th>LINK</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item in content">
              <td width="35%"><a :href="item.plink">{{item.dataset}}</a></td>
              <td width="25%">{{item.place}}</td>
              <td width="30%">{{item.duration}}</td>
              <td width="10%"><a-button type="primary" shape="round"><a :href="item.source">Source</a></a-button></td>
          </tr>
      </tbody>
  </table>
</template>

<script>

const columns = ['DATASET', 'BEST METHOD', 'PAPER', 'COMPARE']

export default {
  name: 'table',
  props: {
      content: {
          type: Array,
          required: true
      }
  },
  data() {
    return {
      columns,
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
    border-color: grey;
    width: 100%;
    text-align: left;
    border-radius: 4px 4px 0 0;
    border-collapse: separate;
    border-spacing: 0;
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
    text-align: left;
    border-bottom: 1px solid #e8e8e8;
    overflow-wrap: break-word;
    padding: 16px 16px;
    background: #97b9f7;
    color: white;
    font-weight: 700;
    font-family: Nunito, 'Microsoft YaHei', Arial, Helvetica, sans-serif;
}
td {
    display: table-cell;
    vertical-align: inherit;
    border-bottom: 1px solid #e8e8e8;
    padding: 16px 16px;
    overflow-wrap: break-word;
    background: white;
    color: black;
    font-size: 15px;
    font-family: Nunito, 'Microsoft YaHei', Arial, Helvetica, sans-serif;
}
th:last-child td:last-child {
    border-top-right-radius: 4px;
}
</style>