<!-- 测试页2 -->
<template>
  <div class="contain-div">
    <span class="inp-span">
      <a-input v-model:value="value" @pressEnter="click"></a-input>
    </span>
    <span class="btn-span">
      <a-button type="primary" @click="click">Click</a-button>
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref, getCurrentInstance } from 'vue'

const { proxy }: any = getCurrentInstance()

const value = ref<String>('')
function click() {
  proxy.$message.info(value.value)
}
</script>

<style scoped lang="less">
.contain-div {
  display: flex;

  .inp-span,
  .btn-span {
    margin: 5px;
  }
}
</style>
