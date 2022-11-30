<!-- 测试页2 -->
<template>
  <div class="contain-div">
    <span class="stat-span">
      <a-statistic-countdown
        title="Million Seconds"
        :value="deadline"
        format="HH:mm:ss:SSS"
        style="margin-right: 50px"
      />
    </span>
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

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30

const value = ref<String>('')
function click() {
  proxy.$message.info(value.value)
}
</script>

<style scoped lang="less">
.contain-div {
  display: flex;

  .stat-span,
  .inp-span,
  .btn-span {
    margin: 5px;
  }
}
</style>
