<template>
  <el-header class="header">
    <h1 class="logo-box">
      <router-link class="link" to="/">
        <img class="logo" src="../assets/logo.png" alt="vue" width="60" height="60">
      </router-link>
    </h1>
    <nav class="nav">
      <router-link class="nav-link link" v-for="item in router" :key="item.name" :to="item.path">{{item.title}}</router-link>
    </nav>
  </el-header>
</template>

<script>
import { mapGetters } from 'vuex'

import '@/scss/header.scss'
export default {
  computed: mapGetters(['router'])
}
</script>
