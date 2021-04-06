<template>
    <div class="metric">
        View
        <a-select default-value="MAE12" style="width: 180px; font-size: 14px; margin-left: 10px" @change="handleChange">
            <a-select-option value="MAE12">
                MAE @ 12 STEP
            </a-select-option>
            <a-select-option value="MAPE12" disabled>
                MAPE @ 12 STEP
            </a-select-option>
            <a-select-option value="RMSE12" disabled>
                RMSE @ 12 STEP
            </a-select-option>
        </a-select>
    </div>
</template>

<script>
export default {
  name: 'metric',
  data() {
      return {
      };
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>

<style>
.metric {
    font-size: 16px;
    font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    margin-bottom: 16px;
}
</style>