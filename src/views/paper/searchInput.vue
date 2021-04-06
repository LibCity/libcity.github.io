<template>
  <div>  
    <a-input-search placeholder="input search text" :loading="loading" v-model="inputValue"  @search="onSearch" style="width: 300px" enterButton />
  </div>
</template>
<script>
export default {
  name: 'searchIn',
  data() {
    return {
      loading:false,
      inputValue: '', 
    };
  },
  methods: {
    //搜索框点击事件
    onSearch(value) {
      var that=this;
      //设置加载中状态
      that.loading=true;
      console.log(value);
      setTimeout(function(){
        that.loading=false;
      },3000);
    },
  },
};
</script>