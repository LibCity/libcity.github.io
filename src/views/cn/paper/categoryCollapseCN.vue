<template>
  <div>
    <a-collapse :bordered="false">
      <template #expandIcon="props">
        <a-icon type="caret-right" :rotate="props.isActive ? 90 : 0" />
      </template>
      <a-collapse-panel key="1" header="任务类型" :style="customStyle">
        <cate-checkbox-cn :plain-options="taskOptions"></cate-checkbox-cn>
      </a-collapse-panel>
      <a-collapse-panel key="2" header="顶级会议/期刊" :style="customStyle">
        <cate-checkbox-cn :plain-options="refOptions"></cate-checkbox-cn>
      </a-collapse-panel>
      <a-collapse-panel key="3" header="年份" :style="customStyle">
        <cate-checkbox-cn :plain-options="yearOptions"></cate-checkbox-cn>
      </a-collapse-panel>
    </a-collapse>
  </div>
</template>

<script>
import cateCheckboxCn from "./collapseCheckboxCN.vue"

export default {
    name: 'CateCn',
  data() {
    return {
      customStyle:
        'background-color: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden',
        taskOptions: ['交通位置预测', '交通流量预测', '交通速度预测', '按需服务预测', '出行时间预测', '交通事故预测', '综述'],
        refOptions: ['AAAI', 'IJCAI', 'KDD', 'ICDM', 'CIKM', 'WWW', 'SDM', 'SIGSPATIAL', 'IEEE TKDE', 'IEEE TMC', 'ACM TISI'],
        yearOptions: ['2021', '2020', '2019', '2018', '2017', '2016及以前']
    };
  },
  components: {
      cateCheckboxCn,
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
</style>