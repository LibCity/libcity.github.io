<template>
  <table>
      <thead  style="font-size: 16px">
          <tr>
              <th>排名</th>
              <th>模型</th>
              <th>论文</th>
              <th>年份</th>
              <th>3 STEP</th>
              <th>6 STEP</th>
              <th>9 STEP</th>
              <th>12 STEP</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item in speedModel" :key="item.model">
              <td width="6%">{{item.rank}}</td>
              <td width="10%"><a :href="item.mlink">{{item.model}}</a></td>
              <td width="43%"><a :href="item.plink" class="paper">{{item.paper}}</a></td>
              <td width="5%">{{item.year}}</td>
              <td width="9%">{{item.step3}}</td>
              <td width="9%">{{item.step6}}</td>
              <td width="9%">{{item.step9}}</td>
              <td width="9%">{{item.step12}}</td>
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
.paper {
    color: black;
}
.paper:hover {
    color:rgb(27, 140, 233);
}
</style>