<template>
  <el-main>
    <router-view v-slot="{ Component, route }">
      <transition appear name="fade-transform" mode="out-in">
        <keep-alive :include="keepAliveName">
          <component :is="Component" v-if="isRouterShow" :key="route.fullPath" />
        </keep-alive>
      </transition>
    </router-view>
  </el-main>
  <el-footer>
    <Footer />
  </el-footer>
</template>
<script setup lang="ts">
import Footer from '@/layouts/components/Footer/index.vue';
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
const keepAliveName = ref('keepAliveName');
const route = useRoute();
const isRouterShow = computed(() => route.meta.isRouterShow);
</script>
<style scoped lang="scss"></style>
