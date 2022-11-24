<!--  -->
<template>
  <HelloWorld />
</template>

<script lang='ts' setup>
import HelloWorld from "@/components/HelloWorld.vue";
import { baseStore } from "@/store/index";

const store = baseStore();
console.log(store);

</script>
<style scoped lang='less'>

</style>