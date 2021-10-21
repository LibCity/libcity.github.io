<template>
    <div class="content">
        <div>
            <br>
            <p class="title">Paper</p>
            <a-divider style="margin: 10px 0; background-image: linear-gradient(to right,  rgb(103, 179, 241),  rgb(103, 179, 241), #f6f6f6, #f6f6f6);"></a-divider>
            <p> Our <a :href="`${path}LibCity_An_Open_Library_for_Traffic_Prediction.pdf`" download="LibCity_An_Open_Library_for_Traffic_Prediction.pdf">paper</a> is accepted by ACM SIGSPATIAL 2021! </p>
        </div>
        <pdf
        ref="pdf"
        v-for="i in numPages" 
        :key="i"  
        :src="url.default" 
        :page="i"
        ></pdf>
        <br>
        <div>
            <p> If you find LibCity useful for your research or development, please cite our paper.</p>
            <div class="code">
                <code>
                    <p>@proceedings{libcity,</p>
                    <p style="text-indent:2em">editor={Jingyuan Wang and Jiawei Jiang and Wenjun Jiang and Chao Li and Wayne Xin Zhao},</p>
                    <p style="text-indent:2em">title={LibCity: An Open Library for Traffic Prediction},</p>
                    <p style="text-indent:2em">booktitle={ {SIGSPATIAL}'21: 29th International Conference on Advances in Geographic Information Systems, Beijing, China, November 2-5, 2021 },</p>
                    <p style="text-indent:2em">publisher={ {ACM} },</p>
                    <p style="text-indent:2em">year={2021}</p>
                    <p>}</p>
                </code>
            </div>
            <div class="code">
                <code>
                    <p>Jingyuan Wang, Jiawei Jiang, Wenjun Jiang, Chao Li, and Wayne Xin Zhao. 2021. LibCity: An Open Library for Traffic Prediction. In Proceedings of the 29th ACM SIGSPATIAL International Conference on Advances in Geographic Information Systems. </p>
                </code>
            </div>
        </div>
        <br>
    </div>
    <!-- <div>
        <p class="papertitle">Our <a :href="`${path}LibCity_An_Open_Library_for_Traffic_Prediction.pdf`" download="LibCity_An_Open_Library_for_Traffic_Prediction.pdf">paper</a> is accepted by ACM SIGSPATIAL 2021!</p>
        <pdf
        ref="pdf"
        v-for="i in numPages" 
        :key="i"  
        :src="url.default" 
        :page="i"
        ></pdf>
    </div> -->
</template>
<script>
    import pdf from 'vue-pdf'
    export default {
        components:{
            pdf
        },
        data(){
            return {
                url: require("../assets/docs/LibCity_An_Open_Library_for_Traffic_Prediction.pdf"),
                numPages: null,
                path:process.env.BASE_URL,
            }
        },
        mounted() {
            this.getNumPages()
        },
        methods: {
            getNumPages() {
            let loadingTask = pdf.createLoadingTask(this.url.default)
            loadingTask.promise.then(pdf => {
                this.numPages = pdf.numPages
            }).catch(err => {
                console.error('pdf 加载失败', err);
            })
            },
        }
    }
</script>

<style>
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
.code {
    color: #f8f8f2;
    background-color: #272822;
    tab-size: 4;
    overflow: auto;
    width: 100%;
    padding: 10px 20px;
    margin: 0px 0px 16px 0px;
    text-align: left;
    border: 1px solid #e5e5e5;
    border-radius: 10px;
    line-height: 1.5;
}
.papertitle {
    height: 80px;
    line-height: 80px;
    font-size: 32px;
    font-weight: 700;
    font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    margin-bottom: 0;
    text-align: center;
}
</style>