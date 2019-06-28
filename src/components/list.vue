<template>
  <ul class="list" v-loading="loading">
    <li v-for="item in myList" :key="item.id">
      <span>{{item.name}}</span>
      <span>{{item.value}}</span>
    </li>
  </ul>
</template>

<script>
import service from '@/service/getApi.js'
export default {
  data(){
    return {
      myList: [],
      loading: false
    }
  },
  created(){
    this.fetchData()
  },
  methods: {
    fetchData(){
      this.loading = true
      service.fetchData().then( v => {
        this.myList = v
        this.$nextTick( v => {
          this.loading = false
        })
      })
    }
  }
}
</script>
