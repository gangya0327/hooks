<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code
          v-text="'<el-button>'"
        />
        below
      </p>
      <el-button>el-button</el-button>
    </div>
    <Test />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import Test from './components/Test'

export default {
  name: 'App',
  components: {
    HelloWorld, Test
  }
}
</script>

<style>
#app {
  margin-top: 60px;
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
