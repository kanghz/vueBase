<template>
  <el-container>
    <sidebar></sidebar>
    <el-container class="is-vertical">
      <el-main>
        <router-view></router-view>
      </el-main>
      <footer></footer>
    </el-container>
  </el-container>
</template>

<script>
import sidebar from '@/components/sidebar.vue'
import footer from '@/components/footer.vue'
export default {
  components:{
    sidebar,
    footer
  }
}
</script>
