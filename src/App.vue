<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showContact: false
    }
  }
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  font-size: 0.18rem;
  background-color: #f1f2f6;
  max-width: 1920px;
  margin: 0 auto;
}
.el-tabs__header {
  text-align: center;
  background-color: #ffffff;
  margin: 0;
}
.el-tabs__nav {
  float: none;
  display: inline-block;
}
.el-tabs__item {
  // font-size: 0.2rem;
  height: 0.74rem;
  line-height: 0.74rem;
}
.el-tabs__nav-wrap::after {
  height: 0;
}
.el-carousel {
  padding-left: 3.5rem;
}
.el-carousel__container {
  height: 5rem;
}
.el-carousel__indicators--vertical {
  left: 0;
  top: 1.2rem;
  display: none;
}
.el-carousel__item {
  overflow: visible;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #186df4;
  text-decoration: none;
}
h2 {
  text-align: center;
  font-size: 0.46rem;
  color: #000000;
  margin: 1.5rem 0 0.5rem;
}
.btn {
  cursor: pointer;
  border-radius: 0.04rem;
  display: inline-block;
  text-align: center;
  font-size: 0.14rem;
  padding: 0.02rem 0.15rem;
  color: #ffffff;
  &.btn1 {
    border: 0.02rem solid #ffffff;
  }
  &.btn2 {
    border: 0.02rem solid #0d72f6;
    background-color: #0d72f6;
    color: #ffffff;
  }
  &.btn3 {
    border: 0.02rem solid #fd5708;
    background-color: #fd5708;
    color: #ffffff;
    border-radius: 0;
  }
  &.large {
    font-size: 0.2rem;
    padding: 0.1rem 0.33rem;
  }
  &.block {
    display: block;
  }
}
.page-content {
  width: 14rem;
  margin: 0 auto;
  position: relative;
}
.page-content2 {
  width: 15.5rem;
  margin: 0 auto;
  position: relative;
}
.text-center {
  text-align: center;
}
.flex-box {
  // display: flex;
  // text-align: left;
  // .item {
  //   flex: 1;
  // }
}
.contact-icon {
  position: fixed;
  width: 1.6rem;
  height: 1.6rem;
  background-image: url(./assets/service.png);
  background-size: cover;
  right: 0.45rem;
  bottom: 0.45rem;
}
.contact-box {
  position: fixed;
  bottom: 2.35rem;
  right: 0.45rem;
  width: 2.8rem;
  background: #ffffff;
  z-index: 9999;
  box-shadow: 1px 0px 12px 0px rgba(114, 109, 197, 0.1);
  .top {
    background-image: url(./assets/popup_topbg.png);
    background-size: cover;
    height: 0.96rem;
    color: #ffffff;
    padding: 0.1rem;
    span {
      font-size: 0.16rem;
      display: inline-block;
      margin-bottom: 0.05rem;
    }
  }
  .content {
    padding: 0.18rem;
    background-color: #ffffff;
    .des {
      color: #333333;
      font-size: 0.16rem;
      margin: 0.07rem 0 0.22rem;
    }
    input {
      width: 100%;
      height: 0.38rem;
      line-height: 0.38rem;
      border: 1px solid #dddddd;
      margin-bottom: 0.2rem;
      padding: 0 0.1rem;
      font-size: 0.16rem;
      color: #666666;
    }
    .des2 {
      font-size: 0.14rem;
      color: #666666;
      margin-bottom: 0.15rem;
      a {
        color: #0e72f6;
        text-decoration: underline;
      }
    }
  }
}
</style>
