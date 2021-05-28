<template>
  <table>
      <thead>
          <tr>
              <th>MODEL</th>
              <th>CONFERENCE / JOURNAL</th>
              <th>YEAR</th>
              <th>PAPER</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item in content" :key="item.model">
              <td width="20%"><a :href="item.mlink" target="_blank">{{item.model}}</a></td>
              <td width="20%">{{item.from}}</td>
              <td width="10%">{{item.year}}</td>
              <td width="50%"><a :href="item.plink" target="_blank">{{item.paper}}</a></td>
          </tr>
      </tbody>
  </table>
</template>

<script>

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