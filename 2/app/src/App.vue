<template>
  <div id="app">
    <HelloWorld msg="Welcome to Vue world"/>
    <Message>More about that later</Message>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Message from './components/Message.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Message
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
