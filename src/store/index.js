import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data:[],
    serarchList:[]
  },
  mutations: {
    getData(state){
      Axios.get('/api/list').then(res=>{
        state.data=res.data;
    })
    }
  },
  actions: {
  },
  modules: {
  }
})
