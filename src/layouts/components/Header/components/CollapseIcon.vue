<template>
  <el-icon class="collapse-icon">
    <component :is="isCollapse ? 'expand' : 'fold'"></component>
  </el-icon>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// import { useGlobalStore } from "@/stores/modules/global";

const isCollapse = ref(false);
// const changeCollapse = () => globalStore.setGlobalState("isCollapse", !globalStore.isCollapse);
</script>

<style scoped lang="scss">
.collapse-icon {
  margin-right: 20px;
  font-size: 22px;
  color: var(--el-header-text-color);
  cursor: pointer;
}
</style>
