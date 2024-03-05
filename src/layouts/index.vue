<template>
  <el-container class="layout">
    <el-aside>
      <div class="aside-box">
        <div class="logo flx-center">
          <img class="logo-img" src="@/assets/images/logo.svg" alt="logo" />
          <!-- <span v-show="!isCollapse" class="logo-text"></span> -->
        </div>
        <el-scrollbar>
          <el-menu :router="false" :default-active="activeMenu" :collapse-transition="false">
            <SubMenu :menu-list="menuList" />
          </el-menu>
        </el-scrollbar>
      </div>
    </el-aside>
    <el-container>
      <el-header>
        <ToolBarLeft />
      </el-header>
      <Main />
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import menuList from '@/utils/menuList';
const route = useRoute();
const activeMenu = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.path) as string);
</script>
<style scoped lang="scss"></style>
