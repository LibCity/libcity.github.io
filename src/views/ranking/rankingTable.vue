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
      <tr
        v-for="item in rankdata"
        :key="item.dataset"
      >
        <td width="15%"><a
            :href="item.datasetlink"
            class="dataset"
            target="_blank"
          >{{item.dataset}}</a></td>
        <td width="15%">
          <a-icon
            type="crown"
            style="color: gold; font-size: 20px;"
          />{{item.best}}
        </td>
        <td width="55%"><a
            class="paper"
            :href="item.plink"
            target="_blank"
          >{{item.paper}}</a></td>
        <td width="15%">
          <a-button
            type="primary"
            shape="round"
            @click="toDatasetRanking(item.dlink)"
          >See All</a-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'table',
  props: {
    rankdata: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
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
  font-feature-settings: "tnum";
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
  font-family: Nunito, "Microsoft YaHei", Arial, Helvetica, sans-serif;
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
  font-family: Nunito, "Microsoft YaHei", Arial, Helvetica, sans-serif;
}
.dataset {
  color: rgb(27, 140, 233);
}
/* .dataset:hover {
    color:rgb(27, 140, 233)
} */
.model {
  color: black;
}
.model:hover {
  color: rgb(27, 140, 233);
}
.paper {
  /* color: black; */
  color: rgb(27, 140, 233);
}
/* .paper:hover {
  color: rgb(27, 140, 233);
} */
</style>