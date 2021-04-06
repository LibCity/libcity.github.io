<template>
  <table>
      <thead>
          <tr>
              <th>DATASET</th>
              <th>BEST METHOD</th>
              <th>PAPER</th>
              <th>COMAPRE</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="item in speed">
              <td><a :href="item.dlink">{{item.dataset}}</a></td>
              <td>
                  <a :href="item.mlink" style="color:black;"><a-icon type="crown" style="color: gold; font-size: 20px;"/> {{item.best}}</a>
                </td>
              <td><a :href="item.plink" style="color:black;">{{item.paper}}</a></td>
              <td><a-button type="primary" shape="round" @click="toDatasetRanking(item.dlink)">See All</a-button></td>
          </tr>
      </tbody>
  </table>
</template>

<script>

const columns = ['DATASET', 'BEST METHOD', 'PAPER', 'COMPARE']

export default {
  name: 'table',
  props: {
      speed: {
          type: Array,
          required: true
      }
  },
  data() {
    return {
      columns,
    };
  },
  methods: {
      toDatasetRanking(dlink) {
        this.$router.push({
            name: dlink,
        });
      }
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