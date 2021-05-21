<template>
  <div>
    <a-collapse :bordered="false">
      <template #expandIcon="props">
        <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
      </template>
      <a-collapse-panel key="1" header="任务类型" :style="customStyle">
        <div>
          <div :style="{ borderBottom: '1px solid #E9E9E9' }">
            <a-checkbox :indeterminate="taskIndeterminate" :checked="taskCheckAll" @change="onTaskCheckAllChange">全选</a-checkbox>
          </div>
          <a-checkbox-group v-model="taskCheckedList" :options="taskOptions" @change="onTaskChange" style="display:flex; flex-direction:column;">
          </a-checkbox-group>
        </div>
        <!-- <cate-checkbox :plain-options="taskOptions"></cate-checkbox> -->
      </a-collapse-panel>
      <a-collapse-panel key="2" header="顶级期刊/会议" :style="customStyle">
        <div>
          <div :style="{ borderBottom: '1px solid #E9E9E9' }">
            <a-checkbox :indeterminate="publicationIndeterminate" :checked="publicationCheckAll" @change="onPublicationCheckAllChange">全选</a-checkbox>
          </div>
          <a-checkbox-group v-model="publicationCheckedList" :options="publicationOptions" @change="onPublicationChange" style="display:flex; flex-direction:column;">
          </a-checkbox-group>
        </div>
        <!-- <cate-checkbox :plain-options="refOptions"></cate-checkbox> -->
      </a-collapse-panel>
      <a-collapse-panel key="3" header="年份" :style="customStyle">
        <div>
          <div :style="{ borderBottom: '1px solid #E9E9E9' }">
            <a-checkbox :indeterminate="yearIndeterminate" :checked="yearCheckAll" @change="onYearCheckAllChange">全选</a-checkbox>
          </div>
          <a-checkbox-group v-model="yearCheckedList" :options="yearOptions" @change="onYearChange" style="display:flex; flex-direction:column;">
          </a-checkbox-group>
        </div>
        <!-- <cate-checkbox :plain-options="yearOptions"></cate-checkbox> -->
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
// import cateCheckboxCn from "./collapseCheckboxCN.vue"

export default {
  name: 'CateCn',
  data() {
    return {
      customStyle: 'background-color: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden',
      taskOptions: ['交通流量预测', '交通速度预测', '交通需求量预测', '轨迹位置预测', '出行时间预测', '交通事故预测', '路径规划', '综述', '其他'],
      publicationOptions: ['AAAI', 'IJCAI', 'KDD', 'ICDM', 'CIKM', 'WWW', 'SDM', 'SIGSPATIAL', 'IEEE TKDE', 'IEEE TMC', 'ACM TISI', '其他'],
      yearOptions: ['2021', '2020', '2019', '2018', '2017', '2016及以前'],
      taskC2E: new Map([['轨迹位置预测', 'Trajectory Next-Location Prediction'], ['交通流量预测', 'Traffic Flow Prediction'], ['交通速度预测', 'Traffic Speed Prediction'], ['交通需求量预测', 'On-Demand Service Prediction'], ['出行时间预测', 'Travel Time Prediction'], ['交通事故预测', 'Traffic Accident Prediction'], ['路径规划', 'Route Planning'], ['综述', 'Survey'], ['其他', 'Others']]),

      taskCheckedList: [],
      taskIndeterminate: true,
      taskCheckAll: false,

      publicationCheckedList: [],
      publicationIndeterminate: true,
      publicationCheckAll: false,

      yearCheckedList: [],
      yearIndeterminate: true,
      yearCheckAll: false,

      paperFindList: [],
    };
  },
  components: {
      // cateCheckboxCn,
  },
  mounted(){
    this.taskCheckedList = this.taskOptions;
    this.publicationCheckedList = this.publicationOptions;
    this.yearCheckedList = this.yearOptions;
    this.paperFind();
  },
  methods: {
    paperFind() {
      var taskCheckedListEN = this.taskCheckedList;
      for (var i=0; i < taskCheckedListEN.length; i++) {
        if (this.taskC2E.has(taskCheckedListEN[i])) {
          taskCheckedListEN[i] = this.taskC2E.get(taskCheckedListEN[i]);
        }
      }
      var publicationCheckedListEN = this.publicationCheckedList;
      if (publicationCheckedListEN.length >= 1 && publicationCheckedListEN[publicationCheckedListEN.length - 1] == '其他') {
        publicationCheckedListEN[publicationCheckedListEN.length - 1] = 'Others'
      }
      var yearCheckedListEN = this.yearCheckedList;
      if (yearCheckedListEN.length >= 1 && yearCheckedListEN[yearCheckedListEN.length - 1] == '2016及以前') {
        yearCheckedListEN[yearCheckedListEN.length - 1] = '2016 and before'
      }
      this.$axios({
        method: "post",
        url: "api/paperlib/paper_retrieve/",
        params: {},
        headers: {},
        data: {
          task: taskCheckedListEN,
          publication: publicationCheckedListEN,
          year: yearCheckedListEN,
          searchtext: ""
        },
      }).then((res) => {
        if (res.data.code == 200) {
          this.paperFindList = res.data.data;
          this.paperFindList.forEach((item)=>{
            item.year = item.task + "，" + item.publication + "，" + item.year;
          })
          this.$emit("paperFindList", this.paperFindList);
          this.$emit("taskCheckedList", taskCheckedListEN);
          this.$emit("yearCheckedList", yearCheckedListEN);
          this.$emit("publicationCheckedList", publicationCheckedListEN);
        } else {
        }
      });
    },

    onTaskChange(taskCheckedList) {
      this.taskIndeterminate = !!taskCheckedList.length && taskCheckedList.length < this.taskOptions.length;
      this.taskCheckAll = taskCheckedList.length === this.taskOptions.length;
      this.paperFind();
    },
    onTaskCheckAllChange(e) {
      Object.assign(this, {
        taskCheckedList: e.target.checked ? this.taskOptions : [],
        taskIndeterminate: false,
        taskCheckAll: e.target.checked,
      });
      this.paperFind();
    },

    onPublicationChange(publicationCheckedList) {
      this.publicationIndeterminate = !!publicationCheckedList.length && publicationCheckedList.length < this.publicationOptions.length;
      this.publicationCheckAll = publicationCheckedList.length === this.publicationOptions.length;
      this.paperFind();
    },
    onPublicationCheckAllChange(e) {
      Object.assign(this, {
        publicationCheckedList: e.target.checked ? this.publicationOptions : [],
        publicationIndeterminate: false,
        publicationCheckAll: e.target.checked,
      });
      this.paperFind();
    },

    onYearChange(yearCheckedList) {
      this.yearIndeterminate = !!yearCheckedList.length && yearCheckedList.length < this.yearOptions.length;
      this.yearCheckAll = yearCheckedList.length === this.yearOptions.length;
      this.paperFind();
    },
    onYearCheckAllChange(e) {
      Object.assign(this, {
        yearCheckedList: e.target.checked ? this.yearOptions : [],
        yearIndeterminate: false,
        yearCheckAll: e.target.checked,
      });
      this.paperFind();
    },
  }
};
</script>

<style>
    .ant-collapse-borderless {
      background-color: transparent;
    }

    .ant-collapse > .ant-collapse-item {
        box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
        background-color: transparent;
    }

    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
        background-color:#97b9f7;
        color:white;
        font-size:16px;
        font-weight:700;
    }

    .ant-checkbox-wrapper {
        font-weight: 700;
    }

    .ant-checkbox-group-item {
        margin-top: 5px;
        font-weight: 700;
    }
</style>