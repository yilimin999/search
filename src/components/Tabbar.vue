<template>
  <div class="tabbar">
      <router-link to="/msg">消息</router-link>
      <router-link to="/list">列表</router-link>
      <router-link to="/kong">空间</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.tabbar{
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    background: skyblue;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a{
        flex: 1;
        text-align: center;
        line-height: 50px;
        &.router-link-active{
            background: red;
            color: aliceblue;
        }
    }
}
</style>