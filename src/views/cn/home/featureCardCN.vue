<template>
  <div style="background-color: transparent; padding: 5px 20px 20px 20px;">
    <a-row :gutter="[48, 16]" style="margin-bottom: 30px">
      <a-col :span="8">
        <div class="fcard-cn">
            <a-card :bordered="false">
                <div style="text-align: center">
                  <img src="../../../assets/img/data.png" alt="data"  height="80" style="margin-bottom: 15px"/>
                  <h3 style="font-size: 19px; font-weight: 700">详尽的数据集和统一的数据结构</h3>
                  <p style="text-align: left; margin-top: 15px">LibCity提供了29个时空数据集，并引入了统一的数据结构来格式化数据和算法的输入。</p>
                </div>
            </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="fcard-cn">
            <a-card :bordered="false">
              <div style="text-align: center">
                <img src="../../../assets/img/algorithm.png" alt="algorithm"  height="80" style="margin-bottom: 15px"/>
                <h3 style="font-size: 19px; font-weight: 700">主流任务和智能算法</h3>
                <p style="text-align: left; margin-top: 15px">LibCity支持4类主流的时空数据挖掘任务，并实现了18个常用的智能算法。</p>
              </div>
            </a-card>
        </div>
      </a-col>
      <a-col :span="8">
        <div class="fcard-cn">
            <a-card :bordered="false">
              <div style="text-align: center">
                <img src="../../../assets/img/evaluation.png" alt="algorithm"  height="80" style="margin-bottom: 15px"/>
                <h3 style="font-size: 19px; font-weight: 700">广泛和标准化的测评指标</h3>
                <p style="text-align: left; margin-top: 15px">LibCity包含广泛和标准化的测评指标，用来测试和比较时空数据挖掘领域的智能算法。</p>
              </div>
            </a-card>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
    name: 'featCard',
    data() {
        return {};
    }
}
</script>

<style>
.fcard-cn .ant-card-head {
    border-bottom: 0 !important;
    height: 64px !important;
}
/* .fcard .ant-card-head-title {
    font-size: 20px;
    white-space: pre-wrap !important;
    text-align: center;
} */
.fcard-cn .ant-card-body {
  font-size: 17px;
  height: 170px;
}
</style>