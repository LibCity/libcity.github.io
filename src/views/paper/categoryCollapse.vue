<template>
  <div>
    <a-collapse :bordered="false">
      <template #expandIcon="props">
        <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
      </template>
      <a-collapse-panel key="1" header="Task" :style="customStyle">
        <div>
          <div :style="{ borderBottom: '1px solid #E9E9E9' }">
            <a-checkbox :indeterminate="taskIndeterminate" :checked="taskCheckAll" @change="onTaskCheckAllChange">Check all</a-checkbox>
          </div>
          <a-checkbox-group v-model="taskCheckedList" :options="taskOptions" @change="onTaskChange" style="display:flex; flex-direction:column;">
          </a-checkbox-group>
        </div>
        <!-- <cate-checkbox :plain-options="taskOptions"></cate-checkbox> -->
      </a-collapse-panel>
      <a-collapse-panel key="2" header="Top Conference/Journal" :style="customStyle">
        <div>
          <div :style="{ borderBottom: '1px solid #E9E9E9' }">
            <a-checkbox :indeterminate="publicationIndeterminate" :checked="publicationCheckAll" @change="onPublicationCheckAllChange">Check all</a-checkbox>
          </div>
          <a-checkbox-group v-model="publicationCheckedList" :options="publicationOptions" @change="onPublicationChange" style="display:flex; flex-direction:column;">
          </a-checkbox-group>
        </div>
        <!-- <cate-checkbox :plain-options="refOptions"></cate-checkbox> -->
      </a-collapse-panel>
      <a-collapse-panel key="3" header="Year" :style="customStyle">
        <div>
          <div :style="{ borderBottom: '1px solid #E9E9E9' }">
            <a-checkbox :indeterminate="yearIndeterminate" :checked="yearCheckAll" @change="onYearCheckAllChange">Check all</a-checkbox>
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
// import cateCheckbox from "./collapseCheckbox.vue"

export default {
  name: 'Cate',
  data() {
    return {
      customStyle: 'background-color: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden',
      taskOptions: ['Traffic Flow Prediction', 'Traffic Speed Prediction', 'On-Demand Service Prediction', 'Trajectory Next-Location Prediction', 'Travel Time Prediction', 'Traffic Accident Prediction', 'Route Planning', 'Survey', 'Others'],
      publicationOptions: ['AAAI', 'IJCAI', 'KDD', 'ICDM', 'CIKM', 'WWW', 'SDM', 'SIGSPATIAL', 'IEEE TKDE', 'IEEE TMC', 'ACM TISI', 'Others'],
      yearOptions: ['2021', '2020', '2019', '2018', '2017', '2016 and before'],

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
      // cateCheckbox,
  },
  mounted(){
    this.taskCheckedList = this.taskOptions;
    this.publicationCheckedList = this.publicationOptions;
    this.yearCheckedList = this.yearOptions;
    this.paperFind();
  },
  methods: {
    paperFind() {
      this.$axios({
        method: "post",
        url: "api/paperlib/paper_retrieve/",
        params: {},
        headers: {},
        data: {
          task: this.taskCheckedList,
          publication: this.publicationCheckedList,
          year: this.yearCheckedList,
          searchtext: ""
        },
      }).then((res) => {
        console.log(res.data.code);
        if (res.data.code == 200) {
          this.paperFindList = res.data.data;
          this.paperFindList.forEach((item)=>{
            item.year = item.task + ", " + item.publication + ", " + item.year;
          })
          this.$emit("paperFindList", this.paperFindList);
          this.$emit("taskCheckedList", this.taskCheckedList);
          this.$emit("yearCheckedList", this.yearCheckedList);
          this.$emit("publicationCheckedList", this.publicationCheckedList);
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