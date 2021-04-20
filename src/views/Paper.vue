<template>
  <div class="container">
    <div class="header">
      <div style="padding-top: 20px;color: white;">
        <p style="margin: 20px 0 30px 130px; font-size: 60px">Paper Library</p>
        <p style="margin: 0px 0 20px 130px; font-size: 30px">
          This library contains more than 200 research papers <br>on spatio-temporal data mining from top conferences or journals.
        </p>
      </div>
    </div>

    <div class="content">
        <div class="sidebar-filter">
            <cate @paperFindList="handlePaperFind" @taskCheckedList="handleTaskChecked" @publicationCheckedList="handlePublicationChecked" @yearCheckedList="handleYearChecked"></cate>
        </div>
        <div class="paper-result">
            <div class="search-box">
                <a-input-search placeholder="input search text" :loading="paperLoading" v-model="inputValue"  @search="onSearch" style="width: 300px; display: inline-block; float: left;" enterButton />
                <a-popover>
                    <template slot="content">
                    <p style="font-size: 14px; font-family: 'Nunito', 'Microsoft YaHei', Arial, Helvetica, sans-serif; line-height: 14px;">The result of searching is based on the result of filtering.</p>
                    <p  style="font-size: 14px; font-family: 'Nunito', 'Microsoft YaHei', Arial, Helvetica, sans-serif; line-height: 14px;">Please type in the keyword of title, author or abstract.</p>
                    </template>
                    <a-button style="margin-left: 20px; margin-top: 4px;" size="small" shape="circle" icon="question" />
                </a-popover>
            </div>
            <a-spin :spinning="spinning">
            <div class="paper-box">
                <paper-item class="paper" v-for="(item,i) in this.paperFindList.slice(this.pageNumber*6-5, this.pageNumber*6)" :key="i" v-model="isOpen[i]" :default-height="defaultHeight" >
                    <h2><a :href="item.link" class="title" target="_blank">{{item.title}}</a></h2>
                    <div class="author"><strong>Author: </strong>{{item.author}}</div>
                    <div class="tag"><strong>Tag: </strong>{{item.year}}</div>
                    <div class="abstract"><strong>Abstract: </strong>{{item.abstract}}</div>
                    <!-- <a-button type="primary" icon="file" style="width: 120px; font-size: 20px; font-weight: 700; margin-top: 10px;">
                        <a :href="item.link" target="_blank" style="text-decoration:none; color:white"> Paper</a>
                    </a-button> -->
                </paper-item>
            </div>
             </a-spin>
            <div style="padding-left: 150px; padding-bottom: 50px;" v-if="!spinning">
                <a-pagination show-quick-jumper :default-current="1" :pageSize="6" :total="this.paperNumber" @change="onChange" /> 
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Cate from "./paper/categoryCollapse.vue";
// import searchIn from "./paper/searchInput.vue";
import paperItem from "./paper/paperItemCollapse.vue";
// import pagination from "./paper/paperPagination.vue";

export default {
  data() {
    return {
      spinning:true,
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
      Cate,
    //   searchIn,
      paperItem,
    //   pagination
  },
  methods: {
      // openNotification() {
      //   this.$notification.open({
      //       style: 'font-weight: 700',
      //       duraion: 5,
      //       message: 'Notification',
      //       description:
      //       'Please wait for a few seconds for loading data. Thank you very much!',
      //   });
      // },
      onChange(pageNumber) {
        this.pageNumber = pageNumber;
        // console.log('Page: ', pageNumber);
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
                    item.year = item.task + ", " + item.publication + ", " + item.year;
                })
                this.paperFindList = this.paperSearchList;
                this.paperNumber = this.paperFindList.length;
                this.isOpen = [];
                this.paperFindList.forEach(()=>{
                    this.isOpen.push(false);
                 })
                // this.handlePaperFind(this.paperSearchList);
            } else {
            }
        });
        this.paperLoading = false;
        // setTimeout(function(){
        //     this.paperLoading=false;
        // },3000);
      },
      handlePaperFind(paperFindList) {
        this.spinning = true;
          this.inputValue = '';
          this.paperFindList = paperFindList;
          this.paperNumber = paperFindList.length;
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
  min-height: 300px;
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
