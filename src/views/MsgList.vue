<template>
  <div class="msgList">
    <img :src="item.img" alt="">
    <div class="content">
      <div class="name">{{item.name}}</div>
      <div class="msg">{{item.title}}</div>
    </div>
    <div class="date">{{item.time}}</div>
  </div>
</template>

<script>
export default {
    props:['item']
};
</script>

<style lang="scss" scoped>
.msgList {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 10px 5px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .content {
    width: 200px;
    text-align: center;
    // display: flex;
    // justify-content: space-around;
    // align-items: center;
    .msg {
      color: rgb(180, 179, 179);
    }
  }
  .date{
      text-align: center;
  }
}
</style>