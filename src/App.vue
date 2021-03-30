<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Vite + Vue3 + Vant3</h1>
  <div class="button">
    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
  <div class="links">
    <div>
      <a href="https://github.com/vuejs/vue-next" target="_blank">Vue3</a> / 
      <a href="https://v3.vuejs.org/" target="_blank">文档</a>
    </div>
    <div>
      <a href="https://github.com/vitejs/vite" target="_blank">vite</a> / 
      <a href="https://vitejs.dev/" target="_blank">文档</a>
    </div>
    <div>
      <a href="https://github.com/youzan/vant" target="_blank">Vant3</a> / 
      <a href="https://youzan.github.io/vant/" target="_blank">文档</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
