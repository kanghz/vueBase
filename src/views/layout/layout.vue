<template>
  <el-container id="app" class="is-vertical">
    <my-header></my-header>
    <container></container>
</template>


<script>
import myHeader from '@/components/header.vue'
import container from '@/views/layout/container.vue'
export default {
  name: 'home',
  components:{
    myHeader,
    container
  }
}
</script>