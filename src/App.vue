<template>
  <el-container id="app" class="is-vertical">
    <my-header></my-header>
    <el-container>
      <sidebar></sidebar>
      <el-container class="is-vertical">
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>


<script>
import myHeader from '@/components/header.vue'
import sidebar from '@/components/sidebar.vue'
export default {
  name: 'home',
  components:{
    myHeader,
    sidebar
  }
}
</script>