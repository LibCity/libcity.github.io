<template>
    <div class="container">
        <div class="header">
            <div style="padding-top: 20px;color: white;">
                <p style="margin: 20px 0 30px 130px; font-size: 60px">测评</p>
                <p style="margin: 0px 0 20px 130px; font-size: 30px">
                    LibCity包含了广泛的标准化测评方法，用于测试和比较时空数据挖掘算法。
                </p>
            </div>
        </div>

        <div class="content">
            <div>
                <p class="title">测评指标</p>
                <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>

                <p style="text-indent: 2em">考虑到不同的任务有不同的输出格式，LibCity为各类任务实现了不同的测评器，并支持一系列主流的测评指标。不同任务支持的指标如下表所示。</p>

                <table style="width: 900px">
                    <thead style="font-size: 16px">
                        <tr>
                            <th width="50%">任务</th>
                            <th width="50%">支持的测评指标</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>交通流量预测</td>
                            <td>MAE、MSE、RMSE、MAPE、R2、EVAR</td>
                        </tr>
                        <tr>
                            <td>交通速度预测</td>
                            <td>MAE、MSE、RMSE、MAPE、R2、EVAR</td>
                        </tr>
                        <tr>
                            <td>交通需求量预测</td>
                            <td>MAE、MSE、RMSE、MAPE、R2、EVAR</td>
                        </tr>
                        <tr>
                            <td>轨迹位置预测</td>
                            <td>TopK（Recall@K、Presicion@K）</td>
                        </tr>
                    </tbody>
                </table>
                <br>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
            };
        },
        components: {
        }
    };
</script>

<style scoped>
.container {
  margin: auto;
  width: 100%;
  height: auto;
  /* border: red solid 1px; */
}
.header {
  width: 100%;
  min-height: 250px;
  background:  rgb(27, 140, 233) linear-gradient(to right,  rgb(27, 140, 233), rgb(11, 247, 188));
  /* border: blue solid 1px; */
}
.content {
    width: 80%;
    height: auto;
    margin: 50px auto 0 auto;
    font-size: 20px;
    line-height: 36px;
    color: black;
    font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    /* border: blue solid 3px; */
}
.title {
    font-size: 32px;
    font-weight: 700;
    font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    margin-bottom: 0;
}
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