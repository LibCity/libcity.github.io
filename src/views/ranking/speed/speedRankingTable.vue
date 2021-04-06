<template>
  <table>
      <thead>
          <tr>
              <th>RANK</th>
              <th>MODEL</th>
              <th>PAPER</th>
              <th>YEAR</th>
              <th>3 STEP</th>
              <th>6 STEP</th>
              <th>9 STEP</th>
              <th>12 STEP</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item in speedModel">
              <td>{{item.rank}}</td>
              <td><a :href="item.mlink">{{item.model}}</a></td>
              <td><a :href="item.plink" style="color:black;">{{item.paper}}</a></td>
              <td>{{item.year}}</td>
              <td>{{item.step3}}</td>
              <td>{{item.step6}}</td>
              <td>{{item.step9}}</td>
              <td>{{item.step12}}</td>
          </tr>
      </tbody>
  </table>
</template>

<script>

export default {
  name: 'table',
  props: {
      speedModel: {
          type: Array,
          required: true
      }
  },
  data() {
    return {
    };
  }
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