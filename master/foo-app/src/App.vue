<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld2 msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld2 from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld2
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
