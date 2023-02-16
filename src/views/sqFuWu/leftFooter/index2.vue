<template>
  <div class="content">
    <div class="left">111</div>
    <div class="right">222</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.content {
    width: 475px;
    height: 300px;
    display: flex;
    justify-content: center;
    padding: 20px;
    .left {
      width: 200px;
      height: 200px;
        background-color: red;
    }
    .right {
     flex: 1;
      height: 200px;
        background-color: green;
    }
}
</style>