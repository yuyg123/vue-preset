<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App'
  };
</script>

<style>
  #app {
    font-family: 'Avenir,iconfontWind', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
    font-size: 16px;
    height: 100%;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: rgba(0, 0, 0, 0);
  }

  /*定义滚动条轨道 内阴影+圆角*/
  ::-webkit-scrollbar-track {
    border-radius: 1px;
    background-color: rgba(0, 0, 0, 0);
  }

  /*定义滑块 内阴影+圆角*/
  ::-webkit-scrollbar-thumb {
    background-color: #018EE8;
    height: 50px;
    outline-offset: -2px;
    outline: 2px solid #fff;
    -webkit-border-radius: 4px;
    border: 2px solid #fff;
  }

  ::-webkit-scrollbar-track-piece {
    background-color: #fff;
    -webkit-border-radius: 0;
  }

  .el-loading-mask .el-icon-loading {
    font-size: 60px;
  }

  html {
    height: 100%
  }

  body {
    height: 100%;
    margin: 0;
    user-select: none;
  }
</style>
