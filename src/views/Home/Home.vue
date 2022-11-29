<template>
  <HelloWorld class="hello-world" />
  <a-button @click="apiTest">ApiTest</a-button>
</template>

<script lang="ts" setup>
import HelloWorld from '@/components/HelloWorld.vue'
import { baseStore } from '@/store/index'
import baseApi from '@/api/base'

const store = baseStore()
console.log(store)

function apiTest() {
  baseApi
    .login('username', 'password')
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    })
}
</script>
<style scoped lang="less">
.hello-world {
  color: @color-red;
}
</style>
