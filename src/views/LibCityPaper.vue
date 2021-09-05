<template>
    <div>
        <p class="title">Our <a :href="`${path}LibCity_An_Open_Library_for_Traffic_Prediction.pdf`" download="LibCity_An_Open_Library_for_Traffic_Prediction.pdf">paper</a> is accepted by ACM SIGSPATIAL 2021!</p>
        <pdf
        ref="pdf"
        v-for="i in numPages" 
        :key="i"  
        :src="url.default" 
        :page="i"
        ></pdf>
    </div>
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
.title {
    height: 80px;
    line-height: 80px;
    font-size: 32px;
    font-weight: 700;
    font-family: 'Open Sans', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
    margin-bottom: 0;
    text-align: center;
}
</style>