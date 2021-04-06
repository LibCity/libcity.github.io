<template>
  <div>
    <div :style="{ borderBottom: '1px solid #E9E9E9' }">
      <a-checkbox :indeterminate="indeterminate" :checked="checkAll" @change="onCheckAllChange">Check all</a-checkbox>
    </div>
    <a-checkbox-group v-model="checkedList" :options="plainOptions" @change="onChange" style="display:flex; flex-direction:column;">
    </a-checkbox-group>
  </div>
</template>

<script>
export default {
  name: 'cateCheckbox',
  props: {
      plainOptions: {
          type: Array,
          required: true
      }
  },
  data() {
    return {
      checkedList: this.plainOptions,
      indeterminate: true,
      checkAll: false,
      plainOptions: this.plainOptions,
    };
  },
  methods: {
    onChange(checkedList) {
      this.indeterminate = !!checkedList.length && checkedList.length < this.plainOptions.length;
      this.checkAll = checkedList.length === this.plainOptions.length;
      console.log(this.checkedList);
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? this.plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
      });
    },
  },
};
</script>

<style>
    .ant-checkbox-wrapper {
        font-weight: 700;
    }

    .ant-checkbox-group-item {
        margin-top: 5px;
        font-weight: 700;
    }
</style>
