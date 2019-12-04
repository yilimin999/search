<template>
  <div class="search">
      <input type="text" 
      placeholder="搜索" 
      v-model="searchValue" 
      @keydown.enter="handleSearch">
  </div>
</template>

<script>
export default {
    data() {
        return {
            searchValue:''
        }
    },
    methods: {
        handleSearch(){

        }
    },

}
</script>

<style lang="scss" scoped>

.search{
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-content: center;
    input{
        width: 200px;
        height: 40px;
    }
}
</style>