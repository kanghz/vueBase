<template>
  <el-aside class="sidebar" style="width: none;">
    <ul class="sidebar-list">
      <li v-for="item in sidebar" :key="item.name">
        <router-link :to="item.path" class="sidebar-item link">{{item.title}}</router-link>
      </li>
    </ul>
  </el-aside>
</template>

<script>
import {mapGetters} from 'vuex'
import {getCurrentRouter} from '@/utils/util'

import '@/scss/sidebar.scss';
import { debuglog } from 'util';
export default {
  computed: {
    ...mapGetters(['currentRouter']),
    sidebar () {
      if(this.currentRouter){
        return this.currentRouter.children
      }
      return []
    }
  }
}
</script>
