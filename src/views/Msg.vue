<template>
  <div class="msg">
      <Search></Search>
      <Tabbar></Tabbar>
      <MsgList :item="item" v-for="(item, index) in data" :key="index"></MsgList>
  </div>
</template>

<script>
import Tabbar from '../components/Tabbar'
import MsgList from './MsgList'

import Search from './Search'
import {mapState} from 'vuex'
export default {
    data() {
        return {
            list:[]
        }
    },
    components:{
        Tabbar,MsgList,Search
    },
    computed: {
        ...mapState(['data'])
    },
    created() {
        this.$store.commit('getData')
    },

}
</script>

<style lang="scss" scoped>

</style>