<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">论文库</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          论文库提供了超过200篇来自顶级期刊或会议的时空数据挖掘领域的研究论文。
        </p>
      </div>
    </div>

    <div class="content">
        <div class="sidebar-filter">
            <cate-cn @paperFindList="handlePaperFind" @taskCheckedList="handleTaskChecked" @publicationCheckedList="handlePublicationChecked" @yearCheckedList="handleYearChecked"></cate-cn>
        </div>
        <div class="paper-result">
            <div class="search-box">
                <a-input-search placeholder="输入搜索内容" :loading="paperLoading" v-model="inputValue"  @search="onSearch" style="width: 300px; display: inline-block; float: left;" enterButton />
                <a-popover>
                    <template slot="content">
                    <p style="font-size: 14px; font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif; line-height: 14px;">请注意：搜索功能在筛选出的论文上进行的。</p>
                    <p  style="font-size: 14px; font-family: 'Microsoft YaHei', Arial, Helvetica, sans-serif; line-height: 14px;">请输入标题、作者或摘要的关键字（英文）进行搜索。</p>
                    </template>
                    <a-button style="margin-left: 20px; margin-top: 4px;" size="small" shape="circle" icon="question" />
                </a-popover>
                <!-- <search-in-cn style="display: inline-block; float: left;"></search-in-cn> -->
            </div>
            <a-spin :spinning="spinning">
            <div class="paper-box">
                <paper-item-cn class="paper" v-for="(item,i) in this.paperFindList.slice(this.pageNumber*6-5, this.pageNumber*6)" :key="i" v-model="isOpen[i]" :default-height="defaultHeight" >
                    <h2><a :href="item.link" class="title" target="_blank">{{item.title}}</a></h2>
                    <div class="author"><strong>作者：</strong>{{item.author}}</div>
                    <div class="tag"><strong>标签：</strong>{{item.year}}</div>
                    <div class="abstract"><strong>摘要：</strong>{{item.abstract}}</div>
                    <!-- <a-button type="primary" icon="file" style="width: 120px; font-size: 20px; font-weight: 700; margin-top: 10px;">
                        <a :href="item.link" target="_blank" style="text-decoration:none; color:white">论文</a>
                    </a-button> -->
                </paper-item-cn>
            </div>
            <div style="padding-left: 150px; padding-bottom: 50px;" v-if="!spinning">
                <!-- <pagination-cn></pagination-cn>  -->
                <a-pagination show-quick-jumper :default-current="1" :pageSize="6" :total="this.paperNumber" @change="onChange" />
            </div>
            </a-spin>
        </div>
    </div>
  </div>
</template>

<script>
import CateCn from "./paper/categoryCollapseCN.vue";
// import searchInCn from "./paper/searchInputCN.vue";
import paperItemCn from "./paper/paperItemCollapseCN.vue";
// import paginationCn from "./paper/paperPaginationCN.vue";

export default {
  data() {
    return {
      spinning: true,
      paperFindList:[],
      pageNumber: 1,
      paperNumber: 0,
      focus: 0,
      isOpen: [],
      defaultHeight: 210,
      paperLoading: false,
      inputValue: '',

      taskCheckedList: [],
      yearCheckedList: [],
      publicationCheckedList: []
    };
  },
  components: {
      CateCn,
    //   searchInCn,
      paperItemCn,
    //   paginationCn
  },
  methods: {
      // openNotification() {
      //   this.$notification.open({
      //       style: 'font-weight: 700',
      //       duraion: 5,
      //       message: '通知',
      //       description:
      //       '正在加载数据，请稍等片刻。感谢您的支持！',
      //   });
      // },
      onChange(pageNumber) {
        this.pageNumber = pageNumber;
      },
      onSearch(value) {
        //设置加载中状态
        this.paperLoading=true;
        this.paperSearchList = [];
        this.$axios({
            method: "post",
            url: "api/paperlib/paper_retrieve/",
            params: {},
            headers: {},
            data: {
                task: this.taskCheckedList,
                publication: this.publicationCheckedList,
                year: this.yearCheckedList,
                searchtext: value
            },
        }).then((res) => {
            if (res.data.code == 200) {
                this.paperSearchList = res.data.data;
                this.paperSearchList.forEach((item)=>{
                    item.year =  item.task + "，" + item.publication + "，" + item.year;
                })
                this.paperFindList = this.paperSearchList;
                this.paperNumber = this.paperFindList.length;
                this.pageNumber = 1;
                this.isOpen = [];
                this.paperFindList.forEach(()=>{
                    this.isOpen.push(false);
                 })
            } else {
            }
        });
        this.paperLoading = false;
      },
      handlePaperFind(paperFindList) {
        this.spinning = true;
        this.inputValue = '';
        this.paperFindList = paperFindList;
        this.paperNumber = paperFindList.length;
        this.pageNumber = 1;
        this.isOpen = []
        this.paperFindList.forEach(()=>{
          this.isOpen.push(false);
        })
        this.spinning = false;
        //   console.log(paperFindList);
      },
      handleTaskChecked(taskCheckedList) {
          this.taskCheckedList = taskCheckedList;
      },
      handlePublicationChecked(publicationCheckedList) {
          this.publicationCheckedList = publicationCheckedList;
        //   console.log(this.publicationCheckedList);
      },
      handleYearChecked(yearCheckedList) {
          this.yearCheckedList = yearCheckedList;
      }
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
  /* background-color: rgb(103, 179, 241); */
  /* border: blue solid 1px; */
}
.content {
    width: 100%;
    height: auto;
    /* border: blue solid 3px; */
}
.sidebar-filter {
    width:32%;
    height: auto;
    padding: 100px 40px 50px 130px;
    float:left;
    /* border: green solid 1px; */
}
.paper-result {
    width: 68%;
    height: auto;
    float: right;
    /* border: red solid 1px; */
}
.search-box {
    width: 100%;
    height: 80px;
    padding: 32px 150px 16px 20px; 
    /* border: pink solid 1px; */
}
.paper-box {
    width: 100%;
    height: auto;
    min-height: 200px;
    padding: 20px 150px 50px 20px;
    /* border: purple solid 2px; */
}
.paper {
    border-radius: 5px;
    border:rgba(0, 0, 0, 0.2) solid 1px;
    margin-bottom: 20px;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.1);
}
.paper:hover {
    border: rgba(0, 0, 0, 0.3) solid 1px;
    box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
}
.title {
  color: black;
  font-weight: 700;
  font-family: 'Nunito', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
}
.title:hover {
  color: rgb(27, 140, 233)
}
.author, .tag, .abstract {
    font-size: 16px;
    font-family: 'Nunito', 'Microsoft YaHei', Arial, Helvetica, sans-serif;
}
</style>
